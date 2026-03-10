import { BRANCHES, CITIES } from '@/lib/branches-data'
import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function BranchesPreview() {
  const featuredBranches = BRANCHES.filter((b) => b.featured)

  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Lokasi Kami di Indonesia</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            JJ Pet House hadir di 3 kota besar dengan {BRANCHES.length} cabang siap melayani hewan kesayangan Anda
          </p>
        </div>

        {/* City Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
          {CITIES.map((city) => {
            const branchCount = BRANCHES.filter((b) => b.city === city.id).length
            return (
              <div
                key={city.id}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/10 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-2">{city.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{city.name}</h3>
                <p className="text-primary font-bold text-2xl">{branchCount}</p>
                <p className="text-xs text-muted-foreground">Cabang Aktif</p>
              </div>
            )
          })}
        </div>

        {/* Featured Branches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredBranches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group bg-white"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  ⭐ Featured
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{branch.name}</h3>
                <div className="flex items-start gap-2 mb-3 text-xs text-muted-foreground">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5 text-primary" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex gap-2">
                  {branch.services.slice(0, 2).map((service) => (
                    <span
                      key={service}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
                  {branch.services.length > 2 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      +{branch.services.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/branches">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Lihat Semua Cabang
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
