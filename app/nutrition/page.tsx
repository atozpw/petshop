import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NutritionPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Konsultasi Nutrisi & Diet</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Konsultasi dengan ahli nutrisi untuk pakan terbaik hewan peliharaan Anda
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12">Layanan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-4">Konsultasi Nutrisi Dasar</h3>
                <p className="text-muted-foreground mb-4">
                  Konsultasi tentang jenis makanan yang tepat untuk hewan peliharaan Anda
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>✓ Analisis kebutuhan nutrisi</li>
                  <li>✓ Rekomendasi pakan</li>
                  <li>✓ Tips pemberian makan</li>
                </ul>
                <p className="text-2xl font-bold text-primary">Rp 50K</p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-primary p-8 ring-2 ring-primary/20">
                <h3 className="font-semibold text-xl text-foreground mb-4">Program Diet Khusus</h3>
                <p className="text-muted-foreground mb-4">
                  Program diet disesuaikan untuk kondisi kesehatan spesifik hewan peliharaan
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>✓ Analisis mendalam</li>
                  <li>✓ Meal plan tertulis</li>
                  <li>✓ Follow-up 1 bulan</li>
                </ul>
                <p className="text-2xl font-bold text-primary">Rp 150K</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Rekomendasi Pakan Premium</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Royal Canin", desc: "Makanan premium untuk berbagai usia dan kondisi", type: "Dry Food" },
                { name: "Hill's Science", desc: "Formulasi ilmiah untuk nutrisi optimal", type: "Dry Food" },
                { name: "Boehringer", desc: "Pakan khusus untuk hewan dengan penyakit tertentu", type: "Therapeutic" },
              ].map((brand, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-border p-6">
                  <p className="text-xs text-accent font-semibold mb-2">{brand.type}</p>
                  <h3 className="font-semibold text-foreground mb-2">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground">{brand.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pesan Konsultasi Nutrisi</h2>
            <p className="text-lg opacity-90 mb-6">Pastikan hewan peliharaan Anda mendapat nutrisi terbaik</p>
            <a href="/booking?service=7">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                Booking Konsultasi
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
