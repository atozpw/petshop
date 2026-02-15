"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  User, LogOut, Package, Clock, CheckCircle2, MapPin, 
  Settings, CreditCard, Heart, ChevronRight, Calendar, PawPrint 
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { getMyOrdersAPI } from "@/lib/api"
import type { Booking } from "@/lib/booking-data"


type Order = {
  id: string
  number: string
  created_at: string
  status: "pending" | "processing" | "shipped" | "completed" | "cancelled"
  grand_total: number
  items_count?: number
}

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.replace("/login")
      return
    }

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("petshop-token")
        if (token) {
          const res = await getMyOrdersAPI(token)
          setOrders(res.data || [])
        }
      } catch (err) {
        console.error(err)
      }

      const bookingData = JSON.parse(localStorage.getItem("bookings") || "[]")
      setBookings(bookingData)

      setLoading(false)
    }

    fetchData()
  }, [user, router])

  if (!user) return null
  if (loading) return <div className="min-h-screen bg-background animate-pulse" />

  const pendingOrders = orders.filter(o => o.status === "pending" || o.status === "processing").length
  const completedOrders = orders.filter(o => o.status === "completed").length

  const pendingBookings = bookings.filter(b => b.status === "pending").length
  const completedBookings = bookings.filter(b => b.status === "completed").length

  return (
    <>
      <Header />

      <main className="min-h-screen bg-muted/30 pb-16">
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">

          {/* PROFILE */}
          <div className="bg-card border rounded-2xl p-6 md:p-7 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link href="/dashboard/profile">
                  <button className="px-4 py-2 rounded-lg border hover:bg-muted transition">
                    Edit Profil
                  </button>
                </Link>

                <button
                  onClick={() => { logout(); router.replace("/login") }}
                  className="px-4 py-2 rounded-lg bg-destructive text-white hover:bg-destructive/90"
                >
                  Keluar
                </button>
              </div>

            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">
            <StatCard icon={Package} label="Total Pesanan" value={orders.length} />
            <StatCard icon={Clock} label="Menunggu" value={pendingOrders} accent />
            <StatCard icon={CheckCircle2} label="Selesai" value={completedOrders} accent />
            <StatCard icon={Calendar} label="Booking Pending" value={pendingBookings} accent />
            <StatCard icon={PawPrint} label="Booking Selesai" value={completedBookings} accent />
          </div>

          {/* GRID UTAMA */}
          <div className="grid md:grid-cols-4 gap-6">

            {/* SIDEBAR */}
            <div className="md:col-span-1">
              <div className="bg-card border rounded-xl shadow-sm sticky top-6">
                <DashboardMenu />
              </div>
            </div>

            {/* CONTENT */}
            <div className="md:col-span-3 space-y-8">

              {/* PESANAN */}
              <section className="bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Pesanan Terbaru</h2>
                  <Link href="/orders" className="text-primary text-sm hover:underline">
                    Lihat semua
                  </Link>
                </div>

                {orders.length === 0 ? (
                  <EmptyOrders />
                ) : (
                  <div className="space-y-4">
                    {orders.slice(0, 2).map(order => (
                      <OrderCard key={order.id} order={order} />
                    ))}
                  </div>
                )}
              </section>

              {/* BOOKING */}
              <section className="bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Booking Layanan</h2>
                  <Link href="/booking" className="text-primary text-sm hover:underline">
                    Buat booking
                  </Link>
                </div>

                {bookings.length === 0 ? (
                  <EmptyBookings />
                ) : (
                  <div className="space-y-4">
                    {bookings.slice(0, 5).map(booking => (
                      <BookingCard key={booking.id} booking={booking} />
                    ))}
                  </div>
                )}
              </section>

              {/* SETTINGS */}
              <section className="bg-card border rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Settings size={18} />
                  Pengaturan Akun
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <QuickSettingCard icon={User} title="Profil" desc="Ubah data pribadi" href="/dashboard/profile" />
                  <QuickSettingCard icon={MapPin} title="Alamat" desc="Kelola alamat pengiriman" href="/dashboard/addresses" />
                  <QuickSettingCard icon={CreditCard} title="Pembayaran" desc="Metode pembayaran" href="/dashboard/payment" />
                  <QuickSettingCard icon={Heart} title="Wishlist" desc="Produk favorit" href="/wishlist" />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>


      <Footer />
    </>
  )
}

