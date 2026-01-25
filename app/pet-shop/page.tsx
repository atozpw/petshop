"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

import { products } from "@/lib/product-data"
import type { Product } from "@/lib/product-data"

export default function PetShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  /* =========================
     FILTER
  ========================== */
  const categories = [...new Set(products.map((p) => p.category))]

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* ================= HERO ================= */}
        <section className="border-b border-border bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 mb-3
                              px-3 py-1 rounded-full text-xs font-semibold
                              bg-primary/10 text-primary">
                🐾 Pet Shop Terpercaya
              </span>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Semua Kebutuhan Hewan Kesayangan
              </h1>

              <p className="text-muted-foreground">
                Makanan, vitamin, dan perlengkapan terbaik.
                Pilih varian langsung di detail produk.
              </p>
            </div>
          </div>
        </section>


        {/* ================= MOBILE CATEGORY ================= */}
        <div className="md:hidden sticky top-[64px] z-30 bg-background/95 backdrop-blur border-b">  
          <div className="flex gap-2 overflow-x-auto px-4 py-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                !selectedCategory ? "bg-primary text-white" : "bg-muted"
              }`}
            >
              Semua
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* ===== SIDEBAR ===== */}
              <aside className="hidden md:block md:col-span-1
                  rounded-xl border border-border
                  p-4 h-fit sticky top-24 bg-card">

                <h3 className="font-bold mb-4">Kategori</h3>

                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-2 ${
                    !selectedCategory ? "bg-primary text-white" : "hover:bg-muted"
                  }`}
                >
                  Semua Produk
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition
                      ${selectedCategory === category
                        ? "bg-primary text-white"
                        : "hover:bg-muted"}`
                    }

                  >
                    {category}
                  </button>
                ))}
              </aside>

              {/* ===== PRODUCT GRID ===== */}
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                  {filteredProducts.map((product: Product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group bg-card rounded-xl border border-border
                                overflow-hidden transition-all duration-300
                                hover:shadow-lg hover:-translate-y-1 flex flex-col"
                    >
                      {/* IMAGE */}
                      <div className="relative aspect-square bg-muted overflow-hidden">
                        <img
                          src={product.image || "/no-image.png"}
                          alt={product.name}
                          className="h-full w-full object-cover
                                    transition-transform duration-300
                                    group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.onerror = null
                            e.currentTarget.src = "/no-image.png"
                          }}
                        />

                        {/* CATEGORY */}
                        <span className="absolute top-2 left-2
                                        bg-black/70 text-white text-xs
                                        px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="p-3 flex flex-col flex-1">
                        <h3 className="font-medium text-sm leading-snug line-clamp-2 mb-1">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                          <span className="text-yellow-500">
                            {"★".repeat(Math.floor(product.rating))}
                          </span>
                          <span>({product.rating})</span>
                          <span>•</span>
                          <span>{product.reviews} terjual</span>
                        </div>

                        <p className="text-primary font-bold text-base mb-3">
                          Rp {product.price.toLocaleString("id-ID")}
                        </p>

                        <span className="mt-auto text-xs font-semibold text-primary
                                        opacity-0 group-hover:opacity-100 transition">
                          Lihat Detail →
                        </span>
                      </div>
                    </Link>

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

        {/* ================= CTA ================= */}
        <section className="py-14 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Butuh Rekomendasi Produk?
            </h2>
            <p className="text-muted-foreground mb-6">
              Konsultasi gratis untuk kebutuhan hewan kesayangan Anda
            </p>

            <a
              href="https://wa.me/6281237661234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
                        px-8 py-3 rounded-xl font-semibold
                        bg-primary text-white hover:bg-primary/90"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
