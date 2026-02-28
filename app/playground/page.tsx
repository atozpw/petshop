import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PlaygroundPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Pet Playground</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Area bermain aman dan menyenangkan untuk sosialisasi hewan peliharaan Anda
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Area Bermain Luas", desc: "Ruang bermain yang luas dan nyaman untuk berbagai ukuran hewan" },
                { title: "Pengawasan Profesional", desc: "Tim profesional siap mengawasi keamanan hewan Anda" },
                { title: "Mainan Berkualitas", desc: "Berbagai mainan interaktif untuk stimulasi mental hewan" },
                {
                  title: "Sosialisasi",
                  desc: "Kesempatan hewan peliharaan untuk berinteraksi dengan hewan lain",
                },
                { title: "Fasilitas Modern", desc: "Area bermain dengan standar keselamatan internasional" },
                { title: "Hidrant Tersedia", desc: "Air minum segar tersedia sepanjang waktu" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Paket Harga</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">1.5 Jam</h3>
                <p className="text-2xl font-bold text-primary mb-4">Rp 80K</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Area bermain terbuka</li>
                  <li>• Pengawasan staff</li>
                  <li>• Air minum gratis</li>
                </ul>
                <a href="/booking?service=6">
                  <Button className="w-full bg-primary hover:bg-primary/90">Pesan</Button>
                </a>
              </div>

              <div className="bg-white rounded-lg border border-primary p-6 ring-2 ring-primary/20">
                <div className="text-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">POPULER</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-4 text-center">3 Jam</h3>
                <p className="text-2xl font-bold text-primary mb-4 text-center">Rp 150K</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-center">
                  <li>✓ Semua fasilitas 1.5 jam</li>
                  <li>✓ Extra playtime</li>
                  <li>✓ Snack gratis</li>
                </ul>
                <a href="/booking?service=6">
                  <Button className="w-full bg-primary hover:bg-primary/90">Pesan</Button>
                </a>
              </div>

              <div className="bg-white rounded-lg border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">Full Day (8 Jam)</h3>
                <p className="text-2xl font-bold text-primary mb-4">Rp 250K</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Sepanjang hari</li>
                  <li>• Snack & makan siang</li>
                  <li>• Relaksasi & bermain</li>
                </ul>
                <a href="/booking?service=6">
                  <Button className="w-full bg-primary hover:bg-primary/90">Pesan</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Buat Hewan Peliharaan Anda Senang</h2>
            <p className="text-lg opacity-90 mb-6">Pesan playground sekarang untuk pengalaman bermain terbaik</p>
            <a href="/booking?service=6">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                Booking Playground
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
