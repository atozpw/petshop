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
  bookingservices?: string[]
  image: string
  coordinates: {
    lat?: number
    lng?: number
  }
  featured?: boolean
}

export const BRANCHES: Branch[] = [
  {
    "id": "jj-pet-house-jakarta",
    "name": "JJ PET HOUSE JAKARTA",
    "city": "jakarta",
    "address": "Jl. Radio Dalam Raya Gandaria Utara, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12140",
    "phone": "0819-1298-2996",
    "whatsapp": "0819-1298-2996",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Hotel", "Pet Shop", "Clinic"],
    "bookingservices": ["grooming", "boarding", "clinic"],
    "image": "/image/Pict 48.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-house-mataram",
    "name": "JJ PET HOUSE MATARAM",
    "city": "lombok",
    "address": "Jl. Abdul Kadir Munsyi No.18, Punia, Kec. Mataram, Kota Mataram, Nusa Tenggara Barat 83125",
    "phone": "0811-346-755",
    "whatsapp": "0811-346-755",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-house-denpasar",
    "name": "JJ PET HOUSE",
    "city": "bali",
    "address": "Jl. Tukad Batanghari No.77, Dauh Puri Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80225",
    "phone": "0811-3999-893",
    "whatsapp": "0811-3999-893",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 48.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-sidakarya",
    "name": "JJ PET SIDAKARYA",
    "city": "bali",
    "address": "Jl. Sidakarya No.38C, Sesetan, Denpasar Selatan, Kota Denpasar, Bali 80224",
    "phone": "0811-3975-222",
    "whatsapp": "0811-3975-222",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-nangka",
    "name": "JJ PET NANGKA",
    "city": "bali",
    "address": "Jl. Nangka Utara No.265, Tonja, Kec. Denpasar Utara, Kota Denpasar, Bali 80239",
    "phone": "0811-3960-8129",
    "whatsapp": "0811-3960-8129",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-kesambi",
    "name": "JJ PET KESAMBI",
    "city": "bali",
    "address": "Jl. Raya Kesambi No.80x, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    "phone": "0813-5353-9669",
    "whatsapp": "0813-5353-9669",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-munggu",
    "name": "JJ PET MUNGGU",
    "city": "bali",
    "address": "Jl. By Pass Tanah Lot No.8, Munggu, Kec. Mengwi, Kabupaten Badung, Bali 80351",
    "phone": "0813-3915-3024",
    "whatsapp": "0813-3915-3024",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-house-udayana",
    "name": "JJ PET HOUSE UDAYANA",
    "city": "bali",
    "address": "Jl. Raya Uluwatu No.130, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80362",
    "phone": "0857-3962-9606",
    "whatsapp": "0857-3962-9606",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Hotel", "Pet Shop", "Playground", "Clinic"],
    "bookingservices": ["grooming", "boarding", "clinic"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-nusa-dua",
    "name": "JJ PET NUSA DUA",
    "city": "bali",
    "address": "Jl. Siligita No.50, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80363",
    "phone": "0857-3863-2180",
    "whatsapp": "0857-3863-2180",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-tabanan-2",
    "name": "JJ PET TABANAN 2",
    "city": "bali",
    "address": "Budi Utomo Jl. Dr. Ir. Soekarno No.Dekat, Dauh Peken, Kec. Kediri, Kabupaten Tabanan, Bali 82113",
    "phone": "0822-1116-1644",
    "whatsapp": "0822-1116-1644",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-kedewatan",
    "name": "JJ PET KEDEWATAN",
    "city": "bali",
    "address": "Jl. Raya Lungsiakan No.99, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80561",
    "phone": "0821-4566-5858",
    "whatsapp": "0821-4566-5858",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-bilok",
    "name": "JJ PET BILOK",
    "city": "bali",
    "address": "Jl. Tukad Bilok No.90D, Sanur Kauh, Denpasar Selatan, Kota Denpasar, Bali 80227",
    "phone": "0811-3901-012",
    "whatsapp": "0811-3901-012",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-pemogan",
    "name": "JJ PET PEMOGAN",
    "city": "bali",
    "address": "Jl. Raya Pemogan No.240, Pemogan, Denpasar Selatan, Kota Denpasar, Bali 80221",
    "phone": "0811-3818-988",
    "whatsapp": "0811-3818-988",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-ayani",
    "name": "JJ PET AYANI",
    "city": "bali",
    "address": "Jl. Ahmad Yani utara No.371, panguyangan, Denpasar utara, Kota Denpasar, Bali 80115",
    "phone": "0811-3960-5084",
    "whatsapp": "0811-3960-5084",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop", "Clinic"],
    "bookingservices": ["grooming", "clinic"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-kerobokan",
    "name": "JJ PET KEROBOKAN",
    "city": "bali",
    "address": "Shop 1, Jl. Raya Anyar No.30, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    "phone": "0812-4689-6923",
    "whatsapp": "0812-4689-6923",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-kunti",
    "name": "JJ PET KUNTI",
    "city": "bali",
    "address": "Jl. Kunti II, Jl. Raya Basangkasa No.09, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361",
    "phone": "0821-4694-0534",
    "whatsapp": "0821-4694-0534",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-jimbaran",
    "name": "JJ PET JIMBARAN",
    "city": "bali",
    "address": "654Q+93W, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    "phone": "0811-3999-873",
    "whatsapp": "0811-3999-873",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-pecatu",
    "name": "JJ PET PECATU",
    "city": "bali",
    "address": "Jl. Raya Uluwatu Pecatu, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    "phone": "0822-6634-2101",
    "whatsapp": "0822-6634-2101",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-batubulan",
    "name": "JJ PET BATUBULAN",
    "city": "bali",
    "address": "Jln Raya Sukawati No.7, Kec. Sukawati, Gianyar, Bali (sebelah Kimora)",
    "phone": "0813-3785-7345",
    "whatsapp": "0857-3863-2180",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-peliatan",
    "name": "JJ PET PELIATAN",
    "city": "bali",
    "address": "Br. Teruna, Jl. Cok Gede Rai, Peliatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80471",
    "phone": "0812-9677-5858",
    "whatsapp": "0812-9677-5858",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-house-balian",
    "name": "JJ PET HOUSE BALIAN",
    "city": "bali",
    "address": "Jl. Tukad Balian No.133A, Renon, Denpasar Selatan, Kota Denpasar, Bali 80221",
    "phone": "0811-3810-3349",
    "whatsapp": "0811-3810-3349",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Hotel", "Pet Shop", "Playground", "Clinic"],
    "bookingservices": ["grooming", "boarding", "clinic"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-imbo",
    "name": "JJ PET IMBO",
    "city": "bali",
    "address": "Jl. Imam Bonjol No.495B, Pemecutan Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80119",
    "phone": "0812-1136-6663",
    "whatsapp": "0812-1136-6663",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-dalung",
    "name": "JJ PET DALUNG",
    "city": "bali",
    "address": "Jl. Perum Dalung Permai Blok oo No.23, Dalung, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    "phone": "0813-3990-7700",
    "whatsapp": "0813-3990-7700",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-canggu",
    "name": "JJ PET CANGGU",
    "city": "bali",
    "address": "Jl. Raya Canggu, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    "phone": "0813-3939-5834",
    "whatsapp": "0813-3939-5834",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-tuban",
    "name": "JJ PET TUBAN",
    "city": "bali",
    "address": "Jl. Raya Tuban No.5, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361",
    "phone": "0858-1724-8439",
    "whatsapp": "0858-1724-8439",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-uluwatu",
    "name": "JJ PET ULUWATU",
    "city": "bali",
    "address": "Jl. Raya Uluwatu, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    "phone": "0858-5753-8381",
    "whatsapp": "0858-5753-8381",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Grooming", "Pet Shop"],
    "bookingservices": ["grooming"],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-tabanan-1",
    "name": "JJ PET TABANAN 1",
    "city": "bali",
    "address": "Jl. Gatot Subroto, Banjar Anyar, Kec. Kediri, Kabupaten Tabanan, Bali 82121",
    "phone": "0811-3960-6565",
    "whatsapp": "0811-3960-6565",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  {
    "id": "jj-pet-ubud",
    "name": "JJ PET UBUD",
    "city": "bali",
    "address": "Jl. Raya Pengosekan No.2013, MAS, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
    "phone": "0812-4687-5356",
    "whatsapp": "0812-4687-5356",
    "email": "",
    "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
    "services": ["Pet Shop"],
    "bookingservices": [],
    "image": "/image/Pict 32.jpeg",
    "coordinates": {},
    "featured": false
  },
  




  //belum refisi
 
  // {
  //   "id": "josh-pet-shop",
  //   "name": "JOSH PET SHOP",
  //   "city": "bali",
  //   "address": "Jl. Raya Uluwatu, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
  //   "phone": "082146491803",
  //   "whatsapp": "082146491803",
  //   "email": "",
  //   "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
  //   "services": ["Pet Shop"],
  //   "bookingservices": [],
  //   "image": "/image/Pict 32.jpeg",
  //   "coordinates": {},
  //   "featured": false
  // },
  // {
  //   "id": "moon-pet-shop",
  //   "name": "MOON PET SHOP",
  //   "city": "bali",
  //   "address": "Shop 1, Jl. Raya Anyar No.30, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
  //   "phone": "087860357785",
  //   "whatsapp": "087860357785",
  //   "email": "",
  //   "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
  //   "services": ["Pet Shop"],
  //   "bookingservices": ["grooming", "boarding", "clinic"],
  //   "image": "/image/Pict 32.jpeg",
  //   "coordinates": {},
  //   "featured": false
  // },  
  // {
  //   "id": "jovy-pet-shop",
  //   "name": "JOVY PET SHOP",
  //   "city": "bali",
  //   "address": "Jl. By Pass Tanah Lot No.8, Munggu, Kec. Mengwi, Kabupaten Badung, Bali 80351",
  //   "phone": "087861796249",
  //   "whatsapp": "087861796249",
  //   "email": "",
  //   "hours": { "weekday": "08:00 - 21:00", "weekend": "08:00 - 22:00" },
  //   "services": ["Pet Shop"],
  //   "bookingservices": ["grooming", "boarding", "clinic"],
  //   "image": "/image/Pict 32.jpeg",
  //   "coordinates": {},
  //   "featured": false
  // },
  
  
  
  
  
 
]

export const CITIES = [
  { id: "jakarta", name: "Jakarta", icon: "🌆", count: 4 },
  { id: "bali", name: "Bali", icon: "🏝️", count: 4 },
  { id: "lombok", name: "Lombok", icon: "🏖️", count: 3 },
]
