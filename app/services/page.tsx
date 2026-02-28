import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { SERVICES } from "@/lib/booking-data"

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Semua Layanan Kami</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Kami menyediakan berbagai layanan lengkap untuk kebutuhan hewan peliharaan Anda
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap untuk Memesan?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Pilih layanan yang Anda butuhkan dan pesan sekarang untuk hewan peliharaan kesayangan Anda
            </p>
            <a href="/booking">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Mulai Booking
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
