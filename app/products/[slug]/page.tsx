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

  // console.log("SLUG FROM ROUTE:", slug)

  if (!slug) notFound()

  const product: Product | null = await fetchProduct(slug)

  // console.log("SERVER PRODUCT DETAIL:", product)

  if (!product) notFound()

  return <ProductClient product={product} />
}
