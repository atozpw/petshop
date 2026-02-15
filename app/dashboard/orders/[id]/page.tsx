"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/context/auth-context"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getOrderDetailAPI } from "@/lib/api"
import { Package, MapPin, CreditCard, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OrderDetailPage() {
  const { user } = useAuth()
  const router = useRouter()
  const params = useParams()

  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.replace("/login")
      return
    }

    const fetchOrder = async () => {
      try {
       const token = localStorage.getItem("petshop-token")
        if (!token) return

        const orderNumber = Array.isArray(params.id)
          ? params.id[0]
          : params.id

        const res = await getOrderDetailAPI(orderNumber!, token)
        setOrder(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    } 


    fetchOrder()
  }, [user, params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-muted animate-pulse" />
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Order tidak ditemukan
      </div>
    )
  }
  // console.log(order);
  

  return (
    <>
      <Header />

      <main className="min-h-screen bg-muted/30 py-10">
        <div className="container max-w-5xl mx-auto px-4">

          {/* BACK */}
          <Link href="/dashboard/orders" className="flex items-center gap-2 text-sm mb-6">
            <ArrowLeft size={16} /> Kembali ke pesanan
          </Link>

          {/* HEADER */}
          <div className="bg-card border rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground text-sm">Order</p>
                <h1 className="text-2xl font-bold">#{order.number}</h1>
              </div>

              <span className="px-4 py-1 rounded-full text-sm bg-primary/10 text-primary">
                {order.status}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              {new Date(order.created_at).toLocaleDateString("id-ID")}
            </p>
          </div>

          {/* ITEMS */}
          <section className="bg-card border rounded-xl p-6 mb-6">
            <h2 className="font-bold mb-4 flex items-center gap-2">
              <Package size={18} /> Produk
            </h2>

            <div className="space-y-4">
              {order.items.map((item: any) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-semibold">{item.product.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {item.quantity} x Rp {Number(item.price).toLocaleString("id-ID")}
                    </p>

                  </div>

                  <p className="font-semibold">
                    Rp {Number(item.subtotal).toLocaleString("id-ID")}  
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ADDRESS */}
          {/* <section className="bg-card border rounded-xl p-6 mb-6">
            <h2 className="font-bold mb-4 flex items-center gap-2">
              <MapPin size={18} /> Alamat Pengiriman
            </h2>

            <p className="font-semibold">{order.shipping.name}</p>
            <p className="text-muted-foreground text-sm">
              {order.shipping.address}
            </p>
            <p className="text-muted-foreground text-sm">
              {order.shipping.phone}
            </p>
          </section> */}

          {/* PAYMENT */}
          <section className="bg-card border rounded-xl p-6 mb-6">
            <h2 className="font-bold mb-4 flex items-center gap-2">
              <CreditCard size={18} /> Pembayaran
            </h2>

            <div className="space-y-2 text-sm">
              <Row label="Subtotal" value={order.subtotal} />
              <Row label="Ongkir" value={order.shipping_cost} />
              <Row label="Diskon" value={order.discount} />
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">
                Rp {Number(order.grand_total).toLocaleString("id-ID")}
              </span>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}

function Row({ label, value }: any) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>Rp {Number(value || 0).toLocaleString("id-ID")}</span>
    </div>
  )
}
    