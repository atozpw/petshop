// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { MessageCircle } from "lucide-react"
// import Image from "next/image"

// export function HeroSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 overflow-hidden">

//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
//         <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent"></div>
//         <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-primary/50"></div>
//       </div>
//       {/* Decorative blue circles */}
//       <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-blue-300 opacity-40 blur-2xl"></div>
//       <div className="absolute top-32 left-1/4 w-16 h-16 rounded-full bg-blue-400 opacity-30"></div>
//       <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-blue-300 opacity-20 blur-xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-6">
//             {/* Label */}
//             <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">JJ Pet House</p>

//             {/* Main Headline */}
//             <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
//               A pet store with everything you need
//             </h1>

//             {/* Description */}
//             <p className="text-base text-slate-600 max-w-md leading-relaxed">
//               Selalu siap melayani hewan kesayangan Anda dengan produk berkualitas tinggi dan layanan profesional
//               terbaik.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 pt-4">
//               <Link href="/booking">
//                 <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
//                   Booking Sekarang
//                 </Button>
//               </Link>
//               <a href="https://wa.me/6281237661234" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
//                 >
//                   <MessageCircle size={18} className="mr-2" />
//                   Chat WhatsApp
//                 </Button>
//               </a>
//             </div>
//           </div>

//           <div className="relative flex items-center justify-center">
//             {/* Large blue rounded background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl md:rounded-full blur-sm opacity-10"></div>

//             {/* Pet images container */}
//             <div className="relative z-10 w-full h-80 md:h-96 flex items-center justify-center">
//               <Image src="/happy-animal.png" alt="cat and dog" width={1000} height={1000} className="object-contain" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client';

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    title: "Free Rp 30K",
    subtitle: "eGift card",
    description: "With your Rp 500K order.",
    image: "https://image.chewy.com/catalog/general/images/moe/06940960-00da-7d16-8000-4a745e6e6aeb._SY296_.jpeg",
  },
  {
    id: 2,
    title: "Free Rp 50K",
    subtitle: "eGift card",
    description: "With your Rp 750K order.",
    image: "https://image.chewy.com/catalog/general/images/moe/06960150-5ca8-7a6b-8000-dce4ead0d1d5._SY296_.jpeg",
  },
  {
    id: 3,
    title: "Free Rp 20K",
    subtitle: "eGift card",
    description: "With your Rp 300K order.",
    image: "https://image.chewy.com/catalog/general/images/moe/06945b89-bc92-7519-8000-cd12c47e1696._SY296_.jpeg",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="bg-background py-8 md:py-12 overflow-hidden space-y-6">
      {/* Main Hero Banner Carousel */}
      <div className="container mx-auto px-4">
        <div className="relative  bg-gradient-to-r from-amber-500 via-gray-200 to-gray-300 rounded-3xl overflow-hidden h-60 md:h-80 flex items-center group">
          {/* Background pet image (right side) - with fade transition */}
          <div className="absolute inset-0 right-0  opacity-100">
            <img
              src={slide.image || "/placeholder.svg"}
              alt="Pet offer banner"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Content overlay (left side) */}
          <div className="relative z-10 w-full md:w-1/3 px-8 md:px-12">
            <div className="space-y-4">
              {/* Main offer */}
              <div className="transition-all duration-500">
                {/* <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  {slide.subtitle}
                </p> */}
              </div>

              {/* Requirement text */}
              

              {/* CTA Button */}
              

              {/* Fine print */}
              {/* <p className="text-xs text-gray-600">
                Exclusions apply.
              </p> */}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? "bg-white w-6" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      
    </section>
  )
}
