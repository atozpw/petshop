"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/lib/product-data"
import Image from "next/image"

interface ProductSimple {
  id: number
  name: string
  price: number
  sold: number
  rating: number // contoh: 4.8
  image?: string
}

interface ProductSimpleCardProps {
 product: Pick<
    Product,
    "id" | "name" | "price" | "rating" | "image"
  >
}

export function ProductSimpleCard({ product }: ProductSimpleCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
    >
      <div
        className="bg-card rounded-lg border border-border overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl"
      >
        {/* IMAGE */}
        <div className="relative h-40 bg-muted overflow-hidden">
          
          <Image
            src={product.image || "/no-image.png"}
            alt={product.name}
            className="h-full w-full object-cover
                      transition-transform duration-300
                      group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = "/no-image.png"
            }}
            fill
          />

        </div>

        {/* CONTENT */}
        <div className="p-3 space-y-1">
          {/* NAME */}
          <h3 className="text-sm font-medium text-foreground line-clamp-2">
            {product.name}
          </h3>

          {/* RATING & SOLD */}
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

          {/* PRICE */}
          <p className="text-base font-bold text-primary">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </Link>

    
    
  )
}
