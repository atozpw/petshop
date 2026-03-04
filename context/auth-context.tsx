"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@/lib/auth"
import { apiFetch } from "@/lib/api"


interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  authLoading: boolean
  login: (user: User, token: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authLoading, setAuthLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  /* ================= LOAD AUTH ================= */
  useEffect(() => {
    const verifyAuth = async () => {
      const u = localStorage.getItem("petshop-user")
      const t = localStorage.getItem("petshop-token")

      if (!u || !t) {
        setAuthLoading(false)
        return
      }

      let parsedUser: User | null = null
      try {
        parsedUser = JSON.parse(u)
      } catch {
        localStorage.removeItem("petshop-user")
        localStorage.removeItem("petshop-token")
        setAuthLoading(false)
        return
      }

      try {
        const res = await apiFetch("/profile", {}, t)
        
        // ✅ Ambil user dari response, fallback ke localStorage kalau struktur beda
        const freshUser = res?.data ?? res?.user ?? parsedUser
        
        if (!freshUser?.name) {
          // Response tidak punya data user yang valid → pakai localStorage
          setUser(parsedUser)
        } else {
          setUser(freshUser)
          // Update localStorage dengan data terbaru
          localStorage.setItem("petshop-user", JSON.stringify(freshUser))
        }
        
        setToken(t)

      } catch (err: any) {
        if (err?.status === 401) {
          localStorage.removeItem("petshop-user")
          localStorage.removeItem("petshop-token")
          localStorage.removeItem("petshop-cart")
        } else {
          // Network error → pakai localStorage
          setUser(parsedUser)
          setToken(t)
        }
      } finally {
        setAuthLoading(false)
      }
    }

    verifyAuth()
  }, [])

  /* ================= MERGE GUEST CART ================= */
  const syncGuestCartToDB = async (token: string) => {
    const guestCartRaw = localStorage.getItem("petshop-cart")
    if (!guestCartRaw) return

    let guestCart: {
      productId: number
      variantId: number | null
      quantity: number
    }[]

    try {
      guestCart = JSON.parse(guestCartRaw)
    } catch {
      console.error("Invalid guest cart format")
      return
    }

    if (!Array.isArray(guestCart) || guestCart.length === 0) return

    try {
      await apiFetch(
        "/cart",
        {
          method: "POST",
          body: JSON.stringify({
            items: guestCart.map(item => ({
              product_id: item.productId,
              product_variant_id: item.variantId,
              quantity: item.quantity,
            })),
          }),
        },
        token
      )

      localStorage.removeItem("petshop-cart")
      localStorage.setItem("petshop-cart-source", "db")
    } catch (err) {
      console.error("Failed to sync guest cart:", err)
     
    } finally {
      // Selalu clear localStorage setelah login, berhasil atau tidak
      localStorage.removeItem("petshop-cart")
      localStorage.setItem("petshop-cart-source", "db")
    }
  }


  /* ================= LOGIN ================= */
  const login = async (user: User, token: string) => {
    if (!user || !token) return

    localStorage.setItem("petshop-user", JSON.stringify(user))
    localStorage.setItem("petshop-token", token)

    await syncGuestCartToDB(token)
    
    
    setUser(user)
    setToken(token)
  }

  /* ================= LOGOUT ================= */
  const logout = async () => {
    try {
      if (token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        })
      }
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setUser(null)
      setToken(null)
      localStorage.removeItem("petshop-user")
      localStorage.removeItem("petshop-token")
      localStorage.removeItem("petshop-cart")
      localStorage.removeItem("petshop-cart-source")
      window.location.href = "/login" 
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        authLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}
