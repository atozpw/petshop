"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  authLoading: boolean
  login: (user: User, token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [authLoading, setAuthLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const u = localStorage.getItem("petshop-user")
        const t = localStorage.getItem("petshop-token")

        if (!u || !t) {
            setAuthLoading(false)
            return
        }

        try {
            const parsedUser = JSON.parse(u)

            if (parsedUser && typeof parsedUser === "object") {
            setUser(parsedUser)
            setToken(t)
            } else {
            
            localStorage.removeItem("petshop-user")
            localStorage.removeItem("petshop-token")
            }
        } catch {
            
            localStorage.removeItem("petshop-user")
            localStorage.removeItem("petshop-token")
        }

        setAuthLoading(false)
    }, [])


    const login = (user: User, token: string) => {
        if (!user || !token) return

        setUser(user)
        setToken(token)

        localStorage.setItem("petshop-user", JSON.stringify(user))
        localStorage.setItem("petshop-token", token)
    }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem("petshop-user")
    localStorage.removeItem("petshop-token")
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
