import { products } from "@/lib/product-data"
import ProductClient from "./product-client"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function Page({
  params,
}: {
  params: { id: string }
}) {  
  
   const { id } = await params
  // const product = products.find(
  //   (p) => p.id.toString() === params.id
  // )
  const product = products.find(
    (p) => p.id === Number(id)
  )
  
  console.log("PARAMS ID:", id)


  if (!product) {
    return <div>Produk tidak ditemukan</div>
  }

  return <ProductClient product={product} />
}
