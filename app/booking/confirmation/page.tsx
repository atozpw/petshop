"use client"

import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("id")

  // In a real app, fetch booking details from backend
  const mockBooking = {
    id: bookingId,
    service: "Grooming",
    petName: "Buddy",
    date: new Date().toLocaleDateString("id-ID"),
    time: "10:00",
    status: "Pending Confirmation",
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border border-border p-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-accent" />
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">Booking Berhasil!</h1>
                <p className="text-muted-foreground">Terima kasih telah memesan layanan kami</p>
              </div>

              {/* Booking Details */}
              <div className="bg-muted/30 rounded-lg p-6 space-y-4 text-left">
                <h2 className="font-semibold text-lg text-foreground">Detail Booking</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">ID Booking</p>
                    <p className="font-semibold text-foreground">{mockBooking.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Status</p>
                    <p className="font-semibold text-accent">{mockBooking.status}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Layanan</p>
                    <p className="font-semibold text-foreground">{mockBooking.service}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Nama Hewan</p>
                    <p className="font-semibold text-foreground">{mockBooking.petName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Tanggal</p>
                    <p className="font-semibold text-foreground">{mockBooking.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Waktu</p>
                    <p className="font-semibold text-foreground">{mockBooking.time}</p>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Langkah Selanjutnya</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 text-left">
                    <div className="text-2xl">1️⃣</div>
                    <div>
                      <p className="font-semibold text-foreground">Tunggu Konfirmasi</p>
                      <p className="text-sm text-muted-foreground">
                        Tim kami akan mengkonfirmasi booking Anda dalam 1 jam
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-left">
                    <div className="text-2xl">2️⃣</div>
                    <div>
                      <p className="font-semibold text-foreground">Terima Konfirmasi</p>
                      <p className="text-sm text-muted-foreground">
                        Anda akan menerima notifikasi via email dan WhatsApp
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-left">
                    <div className="text-2xl">3️⃣</div>
                    <div>
                      <p className="font-semibold text-foreground">Pembayaran</p>
                      <p className="text-sm text-muted-foreground">
                        Pembayaran dapat dilakukan saat bertemu atau transfer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 border border-primary/20 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-foreground">Hubungi Kami</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <a href="tel:+6281188803117" className="text-primary hover:underline">
                      0811-8880-3117
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <a href="mailto:info@jjpetshop.com" className="text-primary hover:underline">
                      info@jjpetshop.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-foreground">Jakarta Selatan, DKI Jakarta</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Link href="/" className="flex-1">
                  <button className="w-full px-6 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                    Kembali ke Beranda
                  </button>
                </Link>
                <Link href="/dashboard" className="flex-1">
                  <button className="w-full px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Lihat Dashboard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
