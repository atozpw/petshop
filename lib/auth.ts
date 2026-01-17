import { apiFetch } from "./api"

export interface User {
  id: number
  name: string
  email: string
  phone: string | null
  roles: string[]
  permissions: string[]
}

export interface AuthResponse {
  tokenType: string
  token: string
  user: User
}


export async function login(email: string, password: string): Promise<AuthResponse> {
  const res = await apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })

  return res.data
}


export async function register(payload: {
  name: string
  email: string
  password: string
  password_confirmation: string
  phone?: string
}): Promise<AuthResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined")
  }

  const res = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json", // ⬅️ INI KUNCI
    },
    body: JSON.stringify(payload),
    redirect: "manual", // ⬅️ BLOK REDIRECT
  })

  // ⛔ Backend redirect → kita anggap error
  if (res.type === "opaqueredirect" || res.status === 302) {
    throw {
      message: "Register gagal (redirect terdeteksi)",
    }
  }

  const data = await res.json()

  if (!res.ok) {
    throw data
  }

  return data
}

export async function getProfile(token?: string): Promise<User> {
  const res = await apiFetch("/profile", {}, token)
  return res.data.user
}

export async function logout(token?: string) {
  return apiFetch("/logout", { method: "POST" }, token)
}
