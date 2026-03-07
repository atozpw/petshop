  'use client';

  import Link from "next/link"
  import { Zap, Heart, ChevronLeft, ChevronRight } from "lucide-react"
  import { useState, useEffect } from "react"
  import {
    ShoppingBag,
    Scissors,
    Home,
    Gamepad2,
    Bone,
    Waves,
    Stethoscope,
    Truck
  } from "lucide-react"
import { link } from "fs";

  const categories = [
    { name: "Pet Shop", icon: ShoppingBag, href: "/pet-shop" },
    { name: "Grooming", icon: Scissors, href: "/grooming" },
    { name: "Pet Hotel", icon: Home, href: "/pet-hotel" },
    { name: "Playground", icon: Gamepad2, href: "/playground" },
    { name: "Pakan Hewan", icon: Bone, href: "/nutrition" },
    { name: "Pool", icon: Waves, href: "/pool" },
    { name: "Dokter Hewan", icon: Stethoscope, href: "/clinic" },
    { name: "Delivery", icon: Truck, href: "/delivery" },
  ]

  const heroSlides = [
   
    {
      
      image: "/slides/slide2-new.png",
      title: "Promo Spesial!",
      subtitle: "Dapatkan diskon hingga 50%",
      description: "Beli 2 dapat 1, berlaku untuk semua produk",
      btnlabel: "Belanja Sekarang",
      link: "/pet-shop"
    },
    
    {
      image: "/slides/slide4-new.png",
      title: "Layanan Grooming",
      subtitle: "Buat hewan peliharaanmu tampil menawan",
      description: "Diskon 20% untuk layanan grooming selama bulan ini",
      btnlabel: "Pesan Sekarang",
      link: "/grooming"
    }
    
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
      <section className="bg-background pb-4 md:pb-2 py-8 md:py-10 overflow-hidden space-y-6  " >
        {/* Main Hero Banner Carousel */}
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-amber-400 via-amber-200 to-gray-200
                rounded-3xl overflow-hidden h-60 md:h-150 flex items-center group">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt="Promo banner"
                className="w-full h-full object-cover transition-all duration-700
                          scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex justify-end w-full px-8 md:px-12">
              <div className="max-w-md text-white space-y-2 text-right">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  {slide.title}
                </h2>

                <p className="text-lg font-semibold">
                  {slide.subtitle}
                </p>

                <p className="text-sm opacity-90">
                  {slide.description}
                </p>

                <Link href={slide.link}>
                  <button
                    className="mt-4 inline-flex items-center gap-2 bg-white text-primary
                    px-5 py-2 rounded-full font-semibold
                    hover:bg-primary hover:text-white transition-colors"
                  >
                    <Zap size={16} />
                    {slide.btnlabel}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Service Categories */}
         
        <div className="container mx-auto px-4 mt-4 md:mt-6">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8
                          gap-2 sm:gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.name} href={category.href}>
                  <div
                    className="group flex flex-col items-center justify-center
                              py-1 cursor-pointer transition"
                  >
                    {/* ICON */}
                    <div
                      className="w-15 h-12 flex items-center justify-center
                                rounded-xl
                                text-default-400 bg-default-100
                                group-hover:bg-primary/10
                                transition-colors duration-300"
                    >
                      <Icon size={25} />
                    </div>

                    {/* LABEL */}
                    <p
                      className="mt-1.5 text-[10px] sm:text-sm font-medium text-center
                                text-foreground/80
                                group-hover:text-primary
                                line-clamp-2 min-h-[2.25rem]
                                transition-colors"
                    >
                      {category.name}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </section>
    )
  }
