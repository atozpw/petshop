export interface Service {
  id: string
  name: string
  category: string
  description: string
  price: number
  image: string
  duration: string
  rating: number
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface Booking {
  id: string
  userId: string
  serviceId: string
  date: string
  time: string
  petName: string
  petType: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  totalPrice: number
  createdAt: string
}

export const SERVICES: Service[] = [
  {
    id: "1",
    name: "Grooming Professional",
    category: "grooming",
    description: "Perawatan lengkap: mandi, potong rambut, dan grooming profesional dengan peralatan modern",
    price: 150000,
    image: "/image/Pict 3.jpeg",
    duration: "2 jam",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Pet Boarding Nyaman",
    category: "hotel",
    description: "Penginapan mewah dengan fasilitas modern, feeding dan perawatan 24 jam untuk anjing dan kucing",
    price: 250000,
    image: "/image/Pict 39.jpeg",
    duration: "Per malam",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Klinik Hewan 24 Jam",
    category: "clinic",
    description: "Konsultasi, vaksinasi, pemeriksaan kesehatan, dan layanan darurat veteriner kapan saja",
    price: 200000,
    image: "/image/Pict 2.jpeg",
    duration: "30 menit - 1 jam",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Swimming & Water Play",
    category: "pool",
    description: "Fasilitas kolam renang khusus untuk hewan peliharaan dengan pengawasan profesional dan aman",
    price: 100000,
    image: "/image/Pict 41.jpeg",
    duration: "1 jam",
    rating: 4.8,
  },
  {
    id: "5",
    name: "Pet Shop Premium",
    category: "shop",
    description: "Koleksi lengkap makanan premium (Royal Canin, ProPlan) dan aksesori berkualitas tinggi",
    price: 0,
    image: "/image/Pict 30.jpeg",
    duration: "Flexible",
    rating: 4.7,
  },
  {
    id: "6",
    name: "PlayGround Indoor/Outdoor",
    category: "playground",
    description: "Area bermain aman dengan artificial grass dan fasilitas modern untuk sosialisasi hewan",
    price: 80000,
    image: "/image/Pict 43.jpeg",
    duration: "1.5 jam",
    rating: 4.8,
  },
  {
    id: "7",
    name: "Konsultasi Nutrisi",
    category: "nutrition",
    description: "Konsultasi gizi lengkap dan rekomendasi pakan terbaik sesuai kebutuhan spesifik hewan Anda",
    price: 50000,
    image: "/image/Pict 4.jpeg",
    duration: "1 jam",
    rating: 4.8,
  },
  {
    id: "8",
    name: "Delivery Express",
    category: "delivery",
    description: "Pengiriman cepat dan aman untuk produk pet shop ke seluruh area dengan packaging profesional",
    price: 25000,
    image: "/image/Pict 34.jpeg",
    duration: "1-2 jam",
    rating: 4.7,
  },
]

export const TIME_SLOTS: TimeSlot[] = [
  { time: "08:00", available: true },
  { time: "09:00", available: true },
  { time: "10:00", available: false },
  { time: "11:00", available: true },
  { time: "13:00", available: true },
  { time: "14:00", available: true },
  { time: "15:00", available: false },
  { time: "16:00", available: true },
  { time: "17:00", available: true },
]

export const PET_TYPES = ["Anjing", "Kucing", "Kelinci", "Burung", "Hamster", "Iguana", "Ular"]
