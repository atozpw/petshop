"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()
  const { isAuthenticated } = useAuth()

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4 text-center">
            <ShoppingCart size={64} className="mx-auto text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold text-primary mb-4">Keranjang Kosong</h1>
            <p className="text-muted-foreground mb-8">Belum ada produk di keranjang Anda</p>
            <Link href="/pet-shop">
              <Button className="bg-primary hover:bg-primary/90">Lanjut Belanja</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">Keranjang Belanja</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item, index) => {
                  const displayPrice = item.variantPrice || item.price
                  const itemKey = `${item.id}-${item.variants ? JSON.stringify(item.variants) : index}`
                  return (
                    <div key={itemKey} className="bg-card rounded-lg border border-border p-6 flex gap-4">
                      <div className="text-5xl">{item.image}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                        
                        {/* Display Variants */}
                        {item.variants && Object.keys(item.variants).length > 0 && (
                          <div className="text-sm text-muted-foreground mb-2 space-y-1">
                            {Object.entries(item.variants).map(([key, value]) => (
                              <div key={key}>
                                <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <p className="text-primary font-bold mb-4">Rp {displayPrice.toLocaleString()}</p>

                        <div className="flex items-center gap-2 border border-input rounded-lg w-fit">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.variants)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.variants)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-4">
                          Subtotal: Rp {(displayPrice * item.quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id, item.variants)}
                          className="text-red-600 hover:bg-red-50 p-2 rounded transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-border p-6 space-y-6 sticky top-20">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-3 border-b border-border pb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">Rp {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span className="font-semibold">Rp {Math.round(total * 0.1).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">Rp 0</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rp {(total + Math.round(total * 0.1)).toLocaleString()}</span>
                </div>

                {isAuthenticated ? (
                  <Link href="/checkout-product" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Lanjut ke Checkout</Button>
                  </Link>
                ) : (
                  <Link href="/login" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Login untuk Checkout</Button>
                  </Link>
                )}

                <Link href="/pet-shop" className="w-full">
                  <Button variant="ghost" className="w-full border border-primary">
                    Lanjut Belanja
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
