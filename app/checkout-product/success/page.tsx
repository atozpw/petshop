"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center space-y-6">
            <CheckCircle size={64} className="mx-auto text-green-600" />

            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">Pesanan Berhasil</h1>
              <p className="text-muted-foreground">Terima kasih telah berbelanja di JJ Pet House</p>
            </div>

            <div className="bg-muted p-6 rounded-lg text-left space-y-2">
              <p className="text-sm text-muted-foreground">Order ID: #OR-2024001</p>
              <p className="text-sm text-muted-foreground">Status: Menunggu Pembayaran</p>
              <p className="text-sm text-muted-foreground">Anda akan menerima email konfirmasi dalam beberapa saat</p>
            </div>

            <div className="space-y-3 pt-6 border-t border-border">
              <Link href="/dashboard">
                <Button className="w-full bg-primary hover:bg-primary/90">Lihat Pesanan di Dashboard</Button>
              </Link>

              <Link href="/pet-shop">
                <Button variant="ghost" className="w-full border border-primary text-primary">
                  Lanjut Belanja
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
