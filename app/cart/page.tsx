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

  /* ================= EMPTY CART ================= */
  if (cart.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-20">
          <div className="container mx-auto px-4 text-center max-w-md">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <ShoppingCart size={40} className="text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary mb-2">
              Keranjang Kosong
            </h1>
            <p className="text-muted-foreground mb-8">
              Yuk, mulai belanja kebutuhan hewan kesayanganmu 🐾
            </p>
            <Link href="/pet-shop">
              <Button className="bg-primary hover:bg-primary/90">
                Mulai Belanja
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  /* ================= CART PAGE ================= */
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary mb-10">
            Keranjang Belanja
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ================= CART ITEMS ================= */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-border p-5 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* IMAGE / ICON */}
                  <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center text-4xl">
                    {item.image}
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold mb-3">
                      Rp {item.price.toLocaleString()}
                    </p>

                    {/* QTY CONTROL */}
                    <div className="inline-flex items-center rounded-lg border border-input overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-2 hover:bg-muted transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 font-semibold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-2 hover:bg-muted transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className="flex flex-col items-end justify-between">
                    <p className="text-sm text-muted-foreground">
                      Subtotal
                    </p>
                    <p className="font-semibold">
                      Rp {(item.price * item.quantity).toLocaleString()}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= ORDER SUMMARY ================= */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-border p-6 space-y-6 shadow-sm sticky top-20">
                <h2 className="text-lg font-bold">Ringkasan Pesanan</h2>

                <div className="space-y-3 text-sm border-b pb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      Rp {total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pajak (10%)</span>
                    <span className="font-medium">
                      Rp {Math.round(total * 0.1).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pengiriman</span>
                    <span className="font-medium">Gratis</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">
                    Rp {(total + Math.round(total * 0.1)).toLocaleString()}
                  </span>
                </div>

                {isAuthenticated ? (
                  <Link href="/checkout-product">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Checkout Sekarang
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Login untuk Checkout
                    </Button>
                  </Link>
                )}

                <Link href="/pet-shop">
                  <Button
                    variant="ghost"
                    className="w-full border border-primary text-primary"
                  >
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
