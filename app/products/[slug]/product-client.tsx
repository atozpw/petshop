"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { ShoppingCart, Plus, Minus, Star } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/product-data"

export default function ProductClient({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null)

  const selectedVariant = useMemo(
    () => product.variants.find(v => v.id === selectedVariantId) ?? null,
    [product.variants, selectedVariantId]
  )

  const price = selectedVariant?.price ?? product.price
  const subtotal = price * quantity

  const handleAddToCart = () => {
    if (!selectedVariant) return alert("Pilih varian dulu")

    addToCart({
      id: product.id,
      name: product.name,
      price,
      quantity,
      image: product.image ?? "/no-image.png",
      variant: {
        id: selectedVariant.id,
        name: selectedVariant.name,
      },
    })

    alert("Ditambahkan ke keranjang ✓")
    setQuantity(1)
    setSelectedVariantId(null)
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background pb-24 lg:pb-12">
        <div className="container mx-auto max-w-7xl px-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr_360px] gap-6 lg:gap-10">

            {/* GALLERY */}
            <div className="space-y-3">
              <div className="
                relative
                h-[260px] sm:h-[300px]
                lg:aspect-square lg:h-auto
                rounded-xl overflow-hidden
                border bg-white
              ">
                <Image
                  src={product.image ?? "/no-image.png"}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-4 lg:p-6"
                />
              </div>

              <div className="grid grid-cols-4 lg:grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg border bg-muted/40"
                  />
                ))}
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-4 lg:space-y-5">
              <nav className="text-xs text-muted-foreground">
                Home / {product.product_category.name}
              </nav>

              <h1 className="text-xl lg:text-3xl font-bold">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 text-sm">
                <Star size={14} className="text-amber-500" fill="currentColor" />
                <span className="font-medium">4.9</span>
                <span className="text-muted-foreground">• 1.431 ulasan</span>
              </div>

              <div className="text-2xl lg:text-3xl font-bold text-primary">
                Rp {Number(price).toLocaleString("id-ID")}
              </div>

              {/* VARIANT */}
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Varian:
                  <span className="ml-2 text-primary">
                    {selectedVariant?.name ?? "—"}
                  </span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => {
                    const active = v.id === selectedVariantId
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`
                          px-3 py-1.5 text-xs lg:text-sm rounded-full border
                          ${active
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "hover:border-primary/40"}
                        `}
                      >
                        {v.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* DESC */}
              <div className="pt-4 border-t">
                <h3 className="text-sm font-semibold mb-2">
                  Deskripsi Produk
                </h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>

            {/* BUY BOX */}
            <div
              className="
                fixed inset-x-0 bottom-0 z-20
                lg:static lg:sticky lg:top-24
                bg-card border-t lg:border rounded-none lg:rounded-xl
                p-4 lg:p-6 space-y-4
              "
            >
              {/* QTY */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="px-3 py-2"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="px-4 text-sm font-medium">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3 py-2"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <span className="text-xs text-muted-foreground">
                  Stok 11.900
                </span>
              </div>

              {/* SUBTOTAL */}
              <div className="flex justify-between text-sm font-semibold">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>

              {/* BUTTON – MOBILE CLEAN */}
              <Button
                onClick={handleAddToCart}
                disabled={!selectedVariant}
                className="
                  w-full h-11 lg:h-12
                  text-sm lg:text-base
                  gap-2
                "
              >
                <ShoppingCart size={16} />
                <span className="hidden sm:inline">Masukkan</span>
                <span className="sm:hidden">Keranjang</span>
              </Button>
            </div>
          </div>

          {/* Spacer mobile */}
          <div className="h-24 lg:hidden" />
        </div>
      </main>

      <Footer />
    </>
  )
}
