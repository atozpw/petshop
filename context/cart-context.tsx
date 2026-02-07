  "use client"
  import { validateCartAPI, apiFetch, addCartAPI, updateCartItemAPI, deleteCartItemAPI, clearCartAPI } from "@/lib/api"
  import { createContext, use, useContext, useEffect, useState } from "react"
  import { useAuth } from "@/context/auth-context"
  import { toast } from "@/components/ui/use-toast"

  /* =========================
    TYPES
  ========================= */

  export interface CartItem {
    cartItemId: number
    productId: number
    variantId: number | null
    quantity: number
  }

  export interface CartResponseItem {
    cartItemId: number
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
    updateQuantity: (item: { productId: number, variantId: number | null , quantity: number }) => void
    removeItem: (cartItemId: number) => void
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
    const [syncingId, setSyncingId] = useState<number | null>(null)
    const { isAuthenticated , authLoading } = useAuth()
    const token = typeof window !== 'undefined' ? localStorage.getItem("petshop-token") : null
    const [initialized, setInitialized] = useState(false)

  
      
    
    const loadCartFromDB = async () => {
      if (!token) return

      setLoading(true)
      try {
        const res = await apiFetch("/cart", {}, token)

        const rawItems = res?.data?.items ?? []
        const items: CartItem[] = rawItems.map((i: any) => ({
          cartItemId: i.id,
          productId: i.product_id,
          variantId: i.product_variant_id ?? null,
          quantity: i.quantity,
        }))

        // console.log("LOADED CART ITEMS FROM DB:", items) 
        setCart(items)
        setInitialized(true)  
        
      } catch (err) {
        console.error("Gagal load cart dari DB", err)
      } finally {
        setLoading(false)
      }
    }



    /* =========================
      LOAD localStorage
    ========================= */
    useEffect(() => { 
      if (authLoading) return 

      const initCart = async () => {
        if (isAuthenticated) {
          await loadCartFromDB()
        } else {
          try {
            const saved = localStorage.getItem("petshop-cart")
            if (saved) setCart(JSON.parse(saved))
          } catch {
            localStorage.removeItem("petshop-cart")
          }
        }

        setMounted(true)
      }

      initCart()
    }, [authLoading, isAuthenticated])

    
    /* =========================
      SAVE localStorage + VALIDATE
    ========================= */
    useEffect(() => {
      if (!mounted || !initialized) return

      localStorage.setItem("petshop-cart", JSON.stringify(cart))

      if (cart.length > 0) {
        validateCart()
      } else {
        setViewCart([]) 
        setTotal(0)
        setLoading(false) 
      }
    }, [cart, mounted, initialized])


    /* =========================
      VALIDATE TO BACKEND
    ========================= */
    const validateCart = async () => {
      try {
        const data = await validateCartAPI(cart)

        // console.log("RAW API ITEMS:", data.items)

        setViewCart(
          data.items.map((i: any, idx: number) => {
            const dbItem = cart[idx]

            return {
              cartItemId: dbItem?.cartItemId, // ← AMBIL DARI DB
              productId: i.product_id,
              variantId: i.product_variant_id,
              name: i.name ?? null,
              image: i.image ?? null,
              price: i.price ?? 0,
              quantity: i.quantity,
              subtotal: i.subtotal ?? 0,
              available: i.available,
              reason: i.reason ?? null,
            }
          })
        )

        setTotal(data.total ?? 0)
      } catch (err) {
        console.error("Cart validation error:", err)
      } finally {
        setLoading(false)
      }
    }

    /* =========================
      ACTIONS
    ========================= */

    
    const addToCart = async (item: CartItem) => {
      
      const token = localStorage.getItem("petshop-token")
      if (isAuthenticated && token){
        // console.log("ADDING TO CART WITH AUTH")
        try {
          await addCartAPI(token, item)
          await loadCartFromDB()
        
          localStorage.removeItem("petshop-cart")
          localStorage.setItem("petshop-cart-source", "db")
          return
        } catch (err) {
          console.error("Failed to sync guest cart:", err)
        
        }
      }
      
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

    const updateQuantity = async (item: { productId: number, variantId: number | null , quantity: number }) => {
      const existing = cart.find(
        i =>
          i.productId === item.productId &&
          i.variantId === item.variantId
      )

      if (!existing) return

      if (item.quantity < 1) {
        if (!existing?.cartItemId) return
        await removeItem(existing.cartItemId)
        return
      }

      setCart(prev =>
        prev.map(i =>
          i === existing
            ? { ...i, quantity: item.quantity }
            : i
        )
      )

      const token = localStorage.getItem("petshop-token")
      if (!isAuthenticated || !token) return

      try {
        await updateCartItemAPI(
          existing.cartItemId,
          item.quantity,
          token
        )
        toast({
          title: "Quantitas diperbarui",
          description: "Quantitas item di keranjang telah diperbarui.",
          variant: "default",
        })
      } catch (err) {
        console.error("Failed update qty", err)
      }
    }


    const removeItem = async (cartItemId: number) => {
      console.log("REMOVE ITEM CALLED:", cartItemId)
      if (!cartItemId) return

      const existing = cart.find(i => i.cartItemId === cartItemId)

      // optimistic remove
      setCart(prev => prev.filter(i => i.cartItemId !== cartItemId))

      if (!isAuthenticated) return

      const token = localStorage.getItem("petshop-token")
      if (!token) return

      try {   
        await deleteCartItemAPI(cartItemId, token)
      } catch (err) {
        console.log("DELETE ERROR:", JSON.stringify(err))

        // rollback
        if (existing) {
          setCart(prev => [...prev, existing])
        }
      }
    }



    const clearCart = async () => {
      const prevCart = cart

      setCart([])
      setViewCart([])
      setTotal(0)
      localStorage.removeItem("petshop-cart")

      if (!isAuthenticated) return

      try {
        const token = localStorage.getItem("petshop-token")
        if (!token) return
        await clearCartAPI(token)
        
      } catch (err) {
        console.error("Failed clear cart", err)
        setCart(prevCart) // rollback kalau gagal
      }
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
