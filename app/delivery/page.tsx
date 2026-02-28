import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Truck, Clock, MapPin } from "lucide-react"

export default function DeliveryPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Layanan Delivery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Pengiriman cepat dan aman untuk semua kebutuhan hewan peliharaan Anda
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Truck className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Pengiriman Cepat</h3>
                <p className="text-muted-foreground">Pengiriman dalam 1-2 jam untuk area Jakarta</p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Tracking Real-time</h3>
                <p className="text-muted-foreground">Pantau posisi pengiriman Anda secara real-time</p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <MapPin className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Jangkauan Luas</h3>
                <p className="text-muted-foreground">Melayani seluruh area Jakarta dan sekitarnya</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Tarif Pengiriman</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">Area 1 (Pusat)</h3>
                <p className="text-3xl font-bold text-primary mb-4">Rp 25K</p>
                <p className="text-sm text-muted-foreground mb-6">Senayan, SCBD, Blok M</p>
                <Button className="w-full bg-primary hover:bg-primary/90">Pesan</Button>
              </div>

              <div className="bg-white rounded-lg border border-primary p-6 ring-2 ring-primary/20">
                <div className="text-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">POPULER</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-4 text-center">Area 2 (Jabodetabek)</h3>
                <p className="text-3xl font-bold text-primary mb-4 text-center">Rp 35K</p>
                <p className="text-sm text-muted-foreground mb-6 text-center">Depok, Tangerang, Bekasi</p>
                <Button className="w-full bg-primary hover:bg-primary/90">Pesan</Button>
              </div>

              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">Area 3 (Luar)</h3>
                <p className="text-3xl font-bold text-primary mb-4">Hubungi</p>
                <p className="text-sm text-muted-foreground mb-6">Area lainnya (Hubungi untuk penawaran)</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Hubungi
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pesan Pengiriman Sekarang</h2>
            <p className="text-lg opacity-90 mb-6">Gratis ongkir untuk pembelian di atas Rp 500K</p>
            <a href="/booking?service=8">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                Pesan Delivery
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
