"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getMyOrdersAPI } from "@/lib/api"
import { ArrowLeft, Package } from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.replace("/login")
      return
    }

    const fetchOrders = async () => {
      const token = localStorage.getItem("petshop-token")
      if (!token) return

      const res = await getMyOrdersAPI(token)
      setOrders(res.data || [])
      setLoading(false)
    }

    fetchOrders()
    
  }, [user])
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 py-10">
        
        <div className="container max-w-5xl mx-auto px-4">
          {/* BACK */}
          <Link href="/dashboard" className="flex items-center gap-2 text-sm mb-6">
            <ArrowLeft size={16} /> Kembali ke dashboard
          </Link>
          <h1 className="text-2xl font-bold mb-6">Semua Pesanan</h1>

          {loading ? (
            <div className="animate-pulse h-32 bg-muted rounded-lg" />
          ) : orders.length === 0 ? (
            <Empty />
          ) : (
            <div className="space-y-4">
              
              {orders.map(o => (
                <Link key={o.id} href={`/dashboard/orders/${o.number}`} className="block">
                    <div className="bg-card border rounded-xl p-5 hover:shadow-md transition cursor-pointer">
                    <div className="flex justify-between items-start">
                        <div>
                        <p className="font-semibold">#{o.number}</p>
                        <p className="text-sm text-muted-foreground">
                            {new Date(o.created_at).toLocaleDateString("id-ID")}
                        </p>
                        </div>

                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {o.status}
                        </span>
                    </div>

                    <p className="mt-3 font-bold text-primary">
                        Rp {Number(o.grand_total).toLocaleString("id-ID")}
                    </p>
                    </div>
                </Link>
                ))}

            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}

function Empty() {
  return (
    <div className="bg-muted/40 border-dashed border rounded-xl p-10 text-center">
      <Package className="mx-auto mb-4 text-muted-foreground" />
      <p>Belum ada pesanan</p>
    </div>
  )
}
