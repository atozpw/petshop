import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PRODUCT_CATEGORIES } from "@/lib/product-categories-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>
}) {
  const { categorySlug } = await params

  const category = PRODUCT_CATEGORIES.find(
    (cat) => cat.slug === categorySlug
  )

  if (!category) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Kategori Tidak Ditemukan</h1>
            <p className="text-muted-foreground mb-8">
              Kategori produk yang Anda cari tidak tersedia. Silakan kembali ke halaman produk.
            </p>
            <Link href="/product-category">
              <Button className="bg-primary hover:bg-primary/90">Kembali ke Kategori</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb & Back Button */}
        <section className="bg-white border-b border-border py-4">
          <div className="container mx-auto px-4">
            <Link href="/adopt" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft size={18} />
              Kembali ke Kategori Produk
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Icon & Title */}
              <div>
                <div className="text-7xl mb-6">{category.icon}</div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{category.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                <div className="flex gap-4">
                  {/* <Link href="/pet-shop">
                    <Button className="bg-primary hover:bg-primary/90">Lihat Produk</Button>
                  </Link>
                  <Button variant="outline">Hubungi Kami</Button> */}
                </div>
              </div>

              {/* Right: Stats */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-border p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{category.productCount}+</div>
                  <p className="text-muted-foreground">Produk Tersedia</p>
                </div>
                <div
                  className="rounded-lg p-6 text-white"
                  style={{ backgroundColor: category.color }}
                >
                  <p className="font-semibold mb-2">Kategori Produk</p>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Description */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed mb-12">
                {category.fullDescription}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Keuntungan Produk Kami</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {category.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    <Check size={24} style={{ color: category.color }} />
                  </div>
                  <p className="text-sm font-medium text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Kategori Lainnya</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCT_CATEGORIES.filter((cat) => cat.id !== category.id)
                .slice(0, 4)
                .map((relatedCategory) => (
                  <Link key={relatedCategory.id} href={`/product-category/${relatedCategory.slug}`}>
                    <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div
                        className="h-1"
                        style={{ backgroundColor: relatedCategory.color }}
                      ></div>
                      <div className="p-6">
                        <div className="text-4xl mb-3">{relatedCategory.icon}</div>
                        <h3 className="font-bold text-foreground mb-2">{relatedCategory.name}</h3>
                        <p className="text-xs text-muted-foreground">{relatedCategory.productCount} Produk</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Temukan Produk {category.name} Terbaik</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Jelajahi koleksi lengkap produk {category.name} kami dan berikan yang terbaik untuk hewan kesayangan Anda
            </p>
            <Link href="/pet-shop">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Mulai Belanja Sekarang
              </Button>
            </Link>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  )
}
