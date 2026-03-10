export interface ForumThread {
  id: string
  title: string
  category: "general-chat" | "pet-stories" | "tips-tricks" | "recommendations"
  author: string
  authorImage?: string
  content: string
  createdAt: Date
  lastReplyAt?: Date
  replies: number
  views: number
  likes: number
  isPinned?: boolean
  isFeatured?: boolean
  tags?: string[]
}

export interface ForumCategory {
  id: string
  name: string
  icon: string
  description: string
  color: string
  threadCount: number
}

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    id: "general-chat",
    name: "General Chat",
    icon: "💬",
    description: "Obrolan santai tentang hewan peliharaan dan kehidupan sehari-hari",
    color: "bg-blue-50",
    threadCount: 1250,
  },
  {
    id: "pet-stories",
    name: "Pet Stories",
    icon: "📖",
    description: "Bagikan cerita seru dan lucu tentang hewan peliharaan Anda",
    color: "bg-pink-50",
    threadCount: 856,
  },
  {
    id: "tips-tricks",
    name: "Tips & Tricks",
    icon: "💡",
    description: "Berbagi tips dan trik perawatan hewan peliharaan",
    color: "bg-green-50",
    threadCount: 432,
  },
  {
    id: "recommendations",
    name: "Recommendations",
    icon: "⭐",
    description: "Rekomendasi produk, layanan, dan pengalaman JJ Pet House",
    color: "bg-yellow-50",
    threadCount: 589,
  },
]

export const FORUM_THREADS: ForumThread[] = [
  {
    id: "1",
    title: "Anjing saya baru pertama kali grooming, tips agar tidak stress?",
    category: "tips-tricks",
    author: "Dewi Kusuma",
    authorImage: "👩‍🦰",
    content:
      "Anjing saya (Golden Retriever) sudah berumur 8 bulan. Ini pertama kalinya akan ke grooming. Saya khawatir dia akan stress. Adakah tips dari kalian untuk membuat proses grooming jadi smooth dan menyenangkan?",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    replies: 12,
    views: 487,
    likes: 45,
    tags: ["grooming", "puppy", "tips"],
  },
  {
    id: "2",
    title: "Pengalaman boarding di JJ Pet House Gatot Subroto",
    category: "pet-stories",
    author: "Budi Santoso",
    authorImage: "👨‍💼",
    content:
      "Kemarin saya boarding anjing saya (Shiba Inu bernama Mochi) di JJ Pet House Gatot Subroto selama 3 hari. Hasilnya sangat memuaskan! Staff-nya sangat ramah dan Mochi terlihat bahagia. Foto-foto dia saat bermain di playground lucu banget!",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    replies: 28,
    views: 892,
    likes: 156,
    tags: ["boarding", "positive-review", "experience"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "Kucing saya tidak mau makan, apa yang harus saya lakukan?",
    category: "general-chat",
    author: "Siti Nurhaliza",
    authorImage: "👩",
    content:
      "Kucing saya (Persia, 3 tahun) tiba-tiba tidak mau makan sejak kemarin. Dia terlihat agak lesu. Apakah ini normal? Kapan saya harus membawa dia ke dokter hewan?",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    replies: 18,
    views: 543,
    likes: 52,
    tags: ["health", "cat", "advice"],
  },
  {
    id: "4",
    title: "Perbandingan Pet Hotel di Jakarta - Share pengalaman Anda!",
    category: "recommendations",
    author: "Ahmad Hidayat",
    authorImage: "👨‍🎤",
    content:
      "Ada yang sudah pernah coba berbagai pet hotel di Jakarta? Saya pengen tahu mana yang terbaik dan paling value for money. Share pengalaman dan review kalian dong!",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    replies: 34,
    views: 1205,
    likes: 98,
    tags: ["pet-hotel", "comparison", "recommendations"],
    isPinned: true,
  },
  {
    id: "5",
    title: "Anjing saya takut air, bagaimana cara mengatasinya?",
    category: "tips-tricks",
    author: "Linda Wijaya",
    authorImage: "👩‍🦱",
    content:
      "Poodle saya sangat takut air, bahkan takut mandi. Saya sudah coba berbagai cara tapi belum berhasil. Ada yang punya pengalaman serupa dan berhasil mengatasinya?",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    replies: 22,
    views: 734,
    likes: 67,
    tags: ["behavior", "fear", "training"],
  },
  {
    id: "6",
    title: "Grooming style terbaru yang cocok untuk Shih Tzu?",
    category: "general-chat",
    author: "Rosa Felicia",
    authorImage: "👩‍🎨",
    content:
      "Shih Tzu saya mulai terlihat berantakan. Saya pengen grooming dengan style baru yang cute dan praktis. Ada yang bisa recommend style grooming untuk Shih Tzu?",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    replies: 16,
    views: 421,
    likes: 72,
    tags: ["grooming", "style", "shih-tzu"],
  },
  {
    id: "7",
    title: "Pet pool di JJ Pet House worth it kah?",
    category: "recommendations",
    author: "Ricky Pratama",
    authorImage: "👨",
    content:
      "Lagi pengen ajak anjing saya (Labrador) ke pet pool. Tapi harganya lumayan mahal. Menurutmu worth it nggak? Apa saja keuntungannya?",
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    replies: 24,
    views: 612,
    likes: 89,
    tags: ["pet-pool", "value", "labrador"],
  },
  {
    id: "8",
    title: "Tips memilih makanan premium untuk anjing",
    category: "tips-tricks",
    author: "Maharani Putri",
    authorImage: "👩‍🦳",
    content:
      "Banyak banget pilihan makanan premium untuk anjing. Apa saja yang harus diperhatikan saat memilih? Ada rekomendasi brand yang bagus?",
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    replies: 19,
    views: 856,
    likes: 104,
    tags: ["nutrition", "food", "pet-care"],
  },
  {
    id: "9",
    title: "Kucing lokal vs kucing ras, which one you prefer?",
    category: "pet-stories",
    author: "Joko Wijaya",
    authorImage: "👨‍🌾",
    content:
      "Saya punya 2 kucing - 1 lokal dan 1 ras (Siamese). Dua-duanya lucu dan punya karakter unik. Pengen tahu, lebih prefer kucing lokal atau ras?",
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    replies: 41,
    views: 1523,
    likes: 187,
    tags: ["cat", "stories", "preference"],
  },
  {
    id: "10",
    title: "Puppy training tips dari komunitas JJ Pet House",
    category: "tips-tricks",
    author: "Eka Prasetya",
    authorImage: "👨‍🏫",
    content:
      "Saya baru punya puppy dan pengen share tips training yang sudah berhasil. Semoga berguna untuk yang lagi menghadapi situasi yang sama!",
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
    lastReplyAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    replies: 31,
    views: 945,
    likes: 142,
    tags: ["puppy", "training", "tips"],
  },
]
