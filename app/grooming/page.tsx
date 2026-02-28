import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function GroomingPage() {
  const packages = [
    {
      name: "Basic Grooming",
      price: 150000,
      services: ["Mandi", "Potong Kuku", "Membersihkan Telinga"],
      duration: "1.5 jam",
      image: "🛁",
    },
    {
      name: "Standard Grooming",
      price: 200000,
      services: ["Mandi", "Potong Bulu", "Potong Kuku", "Styling Rapi"],
      duration: "2 jam",
      image: "✂️",
    },
    {
      name: "Premium Grooming",
      price: 300000,
      services: ["Mandi Premium", "Potong Bulu Custom", "Styling Profesional", "Perawatan Kulit", "Produk Premium"],
      duration: "2.5 jam",
      image: "👑",
    },
    {
      name: "Full Spa Package",
      price: 400000,
      services: [
        "Mandi Aromaterapi",
        "Grooming Lengkap",
        "Styling Eksklusif",
        "Perawatan Kulit & Bulu",
        "Konsultasi Styling",
      ],
      duration: "3 jam",
      image: "✨",
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Layanan Grooming</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Buat hewan peliharaan Anda tampil cantik dan sehat dengan layanan grooming profesional kami
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-5xl">
                    {pkg.image}
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">Rp {pkg.price.toLocaleString()}</p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4 flex-grow">
                      {pkg.services.map((service, sidx) => (
                        <li key={sidx} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mb-4">⏱️ {pkg.duration}</p>
                    <a href="/booking?service=1" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90">Pesan Sekarang</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Mengapa Pilih Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "👥", title: "Groomer Profesional", desc: "Tim groomer tersertifikasi dan berpengalaman" },
                { icon: "🏥", title: "Hygiene Terjamin", desc: "Standar kebersihan dan keamanan tinggi" },
                { icon: "💆", title: "Stress-Free", desc: "Lingkungan nyaman untuk hewan peliharaan" },
                { icon: "💄", title: "Styling Custom", desc: "Desain grooming sesuai keinginan Anda" },
                { icon: "🧴", title: "Produk Premium", desc: "Menggunakan produk grooming berkualitas tinggi" },
                { icon: "⏱️", title: "Tepat Waktu", desc: "Layanan cepat tanpa mengurangi kualitas" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Siap untuk Grooming?</h2>
            <p className="text-lg opacity-90 mb-6">Pesan layanan grooming sekarang untuk hewan peliharaan Anda</p>
            <a href="/booking?service=1">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                Booking Grooming
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
