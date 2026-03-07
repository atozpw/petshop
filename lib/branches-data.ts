export interface Branch {
  id: string
  name: string
  city: "jakarta" | "bali" | "lombok"
  address: string
  phone: string
  whatsapp: string
  email: string
  hours: {
    weekday: string
    weekend: string
  }
  services: string[]
  image: string
  coordinates: {
    lat: number
    lng: number
  }
  featured?: boolean
}

export const BRANCHES: Branch[] = [
  {
    id: "denpasar-tukad-batanghari",
    name: "JJ PET HOUSE",
    city: "bali",
    address: "Jl. Tukad Batanghari No.77, Dauh Puri Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80225",
    phone: "0811-3999-893",
    whatsapp: "0811-3999-893",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Hotel", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "dalung",
    name: "JJ PET DALUNG",
    city: "bali",
    address: "Jl. Perum Dalung Permai Blok OO No.23, Dalung, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    phone: "0813-3990-7700",
    whatsapp: "0813-3990-7700",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Hotel", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "kesambi",
    name: "JJ PET KESAMBI",
    city: "bali",
    address: "Jl. Raya Kesambi No.80x, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    phone: "0813-5353-9669",
    whatsapp: "0813-5353-9669",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Hotel", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "mataram",
    name: "JJ PET HOUSE MATARAM",
    city: "lombok",
    address: "Jl. Abdul Kadir Munsyi No.18, Punia, Kec. Mataram, Kota Mataram, Nusa Tenggara Barat 83125",
    phone: "0811-346-755",
    whatsapp: "0811-346-755",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Hotel", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "udayana",
    name: "JJ PET HOUSE UDAYANA",
    city: "bali",
    address: "Jl. Raya Uluwatu No.130, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80362",
    phone: "0857-3962-9606",
    whatsapp: "0857-3962-9606",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Hotel", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "balian",
    name: "JJ PET HOUSE BALIAN",
    city: "bali",
    address: "Jl. Tukad Balian No.133A, Renon, Denpasar Selatan, Kota Denpasar, Bali 80221",
    phone: "0811-3810-3349",
    whatsapp: "0811-3810-3349",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Hotel", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "uluwatu",
    name: "JJ PET ULUWATU",
    city: "bali",
    address: "Jl. Raya Uluwatu, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    phone: "081353782922",
    whatsapp: "081353782922",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Hotel", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "josh-pet",
    name: "JOSH PET SHOP",
    city: "bali",
    address: "Jl. Raya Uluwatu, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    phone: "082146491803",
    whatsapp: "082146491803",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "tuban",
    name: "JJ PET TUBAN",
    city: "bali",
    address: "Jl. Raya Tuban No.5, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361",
    phone: "082146491803",
    whatsapp: "082146491803",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "nusa-dua",
    name: "JJ PET NUSA DUA",
    city: "bali",
    address: "Jl. Siligita No.50, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80363",
    phone: "082146491803",
    whatsapp: "082146491803",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "pecatu",
    name: "JJ PET PECATU",
    city: "bali",
    address: "Jl. Raya Uluwatu Pecatu, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    phone: "081353782922",
    whatsapp: "081353782922",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Grooming", "Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  },
  {
    id: "batubulan",
    name: "JJ PET BATUBULAN",
    city: "bali",
    address: "Jln Raya Sukawati No.7, Kecamatan Sukawati, Gianyar (Sebelah Kimora)",
    phone: "082146491803",
    whatsapp: "082146491803",
    email: "",
    hours: { weekday: "08:00 - 21:00", weekend: "08:00 - 22:00" },
    services: ["Pet Shop"],
    image: "/image/Pict 32.jpeg",
    coordinates: {},
    featured: false
  }
]

export const CITIES = [
  { id: "jakarta", name: "Jakarta", icon: "🌆", count: 4 },
  { id: "bali", name: "Bali", icon: "🏝️", count: 4 },
  { id: "lombok", name: "Lombok", icon: "🏖️", count: 3 },
]
