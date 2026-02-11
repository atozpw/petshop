import { notFound } from "next/navigation"
import ProductClient from "./product-client"
import { fetchProduct } from "@/lib/api"
import type { Product } from "@/lib/product-data"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!slug) notFound()

  const product: Product | null = await fetchProduct(slug)

  if (!product) notFound()

  return <ProductClient product={product} />
}
