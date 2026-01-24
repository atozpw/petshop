"use client"
import { use, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Star } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { products } from "@/lib/product-data"

export default function ProductDetailPage() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const { addToCart } = useCart()
  const productId = parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})

  console.log("params.id:", params.id)
  console.log("products:", products)

  if (!product) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-xl text-muted-foreground">Produk tidak ditemukan</p>
          <Button className="mt-4" onClick={() => router.push("/pet-shop")}>
            Kembali ke Pet Shop
          </Button>
        </div>
        <Footer />
      </>
    )
  }

  // Calculate final price with variant modifiers
  let finalPrice = product.price
  product.variants.forEach((variant) => {
    const selectedValue = selectedVariants[variant.id]
    if (selectedValue) {
      const option = variant.options.find((opt) => opt.value === selectedValue)
      if (option && option.priceModifier) {
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
    // Check if all variants are selected
    const allVariantsSelected = product.variants.every((v) => selectedVariants[v.id])
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
          <Button variant="ghost" className="mb-4" onClick={() => router.push("/pet-shop")}>
            ← Kembali ke Pet Shop
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-muted rounded-lg p-8 h-96">
              <span className="text-9xl">{product.image}</span>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} ulasan)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="border-b border-border pb-6">
                <p className="text-muted-foreground text-sm mb-2">Harga</p>
                <p className="text-3xl font-bold text-primary">Rp {finalPrice.toLocaleString()}</p>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Deskripsi</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Variants */}
              {product.variants.length > 0 && (
                <div className="space-y-4 border-t border-b border-border py-6">
                  <h3 className="font-semibold text-foreground">Pilih Varian</h3>
                  {product.variants.map((variant) => (
                    <div key={variant.id}>
                      <label className="block text-sm font-medium text-foreground mb-2">{variant.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleVariantChange(variant.id, option.value)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                              selectedVariants[variant.id] === option.value
                                ? "border-primary bg-primary/10 text-primary font-medium"
                                : "border-border text-foreground hover:border-primary"
                            }`}
                          >
                            <div className="flex flex-col items-center">
                              <span>{option.name}</span>
                              {option.priceModifier ? (
                                <span className="text-xs text-muted-foreground">
                                  +Rp {option.priceModifier.toLocaleString()}
                                </span>
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
                <label className="block text-sm font-medium text-foreground mb-3">Jumlah</label>
                <div className="flex items-center gap-3 w-fit border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-semibold text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white py-6" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2" size={20} />
                  Tambah ke Keranjang
                </Button>
                <Button variant="outline" className="px-6 py-6 bg-transparent">
                  ♡
                </Button>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Gratis Ongkir</p>
                  <p className="font-semibold text-foreground">Jakarta</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Pengiriman</p>
                  <p className="font-semibold text-foreground">1-2 hari</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Garansi</p>
                  <p className="font-semibold text-foreground">30 hari</p>
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
