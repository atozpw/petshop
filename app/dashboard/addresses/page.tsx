"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Plus } from "lucide-react"

export default function AddressPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-muted/30 py-10">
        <div className="container max-w-4xl mx-auto px-4">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Alamat Pengiriman</h1>

            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg">
              <Plus size={16} />
              Tambah Alamat
            </button>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary" />
              <div>
                <p className="font-semibold">Rumah</p>
                <p className="text-muted-foreground text-sm">
                  Jl. Contoh No 10, Bandung
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
