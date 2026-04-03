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
  const [selectedBranch, setSelectedBranch] = useState("")
  const [serviceMode, setServiceMode] = useState("")
  const [address, setAddress] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  
  const BRANCHES = [
    { id: "Jakarta", name: "Jakarta", phone: "6281912982996" },
    { id: "Bali", name: "Bali", phone: "628113999893" },
  ]
  const [selectedItems, setSelectedItems] = useState([])
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  const doctors = [
    { name: "Drh. Fransisca Olivia Ratna Dilla", specialty: "Special Interest, Feline Internal Medicine", experience: "", image: "/doctor/drh Fransisca.png", lokasi: "Jakarta" },
    { name: "Drh. Brillian Firmania Puspa Agny", specialty: "General Practitioner", experience: "", image: "/doctor/Drh Brillian.png", lokasi: "Jakarta" },
    { name: "Drh. Agung Supriyono", specialty: "Exotic Pet, Dermatology, Surgery Expert, Stemcell Therapy, Animal Communicator", experience: "", image: "/doctor/Drh Agung Supriono.png", lokasi: "Jakarta" },
    { name: "Drh. Dita Pratiwi Dwi Setyowati", specialty: "General Practitioner", experience: "", image: "/doctor/drh Dita.png", lokasi: "Jakarta" },

    { name: "Drh. Frida Ayu Salsana Billa", specialty: "General Practitioner", experience: "", image: "/doctor/Frida Ayu Salsana Billa.png", lokasi: "Bali" },
    { name: "Drh. Yunita Atok", specialty: "General Practitioner", experience: "", image: "/doctor/Yunita Atok.png", lokasi: "Bali" },
    { name: "Drh. Chendini Maharani", specialty: "General Practitioner", experience: "", image: "/doctor/Chendini Maharani.png", lokasi: "Bali" },

    { 
      name: "Drh. Adinda, S.KH", 
      specialty: "General Veterinary Practitioner, Internal Medicine, Veterinary Dermatology, Emergency and Critical Care, Basic Surgery", 
      experience: "", 
      image: "/doctor/adinda 55.png",
      lokasi: "Bali"
    },

    { name: "Drh. Christiyanti Rambu Gedi", specialty: "Universitas Wijaya Kusuma Surabaya", experience: "", image: "/doctor/Christiyanti Rambu Gedi.png", lokasi: "Bali" },

    { 
      name: "Drh. Putu Aditya Pratama Artha Putra, S.KH", 
      specialty: "Surgery, Internal Medicine, Vaccine, Dentistry, Urgent Care", 
      experience: "", 
      image: "/doctor/Aditya Pratama.png",
      lokasi: "Bali"
    },

    { 
      name: "Drh. Jessy Filomena Fernanda Bento, S.KH", 
      specialty: "General Practitioner, Special Interest Dermatology", 
      experience: "", 
      image: "/doctor/Jessy Filomena.png", lokasi: "Bali"
    },

    { 
      name: "Drh. Dewi Ratnasari", 
      specialty: "General Practitioner, Special Interest Hematology and Radiography", 
      experience: "", 
      image: "/doctor/Dewi Ratnasari.png", lokasi: "Bali"
    },

    { name: "Drh. Owen Fernando", specialty: "-", experience: "", image: "/doctor/Owen Fernando.png", lokasi: "Bali" },

    { name: "Drh. I Made Agus Wirawan", specialty: "General Practitioner", experience: "", image: "/doctor/I Made Agus Wirawan.png", lokasi: "Bali" },
  ];
 

  useEffect(() => {
    // Check if user is logged in (from localStorage or session)
    const userSession = localStorage.getItem("petshop-user")
    if (userSession) {
      const user = JSON.parse(userSession)
      setUserEmail(user.email)
      setUserName(user.name)
      setUserPhone(user.phone)
      setIsLoggedIn(true)
    }

    if (!selectedService) return

    const selected = SERVICES.find(s => s.id === selectedService)

    // kalau service valid & aktif → skip ke step 2
    if (selected && selected.active) {
      setStep(2)
    } else {
      // kalau tidak valid → reset
      setSelectedService("")
      setStep(1)
    }
    
  }, [selectedService])

  const service = SERVICES.find((s) => s.id === selectedService)
  const branch = BRANCHES.find((b) => b.id === selectedBranch)

  

  // const handleSubmit = () => {
  //   if (!userEmail || !userName || !userPhone || !petName || !petType || !selectedDate || !selectedTime) {
  //     alert("Mohon isi semua field yang diperlukan")
  //     return
  //   }

  //   const booking = {
  //     id: Date.now().toString(),
  //     service: service?.name,
  //     petName,
  //     petType,
  //     date: selectedDate,
  //     time: selectedTime,
  //     notes,
  //     email: userEmail,
  //     name: userName,
  //     phone: userPhone,
  //     totalPrice: service?.price || 0,
  //     status: "pending",
  //   }

  //   // Store booking
  //   const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
  //   bookings.push(booking)
  //   localStorage.setItem("bookings", JSON.stringify(bookings))

  //   // Redirect to confirmation
  //   router.push(`/booking/confirmation?id=${booking.id}`)
  // }
  const handleSubmit = () => {
    if (!userEmail || !userName || !userPhone || !petName || !petType) {
      alert("Mohon isi semua field")
      return
    }

    

    const branch = BRANCHES.find((b) => b.id === selectedBranch)

    const selectedItemNames = selectedItems
      .map(id => service?.item?.find(i => i.id === id)?.name)
      .filter(Boolean)

    const message = `
    Halo, saya ingin booking 🐾

    📌 *Layanan*
    ${service?.name}

    📍 *Cabang*
    ${branch?.name || "-"}

    🐶 *Hewan*
    Nama: ${petName}
    Jenis: ${petType}

    📅 *Jadwal*
    ${
      service?.scheduleType === "single"
        ? `Tanggal: ${selectedDate}
    Waktu: ${selectedTime}`
        : `Check-in: ${checkIn}
    Check-out: ${checkOut}`
    }

    🛠 *Tipe Layanan*
    ${serviceMode || "-"}

    🏠 *Alamat*
    ${address || "-"}

    🧾 *Item*
    ${
      selectedItemNames.length > 0
        ? selectedItemNames.map(i => `- ${i}`).join("\n")
        : "-"
    }

    👨‍⚕️ *Dokter*
    ${selectedDoctor || "-"}
    📝 *Catatan*
    ${notes || "-"}

    👤 *Customer*
    Nama: ${userName}
    HP: ${userPhone}

    Total Harga: Rp ${totalPrice.toLocaleString()}
    `

    const phone = branch?.phone || "628xxxx"

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    )
  }

  const TERMS = [
    "Hewan peliharaan wajib dalam kondisi sehat dan tidak sedang sakit menular.",
    "Disarankan / diwajibkan telah melakukan medical checkup oleh dokter hewan sebelum layanan.",
    "Jam operasional grooming pukul 08:00 - 23:00 WIB.",
    "Hewan yang datang melebihi jam booking terakhir akan otomatis masuk layanan boarding dan grooming dilakukan keesokan hari.",
  ]
  
  const toggleItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((i) => i !== itemId)
        : [...prev, itemId]
    )
  }

  useEffect(() => {
    if (step === 4 && (!service?.item || service.item.length === 0)) {
      setStep(5)
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [step, service])

  const filteredItems = service?.item?.filter((item) => {
    if (!item.petType) return true;
    return item.petType.includes(petType);
  }) || [];


  const selectedItemTotal = selectedItems.reduce((total, id) => {
    const item = service?.item?.find(i => i.id === id)
    return total + (item?.price || 0)
  }, 0)

  const totalPrice = selectedItemTotal

  //batas waktu untuk slot yang sudah lewat (hanya untuk jadwal hari ini)
  const isPastTime = (slotTime: string) => {
    if (!selectedDate) return false

    const now = new Date()
    const selected = new Date(selectedDate)

    if (
      selected.getFullYear() !== now.getFullYear() ||
      selected.getMonth() !== now.getMonth() ||
      selected.getDate() !== now.getDate()
    ) {
      return false
    }

    // parsing jam dari slot (contoh: "14:00")
    const [hour, minute] = slotTime.split(":").map(Number)

    const slotDate = new Date()
    slotDate.setHours(hour, minute, 0, 0)

    return slotDate <= now
  }

  const filteredDoctors = doctors.filter(
    (doc) => doc.lokasi === selectedBranch
  )
  useEffect(() => {
    setSelectedDoctor("")
  }, [selectedBranch])
  
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
                Langkah {step} dari 5 -{" "}
                {step === 1
                  ? "Pilih Layanan"
                  : step === 2
                    ? "Pilih Tanggal & Waktu"
                    : step === 3
                      ? "Data Hewan Peliharaan"
                       : step === 4
                        ? "Item Selection"
                        : "Konfirmasi & Data Pemesan"}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12 flex gap-2">
              {[1, 2, 3, 4,5].map((s) => (
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
                    {SERVICES.filter(svc => svc.active).map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => svc.active && setSelectedService(svc.id)}
                        disabled={!svc.active}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedService === svc.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        <h3 className="font-semibold text-foreground">{svc.name}</h3>
                        <p className="text-sm text-muted-foreground">{svc.description}</p>
                        {/* <p className="font-bold text-primary mt-2">Rp {svc.price.toLocaleString()}</p> */}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Choose Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Pilih Tanggal & Waktu</h2>
                  
                    {service?.branchRequired && (
                    <div>
                      {service && (
                        <div className="mb-4 p-3 bg-primary/10 rounded">
                          <p className="text-sm">
                            Layanan dipilih: <b>{service.name}</b>
                          </p>
                        </div>
                      )}
                      <label className="block text-sm font-semibold mb-2">Pilih Cabang</label>
                      <div className="grid grid-cols-2 gap-2">
                        {BRANCHES.map((b) => (
                          <button
                            key={b.id}
                            onClick={() => setSelectedBranch(b.id)}
                            className={`p-3 border rounded ${
                              selectedBranch === b.id ? "bg-primary text-white" : ""
                            }`}
                          >
                            {b.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {service?.availableModes && (
                    <div>
                      <label className="block text-sm font-semibold mb-2">Tipe Layanan</label>
                      <div className="flex gap-2">
                        {service.availableModes.map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setServiceMode(mode)}
                            className={`px-4 py-2 border rounded ${
                              serviceMode === mode ? "bg-primary text-white" : ""
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {(service?.requiresAddress || serviceMode === "Home Visit" || serviceMode === "Delivery") && (
                    <div>
                      <label className="block text-sm font-semibold mb-2">Alamat</label>
                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Masukkan alamat lengkap..."
                        className="w-full border rounded p-2"
                      />
                    </div>
                  )}

                  {service?.scheduleType === "single" && (
                    <div>
                      <label className="block text-sm font-semibold mb-3">Tanggal</label>
                      <input
                        type="date"
                        value={selectedDate}
                         min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  )}

                  {service?.scheduleType === "range" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Check-in</label>
                        <input
                          type="date"
                          value={checkIn}
                           min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Check-out</label>
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn} // 🔥 penting
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                  

                  {service?.scheduleType === "single" && (
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Waktu</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {TIME_SLOTS.map((slot) => {
                          const isDisabled = !selectedDate || !slot.available || isPastTime(slot.time)

                          return (
                            <button
                              key={slot.time}
                              onClick={() => !isDisabled && setSelectedTime(slot.time)}
                              disabled={isDisabled}
                              className={`p-3 rounded-lg border transition-all font-semibold ${
                                selectedTime === slot.time
                                  ? "border-primary bg-primary text-white"
                                  : !isDisabled
                                    ? "border-border hover:border-primary bg-white"
                                    : "border-border bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                              }`}
                            >
                              {slot.time}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {service?.requiresDoctor && (
                    <div>
                      <label className="block text-sm font-semibold mb-3">Pilih Dokter</label>

                      {!selectedBranch && (
                        <p className="text-sm text-muted-foreground mb-2">
                          Pilih cabang terlebih dahulu
                        </p>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {filteredDoctors.map((doc) => {
                          const isSelected = selectedDoctor === doc.name

                          return (
                            <button
                              key={doc.name}
                              onClick={() => setSelectedDoctor(doc.name)}
                              disabled={!selectedBranch}
                              className={`border rounded-lg p-3 text-left transition ${
                                isSelected
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary"
                              } ${!selectedBranch ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                              <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-full h-28 object-contain rounded mb-2 bg-white"
                              />

                              <p className="text-sm font-semibold leading-tight">
                                {doc.name}
                              </p>

                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {doc.specialty}
                              </p>
                            </button>
                          )
                        })}
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

              
              {/* Step 4: Item Selection (if applicable) */}
              {step === 4 && filteredItems.length > 0 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">Pilih Item</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {selectedItems.length} item dipilih
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {filteredItems.map((item) => {
                      const isSelected = selectedItems.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className={`relative flex flex-col items-start p-3 rounded-lg border text-left transition-colors ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border bg-background hover:bg-muted/50"
                          }`}
                        >
                          {/* Dot indikator pojok kanan atas */}
                          <div
                            className={`absolute top-2.5 right-2.5 w-3 h-3 rounded-full border-2 transition-colors ${
                              isSelected
                                ? "border-primary bg-primary"
                                : "border-muted-foreground/40"
                            }`}
                          />

                          <p className={`text-sm font-medium leading-snug pr-5 ${
                            isSelected ? "text-primary" : "text-foreground"
                          }`}>
                            {item.name}
                          </p>
                          <p className={`text-xs mt-1 ${
                            isSelected ? "text-primary/70" : "text-muted-foreground"
                          }`}>
                            Rp {item.price.toLocaleString()}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 5: Confirmation & User Data */}
              {step === 5 && (
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
                  <div className="rounded-xl border border-border overflow-hidden">
                    
                    {/* Header */}
                    <div className="bg-blue-50 dark:bg-blue-950 px-5 py-4 flex justify-between items-start">
                      <div>
                        <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                          Ringkasan Booking
                        </p>
                        <p className="text-lg font-semibold text-foreground">{service?.name}</p>
                      </div>
                      {/* <span className="inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Terkonfirmasi
                      </span> */}
                    </div>

                    {/* Body */}
                    <div className="px-5 py-4 space-y-4 text-sm">

                      {/* Layanan */}
                      <div>
                        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-2">Layanan</p>
                        <div className="space-y-2">
                          {service?.branchRequired && (
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Cabang</span>
                              <span className="font-medium">{branch?.name}</span>
                            </div>
                          )}
                          {service?.availableModes && (
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Tipe layanan</span>
                              <span className="font-medium">{serviceMode || "-"}</span>
                            </div>
                          )}
                          {(service?.requiresAddress ||
                            serviceMode === "Home Visit" ||
                            serviceMode === "Walk In" ||
                            serviceMode === "Delivery") && (
                            <div className="flex justify-between items-start gap-3">
                              <span className="text-muted-foreground shrink-0">Alamat</span>
                              <span className="font-medium text-right">{address || "-"}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="border-t border-border" />

                      {/* Hewan Peliharaan */}
                      <div>
                        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-2">Hewan Peliharaan</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Nama</span>
                            <span className="font-medium">🐾 {petName || "-"}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Jenis</span>
                            <span className="font-medium">{petType || "-"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border" />

                      {/* Jadwal */}
                      <div>
                        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-2">Jadwal</p>
                        <div className="space-y-2">
                          {service?.scheduleType === "single" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Tanggal</span>
                                <span className="font-medium">{selectedDate || "-"}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Waktu</span>
                                <span className="font-medium">{selectedTime || "-"}</span>
                              </div>
                            </>
                          )}
                          {service?.scheduleType === "range" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Check-in</span>
                                <span className="font-medium">{checkIn || "-"}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Check-out</span>
                                <span className="font-medium">{checkOut || "-"}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      {service?.requiresDoctor && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Dokter</span>
                          <span className="font-medium">{selectedDoctor || "-"}</span>
                        </div>
                      )}
                      {/* Item Tambahan */}
                      {selectedItems.length > 0 && (
                        <>
                          <div className="border-t border-border" />
                          <div>
                            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-2">Item </p>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedItems.map(id => {
                                const item = filteredItems.find(i => i.id === id)
                                return (
                                  <span
                                    key={id}
                                    className="inline-block bg-muted text-foreground text-xs font-medium px-3 py-1 rounded-full border border-border"
                                  >
                                    {item?.name}
                                  </span>
                                )
                              })}
                            </div>
                          </div>
                        </>
                      )}

                      {/* Catatan */}
                      {notes && (
                        <>
                          <div className="border-t border-border" />
                          <div>
                            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-2">Catatan</p>
                            <p className="text-foreground leading-relaxed">{notes}</p>
                          </div>
                        </>
                      )}

                    </div>

                    {/* Total Harga */}
                    <div className="flex justify-between items-center px-5 py-4 bg-muted/40 border-t border-border">
                      <span className="text-sm text-muted-foreground">Total harga</span>
                      <span className="text-xl font-semibold text-foreground">
                        Rp {totalPrice.toLocaleString("id-ID")}
                      </span>
                    </div>

                  </div>
                </div>
              )}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2 mt-6">
                <h4 className="font-semibold text-sm text-foreground">
                  Syarat & Ketentuan
                </h4>

                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  {TERMS.map((term, i) => (
                    <li key={i}>{term}</li>
                  ))}
                </ul>
              </div>
              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                <button
                  onClick={() => {
                    if (step === 5 && (!service?.item || service.item.length === 0)) {
                      setStep(3)
                      return
                    }
                    setStep(Math.max(1, step - 1))
                  }}
                  disabled={step === 1}
                  className="px-6 py-2 border border-border rounded-lg font-semibold text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Kembali
                </button>

                {step < 5 ? (
                  <button
                    onClick={() => {
                      if (step === 1 && !selectedService) {
                        alert("Pilih layanan terlebih dahulu")
                        return
                      }
                      if (step === 1) {
                        const selected = SERVICES.find(s => s.id === selectedService)

                        if (!selected || !selected.active) {
                          alert("Layanan tidak tersedia")
                          return  
                        }
                      }
                      if (step === 2) {
                        if (service?.scheduleType === "single") {
                          if (!selectedDate || !selectedTime) {
                            alert("Pilih tanggal dan waktu terlebih dahulu")
                            return
                          }
                        }

                        if (service?.scheduleType === "range") {
                          if (!checkIn || !checkOut) {
                            alert("Pilih tanggal check-in dan check-out")
                            return
                          }
                        }
                        if (step === 2 && service?.requiresDoctor && !selectedDoctor) {
                          alert("Pilih dokter terlebih dahulu")
                          return
                        }
                      }
                      if (step === 2 && service?.branchRequired && !selectedBranch) {
                        alert("Pilih cabang terlebih dahulu")
                        return
                      }
                      
                      if (step === 2 && service?.availableModes && !serviceMode) {
                        alert("Pilih tipe layanan terlebih dahulu")
                        return
                      }
                      if (step === 3 && (!petName || !petType)) {
                        alert("Isi data hewan peliharaan terlebih dahulu")
                        return
                      }
                      if (step === 3) {
                        const hasItems = service?.item && service.item.length > 0

                        if (!hasItems) {
                          setStep(5) // skip step item
                          return
                        }
                      }
                      if (step === 4 && service?.item?.length > 0 && selectedItems.length === 0) {
                        alert("Pilih minimal 1 item")
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
