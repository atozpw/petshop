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
    image: "https://image.chewy.com/catalog/general/images/friskies-shreds-in-gravy-variety-pack-canned-cat-food-5-5oz-can-case-of-40/img-510128._AC_SL248_V1_.jpg",
    description: "Makanan premium berkualitas tinggi untuk anjing dengan nutrisi lengkap dan seimbang.",
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
    name: "Cat Litter Premium",
    price: 50000,
    category: "Accessory",
    image: "https://image.chewy.com/catalog/general/images/moe/0691f1f2-2981-71e2-8000-42e041aa48ff._AC_SL248_V1_.jpg",
    description: "Pasir kucing premium anti bau dan mudah dibersihkan.",
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
    name: "Dry Cat Food Salmon",
    price: 120000,
    category: "Makanan",
    image: "https://image.chewy.com/catalog/general/images/purina-pro-plan-sensitive-skin-stomach-salmon-rice-formula-dry-cat-food/img-247353._AC_SL248_V1_.jpg",
    description: "Makanan kucing kering rasa salmon untuk pencernaan sensitif.",
    rating: 4.7,
    reviews: 321,
    variants: [
      {
        id: "size",
        name: "Ukuran",
        options: [
          { name: "1 Kg", value: "1kg", priceModifier: 0 },
          { name: "3 Kg", value: "3kg", priceModifier: 150000 },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Dog Snack Dental Stick",
    price: 45000,
    category: "Snack",
    image: "https://image.chewy.com/catalog/general/images/pedigree-dentastix-original-large-breed-dental-dog-treats/img-140741._AC_SL248_V1_.jpg",
    description: "Snack anjing untuk menjaga kesehatan gigi dan mulut.",
    rating: 4.5,
    reviews: 198,
    variants: [
      {
        id: "pack",
        name: "Isi",
        options: [
          { name: "Small Pack", value: "small", priceModifier: 0 },
          { name: "Large Pack", value: "large", priceModifier: 30000 },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Cat Toy Feather Wand",
    price: 30000,
    category: "Mainan",
    image: "https://image.chewy.com/catalog/general/images/go-cat-teaser-cat-catcher-wand-cat-toy/img-177741._AC_SL248_V1_.jpg",
    description: "Mainan kucing dengan bulu alami untuk melatih insting berburu.",
    rating: 4.4,
    reviews: 112,
    variants: [
      {
        id: "color",
        name: "Warna",
        options: [
          { name: "Merah", value: "red", priceModifier: 0 },
          { name: "Biru", value: "blue", priceModifier: 0 },
        ],
      },
    ],
  },

  {
    id: 6,
    name: "Aquarium Filter Mini",
    price: 95000,
    category: "Accessory",
    image: "https://image.chewy.com/catalog/general/images/tetra-whisper-internal-aquarium-filter/img-269444._AC_SL248_V1_.jpg",
    description: "Filter akuarium mini dengan aliran air stabil dan senyap.",
    rating: 4.3,
    reviews: 89,
    variants: [
      {
        id: "power",
        name: "Kapasitas",
        options: [
          { name: "10L", value: "10l", priceModifier: 0 },
          { name: "20L", value: "20l", priceModifier: 25000 },
        ],
      },
    ],
  },

  {
    id: 7,
    name: "Bird Seed Mix",
    price: 40000,
    category: "Makanan",
    image: "https://image.chewy.com/catalog/general/images/kaytee-fiesta-gourmet-variety-bird-food/img-135419._AC_SL248_V1_.jpg",
    description: "Campuran biji-bijian berkualitas untuk burung peliharaan.",
    rating: 4.6,
    reviews: 76,
    variants: [
      {
        id: "weight",
        name: "Berat",
        options: [
          { name: "500 gr", value: "500g", priceModifier: 0 },
          { name: "1 Kg", value: "1kg", priceModifier: 25000 },
        ],
      },
    ],
  },

  {
    id: 8,
    name: "Dog Leash Nylon",
    price: 60000,
    category: "Accessory",
    image: "https://image.chewy.com/catalog/general/images/frisco-solid-martingale-dog-collar/img-225063._AC_SL248_V1_.jpg",
    description: "Tali anjing berbahan nylon kuat dan nyaman digunakan.",
    rating: 4.5,
    reviews: 134,
    variants: [
      {
        id: "length",
        name: "Panjang",
        options: [
          { name: "1.2 m", value: "1.2m", priceModifier: 0 },
          { name: "2 m", value: "2m", priceModifier: 20000 },
        ],
      },
    ],
  },

  {
    id: 9,
    name: "Cat Shampoo Anti Flea",
    price: 55000,
    category: "Perawatan",
    image: "https://image.chewy.com/catalog/general/images/earthbath-ultra-mild-tearless-puppy-kitten-shampoo/img-135656._AC_SL248_V1_.jpg",
    description: "Shampoo kucing anti kutu, lembut dan aman untuk kulit sensitif.",
    rating: 4.7,
    reviews: 167,
    variants: [
      {
        id: "volume",
        name: "Volume",
        options: [
          { name: "200 ml", value: "200ml", priceModifier: 0 },
          { name: "400 ml", value: "400ml", priceModifier: 30000 },
        ],
      },
    ],
  },

  {
    id: 10,
    name: "Dog Bed Cozy",
    price: 220000,
    category: "Tempat Tidur",
    image: "https://image.chewy.com/catalog/general/images/frisco-round-bolster-cat-dog-bed/img-235064._AC_SL248_V1_.jpg",
    description: "Tempat tidur anjing empuk dan nyaman untuk istirahat.",
    rating: 4.8,
    reviews: 201,
    variants: [
      {
        id: "size",
        name: "Ukuran",
        options: [
          { name: "M", value: "m", priceModifier: 0 },
          { name: "L", value: "l", priceModifier: 80000 },
        ],
      },
    ],
  },
]
