"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, User, LogOut, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"
import { DarkModeSwitch } from "@/components/dark-mode-switch"
import { LangSwitch } from "@/components/lang-switch"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const { cart } = useCart()

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pet Shop", href: "/pet-shop" },
    { label: "Services", href: "/services" },
    { label: "Clinic 24 Jam", href: "/clinic" },
    { label: "Booking", href: "/booking" },
    { label: "Delivery", href: "/delivery" },
    { label: "Tentang Kami", href: "/about" },
  ]

  return (
    <header className="sticky top-0 z-40 bg-accent/100 backdrop-blur shadow-sm">
      {/* Top Bar */}
      <div className="bg-accent/90 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            {/* <span>Seller Centre</span>
            <span>Mulai Berjualan</span>
            <span>Download</span> */}
          </div>
          <div className="flex gap-4">
            <DarkModeSwitch />
            <span>Notifikasi</span>
            <span>Bantuan</span>
            <span>Bahasa Indonesia</span>
             {isAuthenticated && user ? (
              <div>
                <span>Halo, {user.name}</span>
              </div>
            
             ) : 
             <>
              <Link href="/login">
                <span>Masuk</span>
              </Link>
              <Link href="/register">
              <span>Daftar</span>
              </Link>
             </>
             }
          </div>
        </div>
      </div>
      {/* HEADER ROW */}
      <nav>
        <div className="container mx-auto px-4 py-2 flex items-center gap-3">

          {/* LOGO */}
          <Link 
            href="/"
            className="flex items-center gap-2 font-bold text-white flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="JJ Pet House Logo"
              width={52}
              height={52}
            />  
            <span className="hidden sm:block">JJPETHOUSE</span>
          </Link>

          {/* MOBILE SEARCH (SEJAJAR LOGO) */}
          <div className="flex-1 lg:hidden ">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari produk..."
                className="
                  w-full
                  rounded-xl
                  bg-white
                  py-2.5
                  pl-4
                  pr-10
                  text-sm
                  outline-none
                  shadow-sm
                "

              />
              <Search
                size={16}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-muted-foreground
                  pointer-events-none
                "
              />
            </div>
          </div>
             
          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex flex-1 mx-8">
            <div className="hidden lg:flex items-center gap-2 text-white text-sm pr-3">
              <Menu size={18} />
              <span className="font-medium">Kategori</span>
            </div>  
            <div className="relative w-full">
              
              <input
                type="text"
                placeholder="Cari produk..."
                className="
                  w-full
                  rounded-xl
                  bg-white
                  py-2.5
                  pl-4
                  pr-10
                  text-sm
                  outline-none
                  shadow-sm
                "
              />
              <Search
                size={16}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-muted-foreground
                  pointer-events-none
                "
              />
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-3 text-white">
            {/* CART */}
            <Link href="/cart" className="relative p-2 rounded-lg transition-colors hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* DESKTOP USER */}
            {isAuthenticated && user ? (
              <div className="hidden md:flex items-center gap-3">
             {isAuthenticated && user ? (
               <UserDropdown user={user} onLogout={logout} />
             ) : (
               <>
                 <Link href="/login">
                   <Button variant="ghost" size="sm">
                     Masuk
                   </Button>
                 </Link>
                 <Link href="/register">
                   <Button size="sm" className="bg-primary hover:bg-primary/90">
                     Daftar
                   </Button>
                 </Link>
               </>
             )}
           
          </div>
            ) : (
              <div className="hidden lg:flex gap-2">
                {/* <Link href="/login">
                  <Button variant="ghost" className="text-primary">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-primary">Register</Button>
                </Link> */}
              </div>
            )}

            {/* HAMBURGER */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 "
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex justify-center text-white text-xs gap-8 pb-2 border-b border-white/10">
        <Link href="/"  className="hover:text-white/80 transition-colors">Home</Link>
        <Link href="/pet-shop" className="hover:text-white/80 transition-colors">Pet Shop</Link>
        <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
        <Link href="/clinic" className="hover:text-white/80 transition-colors">Clinic</Link>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          mobileOpen
            ? "max-h-[80vh] border-t bg-white shadow-lg"
            : "max-h-0"
        )}
      >
        <div className="px-5 py-4">

          {/* NAV ITEMS */}
          <div className="space-y-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  block px-3 py-2.5 rounded-lg
                  text-sm font-medium
                  text-muted-foreground
                  hover:bg-muted/50 hover:text-primary
                  transition-colors
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* AUTH SECTION */}
          <div className="mt-4 pt-4 border-t border-border">
            {isAuthenticated && user ? (
              <MobileUserSection
                user={user}
                onLogout={logout}
                onClose={() => setMobileOpen(false)}
              />
            ) : (
              <div className="grid gap-2">
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Masuk
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">
                    Daftar
                  </Button>
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>

    </header>
  )
}
  
// Extracted components (optional - bisa dipisah file kalau mau)
function UserDropdown({ user, onLogout }: { user: any; onLogout: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-lg
                  text-white
                  transition-colors
                  hover:bg-white/10"
      >
        <User className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-56
            rounded-xl bg-white text-gray-900
            dark:bg-gray-900 dark:text-gray-100
            shadow-xl
            border border-black/5 dark:border-white/10
            origin-top-right
            animate-in fade-in slide-in-from-top-1
          "
        >
          {/* USER INFO */}
          <div className="px-5 py-4 border-b border-black/5 dark:border-white/10">
            <p className="text-sm font-semibold">
              {user.name}
            </p>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </div>

          {/* MENU */}
          <div className="py-1">
            <Link
              href="/dashboard"
              className="
                block px-5 py-2.5 text-sm
                hover:bg-black/5 dark:hover:bg-white/10
                transition-colors
              "
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>

            <button
              onClick={() => {
                onLogout()
                setOpen(true)
              }}
              className="
                flex w-full items-center gap-2
                px-5 py-2.5 text-sm
                text-red-600 dark:text-red-400
                hover:bg-red-50 dark:hover:bg-red-950/40
                transition-colors
              "
            >
              <LogOut className="h-4 w-4" />
              Keluar
            </button>
          </div>
        </div>
      )}

    </div>

  )
}
function MobileUserSection({
  user,
  onLogout,
  onClose,
}: {
  user: any
  onLogout: () => void
  onClose: () => void
}) {
  return (
    <div className="space-y-4">

      {/* USER INFO */}
      <div className="px-4 py-3 rounded-xl bg-muted/30">
        <p className="text-sm font-semibold">
          {user.name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {user.email}
        </p>
      </div>

      {/* MENU */}
      <div className="space-y-1">
        <Link
          href="/dashboard"
          onClick={onClose}
          className="
            block px-4 py-2.5 rounded-lg text-sm font-medium
            hover:bg-muted/50
            transition-colors
          "
        >
          Dashboard
        </Link>

        <button
          onClick={() => {
            onLogout()
            onClose()
          }}
          className="
            flex w-full items-center gap-2
            px-4 py-2.5 rounded-lg text-sm font-medium
            text-red-600
            hover:bg-red-50
            transition-colors
          "
        >
          <LogOut className="h-4 w-4" />
          Keluar
        </button>
      </div>
    </div>
  )
}
