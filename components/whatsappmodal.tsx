"use client"
import { useState } from "react"

export default function WhatsappModal() {
  const [open, setOpen] = useState(false)

  const openWA = (phone: string) => {
    const url = `https://wa.me/${phone}`
    window.open(url, "_blank")
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg"
      >
        Pesan Sekarang
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 w-80 shadow-xl">
            
            <h2 className="text-lg font-semibold text-center mb-4">
              Pilih Domisili
            </h2>

            <div className="space-y-3">
              
              <button
                onClick={() => openWA("6281912982996")}
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg"
              >
                Hubungi Jakarta
              </button>

              <button
                onClick={() => openWA("628113999893")}
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg"
              >
                Hubungi Bali
              </button>

              <button
                onClick={() => setOpen(false)}
                className="w-full border py-2 rounded-lg"
              >
                Batal
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  )
}