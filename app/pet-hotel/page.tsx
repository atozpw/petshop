import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PetHotelPage() {
  const rooms = [
    { name: "Standard Room", price: 200000, features: ["Kandang nyaman", "AC", "Makanan 3x sehari"], image: "🏠" },
    {
      name: "Deluxe Room",
      price: 300000,
      features: ["Kamar luas", "AC", "Makanan premium", "Pemantauan CCTV"],
      image: "🏰",
    },
    {
      name: "Suite Room",
      price: 450000,
      features: ["Kamar mewah", "AC", "Makanan premium", "CCTV", "Playtime harian"],
      image: "👑",
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Pet Hotel Premium</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Penginapan nyaman dan aman untuk hewan peliharaan Anda seperti di rumah sendiri
            </p>
          </div>
        </section>

        {/* Rooms */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rooms.map((room, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl">
                    {room.image}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-foreground mb-2">{room.name}</h3>
                    <p className="text-3xl font-bold text-primary mb-4">Rp {room.price.toLocaleString()}/malam</p>
                    <ul className="space-y-2 mb-6">
                      {room.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-accent mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/booking?service=2" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90">Pesan Sekarang</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Fasilitas Pet Hotel</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "AC 24 Jam",
                "Makanan Premium",
                "CCTV Monitoring",
                "Area Bermain",
                "Cleaning Harian",
                "Grooming",
                "Veterinary Care",
                "WiFi Guest",
              ].map((amenity, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-border text-center">
                  <p className="font-medium text-foreground">{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pesan Kamar Sekarang</h2>
            <p className="text-lg opacity-90 mb-6">Pastikan hewan peliharaan Anda nyaman saat Anda bepergian</p>
            <a href="/booking?service=2">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                Lihat Ketersediaan
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
