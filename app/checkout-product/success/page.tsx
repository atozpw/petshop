"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { apiFetch } from "@/lib/api"
import Image from "next/image"

export default function CheckoutSuccessPage() {
  const params = useSearchParams()
  const orderNumber = params.get("order")

  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem("petshop-token")

        const res = await apiFetch(`/orders/${orderNumber}`, {}, token)

        setOrder(res.data)
      } catch (err) {
        console.error("Failed load order", err)
      } finally {
        setLoading(false)
      }
    }

    if (orderNumber) fetchOrder()
  }, [orderNumber])

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          Memuat detail pesanan...
        </main>
        <Footer />
      </>
    )
  }

  if (!order) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          Pesanan tidak ditemukan
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-3xl">

          <h1 className="text-3xl font-bold mb-4 text-primary">
            Pesanan Berhasil Dibuat 🎉
          </h1>

          <p className="mb-6">
            Nomor Pesanan:
            <span className="font-semibold ml-2">
              {order.number}
            </span>
          </p>

          <div className="bg-white rounded-lg border p-6 space-y-4">
            {order.items.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-muted rounded overflow-hidden relative">
                    <Image
                      src={item.product?.image || "/no-image.png"}
                      alt={item.product?.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-semibold">
                      {item.product?.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="font-semibold">
                  Rp {(item.subtotal).toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right text-lg font-bold">
            Total: Rp {order.grand_total.toLocaleString("id-ID")}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
