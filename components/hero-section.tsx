import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-primary/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              One Stop <br className="hidden sm:block" />
              Pet Care Solution
            </h1>

            <p className="text-lg text-foreground/80">Pet Shop • Grooming • Hotel • Klinik 24 Jam</p>

            <p className="text-base text-foreground/70 max-w-md">
              Siap melayani hewan kesayangan Anda kapan saja dengan profesional berpengalaman dan fasilitas terbaik.
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

          {/* Right Image Area */}
          <div className="relative h-80 md:h-96 flex items-center justify-center">
            <img
              src="/happy-dog-and-cat-with-grooming-items-petshop.jpg"
              alt="Pet Care Services"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
