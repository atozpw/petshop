"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/lib/product-data"

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
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="h-40 bg-muted flex items-center justify-center text-4xl">
          {product.image || "📦"}
        </div>

        {/* Content */}
        <div className="p-3 space-y-1">
          {/* Name */}
          <h3 className="text-sm font-medium text-foreground line-clamp-2">
            {product.name}
          </h3>

          {/* Rating & Sold */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={12} fill="currentColor" />
              <span className="text-foreground">{product.rating}</span>
            </div>
            <span>•</span>
            <span>200+ terjual</span>
          </div>

          {/* Price */}
          <p className="text-base font-bold text-primary">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
        </div>
        
      </div>
    </Link>
    
    
  )
}
