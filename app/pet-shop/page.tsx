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
        <section className="border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
          <div className="container mx-auto px-4 py-12">
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
              🐾 Pet Shop Terpercaya
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Pet Shop JJ
            </h1>

            <p className="text-muted-foreground max-w-2xl">
              Jelajahi produk pilihan terbaik untuk hewan kesayangan Anda.
              Pilih varian langsung di halaman detail produk.
            </p>
          </div>
        </section>

        {/* ================= MOBILE CATEGORY ================= */}
        <div className="md:hidden sticky top-[64px] z-30 bg-background border-b border-border">
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
              <aside className="hidden md:block md:col-span-1 border border-border rounded-xl p-4 h-fit sticky top-24">
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
                    className={`w-full text-left px-3 py-2 rounded-lg mb-1 ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "hover:bg-muted"
                    }`}
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
                      className="group bg-white rounded-xl border border-border overflow-hidden
                                 hover:shadow-2xl transition-all duration-300
                                 hover:-translate-y-1 flex flex-col"
                    >
                      {/* IMAGE */}
                      <div className="relative h-44 bg-muted flex items-center justify-center text-6xl">
                        {product.image}

                        <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        <p className="text-lg font-bold text-primary mb-4">
                          Rp {product.price.toLocaleString("id-ID")}
                        </p>

                        {/* CTA */}
                        <div className="mt-auto flex items-center text-sm font-semibold text-primary
                                        opacity-0 group-hover:opacity-100 transition-opacity">
                          Lihat Detail
                          <ArrowRight size={14} className="ml-1" />
                        </div>
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
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Butuh Rekomendasi Produk?
            </h2>
            <p className="opacity-90 mb-6">
              Konsultasi gratis untuk kebutuhan hewan kesayangan Anda
            </p>

            <a
              href="https://wa.me/6281237661234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg
                         hover:bg-gray-100 transition-colors"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
