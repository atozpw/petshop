"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { User, LogOut, Calendar, Clock, PawPrint } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import type { Booking } from "@/lib/booking-data"
import { getMyOrdersAPI } from "@/lib/api"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.replace("/login")
      return
    }

    // sementara masih local
    const bookingData = JSON.parse(localStorage.getItem("bookings") || "[]")
    setBookings(bookingData)

    // order dari backend
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("petshop-token")
        if (!token) return
        const res = await getMyOrdersAPI(token)
        setOrders(res.data)
      } catch (err) {
        console.error("Failed fetch orders", err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [user])


  if (!user) return null
  if (loading) return <div className="min-h-screen bg-background" />

  const pendingBooking = bookings.filter(b => b.status === "pending").length
  const completedBooking = bookings.filter(b => b.status === "completed").length

  const totalOrders = orders.length
  const completedOrders = orders.filter(o => o.status === "completed").length
  const pending = bookings.filter(b => b.status === "pending").length
  const confirmed = bookings.filter(b => b.status === "confirmed").length

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 pb-20">
        <div className="container max-w-6xl mx-auto px-4 py-10 md:py-16">
          {/* Profile Card */}
          <div className="bg-white/70 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                  <User className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{user.name}</h1>
                  <p className="text-muted-foreground mt-1">{user.email}</p>
                </div>
              </div>

              <button
                onClick={() => { logout(); router.replace("/login") }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-red-200/80 text-red-600 hover:bg-red-50/80 transition-colors font-medium"
              >
                <LogOut size={18} />
                Keluar
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <StatCard icon={PawPrint} label="Total Booking" value={bookings.length} />
            <StatCard icon={Calendar} label="Menunggu" value={pending} accent />
            <StatCard icon={Clock} label="Dikonfirmasi" value={confirmed} accent />
            <StatCard icon={PawPrint} label="Selesai" value={bookings.filter(b => b.status === "completed").length} />
          </div>

          {/* Bookings */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Riwayat Booking</h2>
              <Link href="/booking" className="text-primary hover:underline text-sm font-medium">
                Pesan baru →
              </Link>
            </div>

            {bookings.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-4 md:space-y-5">
                {bookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            )}
          </section>

          {/* Orders */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Riwayat Order</h2>

            {orders.length === 0 ? (
              <div className="text-muted-foreground">Belum ada order</div>
            ) : (
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="bg-white border rounded-xl p-5">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">#{order.number}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.created_at}
                        </p>
                      </div>

                      <span className="text-sm font-medium">
                        {order.status}
                      </span>
                    </div>

                    <div className="text-right font-bold text-primary mt-3">
                      Rp {Number(order.grand_total).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}

function StatCard({ icon: Icon, label, value, accent = false }: any) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-border/50 rounded-xl p-5 md:p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={cn(
          "p-2.5 rounded-lg",
          accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
        )}>
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs md:text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl md:text-3xl font-bold mt-0.5">{value}</p>
        </div>
      </div>
    </div>
  )
}

function BookingCard({ booking }: { booking: Booking }) {
  const statusStyles = {
    pending:    "bg-amber-50 text-amber-700 border-amber-200",
    confirmed:  "bg-emerald-50 text-emerald-700 border-emerald-200",
    completed:  "bg-blue-50 text-blue-700 border-blue-200",
    cancelled:  "bg-rose-50 text-rose-700 border-rose-200",
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-border/40 rounded-xl p-6 hover:shadow-md transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <h3 className="font-semibold text-lg">{booking.serviceId}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">ID: {booking.id}</p>
        </div>
        <span className={cn(
          "px-3.5 py-1 rounded-full text-xs font-medium border",
          statusStyles[booking.status] || "bg-gray-50 text-gray-700 border-gray-200"
        )}>
          {booking.status === "pending" ? "Menunggu" :
           booking.status === "confirmed" ? "Dikonfirmasi" :
           booking.status === "completed" ? "Selesai" : "Dibatalkan"}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-5">
        <InfoItem icon={PawPrint} label={booking.petName} />
        <InfoItem icon={Calendar} label={booking.date} />
        <InfoItem icon={Clock} label={booking.time} />
        <div className="text-right font-bold text-primary self-end">
          Rp {booking.totalPrice.toLocaleString()}
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-border/50">
        <button className="flex-1 py-2.5 border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">
          Detail
        </button>
        {booking.status === "pending" && (
          <button className="flex-1 py-2.5 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
            Batalkan
          </button>
        )}
      </div>
    </div>
  )
}

function InfoItem({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Icon size={16} />
      <span>{label}</span>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="bg-white/60 backdrop-blur-md border border-border/40 rounded-2xl p-12 text-center">
      <PawPrint className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">Belum ada booking</h3>
      <p className="text-muted-foreground mb-6">Mulai pesan layanan favorit hewanmu sekarang</p>
      <Link href="/booking">
        <button className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-sm">
          Pesan Sekarang
        </button>
      </Link>
    </div>
  )
}