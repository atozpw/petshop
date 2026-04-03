import { id, tr } from "date-fns/locale"
import { url } from "inspector/promises"

export interface Service {
  id: string
  name: string
  category: string
  description: string
  price: number
  image: string
  duration: string
  rating: number
  active: boolean
  url?: string
  requiresAddress?: boolean
  requiresPickup?: boolean
  requiresSchedule?: boolean
  availableModes?: ("Home Visit" | "Walk In" | "Delivery" )[]
  branchRequired?: boolean
  requiresDoctor?: boolean
  item?: {
    id: string
    name: string
    price: number
    petType?: ("Anjing" | "Kucing")[]
  }[]
  scheduleType?: "range" | "single"
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
  

}

export const SERVICES: Service[] = [
  {
    id: "1",
    name: "Pet Grooming",
    category: "grooming",
    description: "Perawatan lengkap mulai dari mandi, potong kuku & rambut, hingga styling profesional menggunakan produk premium.",
    price: 150000,
    image: "/image/Pict 12.jpeg",
    duration: "1.5 - 2 jam",
    rating: 4.9,
    active: true,
    url: "/services/grooming",
    requiresSchedule: true,
    availableModes: ["Home Visit", "Walk In", "Delivery"],
    requiresAddress: false,
    branchRequired: true,
    item: [
      { id: "dog_dry_puppy", name: "Dry Grooming Dog - Puppy", price: 195000, petType: ["Anjing"] },
      { id: "dog_dry_small", name: "Dry Grooming Dog - Small", price: 230000, petType: ["Anjing"] },
      { id: "dog_dry_medium", name: "Dry Grooming Dog - Medium", price: 260000, petType: ["Anjing"] },
      { id: "dog_dry_large", name: "Dry Grooming Dog - Large", price: 325000, petType: ["Anjing"] },
      { id: "dog_dry_special", name: "Dry Grooming Dog - Special Breed", price: 390000, petType: ["Anjing"] },

      { id: "cat_dry_kitten", name: "Dry Grooming Cat - Kitten", price: 165000, petType: ["Kucing"] },
      { id: "cat_dry_adult", name: "Dry Grooming Cat - Adult", price: 195000, petType: ["Kucing"] },
      { id: "cat_dry_longhair", name: "Dry Grooming Cat - Longhair", price: 250000, petType: ["Kucing"] },

      { id: "gundul_puppy", name: "Haircut Gundul - Puppy SB", price: 145000, petType: ["Anjing"] },
      { id: "gundul_small", name: "Haircut Gundul - Small", price: 190000, petType: ["Anjing"] },
      { id: "gundul_medium", name: "Haircut Gundul - Medium", price: 230000, petType: ["Anjing"] },
      { id: "gundul_large", name: "Haircut Gundul - Large", price: 270000, petType: ["Anjing"] },
      { id: "gundul_special", name: "Haircut Gundul - Special Breed", price: 300000, petType: ["Anjing"] },

      { id: "style_puppy", name: "Haircut Style - Puppy SB", price: 250000, petType: ["Anjing"] },
      { id: "style_small", name: "Haircut Style - Small", price: 275000, petType: ["Anjing"] },
      { id: "style_medium", name: "Haircut Style - Medium", price: 300000, petType: ["Anjing"] },
      { id: "style_large", name: "Haircut Style - Large", price: 350000, petType: ["Anjing"] },
      { id: "style_special", name: "Haircut Style - Special Breed", price: 400000, petType: ["Anjing"] },

      { id: "kusut_puppy", name: "Perawatan Bulu Kusut - Puppy SB", price: 25000, petType: ["Anjing"] },
      { id: "kusut_small", name: "Perawatan Bulu Kusut - Small", price: 35000, petType: ["Anjing"] },
      { id: "kusut_medium", name: "Perawatan Bulu Kusut - Medium", price: 45000, petType: ["Anjing"] },
      { id: "kusut_large", name: "Perawatan Bulu Kusut - Large", price: 55000, petType: ["Anjing"] },
      { id: "kusut_special", name: "Perawatan Bulu Kusut - Special Breed", price: 75000, petType: ["Anjing"] }
    ],
    scheduleType: "single"
  },

  {
    id: "2",
    name: "Pet Boarding",
    category: "boarding",
    description: "Layanan penitipan hewan dengan fasilitas nyaman, pemberian makan terjadwal, dan pengawasan 24 jam.",
    price: 250000,
    image: "/image/Pict 39.jpeg",
    duration: "Per malam",
    rating: 4.8,
    active: true,
    requiresSchedule: true,
    availableModes: ["Walk In", "Delivery"],
    requiresAddress: false,
    branchRequired: true,
    item: [
      { id: "small_room_normal", name: "Small Room (Normal)", price: 100000, petType: ["Anjing", "Kucing"] },
      { id: "large_room_normal", name: "Large Room (Normal)", price: 175000, petType: ["Anjing", "Kucing"] },
      { id: "small_room_high", name: "Small Room (High Season)", price: 200000, petType: ["Anjing", "Kucing"] },
      { id: "large_room_high", name: "Large Room (High Season)", price: 350000, petType: ["Anjing", "Kucing"] }
    ],
    scheduleType: "range"

  },

  {
    id: "3",
    name: "Pet Clinic",
    category: "clinic",
    description: "Layanan kesehatan hewan meliputi konsultasi dokter, vaksinasi, pemeriksaan rutin, hingga penanganan darurat.",
    price: 200000,
    image: "/image/Pict 2.jpeg",
    duration: "30 - 60 menit",
    rating: 4.9,
    active: true,
    requiresSchedule: true,
    availableModes: ["Home Visit", "Walk In", "Delivery"],
    requiresAddress: false, 
    branchRequired: true,
    item: [],
    scheduleType: "single",
    requiresDoctor: true
  },

  {
    id: "4",
    name: "Pet Shop",
    category: "shop",
    description: "Tersedia berbagai kebutuhan hewan seperti makanan premium, vitamin, aksesoris, dan perlengkapan berkualitas.",
    price: 0,
    image: "/image/Pict 30.jpeg",
    duration: "Flexible",
    rating: 4.7,
    active: false,
    requiresSchedule: false,
    availableModes: ["Home Visit", "Walk In", "Delivery"],
    requiresAddress: false,
    branchRequired: false,
    item: [],
    scheduleType: "single"

  },

  {
    id: "5",
    name: "Pet Playground",
    category: "playground",
    description: "Area bermain aman dengan rumput sintetis dan fasilitas interaktif untuk melatih sosial dan aktivitas hewan.",
    price: 80000,
    image: "/image/Pict 43.jpeg",
    duration: "1 - 2 jam",
    rating: 4.8,
    active: false,
    requiresSchedule: true,
    availableModes: ["Home Visit", "Walk In", "Delivery"],
    requiresAddress: false,
    branchRequired: true,
    item: [],
    scheduleType: "single"
  },

  {
    id: "6",
    name: "Home Visit & Delivery",
    category: "delivery",
    description: "Layanan kunjungan ke rumah untuk grooming ringan, perawatan, serta pengantaran kebutuhan hewan peliharaan.",
    price: 50000,
    image: "/image/Pict 47.jpeg",
    duration: "1 - 2 jam",
    rating: 4.7,
    active: false,
    requiresSchedule: true,
    availableModes: ["Home Visit", "Walk In", "Delivery"],
    requiresAddress: false,
    branchRequired: true,
    item: [],
    scheduleType: "single"
  },

  {
    id: "7",
    name: "Pet Love Care",
    category: "petlove",
    description: "Perawatan penuh kasih untuk hewan peliharaan Anda, memastikan kenyamanan, kebersihan, dan kesehatan optimal.",
    price: 75000,
    image: "/image/Pict 3.jpeg",
    duration: "1 jam",
    rating: 4.8,
    active: false,
    requiresSchedule: true,
    availableModes: ["Home Visit"],
    requiresAddress: true,
    branchRequired: false,
    item: [],
    scheduleType: "single"
  },

  {
    id: "8",
    name: "Pet Sitter",
    category: "petsitter",
    description: "Layanan penjagaan hewan di rumah atau lokasi tertentu dengan perhatian penuh dan perawatan profesional.",
    price: 100000,
    image: "/image/Pict 3.jpeg",
    duration: "Per hari",
    rating: 4.8,
    active: false,
    requiresSchedule: true,
    requiresAddress: true,
    availableModes: ["Home Visit"],
    branchRequired: false,
    item: [],
    scheduleType: "single"
  },

  {
    id: "9",
    name: "Dog Trainer",
    category: "training",
    description: "Pelatihan anjing profesional untuk kepatuhan, perilaku, dan keterampilan khusus dengan metode efektif.",
    price: 150000,
    image: "/image/Pict 41.jpeg",
    duration: "1 jam",
    rating: 4.8,
    active: false,
    requiresSchedule: true,
    requiresAddress: true,
    availableModes: ["Home Visit"],
    branchRequired: false,
    item: [],
    scheduleType: "single"
  },

  {
    id: "10",
    name: "Pet Cremation",
    category: "cremation",
    description: "Layanan kremasi hewan peliharaan dengan proses yang penuh penghormatan dan kenangan yang layak.",
    price: 300000,
    image: "/image/Pict 3.jpeg",
    duration: "2 - 4 jam",
    rating: 4.8,
    active: false,
    requiresSchedule: true,
    availableModes: ["Home Visit", "Delivery"],
    requiresAddress: false,
    branchRequired: true,
    item: [],
    scheduleType: "single"
  },

  {
    id: "11",
    name: "Pet Taxi",
    category: "pettaxi",
    description: "Layanan antar-jemput hewan peliharaan yang aman dan nyaman untuk ke klinik, grooming, atau kebutuhan lainnya.",
    price: 50000,
    image: "/image/Pict 3.jpeg",
    duration: "Per trip",
    rating: 4.8,
    active: false,
    requiresSchedule: true,
    availableModes: ["Home Visit", "Delivery"],
    requiresAddress: false,
    branchRequired: true,
    item: [],
    scheduleType: "single"
  },
]

export const TIME_SLOTS: TimeSlot[] = [
  { time: "08:00", available: true },
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "11:00", available: true },
  { time: "13:00", available: true },
  { time: "14:00", available: true },
  { time: "15:00", available: true },
  { time: "16:00", available: true },
  { time: "17:00", available: true },
  { time: "18:00", available: true },
  { time: "19:00", available: true },
  { time: "20:00", available: true },
  { time: "21:00", available: true },
  { time: "22:00", available: true },
  { time: "23:00", available: true },
]

export const PET_TYPES = ["Anjing", "Kucing"]
