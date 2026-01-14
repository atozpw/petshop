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
    name: "Grooming",
    category: "grooming",
    description: "Perawatan lengkap: mandi, potong rambut, dan grooming profesional untuk hewan peliharaan Anda",
    price: 150000,
    image: "/dog-grooming.png",
    duration: "2 jam",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Pet Hotel",
    category: "hotel",
    description: "Penginapan nyaman dan aman untuk hewan peliharaan Anda dengan perawatan 24 jam",
    price: 250000,
    image: "/pet-hotel-room.png",
    duration: "Per malam",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Klinik 24 Jam",
    category: "clinic",
    description: "Konsultasi, vaksinasi, dan pemeriksaan kesehatan hewan peliharaan Anda sepanjang waktu",
    price: 200000,
    image: "/pet-clinic-consultation.jpg",
    duration: "30 menit - 1 jam",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Pet Pool",
    category: "pool",
    description: "Fasilitas kolam renang khusus untuk hewan peliharaan dengan pengawasan profesional",
    price: 100000,
    image: "/pet-swimming-pool.jpg",
    duration: "1 jam",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Pet Shop",
    category: "shop",
    description: "Lengkapi kebutuhan hewan peliharaan Anda dengan berbagai produk berkualitas premium",
    price: 0,
    image: "/pet-shop-products.jpg",
    duration: "Flexible",
    rating: 4.5,
  },
  {
    id: "6",
    name: "PlayGround",
    category: "playground",
    description: "Area bermain aman dan menyenangkan untuk sosialisasi hewan peliharaan Anda",
    price: 80000,
    image: "/pet-playground.jpg",
    duration: "1.5 jam",
    rating: 4.7,
  },
  {
    id: "7",
    name: "Pakan & Nutrisi",
    category: "nutrition",
    description: "Konsultasi gizi dan rekomendasi pakan terbaik untuk kesehatan optimal hewan peliharaan",
    price: 50000,
    image: "/pet-nutrition-consultation.jpg",
    duration: "1 jam",
    rating: 4.8,
  },
  {
    id: "8",
    name: "Delivery",
    category: "delivery",
    description: "Pengiriman cepat dan aman untuk produk pet shop dan kebutuhan hewan peliharaan ke rumah Anda",
    price: 25000,
    image: "/pet-delivery-service.jpg",
    duration: "1-2 jam",
    rating: 4.6,
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
