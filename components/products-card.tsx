"use client"

import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/product-data"

interface ProductSimpleCardProps {
  product: Pick<Product, "id" | "name" | "price" | "images" | "slug">
}

export function ProductSimpleCard({ product }: ProductSimpleCardProps) {
// console.log(product); // Debugging line to check product data
  const imageUrl =
    product.images?.[0]?.image_url ?? "/no-image.png"

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div
        className="bg-card rounded-lg border border-border overflow-hidden
                   transition-all duration-300
                   hover:-translate-y-1 hover:shadow-xl"
      >
        {/* IMAGE */}
        <div className="relative h-40 bg-muted overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300
                       group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
        </div>

        {/* CONTENT */}
        <div className="p-3 space-y-1">
          {/* NAME */}
          <h3 className="text-sm font-medium text-foreground line-clamp-2">
            {product.name}
          </h3>

          {/* 
          RATING & REVIEW
          Aktifkan lagi kalau API sudah ada
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={12} fill="currentColor" />
              <span className="text-foreground">
                {product.rating}
              </span>
            </div>

            <span>•</span>

            <span>
              {product.reviews.toLocaleString("id-ID")} terjual
            </span>
          </div>
          */}

          {/* PRICE */}
          <p className="text-base font-bold text-primary">
            Rp {Number(product.price).toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </Link>
  )
}
