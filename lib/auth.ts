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

// LOGIN
export async function login(email: string, password: string): Promise<AuthResponse> {
  const res = await apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })

  return res.data
}

// REGISTER
export async function register(payload: {
  name: string
  email: string
  password: string
  password_confirmation: string
  phone?: string
}): Promise<AuthResponse> {
  const res = await apiFetch("/register", {
    method: "POST",
    body: JSON.stringify(payload),
  })

  return res.data
}

// PROFILE
export async function getProfile(token: string): Promise<User> {
  const res = await apiFetch("/profile", {}, token)
  return res.data.user
}

// LOGOUT
export async function logout(token: string) {
  return apiFetch("/logout", { method: "POST" }, token)
}
