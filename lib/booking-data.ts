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
    specialties: ["Exotic Pet", "Dermatology", "Surgery", "Stemcell Therapy","General Practitioner",],
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
    branchId: "jj-pet-house-udayana",
  },
  {
    name: "Drh. Putu Aditya Pratama Artha Putra, S.KH",
    specialty: "Surgery, Internal Medicine, Vaccine, Dentistry, Urgent Care",
    specialties: ["Surgery", "Internal Medicine", "Vaccination", "Dentistry", "Urgent Care","General Practitioner",],
    image: "/doctor/Aditya Pratama.png",
    branchId: "jj-pet-house-balian",
  },
  {
    name: "Drh. Jessy Filomena Fernanda Bento, S.KH",
    specialty: "General Practitioner, Special Interest Dermatology",
    specialties: ["General Practitioner", "Dermatology"],
    image: "/doctor/Jessy Filomena.png",
    branchId: "jj-pet-house-udayana",
  },
  {
    name: "Drh. Dewi Ratnasari",
    specialty: "General Practitioner, Special Interest Hematology and Radiography",
    specialties: ["General Practitioner", "Hematology", "Radiography"],
    image: "/doctor/Dewi Ratnasari.png",
    branchId: "jj-pet-house-udayana",
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
    branchId: "jj-pet-house-udayana",
  },
  {
    name: "Drh. Sagung Istri Wahyunin diarie,S.,kh.",
    specialty: "General Practitioner",
    specialties: ["General Practitioner"],
    image: "/doctor/Sagung Istri Wahyunin.png",
    branchId: "jj-pet-house-udayana",
  },
  {
    name: "Drh. Miranti Rahma Yunita",
    specialty: "General Practitioner",
    specialties: ["General Practitioner"],
    image: "/doctor/Miranti Rahma Yunita.png",
    branchId: "jj-pet-house-udayana",
  },
   {
    name: "Drh. Devi",
    specialty: "Internal Medicine",
    specialties: ["internal medicine"],
    image: "/doctor/Drh. Devi - Internis.jpeg",
    branchId: "jj-pet-house-balian",
  },
   {
    name: "Drh. Tuis",
    specialty: "Surgery",
    specialties: ["Surgery"],
    image: "/doctor/Drh Tuis - Surgeon.jpeg",
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
        id: "sewa_alat_mikroskop",
        name: "Sewa Alat Mikroskop",
        price: 1500,
        petType: ["Anjing", "Kucing", "Other"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fee_dokter_hewan_exotic",
        name: "FEE DOKTER HEWAN EXOTIC",
        price: 200000,
        petType: ["Anjing", "Kucing", "Other"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "vagina_smear_test",
        name: "VAGINA SMEAR TEST",
        price: 230000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "neuter_cat_sterilization",
        name: "NEUTER CAT STERILIZATION",
        price: 800000,
        petType: ["Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "blood_test_cbc_surgery",
        name: "BLOOD TEST / CBC SURGERY",
        price: 288000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "konsultasi_online",
        name: "KONSULTASI ONLINE 10-60 menit",
        price: 85000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "amputation_inhalasi",
        name: "AMPUTATION-INHALASI",
        price: 3000000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "xray_test_cv_putri_jeje",
        name: "X-RAY TEST CV PUTRI JEJE (PER FOTO)",
        price: 450000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "spay_dog_abortion_inhalasi",
        name: "SPAY DOG STERILLIZATION+ABORTION-INHALASI",
        price: 150000,
        petType: ["Anjing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "spay_dog_abortion_general_anestesi",
        name: "SPAY DOG STERILLIZATION+ABORTION-GENERAL ANESTESI",
        price: 150000,
        petType: ["Anjing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "home_visit_member",
        name: "HOME VISIT MEMBER",
        price: 120000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "dental_scaling_general_anestesi",
        name: "DENTAL SCALLING DOG/CATS-GENRAL ANESTESI",
        price: 1700000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "dental_scaling_inhalasi",
        name: "DENTAL SCALLING DOG/CATS-INHALASI",
        price: 2500000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "spay_dog_general_anestesi",
        name: "SPAY DOG STERILLIZATION-GENERAL ANESTESI",
        price: 2200000,
        petType: ["Anjing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "spay_dog_inhalasi",
        name: "SPAY DOG STERILLIZATION-INHALASI",
        price: 2500000,
        petType: ["Anjing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "neuter_dog_general_anestesi",
        name: "NEUTER DOG STERILLIZATION-GENERAL ANESTESI",
        price: 1200000,
        petType: ["Anjing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "spay_cat_sterilization",
        name: "SPAY CAT STERILIZATION",
        price: 0,
        petType: ["Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "spay_pyometra",
        name: "SPAY PYOMETRA",
        price: 214000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "handling_fee",
        name: "HANDLING FEE",
        price: 300000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "ultrasonografi_diagnostic",
        name: "ULTRASONOGRAFI DIAGNOSTIC",
        price: 450000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "electrocardiography",
        name: "Electrocardiography (Cardiac)",
        price: 450000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "boarding",
        name: "BOARDING",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "visit_booking",
        name: "VISIT BOKING",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fine_needle_aspiration",
        name: "Fine Needle Aspiration(FNA)",
        price: 800000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "complete_fecal_test",
        name: "COMPLETE FECAL TEST",
        price: 500000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "smear_fecal",
        name: "SMEAR FECAL",
        price: 300000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "floating_fecal_cv",
        name: "FLOATING FECAL CV",
        price: 350000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "natif_fecal_cv",
        name: "NATIF FECAL CV",
        price: 150000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "infrared",
        name: "INFRARED",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "oxygen",
        name: "OXYGEN",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "general_checkup_boarding_grooming",
        name: "GENERAL CHECK UP PET BOARDING & GROOMING",
        price: 20000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "home_visit",
        name: "HOME VISIT",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "hospitalization_infeksius",
        name: "HOSPITALIZATION INFEKSIUS",
        price: 165000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "hospitalization_non_infeksius",
        name: "HOSPITALIZATION NON INFEKSIUS",
        price: 150000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "desharping_teeth",
        name: "DESHARPING TEETH",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "upcoming_booking",
        name: "UPCOMING BOOKING",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "akupuntur",
        name: "AKUPUNTUR",
        price: 540000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "hemapo_spuit",
        name: "HEMAPO + SPUIT",
        price: 28800,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fee_wound_treatment",
        name: "FEE WOUND TREATMENT",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fecal_test_citology",
        name: "FECAL TEST CITOLOGY",
        price: 198000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "euthanasia",
        name: "EUTHANASIA",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "papiloma_surgery",
        name: "PAPILOMA SURGERY",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fee_partus",
        name: "FEE PARTUS",
        price: 270000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "entropion",
        name: "ENTROPION",
        price: 360000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "nail_clipper",
        name: "NAIL CLIPPER",
        price: 24000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "vaksinasi",
        name: "VAKSINASI",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "prolapsus_vagina",
        name: "PROLAPSUS VAGINA",
        price: 170000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "vulnus",
        name: "VULNUS",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "prolapsus_ani",
        name: "PROLAPSUS ANI",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "prolapsus_oculi",
        name: "PROLAPSUS OCULI",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "hematoma",
        name: "HEMATOMA",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "abcess",
        name: "ABCESS",
        price: 360000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "scalling",
        name: "SCALLING",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "caesar",
        name: "CAESAR",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "neuter",
        name: "NEUTER",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "abortion",
        name: "ABORTION",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "miasis",
        name: "MIASIS",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "hernia",
        name: "HERNIA",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "scrotal_ablation",
        name: "SCROTAL ABLATION",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "kateterisasi",
        name: "KATETERISASI",
        price: 270000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "cherry_eye",
        name: "CHERRY EYE",
        price: 72500,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "enukleasi",
        name: "ENUKLEASI",
        price: 360000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "tail_docking",
        name: "TAIL DOCKING",
        price: 360000,
        petType: ["Anjing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "blood_test_cbc",
        name: "BLOOD TEST / CBC",
        price: 288000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "blood_test_kolega_sample",
        name: "BLOOD TEST KOLEGA/SAMPLE",
        price: 231000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "blood_smear_test",
        name: "BLOOD SMEAR TEST",
        price: 432000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "test_calici",
        name: "TEST CALICI",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "complete_test_scrapping_cytology",
        name: "COMPLETE TEST (SCRAPPING & CYTOLOGY)",
        price: 230000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "xray_test",
        name: "X-RAY TEST",
        price: 450000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "ear_mites_test",
        name: "EAR MITES TEST",
        price: 72000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "feces_test",
        name: "FECES TEST",
        price: 90000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "test_pt_aptt",
        name: "TEST PT APTT",
        price: 432000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "collect_blood_sample_test",
        name: "COLLECT BLOOD SAMPLE TEST",
        price: 432000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "antibiotik_infus",
        name: "ANTIBIOTIK INFUS",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "injeksi_gs_spuit",
        name: "INJEKSI GS + SPUIT",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "treatment_anak_ekor",
        name: "TREATMENT ANAK / EKOR",
        price: 36000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "flushing_catheter",
        name: "FLUSHING CATHETER",
        price: 54000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "aspirasi",
        name: "ASPIRASI",
        price: 144000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "general_checkup",
        name: "GENERAL CHECK UP",
        price: 0,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fee_dokter",
        name: "FEE DOKTER",
        price: 150000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fee_infus",
        name: "FEE INFUS",
        price: 144000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "fee_ekplorasi_rektal",
        name: "FEE EKPLORASI REKTAL",
        price: 144000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "ear_cleaning",
        name: "EAR CLEANING",
        price: 72000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "cleaning_wound",
        name: "CLEANING WOUND",
        price: 72000,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
      },
      {
        id: "spay",
        name: "SPAY",
        price: 21600,
        petType: ["Anjing", "Kucing"],
        type: "main",
        specialties: ["General Practitioner"]
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
