import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 overflow-hidden">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-primary/50"></div>
      </div>
      {/* Decorative blue circles */}
      <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-blue-300 opacity-40 blur-2xl"></div>
      <div className="absolute top-32 left-1/4 w-16 h-16 rounded-full bg-blue-400 opacity-30"></div>
      <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-blue-300 opacity-20 blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Label */}
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">JJ Pet House</p>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              A pet store with everything you need
            </h1>

            {/* Description */}
            <p className="text-base text-slate-600 max-w-md leading-relaxed">
              Selalu siap melayani hewan kesayangan Anda dengan produk berkualitas tinggi dan layanan profesional
              terbaik.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Booking Sekarang
                </Button>
              </Link>
              <a href="https://wa.me/6281237661234" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Chat WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            {/* Large blue rounded background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl md:rounded-full blur-sm opacity-10"></div>

            {/* Pet images container */}
            <div className="relative z-10 w-full h-80 md:h-96 flex items-center justify-center">
              <Image src="/happy-animal.png" alt="cat and dog" width={1000} height={1000} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
