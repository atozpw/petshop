'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ADOPTABLE_PETS } from "@/lib/pet-adoption-data"
import { Heart, MapPin, Check, Clock, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useMemo } from "react"
import Link from "next/link"

export default function AdoptPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedType, setSelectedType] = useState<"all" | "dog" | "cat">("all")
    const [selectedBreed, setSelectedBreed] = useState<string | "all">("all")
    const [ageRange, setAgeRange] = useState<[number, number]>([0, 10])
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 700000])
    const [vaccinated, setVaccinated] = useState(false)
    const [sortBy, setSortBy] = useState<"newest" | "price-low" | "price-high">("newest")
    const formatRupiah = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    const breeds = useMemo(() => {
        const uniqueBreeds = new Set(ADOPTABLE_PETS.map((pet) => pet.breed))
        return Array.from(uniqueBreeds).sort()
    }, [])

    const filteredPets = useMemo(() => {
        let filtered = ADOPTABLE_PETS

        if (searchQuery) {
        filtered = filtered.filter((pet) =>
            pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pet.breed.toLowerCase().includes(searchQuery.toLowerCase())
        )
        }

        if (selectedType !== "all") {
        filtered = filtered.filter((pet) => pet.type === selectedType)
        }

        if (selectedBreed !== "all") {
        filtered = filtered.filter((pet) => pet.breed === selectedBreed)
        }

        const ageInYears = ageRange[1]
        filtered = filtered.filter((pet) => {
        const petAgeInYears = pet.ageUnit === "years" ? pet.age : pet.age / 12
        return petAgeInYears <= ageInYears
        })

        filtered = filtered.filter(
        (pet) => pet.adoptionFee >= priceRange[0] && pet.adoptionFee <= priceRange[1]
        )

        if (vaccinated) {
        filtered = filtered.filter((pet) => pet.vaccinated)
        }

        // Sort
        const sorted = [...filtered].sort((a, b) => {
        if (sortBy === "newest") {
            return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        } else if (sortBy === "price-low") {
            return a.adoptionFee - b.adoptionFee
        } else {
            return b.adoptionFee - a.adoptionFee
        }
        })

        return sorted
    }, [searchQuery, selectedType, selectedBreed, ageRange, priceRange, vaccinated, sortBy])
    
    return (
    <>
        <Header />

        <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
            <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Find Your Perfect Pet</h1>
            <p className="text-lg opacity-90 max-w-2xl">
                Temukan teman berbulu kesayangan Anda di antara puluhan hewan peliharaan yang menunggu untuk diadopsi
            </p>
            </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border border-border p-6 sticky top-20 space-y-6">
                    <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Filter size={18} />
                        Filters
                    </h3>
                    </div>

                    {/* Pet Type */}
                    <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Pet Type</label>
                    <div className="space-y-2">
                        {["all", "dog", "cat"].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                            type="radio"
                            name="petType"
                            value={type}
                            checked={selectedType === type}
                            onChange={(e) => setSelectedType(e.target.value as any)}
                            className="cursor-pointer"
                            />
                            <span className="text-sm text-muted-foreground capitalize">
                            {type === "all" ? "All Pets" : type === "dog" ? "Dogs" : "Cats"}
                            </span>
                        </label>
                        ))}
                    </div>
                    </div>

                    {/* Breed */}
                    <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Breed</label>
                    <select
                        value={selectedBreed}
                        onChange={(e) => setSelectedBreed(e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                        <option value="all">All Breeds</option>
                        {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                        ))}
                    </select>
                    </div>

                    {/* Age Range */}
                    <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Max Age (Years)</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={ageRange[1]}
                        onChange={(e) => setAgeRange([0, parseInt(e.target.value)])}
                        className="w-full"
                    />
                    <span className="text-xs text-muted-foreground">Up to {ageRange[1]} years</span>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Adoption Fee</label>
                    <div className="space-y-2">
                        <input
                        type="range"
                        min="0"
                        max="700000"
                        step="50000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full"
                        />
                        <span className="text-xs text-muted-foreground">
                        Rp {formatRupiah(priceRange[0])} - Rp {formatRupiah(priceRange[1])}
                        </span>
                    </div>
                    </div>

                    {/* Vaccinated */}
                    <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                        type="checkbox"
                        checked={vaccinated}
                        onChange={(e) => setVaccinated(e.target.checked)}
                        className="cursor-pointer"
                        />
                        <span className="text-sm text-muted-foreground">Vaccinated only</span>
                    </label>
                    </div>

                    <Button
                    onClick={() => {
                        setSearchQuery("")
                        setSelectedType("all")
                        setSelectedBreed("all")
                        setAgeRange([0, 10])
                        setPriceRange([0, 700000])
                        setVaccinated(false)
                    }}
                    variant="outline"
                    className="w-full"
                    >
                    Reset Filters
                    </Button>
                </div>
                </div>

                {/* Pets Grid */}
                <div className="lg:col-span-3">
                {/* Search & Sort */}
                <div className="mb-6 space-y-4">
                    <div className="relative">
                    <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or breed..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    </div>

                    <div className="flex gap-3">
                    <span className="text-sm text-muted-foreground flex items-center">
                        {filteredPets.length} pets found
                    </span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="ml-auto px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                        <option value="newest">Newest First</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                    </div>
                </div>

                {/* Pet Cards Grid */}
                {filteredPets.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPets.map((pet) => (
                        <Link key={pet.id} href={`/adopt/${pet.id}`}>
                        <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full">
                            {/* Image */}
                            <div className="relative overflow-hidden bg-muted h-48">
                            <img
                                src={pet.images[0]}
                                alt={pet.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute top-3 right-3 bg-white rounded-lg px-3 py-1 text-xs font-semibold flex items-center gap-1">
                                {pet.adoptionStatus === "available" ? (
                                <>
                                    <Check size={14} className="text-green-600" />
                                    <span className="text-green-600">Available</span>
                                </>
                                ) : (
                                <>
                                    <Clock size={14} className="text-yellow-600" />
                                    <span className="text-yellow-600">Pending</span>
                                </>
                                )}
                            </div>
                            <div className="absolute top-3 left-3 bg-primary text-white rounded-lg px-3 py-1 text-xs font-semibold">
                                {pet.type === "dog" ? "🐕" : "🐱"} {pet.breed}
                            </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                            <h3 className="text-lg font-bold text-foreground mb-2">{pet.name}</h3>

                            {/* Info Grid */}
                            <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                                <div className="flex items-center gap-1 text-muted-foreground">
                                <span className="font-medium">Age:</span>
                                <span>
                                    {pet.age} {pet.ageUnit === "years" ? "yrs" : "mos"}
                                </span>
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                <span className="font-medium">Gender:</span>
                                <span>{pet.gender === "male" ? "♂️ Male" : "♀️ Female"}</span>
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                {pet.vaccinated ? (
                                    <>
                                    <Check size={14} className="text-green-600" />
                                    <span className="text-green-600">Vaccinated</span>
                                    </>
                                ) : (
                                    <span>Not vaccinated</span>
                                )}
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                <MapPin size={14} />
                                <span className="text-xs">{pet.location}</span>
                                </div>
                            </div>

                            {/* Price & CTA */}
                            <div className="flex items-center justify-between gap-2 pt-4 border-t border-border">
                                <div className="font-bold text-primary text-lg">
                               Rp {/* Rp {formatRupiah(pet.adoptionFee)} */}
                                </div>
                                <Button
                                size="sm"
                                className="bg-primary hover:bg-primary/90 flex items-center gap-1"
                                >
                                <Heart size={14} />
                                Adopt
                                </Button>
                            </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg border border-border p-12 text-center">
                    <p className="text-muted-foreground mb-4">No pets found matching your criteria.</p>
                    <Button onClick={() => setSearchQuery("")} variant="outline">
                        Reset Search
                    </Button>
                    </div>
                )}
                </div>
            </div>
            </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Adoption Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                {
                    step: "1",
                    title: "Browse & Select",
                    desc: "Lihat berbagai pilihan hewan peliharaan yang tersedia untuk adopsi",
                },
                {
                    step: "2",
                    title: "Submit Application",
                    desc: "Isi formulir aplikasi adopsi dengan informasi diri Anda",
                },
                {
                    step: "3",
                    title: "Meet & Greet",
                    desc: "Bertemu langsung dengan hewan peliharaan pilihan Anda",
                },
                {
                    step: "4",
                    title: "Adoption Complete",
                    desc: "Selesaikan proses adopsi dan bawa pulang teman baru Anda",
                },
                ].map((item) => (
                <div key={item.step} className="bg-white rounded-lg border border-border p-6 text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Give a Pet a Home?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Setiap adopsi adalah tindakan penyelamatan. Berikan kesempatan kedua kepada hewan peliharaan yang membutuhkan rumah penuh cinta
            </p>
            <Link href="/adopt">
                <Button className="bg-white text-primary hover:bg-gray-100">Browse Pets Now</Button>
            </Link>
            </div>
        </section>
        </main>

        <Footer />
    </>
    )
}
