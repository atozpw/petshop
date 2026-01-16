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
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    }
  )

  const data = await res.json()

  if (!res.ok) {
    throw data
  }

  return data
}
