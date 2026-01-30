export interface ProductCategory {
  id: number
  name: string
  slug: string
}

export interface ProductVariant {
  id: number
  product_id: number
  name: string
  price: string
  sku: string
  stock: number
}


export interface Product {
  id: number
  product_category_id: number
  name: string
  slug: string
  description: string
  brand: string
  pet_type: string
  price: string
  sku: string
  weight: number
  is_active: number

  product_category: ProductCategory
  variants: ProductVariant[]  
}
