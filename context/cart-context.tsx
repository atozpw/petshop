"use client"
import { validateCartAPI } from "@/lib/api"
import { createContext, useContext, useEffect, useState } from "react"

/* =========================
   TYPES
========================= */

export interface CartItem {
  productId: number
  variantId: number | null
  quantity: number
}

export interface CartResponseItem {
  productId: number
  variantId: number | null
  name: string | null
  image: string | null
  price: number
  quantity: number
  subtotal: number
  available: boolean
  reason?: string | null
}

interface CartContextType {
  cart: CartItem[]
  viewCart: CartResponseItem[]
  total: number
  hasUnavailable: boolean
  loading: boolean
  addToCart: (item: CartItem) => void
  updateQuantity: (item: CartItem) => void
  removeItem: (productId: number, variantId: number | null) => void
  clearCart: () => void
  refresh: () => Promise<void>
}

/* =========================
   CONTEXT
========================= */

const CartContext = createContext<CartContextType | undefined>(undefined)

/* =========================
   PROVIDER
========================= */

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [viewCart, setViewCart] = useState<CartResponseItem[]>([])
  const [total, setTotal] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)


  /* =========================
     LOAD localStorage
  ========================= */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("petshop-cart")
      if (saved) setCart(JSON.parse(saved))
    } catch {
      localStorage.removeItem("petshop-cart")
    }
    setMounted(true)
  }, [])

  /* =========================
     SAVE localStorage + VALIDATE
  ========================= */
  useEffect(() => {
    if (!mounted) return

    localStorage.setItem("petshop-cart", JSON.stringify(cart))

    if (cart.length > 0) {
      validateCart()
    } else {
      setViewCart([])
      setTotal(0)
      setLoading(false) 
    }
  }, [cart, mounted])


  /* =========================
     VALIDATE TO BACKEND
  ========================= */
  const validateCart = async () => {
    setLoading(true)
    try {
      const data = await validateCartAPI(cart)

      setViewCart(
        data.items.map((i: any) => ({
          productId: i.product_id,
          variantId: i.product_variant_id,
          name: i.name ?? null,
          image: i.image ?? null,
          price: i.price ?? 0,
          quantity: i.quantity,
          subtotal: i.subtotal ?? 0,
          available: i.available,
          reason: i.reason ?? null,
        }))
      )

      setTotal(data.total ?? 0)
    } catch (err) {
      console.error("Cart validation error:", err)
    } finally {
      setLoading(false) // 👈 PASTI jalan
    }
  }

  /* =========================
     ACTIONS
  ========================= */

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const exist = prev.find(
        i => i.productId === item.productId && i.variantId === item.variantId
      )

      if (exist) {
        return prev.map(i =>
          i.productId === item.productId && i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }

      return [...prev, item]
    })
  }

  const updateQuantity = (item: CartItem) => {
    setCart(prev =>
      prev.map(i =>
        i.productId === item.productId && i.variantId === item.variantId
          ? item
          : i
      )
    )
  }

  const removeItem = (productId: number, variantId: number | null) => {
    setCart(prev =>
      prev.filter(i => !(i.productId === productId && i.variantId === variantId))
    )
  }

  const clearCart = () => {
    setCart([])
    setViewCart([])
    setTotal(0)
    localStorage.removeItem("petshop-cart")
  }

  const refresh = async () => {
    if (cart.length) await validateCart()
  }

  /* =========================
     DERIVED STATE
  ========================= */

  const hasUnavailable = viewCart.some(item => !item.available)

  /* =========================
     PROVIDER
  ========================= */

  return (
    <CartContext.Provider
      value={{
        cart,
        viewCart,
        total,
        hasUnavailable,
        loading,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        refresh,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/* =========================
   HOOK
========================= */

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}
