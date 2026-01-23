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
    // <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
    //   <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    //     {/* Logo */}
    //     <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-primary">
    //       <Image src="/logo.png" alt="JJ Pet House" width={38} height={38} priority />
    //       <span className="text-lg">JJ PET HOUSE</span>
    //     </Link>

    //     {/* Desktop Nav */}
    //     <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
    //       {navItems.map(item => (
    //         <Link
    //           key={item.href}
    //           href={item.href}
    //           className="text-muted-foreground transition-colors hover:text-primary"
    //         >
    //           {item.label}
    //         </Link>
    //       ))}
    //     </nav>

    //     {/* Actions */}
    //     <div className="flex items-center gap-3 sm:gap-4">
    //       {/* Cart */}
    //       <Link href="/cart" className="relative p-2 transition-colors hover:text-primary">
    //         <ShoppingCart className="h-5 w-5" />
    //         {cartCount > 0 && (
    //           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
    //             {cartCount}
    //           </span>
    //         )}
    //       </Link>

    //       {/* Auth Area - Desktop */}
    //       <div className="hidden md:flex items-center gap-3">
    //         {isAuthenticated && user ? (
    //           <UserDropdown user={user} onLogout={logout} />
    //         ) : (
    //           <>
    //             <Link href="/login">
    //               <Button variant="ghost" size="sm">
    //                 Masuk
    //               </Button>
    //             </Link>
    //             <Link href="/register">
    //               <Button size="sm" className="bg-primary hover:bg-primary/90">
    //                 Daftar
    //               </Button>
    //             </Link>
    //           </>
    //         )}
           
    //       </div>
    //        <LangSwitch />
    //         <DarkModeSwitch />
    //       {/* Mobile Hamburger */}
    //       <button
    //         className="md:hidden p-2"
    //         onClick={() => setMobileOpen(!mobileOpen)}
    //         aria-label="Toggle menu"
    //       >
    //         {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div
    //     className={cn(
    //       "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
    //       mobileOpen ? "max-h-screen border-t bg-white" : "max-h-0"
    //     )}
    //   >
    //     <div className="space-y-5 px-6 py-6">
    //       {navItems.map(item => (
    //         <Link
    //           key={item.href}
    //           href={item.href}
    //           className="block text-base font-medium text-muted-foreground hover:text-primary"
    //           onClick={() => setMobileOpen(false)}
    //         >
    //           {item.label}
    //         </Link>
    //       ))}

    //       <div className="pt-4 border-t">
    //         {isAuthenticated && user ? (
    //           <MobileUserSection user={user} onLogout={logout} onClose={() => setMobileOpen(false)} />
    //         ) : (
    //           <div className="grid gap-3">
    //             <Link href="/login" onClick={() => setMobileOpen(false)}>
    //               <Button variant="outline" className="w-full">
    //                 Masuk
    //               </Button>
    //             </Link>
    //             <Link href="/register" onClick={() => setMobileOpen(false)}>
    //               <Button className="w-full">Daftar</Button>
    //             </Link>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header className="sticky top-0 z-40 bg-accent">
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
        <div className="container mx-auto px-3 py-2 flex items-center gap-2">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-white flex-shrink-0"
          >
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-accent font-bold">
              JJ
            </div>
            <span className="hidden sm:block">PET HOUSE</span>
          </Link>

          {/* MOBILE SEARCH (SEJAJAR LOGO) */}
          <div className="flex-1 lg:hidden">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari produk..."
                className="
                  w-full
                  rounded-lg
                  bg-white
                  py-2
                  pl-3
                  pr-9
                  text-sm
                  outline-none
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
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari produk..."
                className="
                  w-full
                  rounded-lg
                  bg-white
                  py-2
                  pl-3
                  pr-9
                  text-sm
                  outline-none
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
            <Link href="/cart" className="relative p-2 transition-colors hover:text-muted-foreground">
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
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex justify-center text-white text-xs gap-6 pb-2">
        <Link href="/">Home</Link>
        <Link href="/pet-shop">Pet Shop</Link>
        <Link href="/services">Services</Link>
        <Link href="/clinic">Clinic</Link>
      </div>

      {/* MOBILE MENU */}
      <div
         className={cn(
           "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
           mobileOpen ? "max-h-screen border-t bg-white" : "max-h-0"
         )}
       >
         <div className="space-y-5 px-6 py-6">
           {navItems.map(item => (
             <Link
               key={item.href}
               href={item.href}
               className="block text-base font-medium text-muted-foreground hover:text-primary"
               onClick={() => setMobileOpen(false)}
             >
               {item.label}
             </Link>
           ))}

           <div className="pt-4 border-t">
             {isAuthenticated && user ? (
               <MobileUserSection user={user} onLogout={logout} onClose={() => setMobileOpen(false)} />
             ) : (
               <div className="grid gap-3">
                 <Link href="/login" onClick={() => setMobileOpen(false)}>
                   <Button variant="outline" className="w-full">
                     Masuk
                   </Button>
                 </Link>
                 <Link href="/register" onClick={() => setMobileOpen(false)}>
                   <Button className="w-full">Daftar</Button>
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
        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-blue-600 transition-colors"
      >
        <User className="h-5.5 w-5.5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border 
          bg-white text-gray-900 
          dark:bg-gray-900 dark:text-gray-100
          shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-semibold">
              {user.name}
            </p>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </div>

          <div className="py-1">
            <Link
              href="/dashboard"
              className="block px-5 py-2.5 text-sm 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-colors"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>

            <button
              onClick={() => {
                onLogout()
                setOpen(false)
              }}
              className="flex w-full items-center gap-2 px-5 py-2.5 text-sm 
                text-red-600 dark:text-red-400
                hover:bg-red-50 dark:hover:bg-red-950/40
                transition-colors"
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
    <>
      <div className="rounded-lg bg-muted/50 px-5 py-4">
        <p className="font-medium">{user.name}</p>
        <p className="mt-1 text-xs text-muted-foreground">{user.email}</p>
      </div>
      <div className="mt-4 grid gap-3">
        <Link href="/dashboard" onClick={onClose}>
          <Button variant="outline" className="w-full justify-start">
            Dashboard
          </Button>
        </Link>
        <button
          onClick={() => {
            onLogout()
            onClose()
          }}
          className="flex w-full items-center justify-center gap-2 rounded-md border border-red-200 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Keluar
        </button>
      </div>
    </>
  )
}