function StatCard({ icon: Icon, label, value, accent = false }: any) {
  return (
    <div className="bg-card/80 border rounded-xl p-5 shadow-sm hover:shadow transition-shadow">
      <div className="flex items-center gap-3.5">
        <div className={cn(
          "p-3 rounded-lg",
          accent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
        )}>
          <Icon size={22} />
        </div>
        <div>
          <p className="text-xs md:text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl md:text-3xl font-bold mt-0.5">{value}</p>
        </div>
      </div>
    </div>
  )
}


function OrderCard({ order }: { order: Order }) {
  const statusMap: Record<string, string> = {
    pending: "text-amber-600",
    processing: "text-blue-600",
    shipped: "text-indigo-600",
    completed: "text-emerald-600",
    cancelled: "text-rose-600",
  }

  const statusLabel: Record<string, string> = {
    pending: "Menunggu",
    processing: "Diproses",
    shipped: "Dikirim",
    completed: "Selesai",
    cancelled: "Dibatalkan",
  }

console.log(order);

  return (
    <Link
      href={`/dashboard/orders/${order.number}`}
      className="block group"
    >
      <div className="border rounded-xl px-5 py-4 bg-card hover:bg-muted/40 transition">

        {/* TOP */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium">
              #{order.number}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {new Date(order.created_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <span
            className={`text-xs font-medium capitalize ${
              statusMap[order.status] || "text-muted-foreground"
            }`}
          >
            {statusLabel[order.status] || order.status}
          </span>
        </div>

        {/* BOTTOM */}
        <div className="mt-3 flex justify-between items-end">
          <p className="text-sm bold text-primary">
             Rp {Number(order.grand_total).toLocaleString("id-ID")}
          </p>
        </div>

      </div>
    </Link>
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
    <div className="bg-card border rounded-xl p-5 hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-base">{booking.serviceId}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">ID: {booking.id}</p>
        </div>
        <span className={cn(
          "px-3.5 py-1 rounded-full text-xs font-medium border",
          statusStyles[booking.status] || "bg-gray-100 text-gray-700 border-gray-200"
        )}>
          {booking.status === "pending" ? "Menunggu" :
           booking.status === "confirmed" ? "Dikonfirmasi" :
           booking.status === "completed" ? "Selesai" : "Dibatalkan"}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground"><PawPrint size={16} /> {booking.petName}</div>
        <div className="flex items-center gap-2 text-muted-foreground"><Calendar size={16} /> {booking.date}</div>
        <div className="flex items-center gap-2 text-muted-foreground"><Clock size={16} /> {booking.time}</div>
        <div className="text-right font-bold text-primary">Rp {booking.totalPrice.toLocaleString("id-ID")}</div>
      </div>
    </div>
  )
}

function QuickSettingCard({ icon: Icon, title, desc, href }: any) {
  return (
    <Link href={href} className="group block p-5 border rounded-xl hover:border-primary/50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/5 text-primary"><Icon size={20} /></div>
        <div className="flex-1">
          <h4 className="font-semibold group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{desc}</p>
        </div>
        <ChevronRight size={18} className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
      </div>
    </Link>
  )
}

function DashboardMenu() {
  const items = [
    { icon: Package, label: "Pesanan", href: "/dashboard/orders" },
    { icon: Calendar, label: "Booking", href: "/dashboard/bookings" },
    { icon: MapPin, label: "Alamat", href: "/dashboard/addresses" },
    { icon: Settings, label: "Profil", href: "/dashboard/profile" },
    // { icon: Heart, label: "Wishlist", href: "/wishlist" },
  ]

  return (
    <nav className="p-2">
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium"
        >
          <item.icon size={18} className="text-muted-foreground" />
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

function EmptyOrders() {
  return (
    <div className="bg-muted/40 rounded-xl p-10 text-center border border-dashed">
      <Package className="mx-auto h-12 w-12 text-muted-foreground/60 mb-4" />
      <h3 className="text-lg font-semibold mb-2">Belum ada pesanan</h3>
      <p className="text-muted-foreground mb-6">Mulai belanja sekarang</p>
      <Link href="/shop"><button className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90">Belanja Sekarang</button></Link>
    </div>
  )
}

function EmptyBookings() {
  return (
    <div className="bg-muted/40 rounded-xl p-10 text-center border border-dashed">
      <Calendar className="mx-auto h-12 w-12 text-muted-foreground/60 mb-4" />
      <h3 className="text-lg font-semibold mb-2">Belum ada booking</h3>
      <p className="text-muted-foreground mb-6">Reservasi grooming / dokter hewan</p>
      <Link href="/booking"><button className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90">Reservasi Sekarang</button></Link>
    </div>
  )
}