"use client"

import { Suspense } from "react"
import CheckoutProductContent from "./checkout-product-content"

export default function CheckoutProductPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CheckoutProductContent />
    </Suspense>
  )
}
