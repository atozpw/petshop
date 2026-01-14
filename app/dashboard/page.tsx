"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserIcon, LogOut, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import type { User } from "@/lib/auth"
import type { Booking } from "@/lib/booking-data"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userSession = localStorage.getItem("user")
    if (!userSession) {
      router.push("/login")
      return
    }

    const userData = JSON.parse(userSession)
    setUser(userData)

    const bookingData = JSON.parse(localStorage.getItem("bookings") || "[]")
    setBookings(bookingData)
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background" />
        <Footer />
      </>
    )
  }

  if (!user) return null

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-50 text-green-700"
      case "completed":
        return "bg-blue-50 text-blue-700"
      case "cancelled":
        return "bg-red-50 text-red-700"
      default:
        return "bg-yellow-50 text-yellow-700"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "Menunggu Konfirmasi"
      case "confirmed":
        return "Dikonfirmasi"
      case "completed":
        return "Selesai"
      case "cancelled":
        return "Dibatalkan"
      default:
        return status
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header with User Info */}
            <div className="bg-white rounded-lg border border-border p-6 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <UserIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                  <p className="text-muted-foreground">{user.email}</p>
                  <p className="text-muted-foreground text-sm">{user.phone}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 font-semibold"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg border border-border p-6">
                <p className="text-muted-foreground text-sm mb-2">Total Booking</p>
                <p className="text-3xl font-bold text-primary">{bookings.length}</p>
              </div>
              <div className="bg-white rounded-lg border border-border p-6">
                <p className="text-muted-foreground text-sm mb-2">Konfirmasi</p>
                <p className="text-3xl font-bold text-accent">
                  {bookings.filter((b) => b.status === "confirmed").length}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-border p-6">
                <p className="text-muted-foreground text-sm mb-2">Selesai</p>
                <p className="text-3xl font-bold text-accent">
                  {bookings.filter((b) => b.status === "completed").length}
                </p>
              </div>
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Riwayat Booking</h2>

              {bookings.length === 0 ? (
                <div className="bg-white rounded-lg border border-border p-12 text-center">
                  <p className="text-muted-foreground mb-4">Belum ada booking</p>
                  <Link href="/booking">
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90">
                      Pesan Sekarang
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{booking.serviceId}</h3>
                          <p className="text-sm text-muted-foreground">ID: {booking.id}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}
                        >
                          {getStatusLabel(booking.status)}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <UserIcon size={16} />
                          <span>{booking.petName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock size={16} />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-end justify-end">
                          <p className="font-bold text-primary">Rp {booking.totalPrice.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="border-t border-border pt-4 flex gap-3">
                        <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5">
                          Detail
                        </button>
                        {booking.status === "pending" && (
                          <button className="flex-1 px-4 py-2 border border-red-200 text-red-600 rounded-lg font-semibold hover:bg-red-50">
                            Batalkan
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Ingin Pesan Layanan Lagi?</h2>
              <p className="opacity-90 mb-6">Jelajahi semua layanan kami yang tersedia</p>
              <Link href="/booking">
                <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                  Pesan Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
