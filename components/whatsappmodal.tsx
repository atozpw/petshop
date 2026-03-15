"use client"

import { useState } from "react"
import { MapPin, MessageCircle, X } from "lucide-react"

export default function WhatsappModal({ active = true }: { active?: boolean }) {
  const [open, setOpen] = useState(false)

  const message = encodeURIComponent(
    "Halo, saya ingin bertanya mengenai produk yang tersedia."
  )

  const openWA = (phone: string) => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <>
      {/* BUTTON */}
      <button
        disabled={!active}
        onClick={() => active && setOpen(true)}
        className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
      >
        <MessageCircle size={18} />
        Pesan Sekarang
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative animate-in fade-in zoom-in-95">

            {/* HEADER */}
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <MapPin size={18} />
                Pilih Lokasi
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* BODY */}
            <div className="p-4 space-y-3">

              {/* JAKARTA */}
              <button
                onClick={() => openWA("6281912982996")}
                className="w-full flex items-center gap-4 border rounded-xl p-4 hover:bg-green-50 hover:border-green-400 transition"
              >
                <div className="bg-green-500 text-white p-2 rounded-lg">
                  <MessageCircle size={18} />
                </div>

                <div className="text-left">
                  <p className="font-semibold">Jakarta</p>
                  <p className="text-sm text-gray-500">Customer Service Jakarta</p>
                </div>
              </button>

              {/* BALI */}
              <button
                onClick={() => openWA("628113999893")}
                className="w-full flex items-center gap-4 border rounded-xl p-4 hover:bg-green-50 hover:border-green-400 transition"
              >
                <div className="bg-green-500 text-white p-2 rounded-lg">
                  <MessageCircle size={18} />
                </div>

                <div className="text-left">
                  <p className="font-semibold">Bali</p>
                  <p className="text-sm text-gray-500">Customer Service Bali</p>
                </div>
              </button>

            </div>

            {/* FOOTER */}
            <div className="border-t p-3 text-center text-xs text-gray-400">
              Kami akan membalas secepat mungkin
            </div>

          </div>
        </div>
      )}
    </>
  )
}