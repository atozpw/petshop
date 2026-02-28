import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, Users, Award, CheckCircle2, PhoneCall, MessageCircle } from "lucide-react"
import Link from "next/link" 

export default function ClinicPage() {
  const doctors = [
    { name: "Dr. Sutrisno, drh", specialty: "Bedah & Emergency", experience: "15 tahun", image: "/icondokter.jpg" },
    { name: "Dr. Siti Rahayu, drh", specialty: "Penyakit Dalam", experience: "12 tahun", image: "/icondokter.jpg" },
    { name: "Dr. Bambang, drh", specialty: "Gigi & Oral", experience: "10 tahun", image: "/icondokter.jpg" },
    { name: "Dr. Ira Kusuma, drh", specialty: "Reproduksi", experience: "8 tahun", image: "/icondokter.jpg" },
  ]

  const services = [
    { icon: "🩺", title: "Konsultasi Umum", desc: "Pemeriksaan kesehatan komprehensif dengan dokter berpengalaman" },
    { icon: "💉", title: "Vaksinasi Lengkap", desc: "Program vaksinasi rabies, distemper, dan vaksin lengkap lainnya" },
    { icon: "🔬", title: "Lab Test Canggih", desc: "Tes laboratorium dengan teknologi analyzer modern dan hasil akurat" },
    { icon: "⚕️", title: "Operasi Bedah", desc: "Tindakan bedah dengan peralatan steril dan profesional bersertifikat" },
    { icon: "🦷", title: "Dental Care", desc: "Pembersihan gigi, scaling, dan perawatan oral modern" },
    { icon: "🚨", title: "Layanan Darurat", desc: "Penanganan emergency 24 jam untuk kasus gawat darurat" },
  ]

  const facilities = [
    { title: "Ruang Konsultasi", image: "/image/Pict 7.jpeg", desc: "Ruang konsultasi yang nyaman dan steril" },
    { title: "Peralatan Medis", image: "/image/Pict 8.jpeg", desc: "Analyzer dan peralatan medis modern" },
    { title: "Ruang Pemulihan", image: "/image/Pict 10.jpeg", desc: "Fasilitas pemulihan pasien post operasi" },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Klinik Hewan 24 Jam JJ Pet House</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Pelayanan kesehatan hewan peliharaan terbaik dengan dokter hewan berpengalaman dan fasilitas medis modern berstandar internasional
            </p>
          </div>
        </section>

        {/* Facility Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Fasilitas Klinik Modern</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {facilities.map((facility, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground mb-2">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Layanan Klinik Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors with Real Images */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Tim Dokter Hewan Profesional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.map((doctor, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow bg-white">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-foreground mb-2">{doctor.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-2">{doctor.specialty}</p>
                    <p className="text-xs text-muted-foreground">{doctor.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Mengapa Memilih Klinik Kami?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Clock className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Buka 24 Jam</h3>
                <p className="text-muted-foreground text-sm">Layanan darurat veteriner siap melayani Anda kapan saja, sepanjang tahun tanpa libur</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Tim Profesional</h3>
                <p className="text-muted-foreground text-sm">Dokter hewan bersertifikat internasional dengan pengalaman lebih dari 10 tahun praktik</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Award className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Fasilitas Modern</h3>
                <p className="text-muted-foreground text-sm">Dilengkapi analyzer dan peralatan kesehatan terkini dengan standar internasional</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Info */}
        <section className="py-16 bg-white border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Informasi Penting</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Jam Operasional</h3>
                <p className="text-muted-foreground">Buka 24 Jam</p>
                <p className="text-sm text-muted-foreground">Setiap Hari Tanpa Libur</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <PhoneCall className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Telepon</h3>
                <p className="text-muted-foreground">+62 812-3766-1234</p>
                <p className="text-sm text-muted-foreground">Untuk keperluan mendesak</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <MessageCircle className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">+62 812-3766-1234</p>
                <p className="text-sm text-muted-foreground">Chat cepat untuk konsultasi</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh Konsultasi Veteriner Sekarang?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk jadwal konsultasi atau untuk kasus darurat. Tim dokter hewan kami siap membantu kapan saja
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/6281237661234" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Chat WhatsApp
                </button>
              </a>
              <a href="tel:+6281237661234">
                <button className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 border border-white transition-colors flex items-center justify-center gap-2">
                  <PhoneCall size={20} />
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
