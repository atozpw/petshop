export const tokenStorage = {
  get() {
    if (typeof window === "undefined") return null
    return localStorage.getItem("petshop-token")
  },
  set(token: string) {
    localStorage.setItem("petshop-token", token)
  },
  clear() {
    localStorage.removeItem("petshop-token")
  },
}
