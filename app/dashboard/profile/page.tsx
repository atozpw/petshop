"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { User, Mail, Phone, MapPin, Save, ArrowLeft } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { apiFetch } from "@/lib/api"

export default function ProfilePage() {
  const { user, authLoading } = useAuth()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  })

  /* ===============================
     INIT DATA
  =============================== */
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      })
    }
  }, [user])

  /* ===============================
     HANDLE UPDATE
  =============================== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await apiFetch("/profile", {
        method: "PUT",
        body: JSON.stringify(form),
      })

      alert("Profile berhasil diupdate ✅")
      router.refresh()
    } catch (error) {
      alert("Gagal update profile ❌")
    } finally {
      setLoading(false)
    }
  }

  /* ===============================
     LOADING STATE
  =============================== */
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Loading profile...
        </div>
      </div>
    )
  }

  if (!user) {
    router.replace("/login")
    return null
  }

  return (
    <main className="min-h-screen bg-muted/30 pb-20">
      <div className="container max-w-3xl mx-auto px-4 py-10">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard" className="p-2 rounded-lg hover:bg-muted">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold">Edit Profil</h1>
        </div>

        {/* CARD */}
        <div className="bg-card border rounded-2xl shadow-sm p-6 md:p-8">

          {/* Avatar */}
          <div className="flex items-center gap-5 mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-muted-foreground text-sm">{user.email}</p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full pl-9 pr-4 py-2 rounded-lg border bg-background"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full pl-9 pr-4 py-2 rounded-lg border bg-background"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Nomor Telepon
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full pl-9 pr-4 py-2 rounded-lg border bg-background"
                />
              </div>
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
              >
                <Save size={16} />
                {loading ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  )
}
    