import Link from "next/link"
import { Phone, MapPin, Mail, Clock, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 font-bold flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="JJ Pet House Logo"
                width={50}
                height={50}
              />
              <span className="hidden sm:block text-white">JJ PET HOUSE</span>
            </Link>
            <p className="text-sm opacity-90 pt-4">
              Care Like a Mom Love Like Family
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pet-shop" className="hover:opacity-75">
                  Pet Shop
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-75">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:opacity-75">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/clinic" className="hover:opacity-75">
                  Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-75">
                  Pet Grooming
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Pet Boarding
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Pet Playground
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>0812-3766-1234 | 0811-8880-3117 </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>JJ Pet House | Jl. Tukad Batanghari No 77, Kota Denpasar - 80225 </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@jjpethouse.id</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="mt-0.5 flex-shrink-0" />
                <a href="https://www.instagram.com/jjpethouse/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">@jjpethouse</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <span>24 Jam / Buka Setiap Hari</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2026 JJ Pet House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
