"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Product } from "@/lib/product-data"
import { fetchProducts, fetchCategories } from "@/lib/api"
import { Filter, Search, SlidersHorizontal } from "lucide-react"

type Category = {
  name: string
  slug: string
}

type SortOption = "newest" | "oldest" | "price-low" | "price-high" | "name-az"

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest",     label: "Terbaru" },
  { value: "oldest",     label: "Terlama" },
  { value: "price-low",  label: "Harga: Terendah" },
  { value: "price-high", label: "Harga: Tertinggi" },
  { value: "name-az",    label: "Nama: A–Z" },
]

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
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  // ── Helpers ───────────────────────────────────────────────────────────────

  const buildParams = () => {
    const p = new URLSearchParams()
    p.set("page", String(page))
    if (selectedCategory) p.set("category", selectedCategory)
    if (search.trim())    p.set("search", search)

    if (sortBy === "newest")     { p.set("order_by", "created_at"); p.set("order_dir", "desc") }
    if (sortBy === "oldest")     { p.set("order_by", "created_at"); p.set("order_dir", "asc")  }
    if (sortBy === "price-low")  { p.set("order_by", "price");      p.set("order_dir", "asc")  }
    if (sortBy === "price-high") { p.set("order_by", "price");      p.set("order_dir", "desc") }
    if (sortBy === "name-az")    { p.set("order_by", "name");       p.set("order_dir", "asc")  }

    return p
  }

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

  // ── Effects ───────────────────────────────────────────────────────────────

  useEffect(() => {
    Promise.all([
      loadProducts(new URLSearchParams({ page: "1" })),
      fetchCategories(),
    ])
      .then(([, categoryRes]) => setCategories(categoryRes.data))
      .finally(() => setInitialLoading(false))
  }, [])

  useEffect(() => {
    setPage(1)
  }, [selectedCategory, search, sortBy])

  useEffect(() => {
    if (initialLoading) return
    loadProducts(buildParams())
  }, [selectedCategory, page, search, sortBy])

  // ── UI ────────────────────────────────────────────────────────────────────

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">

        {/* ── HERO ── */}
        <div className="relative">
          <img
            src="/image/Pict 29.jpeg"
            alt="Hero Image"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-primary/85 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl font-bold mb-2 animate-pulse">
                Still On Progress... Stay Tuned! 🚧
              </h1>
              <p className="text-lg mb-4">
                Temukan berbagai kebutuhan hewan peliharaan Anda dengan mudah
              </p>
            </div>
          </div>
        </div>

        {/* ── MOBILE: category chips ── */}
        <div className="md:hidden sticky top-26 z-40 bg-background/95 backdrop-blur border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition
                  ${!selectedCategory ? "bg-primary text-white shadow" : "bg-muted hover:bg-muted/80"}`}
              >
                Semua
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition
                    ${selectedCategory === cat.slug ? "bg-primary text-white shadow" : "bg-muted hover:bg-muted/80"}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── PRODUCTS SECTION ── */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* ── SIDEBAR: kategori only ── */}
              <aside className="hidden md:block md:col-span-1 sticky top-41 self-start rounded-xl border p-4 bg-card h-max space-y-1">
                <h3 className="font-bold mb-3 flex items-center gap-2 text-sm">
                  <Filter size={16} />
                  Kategori
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition
                    ${!selectedCategory ? "bg-primary text-white font-medium" : "hover:bg-muted"}`}
                >
                  Semua Produk
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition
                      ${selectedCategory === cat.slug ? "bg-primary text-white font-medium" : "hover:bg-muted"}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </aside>

              {/* ── PRODUCT GRID ── */}
              <div className="md:col-span-3">

                {/* ── Search & Sort bar — sama seperti adopt page ── */}
                <div className="mb-6 space-y-3">
                  {/* Search */}
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="Cari produk..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-10 py-2 border border-border rounded-lg
                                 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
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

                  {/* Count + Sort */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {products.length} produk ditemukan
                    </span>
                    <div className="ml-auto flex items-center gap-2">
                      <SlidersHorizontal size={16} className="text-muted-foreground" />
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="px-3 py-2 border border-border rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      >
                        {SORT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Grid */}
                {productLoading ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug ?? product.id}`}
                        className="group bg-card rounded-xl border overflow-hidden
                                   hover:shadow-lg hover:-translate-y-1 transition-all duration-200
                                   flex flex-col"
                      >
                        <div className="relative aspect-square bg-muted overflow-hidden">
                          <img
                            src={product.images?.[0]?.image_url ?? "/image/Pict 30.jpeg"}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                            {product.product_category?.name}
                          </span>
                        </div>

                        <div className="p-3 flex flex-col flex-1">
                          <h3 className="text-sm font-medium line-clamp-2 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-primary font-bold mb-3">
                            {/* Rp {Number(product.price).toLocaleString("id-ID")} */}
                          </p>
                          <span className="mt-auto text-xs font-semibold text-primary">
                            Lihat Detail →
                          </span>
                        </div>
                      </Link>
                    ))}

                    {products.length === 0 && (
                      <p className="col-span-full text-center text-muted-foreground py-12">
                        Produk tidak ditemukan
                      </p>
                    )}
                  </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-10">
                  <button
                    disabled={!hasPrev}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition
                      ${hasPrev ? "bg-muted hover:bg-muted/80" : "bg-muted/50 cursor-not-allowed opacity-50"}`}
                  >
                    ← Sebelumnya
                  </button>

                  <span className="text-sm text-muted-foreground">Halaman {page}</span>

                  <button
                    disabled={!hasNext}
                    onClick={() => setPage((p) => p + 1)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition
                      ${hasNext ? "bg-primary text-white hover:bg-primary/90" : "bg-primary/50 text-white cursor-not-allowed opacity-50"}`}
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