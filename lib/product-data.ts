export interface ProductVariant {
  id: string
  name: string
  options: {
    name: string
    value: string
    priceModifier?: number
  }[]
}

export interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
  rating: number
  reviews: number
  variants: ProductVariant[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Dog Food Premium",
    price: 150000,
    category: "Makanan",
    image: "🥫",
    description: "Makanan premium berkualitas tinggi untuk anjing dengan nutrisi lengkap dan seimbang. Dibuat dari bahan-bahan pilihan yang aman dan sehat.",
    rating: 4.8,
    reviews: 245,
    variants: [
      {
        id: "size",
        name: "Ukuran",
        options: [
          { name: "1 Kg", value: "1kg", priceModifier: 0 },
          { name: "5 Kg", value: "5kg", priceModifier: 200000 },
          { name: "10 Kg", value: "10kg", priceModifier: 350000 },
        ],
      },
      {
        id: "flavor",
        name: "Rasa",
        options: [
          { name: "Ayam", value: "chicken", priceModifier: 0 },
          { name: "Sapi", value: "beef", priceModifier: 50000 },
          { name: "Ikan", value: "fish", priceModifier: 75000 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Cat Litter",
    price: 50000,
    category: "Accessory",
    image: "🪨",
    description: "Pasir kucing premium yang anti bau dan mudah dibersihkan. Ramah lingkungan dan aman untuk kucing kesayangan Anda.",
    rating: 4.6,
    reviews: 158,
    variants: [
      {
        id: "size",
        name: "Ukuran",
        options: [
          { name: "5 Liter", value: "5l", priceModifier: 0 },
          { name: "10 Liter", value: "10l", priceModifier: 30000 },
        ],
      },
      {
        id: "type",
        name: "Tipe",
        options: [
          { name: "Clay", value: "clay", priceModifier: 0 },
          { name: "Crystal", value: "crystal", priceModifier: 20000 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Grooming Kit",
    price: 200000,
    category: "Grooming",
    image: "✂️",
    description: "Paket lengkap perawatan hewan peliharaan dengan berbagai alat grooming profesional. Sempurna untuk grooming di rumah.",
    rating: 4.7,
    reviews: 312,
    variants: [
      {
        id: "package",
        name: "Paket",
        options: [
          { name: "Basic", value: "basic", priceModifier: 0 },
          { name: "Professional", value: "pro", priceModifier: 150000 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Pet Bed Deluxe",
    price: 350000,
    category: "Furniture",
    image: "🛏️",
    description: "Tempat tidur nyaman dan mewah untuk hewan kesayangan Anda. Bahan premium yang lembut dan tahan lama.",
    rating: 4.9,
    reviews: 189,
    variants: [
      {
        id: "size",
        name: "Ukuran",
        options: [
          { name: "S", value: "small", priceModifier: 0 },
          { name: "M", value: "medium", priceModifier: 100000 },
          { name: "L", value: "large", priceModifier: 200000 },
        ],
      },
      {
        id: "color",
        name: "Warna",
        options: [
          { name: "Abu-abu", value: "gray", priceModifier: 0 },
          { name: "Cokelat", value: "brown", priceModifier: 0 },
          { name: "Krem", value: "cream", priceModifier: 25000 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Toy Set Bundle",
    price: 100000,
    category: "Mainan",
    image: "🎾",
    description: "Paket mainan lengkap untuk menghibur hewan peliharaan Anda. Aman dan tahan lama.",
    rating: 4.5,
    reviews: 267,
    variants: [
      {
        id: "pet_type",
        name: "Jenis Hewan",
        options: [
          { name: "Anjing", value: "dog", priceModifier: 0 },
          { name: "Kucing", value: "cat", priceModifier: 0 },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Water Fountain",
    price: 250000,
    category: "Equipment",
    image: "💧",
    description: "Tempat minum otomatis dengan air yang selalu segar dan mengalir. Cocok untuk anjing dan kucing.",
    rating: 4.8,
    reviews: 143,
    variants: [
      {
        id: "capacity",
        name: "Kapasitas",
        options: [
          { name: "2 Liter", value: "2l", priceModifier: 0 },
          { name: "3 Liter", value: "3l", priceModifier: 50000 },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Leash & Collar",
    price: 75000,
    category: "Accessory",
    image: "🔗",
    description: "Tali dan kalung berkualitas tinggi untuk membawa hewan peliharaan Anda dengan aman.",
    rating: 4.7,
    reviews: 201,
    variants: [
      {
        id: "size",
        name: "Ukuran",
        options: [
          { name: "S", value: "small", priceModifier: 0 },
          { name: "M", value: "medium", priceModifier: 15000 },
          { name: "L", value: "large", priceModifier: 25000 },
        ],
      },
      {
        id: "color",
        name: "Warna",
        options: [
          { name: "Merah", value: "red", priceModifier: 0 },
          { name: "Biru", value: "blue", priceModifier: 0 },
          { name: "Hitam", value: "black", priceModifier: 0 },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Pet Carrier",
    price: 300000,
    category: "Travel",
    image: "📦",
    description: "Tas pembawa hewan peliharaan yang aman dan nyaman untuk perjalanan. Ventilasi sempurna dan mudah dibersihkan.",
    rating: 4.6,
    reviews: 124,
    variants: [
      {
        id: "size",
        name: "Ukuran",
        options: [
          { name: "S (Kucing)", value: "small", priceModifier: 0 },
          { name: "M", value: "medium", priceModifier: 75000 },
          { name: "L (Anjing)", value: "large", priceModifier: 150000 },
        ],
      },
    ],
  },
]
