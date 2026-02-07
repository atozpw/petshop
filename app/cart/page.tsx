"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"

export default function CartPage() {
  const {
    cart,
    viewCart,
    total,
    hasUnavailable,
    loading,
    updateQuantity,
    removeItem,
  } = useCart()

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
  }, [])
  
  // console.log("VIEW CART DATA:", viewCart)

  if (loading) {
    return (
      <>
       <Header />
        <main className="min-h-screen bg-background flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-card rounded-2xl border p-8 shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                    <ShoppingCart size={36} className="text-muted-foreground" />
                  </div>
                </div>

                <h1 className="text-2xl font-bold mb-2 text-center">
                  Memuat keranjang...
                </h1>

                <div className="mt-6">
                  <div className="space-y-4 animate-pulse">
                    {[1, 2, 3].map(i => (
                      <div
                        key={i}
                        className="bg-card border rounded-xl p-4 flex gap-4"
                      >
                        <div className="w-20 h-20 bg-muted rounded-lg" />
                        <div className="flex-1 space-y-3">
                          <div className="h-4 w-3/4 bg-muted rounded" />
                          <div className="h-3 w-1/2 bg-muted rounded" />
                          <div className="h-4 w-1/3 bg-muted rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
  /* ================= EMPTY CART ================= */
  if (cart.length === 0) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-background flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center bg-card rounded-2xl border p-8 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                  <ShoppingCart size={36} className="text-muted-foreground" />
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-2">
                Keranjang kamu masih kosong
              </h1>
              <p className="text-sm text-muted-foreground mb-6">
                Yuk, cari produk favorit kamu dan mulai belanja
              </p>

              <Link href="/pet-shop">
                <Button className="w-full h-12 text-base font-semibold">
                  Mulai Belanja
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </>
    )
  }

  /* ================= MAIN ================= */
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Keranjang
              </h1>
              <p className="text-sm text-muted-foreground">
                {viewCart.length} produk
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

            {/* ================= ITEMS ================= */}
            <div className="lg:col-span-2 space-y-4">
              
              {viewCart.map(item => (
                <div
                  key={`${item.productId}-${item.variantId}`}
                  className="bg-card rounded-xl border p-4 sm:p-6 space-y-4"
                >
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border bg-muted">
                      <Image
                        src={item.image ?? "/no-image.png"}
                        alt={item.name ?? "Produk"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold leading-snug">
                        {item.name ?? "Produk tidak tersedia"}
                      </h3>

                      {!item.available && (
                        <p className="mt-1 text-xs text-red-500">
                          Produk tidak tersedia
                        </p>
                      )}

                      <p className="mt-2 text-primary font-bold">
                        Rp {Number(item.price).toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* QTY */}
                    <div className="flex items-center rounded-full border overflow-hidden">
                      <button
                        disabled={!item.available}
                        onClick={() =>
                          updateQuantity({
                            productId: item.productId,
                            variantId: item.variantId,
                            quantity: item.quantity - 1,
                          })
                        }
                        className="px-3 py-1 disabled:opacity-50"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="px-4 text-sm font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        disabled={!item.available}
                        onClick={() =>
                          updateQuantity({
                            productId: item.productId,
                            variantId: item.variantId,
                            quantity: item.quantity + 1,
                          })
                        }
                        className="px-3 py-1 disabled:opacity-50" 
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* SUBTOTAL + REMOVE */}
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">
                        Rp {Number(item.subtotal).toLocaleString("id-ID")}
                      </span>

                      <button
                        onClick={() => removeItem(item.cartItemId)}
                        className="text-muted-foreground hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= SUMMARY ================= */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border p-6 space-y-6 sticky top-24">

                <h2 className="text-lg font-bold">
                  Ringkasan Belanja
                </h2>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      Rp {total.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pajak (10%)</span>
                    <span className="font-medium">
                      Rp {(total * 0.1).toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pengiriman</span>
                    <span className="text-green-600 font-medium">
                      Gratis
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center rounded-xl bg-primary/10 px-4 py-3">
                  <span className="font-semibold text-primary">
                    Total Pembayaran
                  </span>
                  <span className="text-xl font-extrabold text-primary">
                    Rp {(total + total * 0.1).toLocaleString("id-ID")}
                  </span>
                </div>

                {/* CTA */}
                {isAuthenticated ? (
                  <Link href="/checkout-product">
                    <Button
                      disabled={hasUnavailable}
                      className="w-full h-12 text-base font-semibold"
                    >
                      Checkout Sekarang
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <Button className="w-full h-12 text-base font-semibold">
                      Login untuk Checkout
                    </Button>
                  </Link>
                )}

                {hasUnavailable && (
                  <p className="text-xs text-red-500 text-center">
                    Hapus produk yang tidak tersedia untuk melanjutkan checkout
                  </p>
                )}

                <Link href="/pet-shop">
                  <Button
                    variant="ghost"
                    className="w-full h-11 border"
                  >
                    ← Lanjut Belanja
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
