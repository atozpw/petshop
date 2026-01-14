import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PoolPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Pet Pool & Hydrotherapy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Kolam renang khusus untuk hewan peliharaan dengan pengawasan profesional
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: "💧", title: "Air Bersih", desc: "Air filter dan desinfeksi setiap hari" },
                { icon: "🏊", title: "Kolam Khusus", desc: "Kolam dengan kedalaman yang aman untuk semua ukuran" },
                { icon: "👥", title: "Staff Terlatih", desc: "Lifeguard dan pelatih renang bersertifikat" },
                { icon: "🌡️", title: "Suhu Ideal", desc: "Suhu air terjaga untuk kenyamanan hewan" },
                { icon: "🏥", title: "Therapeutic", desc: "Program hydrotherapy untuk kesehatan hewan" },
                { icon: "🛡️", title: "Keamanan", desc: "Peralatan keamanan dan perlengkapan lengkap" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Paket Renang</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="bg-white rounded-lg border border-border p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Satu Kali Renang (1 Jam)</h3>
                  <p className="text-sm text-muted-foreground">1 kali sesi renang dengan pengawasan</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">Rp 100K</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-primary p-6 ring-2 ring-primary/20 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Paket 5 Kali</h3>
                  <p className="text-sm text-muted-foreground">5 sesi renang (hemat Rp 50K)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">Rp 450K</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-border p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hydrotherapy (30 Min)</h3>
                  <p className="text-sm text-muted-foreground">Terapi air untuk kesehatan & rehabilitasi</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">Rp 200K</p>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-8">
              <a href="/booking?service=4">
                <Button className="w-full bg-primary hover:bg-primary/90">Pesan Sekarang</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Tips Renang Aman untuk Hewan Peliharaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Pastikan hewan Anda dalam kondisi sehat sebelum renang",
                "Mulai dengan durasi pendek jika pertama kali",
                "Gunakan life jacket untuk hewan yang belum terampil berenang",
                "Hindiri renang 2 jam setelah makan",
                "Selalu pantau kondisi hewan selama renang",
                "Keringkan hewan dengan baik setelah renang",
              ].map((tip, idx) => (
                <div key={idx} className="bg-blue-50 border border-primary/20 rounded-lg p-4">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">{tip}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ajak Hewan Peliharaan Berenang</h2>
            <p className="text-lg opacity-90 mb-6">Nikmati fasilitas kolam renang terbaik di Jakarta</p>
            <a href="/booking?service=4">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                Booking Pool Sekarang
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
