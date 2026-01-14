"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Image src="/logo.png" alt="JJ Pet House Logo" width={40} height={40} />
          <span> JJ PET HOUSE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/pet-shop" className="text-sm font-medium hover:text-primary transition-colors">
            Pet Shop
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/clinic" className="text-sm font-medium hover:text-primary transition-colors">
            Clinic 24 Jam
          </Link>
          <Link href="/booking" className="text-sm font-medium hover:text-primary transition-colors">
            Booking
          </Link>
          <Link href="/delivery" className="text-sm font-medium hover:text-primary transition-colors">
            Delivery
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            Tentang Kami
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-primary">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90">Register</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/pet-shop" className="text-sm font-medium hover:text-primary">
              Pet Shop
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/clinic" className="text-sm font-medium hover:text-primary">
              Clinic 24 Jam
            </Link>
            <Link href="/booking" className="text-sm font-medium hover:text-primary">
              Booking
            </Link>
            <Link href="/delivery" className="text-sm font-medium hover:text-primary">
              Delivery
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              Tentang Kami
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Link href="/login" className="w-full">
                <Button variant="ghost" className="w-full text-primary">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
