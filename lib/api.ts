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

