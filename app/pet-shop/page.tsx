"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Product } from "@/lib/product-data"
import { fetchProducts, fetchCategories } from "@/lib/api"

type Category = {
  name: string
  slug: string
}



export default function PetShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [initialLoading, setInitialLoading] = useState(true)
  const [productLoading, setProductLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(false)
  const [hasPrev, setHasPrev] = useState(false)
  const [search, setSearch] = useState("")


  const loadProducts = (params?: URLSearchParams) => {
    setProductLoading(true)

    return fetchProducts(params)
      .then((res) => {
        setProducts(res.data.data)
        setHasNext(!!res.data.next_page_url)
        setHasPrev(!!res.data.prev_page_url)
      })
      .finally(() => setProductLoading(false))
  }

  useEffect(() => {
    Promise.all([
      loadProducts(new URLSearchParams({ page: "1" })),
      fetchCategories(),
    ])
      .then(([, categoryRes]) => {
        setCategories(categoryRes.data)
      })
      .finally(() => setInitialLoading(false))
  }, [])

  useEffect(() => {
    if (initialLoading) return

    const params = new URLSearchParams()
    params.set("page", String(page))

    if (selectedCategory) {
      params.set("category", selectedCategory)
    }

    if (search.trim()) {
      params.set("search", search)
    }

    loadProducts(params)
  }, [selectedCategory, page, search])

  
  useEffect(() => {
    setPage(1)
  }, [selectedCategory, search])
  
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background md:col-span-3 min-h-[calc(4*16rem)]">

        
        {/* ================= MOBILE CATEGORY ================= */}
        <div className="md:hidden sticky top-[86px] z-30 bg-background/95 backdrop-blur border-b">
          <div className="flex gap-2 overflow-x-auto px-4 py-3">
            <button
              onClick={() => setSelectedCategory(null)}
               className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                !selectedCategory ? "bg-primary text-white" : "bg-muted"
              }`}
            >
              Semua
            </button>

            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                  selectedCategory === cat.slug
                    ? "bg-primary text-white"
                    : "bg-muted"
                }`}
              >
                {cat.name}
              </button>
            ))}
            
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* ===== SIDEBAR ===== */}
              <aside
                className="
                  hidden md:block md:col-span-1
                  sticky top-[200px]
                  rounded-xl border p-4 bg-card h-max
                "
              >

                
                <div className="mb-4 flex justify-center">
                  <div className="w-full relative">
                    <input
                      type="text"
                      placeholder="Cari produk..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full border rounded-xl px-4 py-3 pr-10
                                focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    
                    {search && (
                      <button
                        onClick={() => setSearch("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2
                                  text-muted-foreground hover:text-foreground"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
                <h3 className="font-bold mb-4">Kategori</h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-2 ${
                    !selectedCategory
                      ? "bg-primary text-white"
                      : "hover:bg-muted"
                  }`}
                >
                  Semua Produk
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 ${
                      selectedCategory === cat.slug
                        ? "bg-primary text-white"
                        : "hover:bg-muted"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </aside>

              {/* ===== PRODUCT GRID ===== */}
              <div className="md:col-span-3">
                {productLoading ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-64 rounded-xl bg-muted animate-pulse"
                      />
                    ))}
                  </div>
                ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug ?? product.id}`}
                      className="group bg-card rounded-xl border
                                 overflow-hidden hover:shadow-lg transition
                                 flex flex-col"
                    >
                      <div className="relative aspect-square bg-muted">
                        <img
                          src={product.images?.[0]?.image_url ?? "/no-image.png"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />

                        <span className="absolute top-2 left-2
                          bg-primary text-white text-white text-xs px-2 py-1 rounded-full">
                          {product.product_category?.name}
                        </span>
                      </div>

                      <div className="p-3 flex flex-col flex-1">
                        <h3 className="text-sm font-medium line-clamp-2 mb-2">
                          {product.name}
                        </h3>

                        <p className="text-primary font-bold mb-3">
                          Rp {Number(product.price).toLocaleString("id-ID")}
                        </p>

                        <span className="mt-auto text-xs font-semibold text-primary
                          opacity-0 group-hover:opacity-100 transition">
                          Lihat Detail →
                        </span>
                      </div>
                    </Link>
                  ))}

                  {products.length === 0 && (
                    <p className="col-span-full text-center text-muted-foreground">
                      Produk tidak ditemukan
                    </p>
                  )}

                </div>  
                )}
                <div className="flex justify-center items-center gap-4 mt-10">
                  <button
                    disabled={!hasPrev}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold
                      ${hasPrev
                        ? "bg-muted hover:bg-muted/80"
                        : "bg-muted/50 cursor-not-allowed"
                      }`}
                  >
                    ← Sebelumnya
                  </button>

                  <span className="text-sm text-muted-foreground">
                    Halaman {page}
                  </span>

                  <button
                    disabled={!hasNext}
                    onClick={() => setPage((p) => p + 1)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold
                      ${hasNext
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-primary/50 cursor-not-allowed"
                      }`}
                  >
                    Berikutnya →
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
