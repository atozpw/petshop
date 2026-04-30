import { BRANCHES as LOCATION_BRANCHES } from "@/lib/branches-data"

export type PetType = "Anjing" | "Kucing"  | "Other"

export type ServiceCategory =
  | "grooming"
  | "boarding"
  | "clinic"
  | "shop"
  | "playground"
  | "delivery"
  | "petlove"
  | "petsitter"
  | "training"
  | "cremation"
  | "pettaxi"

export interface ServiceItem {
  id: string
  name: string
  price: number
  type: "main" | "additional"
  petType?: PetType[]
  specialties?: string[]
}

export interface Service {
  id: string
  name: string
  category: ServiceCategory
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
  availableModes?: ("Home Visit" | "Walk In" | "Delivery")[]
  branchRequired?: boolean
  requiresPeople?: boolean
  item?: ServiceItem[]
  scheduleType?: "range" | "single"
}

export interface Branch {
  id: string
  name: string
  city: "Jakarta" | "Bali" | "Lombok"
  address: string
  phone: string
  services: ServiceCategory[]
}

export interface BookingPerson {
  name: string
  specialty: string
  specialties: string[]
  image: string
  branchId: string
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

export const CITIES: Branch["city"][] = ["Jakarta", "Bali", "Lombok"]

const BOOKING_SERVICE_CATEGORIES: ServiceCategory[] = [
  "grooming",
  "boarding",
  "clinic",
  "shop",
  "playground",
  "delivery",
  "petlove",
  "petsitter",
  "training",
  "cremation",
  "pettaxi",
]

const BOOKING_CITY_LABELS: Record<string, Branch["city"]> = {
  jakarta: "Jakarta",
  bali: "Bali",
  lombok: "Lombok",
}

const isBookingServiceCategory = (service: string): service is ServiceCategory =>
  BOOKING_SERVICE_CATEGORIES.includes(service as ServiceCategory)

const toWhatsAppNumber = (phone: string) => {
  const digits = phone.replace(/\D/g, "")

  if (digits.startsWith("0")) return `62${digits.slice(1)}`

  return digits
}

export const BRANCHES: Branch[] = LOCATION_BRANCHES.map((branch) => ({
  id: branch.id,
  name: branch.name,
  city: BOOKING_CITY_LABELS[branch.city],
  address: branch.address,
  phone: toWhatsAppNumber(branch.whatsapp || branch.phone),
  services: (branch.bookingservices || []).filter(isBookingServiceCategory),
}))

export const DOCTORS: BookingPerson[] = [
  // {
  //   name: "Drh. Fransisca Olivia Ratna Dilla",
  //   specialty: "Special Interest, Feline Internal Medicine",
  //   specialties: ["Feline Internal Medicine"],
  //   experience: "",
  //   image: "/doctor/drh Fransisca.png",
  //   lokasi: "Jakarta"
  // },
  // {
  //   name: "Drh. Brillian Firmania Puspa Agny",
  //   specialty: "General Practitioner",
  //   specialties: ["General Practitioner"],
  //   experience: "",
  //   image: "/doctor/Drh Brillian.png",
  //   lokasi: "Jakarta"
  // },
  {
    name: "Drh. Agung Supriyono",
    specialty: "Exotic Pet, Dermatology, Surgery Expert, Stemcell Therapy, Animal Communicator",
    specialties: ["Exotic Pet", "Dermatology", "Surgery", "Stemcell Therapy"],
    image: "/doctor/Drh Agung Supriono.png",
    branchId: "jj-pet-house-jakarta",
  },
  // {
  //   name: "Drh. Dita Pratiwi Dwi Setyowati",
  //   specialty: "General Practitioner",
  //   specialties: ["General Practitioner"],
  //   experience: "",
  //   image: "/doctor/drh Dita.png",
  //   lokasi: "Jakarta"
  // },
  {
    name: "Drh. Frida Ayu Salsana Billa",
    specialty: "General Practitioner",
    specialties: ["General Practitioner"],
    image: "/doctor/Frida Ayu Salsana Billa.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Yunita Atok",
    specialty: "General Practitioner",
    specialties: ["General Practitioner"],
    image: "/doctor/yunita atok.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Chendini Maharani",
    specialty: "General Practitioner",
    specialties: ["General Practitioner"],
    image: "/doctor/Chendini Maharani.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Adinda, S.KH",
    specialty: "General Veterinary Practitioner, Internal Medicine, Veterinary Dermatology, Emergency and Critical Care, Basic Surgery",
    specialties: [
      "General Practitioner",
      "Internal Medicine",
      "Dermatology",
      "Emergency and Critical Care",
      "Surgery",
    ],
    image: "/doctor/adinda 55.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Christiyanti Rambu Gedi",
    specialty: "Universitas Wijaya Kusuma Surabaya",
    specialties: ["General Practitioner"],
    image: "/doctor/Christiyanti Rambu Gedi.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Putu Aditya Pratama Artha Putra, S.KH",
    specialty: "Surgery, Internal Medicine, Vaccine, Dentistry, Urgent Care",
    specialties: ["Surgery", "Internal Medicine", "Vaccination", "Dentistry", "Urgent Care"],
    image: "/doctor/Aditya Pratama.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Jessy Filomena Fernanda Bento, S.KH",
    specialty: "General Practitioner, Special Interest Dermatology",
    specialties: ["General Practitioner", "Dermatology"],
    image: "/doctor/Jessy Filomena.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Dewi Ratnasari",
    specialty: "General Practitioner, Special Interest Hematology and Radiography",
    specialties: ["General Practitioner", "Hematology", "Radiography"],
    image: "/doctor/Dewi Ratnasari.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Owen Fernando",
    specialty: "General Practitioner",
    specialties: ["General Practitioner"],
    image: "/doctor/Owen Fernando.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. I Made Agus Wirawan",
    specialty: "General Practitioner",
    specialties: ["General Practitioner"],
    image: "/doctor/I Made Agus Wirawan.png",
    branchId: "jj-pet-house-balian",
  },
  
]

export const GROOMERS: BookingPerson[] = [
  {
    name: "Rama",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/rama.png",
    branchId: "jj-pet-house-jakarta",
  },
  {
    name: "Fallen",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/fallen.png",
    branchId: "jj-pet-house-jakarta",
  },
  {
    name: "Ama",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Ama-pusat.jpeg",
    branchId: "jj-pet-house-jakarta",
  },

  //Jimbaran
  {
    name: "Acik",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/acik-jimbaran.jpeg",
    branchId: "jj-pet-jimbaran",
  },

  //Udayana
  {
    name: "Ari",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Ari-Udayana.jpeg",
    branchId: "jj-pet-house-udayana",
  },
  {
    name: "Bio",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Bio-Udayana.jpeg",
    branchId: "jj-pet-house-udayana",
  },
  //sidakarya
  {
    name: "Crispinus M.Goa",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Cris-sidakarya pemogan.jpeg",
    branchId: "jj-pet-sidakarya",
  },

  //peliatan
  {
    name: "Daniel",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Daniel-peliatan.jpeg",
    branchId: "jj-pet-peliatan",
  },

  //dalung
   {
    name: "Kadek Heri Wantika",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Kadek Heri Wantika-dalung.jpeg",
    branchId: "jj-pet-dalung",
  },
  
  //Balian
  {
    name: "Alin Sigalingging",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Balian Alin Sigalingging.jpeg",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Julius Indra",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Kennel Balian Julius Indra.jpeg",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Supendinata",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Kennel Balian Supendinata.jpeg",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Robi Benu",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Robi Benu-Balian.jpeg",
    branchId: "jj-pet-house-balian",
  },
  
  //kedewatan
  {
    name: "Rensa",
    specialty: "Dog & Cat Grooming",
    specialties: ["Grooming"],
    image: "/groomer/Rensa-Kedewatan.jpeg",
    branchId: "jj-pet-kedewatan",
  },

  //cab ayani tidak ada
  // {
  //   name: "Wayan Djobi Djoba",
  //   specialty: "Dog & Cat Grooming",
  //   specialties: ["Grooming"],
  //   image: "/groomer/Wayan Djobi Djoba - ayani.jpeg",
  //   branchId: "jj-pet-house-ayani",
  // },
 
  
]

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
    requiresPeople: true,
    item: [
      { id: "dog_dry_puppy", name: "Dry Grooming Dog - Puppy", price: 195000, petType: ["Anjing"], type: "main" },
      { id: "dog_dry_small", name: "Dry Grooming Dog - Small", price: 230000, petType: ["Anjing"], type: "main" },
      { id: "dog_dry_medium", name: "Dry Grooming Dog - Medium", price: 260000, petType: ["Anjing"], type: "main" },
      { id: "dog_dry_large", name: "Dry Grooming Dog - Large", price: 325000, petType: ["Anjing"], type: "main" },
      { id: "dog_dry_special", name: "Dry Grooming Dog - Special Breed", price: 390000, petType: ["Anjing"], type: "main" },

      { id: "cat_dry_kitten", name: "Dry Grooming Cat - Kitten", price: 165000, petType: ["Kucing"], type: "main" },
      { id: "cat_dry_adult", name: "Dry Grooming Cat - Adult", price: 195000, petType: ["Kucing"], type: "main" },
      { id: "cat_dry_longhair", name: "Dry Grooming Cat - Longhair", price: 250000, petType: ["Kucing"], type: "main" },

      { id: "gundul_puppy", name: "Haircut Gundul - Puppy SB", price: 145000, petType: ["Anjing"], type: "main" },
      { id: "gundul_small", name: "Haircut Gundul - Small", price: 190000, petType: ["Anjing"], type: "main" },
      { id: "gundul_medium", name: "Haircut Gundul - Medium", price: 230000, petType: ["Anjing"], type: "main" },
      { id: "gundul_large", name: "Haircut Gundul - Large", price: 270000, petType: ["Anjing"], type: "main" },
      { id: "gundul_special", name: "Haircut Gundul - Special Breed", price: 300000, petType: ["Anjing"], type: "main" },

      { id: "style_puppy", name: "Haircut Style - Puppy SB", price: 250000, petType: ["Anjing"], type: "main" },
      { id: "style_small", name: "Haircut Style - Small", price: 275000, petType: ["Anjing"], type: "main" },
      { id: "style_medium", name: "Haircut Style - Medium", price: 300000, petType: ["Anjing"], type: "main" },
      { id: "style_large", name: "Haircut Style - Large", price: 350000, petType: ["Anjing"], type: "main" },
      { id: "style_special", name: "Haircut Style - Special Breed", price: 400000, petType: ["Anjing"], type: "main" },

      { id: "kusut_puppy", name: "Perawatan Bulu Kusut - Puppy SB", price: 25000, petType: ["Anjing"], type: "additional" },
      { id: "kusut_small", name: "Perawatan Bulu Kusut - Small", price: 35000, petType: ["Anjing", "Kucing"], type: "additional" },
      { id: "kusut_medium", name: "Perawatan Bulu Kusut - Medium", price: 45000, petType: ["Anjing", "Kucing"], type: "additional" },
      { id: "kusut_large", name: "Perawatan Bulu Kusut - Large", price: 55000, petType: ["Anjing", "Kucing"], type: "additional" },
      { id: "kusut_special", name: "Perawatan Bulu Kusut - Special Breed", price: 75000, petType: ["Anjing", "Kucing"], type: "additional" }
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
      { id: "small_room_normal", name: "Small Room (Normal)", price: 100000, petType: ["Anjing", "Kucing"], type: "main" },
      { id: "large_room_normal", name: "Large Room (Normal)", price: 175000, petType: ["Anjing", "Kucing"], type: "main" },
      { id: "small_room_high", name: "Small Room (High Season)", price: 200000, petType: ["Anjing", "Kucing"], type: "main" },
      { id: "large_room_high", name: "Large Room (High Season)", price: 350000, petType: ["Anjing", "Kucing"], type: "main" }
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
    item: [
      {
        id: "consultation_general",
        name: "Konsultasi Umum",
        price: 200000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "vaccination",
        name: "Vaksinasi",
        price: 250000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "dermatology",
        name: "Pemeriksaan Dermatologi",
        price: 300000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["Dermatology"]
      },
      {
        id: "surgery",
        name: "Konsultasi Bedah",
        price: 350000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["Surgery"]
      },
      {
        id: "radiography",
        name: "Radiografi",
        price: 400000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["Radiography"]
      },
      {
        id: "hematology",
        name: "Pemeriksaan Hematologi",
        price: 300000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["Hematology"]
      },
      {
        id: "exotic_pet",
        name: "Konsultasi Hewan Eksotik",
        price: 350000,
        petType: ["Hewan Eksotik"],
        type: "main",
        specialties: ["Exotic Pet"]
      }
    ],
    scheduleType: "single",
    requiresPeople: true
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
    image: "/image/petlove.jpeg",
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
    image: "/image/petsitter.jpeg",
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
    image: "/image/petcremation.jpeg",
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
    image: "/image/pettaxi.jpeg",
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

export const PET_TYPES: PetType[] = ["Anjing", "Kucing", "Other"]
