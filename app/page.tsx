import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProductSimpleCard } from "@/components/products-card"
import { ServiceCard } from "@/components/service-card"
import { SERVICES } from "@/lib/booking-data"
import { Star, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Makanan Anjing Premium Beef 10kg",
    price: 485000,
    sold: 1200,
    rating: 4.9,
    image: "🥩",
  },
  {
    id: 2,
    name: "Makanan Kucing Tuna Adult 5kg",
    price: 275000,
    sold: 3400,
    rating: 4.8,
    image: "🐟",
  },
  {
    id: 3,
    name: "Pasir Kucing Bentonite Wangi 10L",
    price: 65000,
    sold: 7800,
    rating: 4.7,
    image: "🪨",
  },
  {
    id: 4,
    name: "Shampoo Anjing Anti Kutu 250ml",
    price: 45000,
    sold: 2100,
    rating: 4.6,
    image: "🧴",
  },
  {
    id: 5,
    name: "Vitamin Kucing Bulu & Nafsu Makan",
    price: 38000,
    sold: 5600,
    rating: 4.8,
    image: "💊",
  },
  {
    id: 6,
    name: "Mainan Kucing Bola Lonceng",
    price: 18000,
    sold: 9200,
    rating: 4.7,
    image: "🎾",
  },
  {
    id: 7,
    name: "Tali Anjing + Harness Ukuran M",
    price: 85000,
    sold: 1900,
    rating: 4.6,
    image: "🦮",
  },
  {
    id: 8,
    name: "Tempat Makan Minum Pet Stainless",
    price: 55000,
    sold: 4300,
    rating: 4.8,
    image: "🥣",
  },
  {
    id: 9,
    name: "Kandang Kucing Lipat Portable",
    price: 325000,
    sold: 980,
    rating: 4.7,
    image: "🏠",
  },
  {
    id: 10,
    name: "Pet Bed Empuk Anti Slip",
    price: 195000,
    sold: 1600,
    rating: 4.8,
    image: "🛏️",
  },
  {
    id: 11,
    name: "Sisir Bulu Kucing Stainless",
    price: 25000,
    sold: 6700,
    rating: 4.7,
    image: "🪮",
  },
  {
    id: 12,
    name: "Snack Anjing Dental Care",
    price: 42000,
    sold: 5100,
    rating: 4.9,
    image: "🦴",
  },
  {
    id: 13,
    name: "Popok Anjing Sekali Pakai (10 pcs)",
    price: 60000,
    sold: 2300,
    rating: 4.6,
    image: "🧻",
  },
  {
    id: 14,
    name: "Air Minum Otomatis Pet Fountain",
    price: 285000,
    sold: 1400,
    rating: 4.8,
    image: "💧",
  },
  {
    id: 15,
    name: "Tas Pet Carrier Travel",
    price: 315000,
    sold: 1100,
    rating: 4.7,
    image: "🎒",
  },
  {
    id: 16,
    name: "Kalung Kucing Bell Adjustable",
    price: 20000,
    sold: 8900,
    rating: 4.6,
    image: "🔔",
  },
  {
    id: 17,
    name: "Obat Tetes Kutu Anjing & Kucing",
    price: 48000,
    sold: 3600,
    rating: 4.8,
    image: "🧪",
  },
  {
    id: 18,
    name: "Mainan Gigitan Anjing Rubber",
    price: 35000,
    sold: 4200,
    rating: 4.7,
    image: "🪀",
  },
  {
    id: 19,
    name: "Litter Box Kucing Jumbo",
    price: 155000,
    sold: 1750,
    rating: 4.6,
    image: "🚽",
  },
  {
    id: 20,
    name: "Spray Penghilang Bau Kandang",
    price: 52000,
    sold: 2900,
    rating: 4.8,
    image: "🌿",
  },
]



export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/5 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.map((product) => (
                <ProductSimpleCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="mt-8 flex justify-center ">
                <Link href="/pet-shop">
                    <Button
                    variant="outline"
                    size="lg"
                    className="px-10 bg-white text-primary hover:bg-blue-500 transition-colors"
                    >
                    Klik Untuk Lihat Lainnya
                    </Button>
                </Link>
            </div>
          </div>
        </section>
        
        {/* Clinic 24 Jam Section */}
        {/* <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">KLINIK HEWAN 24 JAM</h2>
                <p className="text-lg opacity-90">Darurat • Konsultasi • Vaksinasi</p>
                <p className="text-base opacity-80">
                  Siap melayani hewan kesayangan Anda kapan saja dengan dokter hewan berpengalaman dan peralatan modern.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a href="https://wa.me/6281188803117" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                      <span>💬</span> Hubungi Sekarang
                    </button>
                  </a>
                  <a href="https://wa.me/6281237661234" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white flex items-center gap-2">
                      <span>💬</span> Chat WhatsApp
                    </button>
                  </a>
                </div>
              </div>
              <div className="h-64 md:h-80 bg-white/10 rounded-lg flex items-center justify-center">
                <img
                  src="/veterinary-clinic-doctor-with-dog-and-cat-professi.jpg"
                  alt="Klinik Hewan"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Featured Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Layanan Unggulan</h2>
              <p className="text-lg text-muted-foreground">Pilih layanan terbaik untuk hewan peliharaan Anda</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/services">
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Lihat Semua Layanan
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Testimoni Pelanggan</h2>
              <p className="text-lg text-muted-foreground">Kepuasan pelanggan adalah prioritas kami</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Budi Santoso",
                  text: "Layanan grooming sangat memuaskan! Hewan peliharaan saya terlihat lebih segar dan sehat. Tim profesional dan ramah.",
                  rating: 5,
                  avatar: "👨",
                },
                {
                  name: "Siti Nurhaliza",
                  text: "Beberapa kali menggunakan pet hotel dan konsultasi vet. Sangat recommended! Staff-nya peduli dengan hewan peliharaan.",
                  rating: 5,
                  avatar: "👩",
                },
                {
                  name: "Ahmad Hidayat",
                  text: "Pelayanan 24 jam sangat membantu saat hewan peliharaan saya sakit di malam hari. Dokter hewan kompeten dan cepat.",
                  rating: 5,
                  avatar: "👨",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                  <div className="flex gap-1 mb-3">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">Pelanggan Setia</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hubungi Kami</h3>
                <p className="text-muted-foreground">0812-3766-1234 | 0811-8880-3117</p>
                <p className="text-sm text-muted-foreground">Senin - Minggu, 08:00 - 21:00</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lokasi</h3>
                <p className="text-muted-foreground">PT Jeje Jaya Abadi </p>
                <p className="text-sm text-muted-foreground"> JL Tukad Batanghari No 77, Kota Denpasar - 80225 </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl">⏰</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                <p className="text-muted-foreground">Buka 24 Jam</p>
                <p className="text-sm text-muted-foreground">Setiap Hari Tanpa Libur</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
