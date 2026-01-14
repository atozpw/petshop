import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function PetShopPage() {
  const products = [
    { id: 1, name: "Dog Food Premium", price: 150000, category: "Makanan", image: "🥫" },
    { id: 2, name: "Cat Litter", price: 50000, category: "Accessory", image: "🪨" },
    { id: 3, name: "Grooming Kit", price: 200000, category: "Grooming", image: "✂️" },
    { id: 4, name: "Pet Bed Deluxe", price: 350000, category: "Furniture", image: "🛏️" },
    { id: 5, name: "Toy Set Bundle", price: 100000, category: "Mainan", image: "🎾" },
    { id: 6, name: "Water Fountain", price: 250000, category: "Equipment", image: "💧" },
    { id: 7, name: "Leash & Collar", price: 75000, category: "Accessory", image: "🔗" },
    { id: 8, name: "Pet Carrier", price: 300000, category: "Travel", image: "📦" },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Pet Shop JJ</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Lengkapi semua kebutuhan hewan peliharaan Anda dengan produk berkualitas premium
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-muted flex items-center justify-center text-5xl">{product.image}</div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-xs text-accent font-semibold uppercase">{product.category}</p>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-primary">Rp {product.price.toLocaleString()}</p>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ShoppingCart size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-8">Kategori Populer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Makanan", "Mainan", "Grooming", "Furniture"].map((category) => (
                <div
                  key={category}
                  className="bg-white p-6 rounded-lg border border-border text-center hover:border-primary cursor-pointer transition-colors"
                >
                  <p className="font-semibold text-foreground">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Tidak Menemukan yang Anda Cari?</h2>
            <p className="text-lg opacity-90 mb-6">Hubungi kami untuk rekomendasi produk custom</p>
            <a href="https://wa.me/6281237661234" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Hubungi via WhatsApp
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
