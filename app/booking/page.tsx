"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SERVICES, TIME_SLOTS, PET_TYPES } from "@/lib/booking-data"
import Link from "next/link"

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(searchParams.get("service") || "")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [petName, setPetName] = useState("")
  const [petType, setPetType] = useState("")
  const [notes, setNotes] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in (from localStorage or session)
    const userSession = localStorage.getItem("user")
    if (userSession) {
      const user = JSON.parse(userSession)
      setUserEmail(user.email)
      setUserName(user.name)
      setUserPhone(user.phone)
      setIsLoggedIn(true)
    }
  }, [])

  const service = SERVICES.find((s) => s.id === selectedService)

  const handleSubmit = () => {
    if (!userEmail || !userName || !userPhone || !petName || !petType || !selectedDate || !selectedTime) {
      alert("Mohon isi semua field yang diperlukan")
      return
    }

    const booking = {
      id: Date.now().toString(),
      service: service?.name,
      petName,
      petType,
      date: selectedDate,
      time: selectedTime,
      notes,
      email: userEmail,
      name: userName,
      phone: userPhone,
      totalPrice: service?.price || 0,
      status: "pending",
    }

    // Store booking
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    bookings.push(booking)
    localStorage.setItem("bookings", JSON.stringify(bookings))

    // Redirect to confirmation
    router.push(`/booking/confirmation?id=${booking.id}`)
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-primary mb-2">Pesan Layanan Kami</h1>
              <p className="text-muted-foreground">
                Langkah {step} dari 4 -{" "}
                {step === 1
                  ? "Pilih Layanan"
                  : step === 2
                    ? "Pilih Tanggal & Waktu"
                    : step === 3
                      ? "Data Hewan Peliharaan"
                      : "Konfirmasi & Data Pemesan"}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12 flex gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-muted"}`}
                ></div>
              ))}
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              {/* Step 1: Choose Service */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Pilih Layanan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => setSelectedService(svc.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedService === svc.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        <h3 className="font-semibold text-foreground">{svc.name}</h3>
                        <p className="text-sm text-muted-foreground">{svc.description}</p>
                        <p className="font-bold text-primary mt-2">Rp {svc.price.toLocaleString()}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Choose Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Pilih Tanggal & Waktu</h2>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Tanggal</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Waktu</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot.time}
                            onClick={() => slot.available && setSelectedTime(slot.time)}
                            disabled={!slot.available}
                            className={`p-3 rounded-lg border transition-all font-semibold ${
                              selectedTime === slot.time
                                ? "border-primary bg-primary text-white"
                                : slot.available
                                  ? "border-border hover:border-primary bg-white"
                                  : "border-border bg-muted text-muted-foreground cursor-not-allowed"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Pet Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Data Hewan Peliharaan</h2>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Nama Hewan Peliharaan</label>
                    <input
                      type="text"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Contoh: Buddy, Whiskers"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Jenis Hewan</label>
                    <select
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Pilih Jenis Hewan</option>
                      {PET_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Catatan Khusus</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Contoh: Hewan peliharaan saya sensitif terhadap suara keras..."
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation & User Data */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Konfirmasi Booking</h2>

                  {!isLoggedIn ? (
                    <>
                      <div className="bg-blue-50 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm text-foreground">
                          Belum login?{" "}
                          <Link href="/login?redirect=/booking" className="text-primary font-semibold hover:underline">
                            Login di sini
                          </Link>{" "}
                          atau isi data di bawah
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">Nama Lengkap</label>
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Nama Lengkap Anda"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">Email</label>
                        <input
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="Email Anda"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">No. Telepon</label>
                        <input
                          type="tel"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          placeholder="No. Telepon Anda"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                      <p className="text-sm">
                        <span className="font-semibold">Nama:</span> {userName}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Email:</span> {userEmail}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">No. Telepon:</span> {userPhone}
                      </p>
                    </div>
                  )}

                  {/* Booking Summary */}
                  <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-foreground">Ringkasan Booking</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Layanan:</span>
                        <span className="font-semibold text-foreground">{service?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Nama Hewan:</span>
                        <span className="font-semibold text-foreground">{petName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jenis:</span>
                        <span className="font-semibold text-foreground">{petType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tanggal:</span>
                        <span className="font-semibold text-foreground">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Waktu:</span>
                        <span className="font-semibold text-foreground">{selectedTime}</span>
                      </div>
                      <div className="border-t border-border pt-2 mt-2 flex justify-between">
                        <span className="text-muted-foreground">Total Harga:</span>
                        <span className="text-lg font-bold text-primary">
                          Rp {(service?.price || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                <button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="px-6 py-2 border border-border rounded-lg font-semibold text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Kembali
                </button>

                {step < 4 ? (
                  <button
                    onClick={() => {
                      if (step === 1 && !selectedService) {
                        alert("Pilih layanan terlebih dahulu")
                        return
                      }
                      if (step === 2 && (!selectedDate || !selectedTime)) {
                        alert("Pilih tanggal dan waktu terlebih dahulu")
                        return
                      }
                      if (step === 3 && (!petName || !petType)) {
                        alert("Isi data hewan peliharaan terlebih dahulu")
                        return
                      }
                      setStep(step + 1)
                    }}
                    className="ml-auto px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90"
                  >
                    Lanjut
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="ml-auto px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90"
                  >
                    Konfirmasi Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
