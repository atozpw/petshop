import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Users, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Tentang JJ Pet House</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Kami berkomitmen memberikan pelayanan terbaik untuk hewan peliharaan Anda
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-primary">Kisah Kami</h2>
              <p className="text-lg text-foreground/80">
                JJ Pet House dimulai dengan visi sederhana: menjadi one-stop solution untuk semua kebutuhan hewan
                peliharaan di Jakarta. Kami percaya bahwa hewan peliharaan bukan hanya teman, tetapi keluarga yang
                memerlukan perawatan terbaik.
              </p>
              <p className="text-lg text-foreground/80">
                Dengan pengalaman lebih dari 10 tahun dalam industri pet care, kami telah melayani ribuan keluarga di
                Jakarta dengan dedikasi penuh. Setiap hewan peliharaan diperlakukan dengan cinta dan profesionalisme
                tinggi.
              </p>
              <p className="text-lg text-foreground/80">
                Fasilitas kami dilengkapi dengan teknologi modern dan tim yang bersertifikat untuk memastikan setiap
                hewan mendapatkan perawatan optimal.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Cinta pada Hewan</h3>
                <p className="text-muted-foreground">
                  Setiap hewan peliharaan adalah bagian keluarga kami yang dicintai
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Profesionalisme</h3>
                <p className="text-muted-foreground">
                  Standar layanan tertinggi dengan tim yang terlatih dan bersertifikat
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Kepercayaan</h3>
                <p className="text-muted-foreground">
                  Transparansi dan kejujuran dalam setiap transaksi dengan pelanggan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <p className="text-3xl font-bold text-primary mb-2">10+</p>
                <p className="text-muted-foreground">Tahun Pengalaman</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <p className="text-3xl font-bold text-primary mb-2">5000+</p>
                <p className="text-muted-foreground">Hewan Terlayani</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <p className="text-3xl font-bold text-primary mb-2">98%</p>
                <p className="text-muted-foreground">Kepuasan Pelanggan</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                <p className="text-muted-foreground">Layanan Tersedia</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
