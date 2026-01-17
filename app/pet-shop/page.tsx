"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"

export default function PetShopPage() {
  const { addToCart } = useCart()
  const { isAuthenticated } = useAuth()
  const [selectedQuantities, setSelectedQuantities] = useState<Record<number, number>>({})

  const products = [
    { id: 1, name: "Dog Food Premium", price: 150000, category: "Makanan", image: "🥫" },
    { id: 2, name: "Cat Litter", price: 50000, category: "Accessory", image: "🪨" },
    { id: 3, name: "Grooming Kit", price: 200000, category: "Grooming", image: "✂️" },
    { id: 4, name: "Pet Bed Deluxe", price: 350000, category: "Furniture", image: "🛏️" },
    { id: 5, name: "Toy Set Bundle", price: 100000, category: "Mainan", image: "🎾" },
    { id: 6, name: "Water Fountain", price: 250000, category: "Equipment", image: "💧" },
    { id: 7, name: "Leash & Collar", price: 75000, category: "Accessory", image: "🔗" },
    { id: 8, name: "Pet Carrier", price: 300000, category: "Travel", image: "📦" },
  ]

  const handleAddToCart = (product: (typeof products)[0]) => {
    const quantity = selectedQuantities[product.id] || 1
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    })
    setSelectedQuantities((prev) => ({ ...prev, [product.id]: 1 }))
    alert(`${product.name} ditambahkan ke keranjang!`)
  }

  const updateQuantity = (productId: number, change: number) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }))
  }

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col gap-3">
              
              {/* Badge */}
              <span className="w-fit px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                🐾 Pet Shop Terpercaya
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Pet Shop JJ
              </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                Makanan, mainan, grooming, dan aksesoris pilihan untuk hewan kesayangan Anda
              </p>

              {/* Quick highlight */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                <span>✅ Produk pilihan</span>
                <span>🚚 Siap kirim</span>
                <span>💬 Konsultasi gratis</span>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile Category Filter */}
        <div className="md:hidden sticky top-[64px] z-30 bg-background border-b border-border">
          <div className="flex gap-2 overflow-x-auto px-4 py-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold
                ${!selectedCategory
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"}
              `}
            >
              Semua
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold
                  ${selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground"}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>


        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* SIDEBAR FILTER */}
              <aside className="hidden md:block md:col-span-1 bg-white border border-border rounded-xl p-4 h-fit sticky top-24">

                <h3 className="font-bold text-lg mb-4">Kategori</h3>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm
                      ${!selectedCategory ? "bg-primary text-white" : "hover:bg-muted"}
                    `}
                  >
                    Semua Produk
                  </button>

                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm
                        ${selectedCategory === category
                          ? "bg-primary text-white"
                          : "hover:bg-muted"}
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </aside>

              {/* PRODUCT GRID */}
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-44 bg-muted flex items-center justify-center text-6xl">
                        {product.image}
                        <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-semibold text-sm mb-2">
                          {product.name}
                        </h3>

                        <p className="text-lg font-bold text-primary mb-4">
                          Rp {product.price.toLocaleString()}
                        </p>

                        <div className="flex items-center justify-between border rounded-lg mb-3">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="p-2 hover:bg-muted"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="font-semibold">
                            {selectedQuantities[product.id] || 1}
                          </span>

                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="p-2 hover:bg-muted"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="mt-auto w-full"
                        >
                          <ShoppingCart size={16} className="mr-2" />
                          Tambah ke Keranjang
                        </Button>
                      </div>
                    </div>
                  ))}

                  {filteredProducts.length === 0 && (
                    <p className="col-span-full text-center text-muted-foreground">
                      Produk tidak ditemukan
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Tidak Menemukan yang Anda Cari?</h2>
            <p className="text-lg opacity-90 mb-6">Hubungi kami untuk rekomendasi produk custom</p>
            <a href="https://wa.me/6281237661234" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Hubungi via WhatsApp
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
