"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { PRODUCT_CATEGORIES } from "@/lib/product-categories-data"

export function ProductCategoriesShowcase() {
  const [active, setActive] = useState(PRODUCT_CATEGORIES[0])

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-foreground">Kategori Produk</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Jelajahi berbagai kategori produk pet care berkualitas premium untuk memenuhi semua kebutuhan hewan peliharaan Anda</p>
          </div>
          <Link href="/pet-shop" className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
            Lihat Semua <ArrowRight size={12} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* LEFT */}
          <div className="grid grid-cols-2 gap-3">
            {PRODUCT_CATEGORIES.slice(0, 4).map((cat) => (
              <div
                key={cat.id}
                onClick={() => setActive(cat)}
                className={`p-3 rounded-xl border cursor-pointer transition-all duration-300
                  h-[100px] flex flex-col justify-between
                  ${
                    active.id === cat.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white hover:shadow-sm"
                  }`}
              >
                <div>
                  <h4 className="font-semibold text-sm leading-tight">
                    {cat.name}
                  </h4>

                  <p className="text-[11px] opacity-70 mt-1 line-clamp-1">
                    {cat.description}
                  </p>
                </div>

                {/* Product Count */}
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/10 w-fit">
                  {cat.productCount} Produk
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={active.image || "/placeholder.jpg"}
                alt={active.name}
                className="w-full h-[280px] object-cover"
              />
            </div>

            {/* DETAIL CARD */}
            <div className="absolute -bottom-8 left-4 right-4 bg-white rounded-xl shadow-xl p-5 space-y-3">

              <div>
                <h3 className="font-bold text-base">{active.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {active.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-1">
                {active.benefits?.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check size={12} className="text-primary mt-[2px]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-semibold text-muted-foreground">
                  {active.productCount} Produk tersedia
                </span>

                <Link href={`/product-category/${active.slug}`}>
                  <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                    Lihat <ArrowRight size={14} />
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}