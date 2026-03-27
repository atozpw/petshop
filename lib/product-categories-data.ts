export interface ProductCategory {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  fullDescription: string
  image: string
  color: string
  benefits: string[]
  productCount: number
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "pet-food",
    name: "Pet Food",
    slug: "pet-food",
    icon: "🍖",
    description: "Makanan berkualitas tinggi untuk anjing dan kucing",
    fullDescription: `Pet Food adalah kategori produk penting untuk kesehatan dan nutrisi hewan peliharaan Anda. Kami menyediakan berbagai pilihan makanan premium dari brand ternama lokal dan internasional yang diformulasikan khusus sesuai dengan kebutuhan nutrisi anjing dan kucing.

Produk Pet Food kami meliputi:
• Dry Food (Kibble) - Makanan kering yang praktis dan terjangkau
• Wet Food - Makanan basah yang lebih lezat dan mudah dicerna
• Semi-Moist Food - Kombinasi dry dan wet food
• Specialized Diet - Makanan khusus untuk kondisi kesehatan tertentu (sensitive stomach, weight management, dental care, dll)
• Puppy & Kitten Food - Nutrisi khusus untuk tahap pertumbuhan
• Senior Pet Food - Formula khusus untuk hewan tua

Semua produk Pet Food kami telah melalui quality control ketat dan aman untuk dikonsumsi hewan peliharaan Anda. Dapatkan konsultasi gratis dari tim ahli kami untuk memilih makanan yang tepat sesuai kondisi kesehatan dan preferensi hewan kesayangan Anda.`,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#FF6B6B",
    benefits: [
      "Nutrisi seimbang untuk kesehatan optimal",
      "Menggunakan bahan berkualitas premium",
      "Formulasi khusus sesuai usia dan kondisi",
      "Meningkatkan kesehatan kulit dan bulu",
      "Mendukung sistem imun yang kuat"
    ],
    productCount: 45
  },
  {
    id: "pet-accessories",
    name: "Pet Accessories",
    slug: "pet-accessories",
    icon: "🎀",
    description: "Aksesori dan perlengkapan untuk kenyamanan hewan peliharaan",
    fullDescription: `Pet Accessories adalah kategori yang menyediakan berbagai perlengkapan dan aksesori untuk meningkatkan kenyamanan dan kebahagiaan hewan peliharaan Anda. Dari perlengkapan harian hingga mainan interaktif, semua tersedia dengan desain modern dan kualitas terbaik.

Produk Pet Accessories kami meliputi:
• Collar & Leash - Kalung dan tali tambat dengan desain stylish dan aman
• Bed & Crate - Tempat tidur nyaman dan kotak transport
• Toys - Mainan berbagai jenis (ball, frisbee, puzzle, rope, dll)
• Bowls & Feeders - Tempat makan dan minum dengan material food-safe
• Grooming Tools - Peralatan grooming untuk perawatan di rumah
• Apparel - Pakaian untuk hewan peliharaan
• Travel Accessories - Perlengkapan untuk membawa hewan saat bepergian

Semua aksesori kami dipilih dengan cermat untuk memastikan keamanan dan kenyamanan hewan kesayangan Anda. Desainnya yang stylish juga membuat hewan peliharaan Anda tampil percaya diri dan menarik.`,
    image: "https://images.unsplash.com/photo-1605092116196-404f5b8caa15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#4ECDC4",
    benefits: [
      "Desain modern dan stylish",
      "Material aman dan tahan lama",
      "Meningkatkan kenyamanan hewan",
      "Berbagai pilihan ukuran dan warna",
      "Harga kompetitif dengan kualitas terjamin"
    ],
    productCount: 63
  },
  {
    id: "pet-essential",
    name: "Pet Essential",
    slug: "pet-essential",
    icon: "🧴",
    description: "Produk perawatan dasar dan perlengkapan wajib untuk hewan",
    fullDescription: `Pet Essential adalah kategori produk yang berisi kebutuhan dasar dan perlengkapan wajib untuk perawatan harian hewan peliharaan Anda. Produk-produk ini sangat penting untuk menjaga kesehatan, kebersihan, dan kenyamanan hewan kesayangan.

Produk Pet Essential kami meliputi:
• Shampoo & Conditioner - Produk mandi khusus untuk anjing dan kucing
• Toothbrush & Toothpaste - Perawatan gigi dan mulut
• Nail Clippers - Pemotong kuku yang aman
• Brush & Comb - Sisir dan sikat untuk perawatan bulu
• Deodorant & Perfume - Penyegar dan pewangi tubuh hewan
• Cleaning Wipes - Lap pembersih untuk area sensitif
• Flea & Tick Prevention - Produk pencegah kutu dan parasit
• Supplements - Vitamin dan suplemen tambahan untuk kesehatan

Semua produk Pet Essential kami dipilih dari brand terpercaya dan telah terbukti aman serta efektif. Rutin menggunakan produk essential ini akan menjaga hewan peliharaan Anda tetap sehat, bersih, dan bahagia.`,
    image: "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#95E1D3",
    benefits: [
      "Menjaga kebersihan harian hewan",
      "Mencegah penyakit dan masalah kesehatan",
      "Produk aman dan hypoallergenic",
      "Cocok untuk semua jenis hewan",
      "Hasil maksimal dengan pemakaian rutin"
    ],
    productCount: 38
  },
  {
    id: "pet-healthy",
    name: "Pet Healthy",
    slug: "pet-healthy",
    icon: "💪",
    description: "Suplemen dan produk kesehatan premium untuk hewan peliharaan",
    fullDescription: `Pet Healthy adalah kategori produk kesehatan premium yang dirancang untuk mendukung kesejahteraan dan kesehatan optimal hewan peliharaan Anda. Produk-produk ini mengandung nutrisi dan bahan-bahan berkualitas tinggi yang telah diteliti secara ilmiah.

Produk Pet Healthy kami meliputi:
• Vitamins & Minerals - Vitamin dan mineral untuk nutrisi lengkap
• Omega-3 Supplements - Suplemen omega-3 untuk kesehatan kulit dan bulu
• Joint Support - Produk untuk kesehatan sendi dan mobilitas
• Probiotics - Bakteri baik untuk kesehatan pencernaan
• Immune Booster - Produk untuk meningkatkan imunitas
• Dental Health - Produk untuk kesehatan gigi dan mulut
• Skin & Coat - Suplemen khusus untuk kulit dan bulu yang sehat
• Pet Medical Supplies - Perlengkapan medis dasar (thermometer, wound care, dll)

Semua produk Pet Healthy kami telah tersertifikasi dan direkomendasikan oleh dokter hewan profesional. Memberikan suplemen kesehatan yang tepat akan membantu memperpanjang umur dan meningkatkan kualitas hidup hewan kesayangan Anda.`,
    image: "https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#F7DC6F",
    benefits: [
      "Mendukung kesehatan jangka panjang",
      "Formula yang telah teruji klinis",
      "Meningkatkan energi dan vitalitas",
      "Membantu pencegahan penyakit",
      "Direkomendasikan oleh dokter hewan"
    ],
    productCount: 29
  }
]
