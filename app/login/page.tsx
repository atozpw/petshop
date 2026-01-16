"use client"

import type React from "react"
import { Suspense, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { login } from "@/lib/auth"
import Link from "next/link"
import { Mail, Lock } from "lucide-react"

function LoginContent() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const data = await login(email, password)

      // ⚠️ sementara (nanti kita ganti ke cookie)
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message || "Email atau password salah")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg border border-border p-8 space-y-6">

            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-primary">Login</h1>
              <p className="text-muted-foreground">Masuk ke akun Anda</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "Masuk"}
              </button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Belum memiliki akun? </span>
              <Link href="/register" className="text-primary font-semibold hover:underline">
                Daftar di sini
              </Link>
            </div>

            <Link href="/">
              <button className="w-full py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5">
                Kembali ke Beranda
              </button>
            </Link>

          </div>
        </div>
      </div>
    </main>
  )
}

export default function LoginPage() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <LoginContent />
      </Suspense>
      <Footer />
    </>
  )
}
