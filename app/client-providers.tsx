"use client"

import { AuthProvider } from "@/context/auth-context"
import { CartProvider } from "@/context/cart-context"
import { DarkReaderProvider } from "@/components/dark-reader-provider"
import { Toaster } from "sonner"
import { useState, useEffect } from "react"
import { setGlobalLoadingHandler } from "@/lib/api"

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setGlobalLoadingHandler(setLoading)
  }, [])

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <DarkReaderProvider>
            {children}
          </DarkReaderProvider>
          <Toaster />
        </CartProvider>
      </AuthProvider>

      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white px-6 py-4 rounded shadow flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
            Memuat data...
          </div>
        </div>
      )}
    </>
  )
}
