// lib/api.ts
export async function apiFetch(
  endpoint: string,
  options: RequestInit = {},
  token?: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    }
  )

  let data: any = null

  try {
    data = await res.json()
  } catch {
    // response bukan JSON (misalnya 204)
  }

  if (!res.ok) {
    throw data || { message: "Terjadi kesalahan server" }
  }

  return data
} 

export async function fetchProducts(params?: URLSearchParams) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products${params ? `?${params}` : ""}`

  const res = await fetch(url, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function fetchProduct(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`,
    { cache: "no-store" }
  )

  if (!res.ok) return null
  const json = await res.json()
  return json.data ?? null
}



export async function fetchCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-categories`, {
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Failed to fetch categories")

  return res.json()
}



export async function validateCartAPI(
  items: {
    productId: number
    variantId: number | null
    quantity: number
  }[],
  token?: string
) {
  return apiFetch(
    `/cart/validate`,
    {
      method: "POST",
      body: JSON.stringify({
        items: items.map(i => ({
          product_id: i.productId,
          product_variant_id: i.variantId,
          quantity: i.quantity,
        })),
      }),
    },
    token
  )
}
export const addCartAPI = async (
  token: string,
  item: {
    productId: number
    variantId: number | null
    quantity: number
  }
) => {
  return apiFetch(
    "/cart",
    {
      method: "POST",
      body: JSON.stringify({
        items: [
          {
            product_id: item.productId,
            product_variant_id: item.variantId,
            quantity: item.quantity,
          },
        ],
      }),
    },
    token
  )
}

export async function updateCartItemAPI(
  cartItemId: number,
  quantity: number,
  token: string
) {
  return apiFetch(
    `/cart/${cartItemId}`,
    {
      method: "PUT",
      body: JSON.stringify({ quantity }),
    },
    token
  )
}


export async function deleteCartItemAPI(
  cartItemId: number,
  token: string
) {
  return apiFetch(
    `/cart/${cartItemId}`,
    { method: "DELETE" },
    token
  )
}


export const clearCartAPI = async (token?: string) => {
  return apiFetch(
    "/cart/clear",
    {
      method: "DELETE",
    },
    token
  )
}

export const getMyOrdersAPI = async (token?: string) =>{
  return apiFetch("/orders/my", {
    method: "GET",
  }, token)
}
  



