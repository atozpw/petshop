"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
import { register } from "@/lib/auth"
import Link from "next/link"
import { Mail, Lock, User, Phone } from "lucide-react"
import { useAuth } from "@/context/auth-context"

function RegisterContent() {
  const router = useRouter()
  const { login: authLogin, isAuthenticated, authLoading } = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    city: "",
    pets: [] as string[],
  })

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      router.replace("/dashboard")
    }
  }, [authLoading, isAuthenticated, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (formData.password !== formData.password_confirmation) {
      setError("Password dan konfirmasi password tidak sama")
      setIsLoading(false)
      return
    }

    try {
      const data = await register(formData)

      authLogin(data.user, data.token)

      router.replace("/dashboard")
    } catch (err: any) {
      setError(err.message || "Gagal membuat akun")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePetChange = (pet: string) => {
    setFormData((prev) => {
      const exists = prev.pets.includes(pet)

      return {
        ...prev,
        pets: exists
          ? prev.pets.filter((p) => p !== pet)
          : [...prev.pets, pet],
      }
    })
  }

  if (authLoading || isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen flex bg-background items-center justify-center">
      <div className="container mx-auto px-4">
        <img src="/logo.png" alt="Logo" className="mx-auto pb-4" width={150} height={150} />
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg border border-border p-8 space-y-6">

            <div className="text-center space-y-2">
              
              <h1 className="text-3xl font-bold text-primary">Daftar</h1>
              <p className="text-muted-foreground">Buat akun baru Anda</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    name="name"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">No. Telepon</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    name="phone"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              {/* JENIS HEWAN */}
              <div>
                <label className="block text-sm font-semibold mb-2">Jenis Hewan</label>

                <div className="grid grid-cols-2 gap-3">

                  <label
                    className={`flex items-center justify-center gap-2 border rounded-lg px-4 py-2 cursor-pointer transition
                    ${
                      formData.pets.includes("kucing")
                        ? "bg-primary text-white border-primary"
                        : "bg-white hover:bg-muted"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={formData.pets.includes("kucing")}
                      onChange={() => handlePetChange("kucing")}
                    />
                    🐱 Kucing
                  </label>

                  <label
                    className={`flex items-center justify-center gap-2 border rounded-lg px-4 py-2 cursor-pointer transition
                    ${
                      formData.pets.includes("anjing")
                        ? "bg-primary text-white border-primary"
                        : "bg-white hover:bg-muted"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={formData.pets.includes("anjing")}
                      onChange={() => handlePetChange("anjing")}
                    />
                    🐶 Anjing
                  </label>

                </div>
              </div>

              {/* KOTA */}
              <div>
                <label className="block text-sm font-semibold mb-2">Kota</label>

                <select
                  name="city"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-white"
                  required
                >
                  <option value="">Pilih Kota</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bali">Bali</option>
                  <option value="lombok">Lombok</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Konfirmasi Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="password"
                    name="password_confirmation"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 bg-primary text-white font-semibold rounded-lg disabled:opacity-50"
              >
                {isLoading ? "Membuat akun..." : "Daftar"}
              </button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Sudah memiliki akun? </span>
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Login di sini
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default function RegisterPage() {
  return (
    <>
      {/* <Header /> */}
      <RegisterContent />
      {/* <Footer /> */}
    </>
  )
}
