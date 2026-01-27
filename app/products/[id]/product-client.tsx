"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Star } from "lucide-react"
import { useCart } from "@/context/cart-context"
import Image from "next/image"
import type { Product } from "@/lib/product-data"

export default function ProductClient({
  product,
}: {
  product: Product
}) {
  const router = useRouter()
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [selectedVariants, setSelectedVariants] =
    useState<Record<string, string>>({})

  // Hitung harga final + modifier varian
  let finalPrice = product.price
  product.variants.forEach((variant) => {
    const selectedValue = selectedVariants[variant.id]
    if (selectedValue) {
      const option = variant.options.find(
        (opt) => opt.value === selectedValue
      )
      if (option?.priceModifier) {
        finalPrice += option.priceModifier
      }
    }
  })

  const handleVariantChange = (variantId: string, value: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantId]: value,
    }))
  }

  const handleAddToCart = () => {
    const allVariantsSelected = product.variants.every(
      (v) => selectedVariants[v.id]
    )

    if (!allVariantsSelected) {
      alert("Silakan pilih semua varian produk")
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      variants: selectedVariants,
      variantPrice: finalPrice,
    })

    alert(`${product.name} ditambahkan ke keranjang!`)
    setQuantity(1)
    setSelectedVariants({})
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => router.push("/pet-shop")}
          >
            ← Kembali ke Pet Shop
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative flex items-center justify-center bg-muted rounded-lg p-8 h-96">
              <Image
                src={product.image || "/no-image.png"}
                alt={product.name}
                fill
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = "/no-image.png"
                }}
              />
            </div>

            {/* Detail */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">
                  {product.category}
                </span>

                <h1 className="text-3xl font-bold mb-2">
                  {product.name}
                </h1>

                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} ulasan)
                  </span>
                </div>
              </div>

              <div className="border-b pb-6">
                <p className="text-sm text-muted-foreground">Harga</p>
                <p className="text-3xl font-bold text-primary">
                  Rp {finalPrice.toLocaleString("id-ID")}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Deskripsi</h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Variants */}
              {product.variants.length > 0 && (
                <div className="space-y-4 border-y py-6">
                  <h3 className="font-semibold">Pilih Varian</h3>

                  {product.variants.map((variant) => (
                    <div key={variant.id}>
                      <p className="mb-2 font-medium">
                        {variant.name}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() =>
                              handleVariantChange(
                                variant.id,
                                option.value
                              )
                            }
                            className={`px-4 py-2 rounded-lg border-2 ${
                              selectedVariants[variant.id] === option.value
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border"
                            }`}
                          >
                            <div className="text-center">
                              <div>{option.name}</div>
                              {option.priceModifier ? (
                                <div className="text-xs text-muted-foreground">
                                  +Rp{" "}
                                  {option.priceModifier.toLocaleString(
                                    "id-ID"
                                  )}
                                </div>
                              ) : null}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div>
                <p className="mb-2 font-medium">Jumlah</p>
                <div className="flex items-center border rounded-lg w-fit">
                  <button
                    className="p-2"
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                  >
                    <Minus size={18} />
                  </button>

                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    className="p-2"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 py-6"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2" />
                  Tambah ke Keranjang
                </Button>

                <Button variant="outline" className="px-6 py-6">
                  ♡
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
