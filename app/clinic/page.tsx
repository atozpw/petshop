import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, Users, Award } from "lucide-react"

export default function ClinicPage() {
  const doctors = [
    { name: "Dr. Sutrisno, drh", specialty: "Bedah & Emergency", experience: "15 tahun", image: "👨‍⚕️" },
    { name: "Dr. Siti Rahayu, drh", specialty: "Penyakit Dalam", experience: "12 tahun", image: "👩‍⚕️" },
    { name: "Dr. Bambang, drh", specialty: "Gigi & Oral", experience: "10 tahun", image: "👨‍⚕️" },
    { name: "Dr. Ira Kusuma, drh", specialty: "Reproduksi", experience: "8 tahun", image: "👩‍⚕️" },
  ]

  const services = [
    { icon: "🩺", title: "Konsultasi", desc: "Konsultasi kesehatan hewan peliharaan" },
    { icon: "💉", title: "Vaksinasi", desc: "Program vaksinasi lengkap" },
    { icon: "🔬", title: "Lab Test", desc: "Tes laboratorium modern" },
    { icon: "⚕️", title: "Operasi", desc: "Tindakan operasi bedah" },
    { icon: "🦷", title: "Dental Care", desc: "Perawatan gigi hewan peliharaan" },
    { icon: "🚨", title: "Emergency", desc: "Layanan darurat 24 jam" },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Klinik Hewan 24 Jam</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Pelayanan kesehatan hewan peliharaan terbaik dengan dokter hewan berpengalaman
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Layanan Klinik</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Tim Dokter Hewan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.map((doctor, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-border p-6 text-center">
                  <div className="text-5xl mb-3 flex justify-center">{doctor.image}</div>
                  <h3 className="font-semibold text-foreground mb-2">{doctor.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-xs text-muted-foreground">{doctor.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Buka 24 Jam</h3>
                <p className="text-muted-foreground">Layanan darurat siap 24 jam setiap hari</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Tim Profesional</h3>
                <p className="text-muted-foreground">Dokter hewan bersertifikat dan berpengalaman</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Fasilitas Modern</h3>
                <p className="text-muted-foreground">Dilengkapi peralatan kesehatan terkini</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Butuh Konsultasi Veteriner?</h2>
            <p className="text-lg opacity-90 mb-6">Hubungi kami sekarang untuk jadwal konsultasi Anda</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/6281237661234" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100">
                  Chat WhatsApp
                </button>
              </a>
              <a href="tel:+6281188803117">
                <button className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 border border-white">
                  Hubungi Telepon
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
