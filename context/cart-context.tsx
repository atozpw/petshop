"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  variants?: Record<string, string>
  variantPrice?: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("petshop-cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
    setMounted(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("petshop-cart", JSON.stringify(cart))
    }
  }, [cart, mounted])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const variantKey = item.variants ? JSON.stringify(item.variants) : ""
      const existingItem = prevCart.find(
        (i) => i.id === item.id && JSON.stringify(i.variants || {}) === variantKey
      )
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id && JSON.stringify(i.variants || {}) === variantKey
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prevCart, item]
    })
  }

  const removeFromCart = (id: number, variants?: Record<string, string>) => {
    setCart((prevCart) => {
      const variantKey = variants ? JSON.stringify(variants) : ""
      return prevCart.filter((item) => !(item.id === id && JSON.stringify(item.variants || {}) === variantKey))
    })
  }

  const updateQuantity = (id: number, quantity: number, variants?: Record<string, string>) => {
    if (quantity <= 0) {
      removeFromCart(id, variants)
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => {
          const variantKey = variants ? JSON.stringify(variants) : ""
          return item.id === id && JSON.stringify(item.variants || {}) === variantKey
            ? { ...item, quantity }
            : item
        })
      )
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce((sum, item) => {
    const itemPrice = item.variantPrice || item.price
    return sum + itemPrice * item.quantity
  }, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
