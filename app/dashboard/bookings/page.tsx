"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BookingListPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Riwayat Booking</h1>

          <div className="bg-card border rounded-xl p-6">
            <p className="text-muted-foreground">Belum ada booking</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
