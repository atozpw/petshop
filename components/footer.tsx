import Link from "next/link"
import { Phone, MapPin, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-foreground text-sm font-bold">
                JJ
              </div>
              PET HOUSE
            </h3>
            <p className="text-sm opacity-90">
              One Stop Pet Care Solution untuk semua kebutuhan hewan peliharaan Anda.
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
                  Grooming
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Pet Hotel
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Konsultasi Vet
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
                <span>PT Jeje Jaya Abadi JL Tukad Batanghari No 77, Kota Denpasar - 80225 </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@jjpethouse.id</span>
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
