"use client"


import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import Image from "next/image"
import { useEffect } from "react"


export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
  }, [])

  if (cart.length === 0) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-background flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center bg-card
                            rounded-2xl border border-border p-8
                            shadow-sm">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-muted
                                flex items-center justify-center">
                  <ShoppingCart
                    size={36}
                    className="text-muted-foreground"
                  />
                </div>
              </div>

              {/* Text */}
              <h1 className="text-2xl font-bold tracking-tight mb-2">
                Keranjang kamu masih kosong
              </h1>
              <p className="text-sm text-muted-foreground mb-6">
                Yuk, cari produk favorit kamu dan mulai belanja sekarang
              </p>

              {/* CTA */}
              <Link href="/pet-shop">
                <Button
                  className="w-full h-12 rounded-xl
                            bg-primary hover:bg-primary/90
                            text-base font-semibold"
                >
                  Mulai Belanja
                </Button>
              </Link>

              {/* Secondary hint */}
              <p className="text-xs text-muted-foreground mt-4">
                Banyak promo & produk menarik menanti kamu 🐾
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </>
    )
  }


  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 sm:mb-8 flex items-end justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                Keranjang
              </h1>
              <p className="text-sm text-muted-foreground">
                {cart.length} produk siap checkout
              </p>
            </div>

            <Link
              href="/pet-shop"
              className="hidden sm:block text-sm text-primary hover:underline"
            >
              Tambah produk
            </Link>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ================= CART ITEMS ================= */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => {
                const displayPrice = item.variantPrice || item.price
                const itemKey = `${item.id}-${JSON.stringify(item.variants || {})}`

                return (
                  <div key={itemKey} className="space-y-3">
                    {/* ================= MOBILE ================= */}
                    <div className="sm:hidden bg-card rounded-xl border border-border p-4 space-y-3">
                      <div className="flex gap-3">
                        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border bg-muted">
                          <Image
                            src={item.image || "/no-image.png"}
                            alt={item.name}
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = "/no-image.png"
                            }}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold leading-snug line-clamp-2">
                            {item.name}
                          </h3>

                          {item.variants && Object.keys(item.variants).length > 0 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {Object.entries(item.variants)
                                .map(([k, v]) => `${k}: ${v}`)
                                .join(", ")}
                            </p>
                          )}

                          <p className="text-primary font-bold mt-2">
                            Rp {displayPrice.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Qty */}
                        <div className="flex items-center rounded-full border overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1, item.variants)
                            }
                            className="px-3 py-1"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1, item.variants)
                            }
                            className="px-3 py-1"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Action */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold">
                            Rp {(displayPrice * item.quantity).toLocaleString()}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id, item.variants)}
                            className="text-muted-foreground hover:text-red-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ================= DESKTOP ================= */}
                    <div className="hidden sm:flex items-center gap-4 bg-card rounded-xl border border-border px-6 py-4 hover:shadow-sm transition">
                      <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden border bg-muted">
                        <Image
                          src={item.image || "/no-image.png"}
                          alt={item.name}
                          onError={(e) => {
                            e.currentTarget.onerror = null
                            e.currentTarget.src = "/no-image.png"
                          }}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-sm leading-snug">
                          {item.name}
                        </h3>
                        {item.variants && Object.keys(item.variants).length > 0 && (
                          <p className="text-xs text-muted-foreground">
                            {Object.entries(item.variants)
                              .map(([k, v]) => `${k}: ${v}`)
                              .join(", ")}
                          </p>
                        )}
                      </div>

                      <div className="w-32 text-sm font-semibold">
                        Rp {displayPrice.toLocaleString()}
                      </div>

                      <div className="flex items-center rounded-full border overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1, item.variants)
                          }
                          className="px-2 py-1"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1, item.variants)
                          }
                          className="px-2 py-1"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="w-36 text-right font-semibold text-primary">
                        Rp {(displayPrice * item.quantity).toLocaleString()}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.variants)}
                        className="text-muted-foreground hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ================= ORDER SUMMARY ================= */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-6
                              sticky top-24 shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold tracking-tight">
                    Ringkasan Belanja
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    {cart.length} item
                  </span>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 rounded-xl bg-muted/40 p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      Rp {total.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pajak (10%)</span>
                    <span className="font-medium">
                      Rp {Math.round(total * 0.1).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pengiriman</span>
                    <span className="font-medium text-green-600">
                      Gratis
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between rounded-xl
                                bg-primary/10 px-4 py-3">
                  <span className="text-sm font-semibold text-primary">
                    Total Pembayaran
                  </span>
                  <span className="text-xl font-extrabold text-primary">
                    Rp {(total + Math.round(total * 0.1)).toLocaleString()}
                  </span>
                </div>

                {/* CTA */}
                {isAuthenticated ? (
                  <Link href="/checkout-product">
                    <Button
                      className="w-full h-12 text-base font-semibold
                                bg-primary hover:bg-primary/90 rounded-xl"
                    >
                      Checkout Sekarang
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <Button
                      className="w-full h-12 text-base font-semibold
                                bg-primary hover:bg-primary/90 rounded-xl"
                    >
                      Login untuk Checkout
                    </Button>
                  </Link>
                )}

                {/* Secondary Action */}
                <Link href="/pet-shop">
                  <Button
                    variant="ghost"
                    className="w-full h-11 rounded-xl border border-border"
                  >
                    ← Lanjut Belanja
                  </Button>
                </Link>

                {/* Trust Hint */}
                <p className="text-xs text-center text-muted-foreground">
                  Pembayaran aman & data Anda terlindungi
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
