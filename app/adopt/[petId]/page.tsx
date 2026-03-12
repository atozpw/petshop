'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ADOPTABLE_PETS } from "@/lib/pet-adoption-data"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Check, AlertCircle, ArrowLeft, Share2, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useState, use } from "react"

export default function PetDetailPage({ params }: { params: Promise<{ petId: string }> }) {
    const { petId } = use(params)
    const pet = ADOPTABLE_PETS.find((p) => p.id === petId)
    const [selectedImage, setSelectedImage] = useState(0)
    const [showAdoptionForm, setShowAdoptionForm] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        occupation: "",
        homeType: "",
        experience: "",
    })

    if (!pet) {
        return (
        <>
            <Header />
            <main className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-foreground mb-4">Pet Not Found</h1>
                <Link href="/adopt">
                <Button className="bg-primary hover:bg-primary/90">Back to Adoption</Button>
                </Link>
            </div>
            </main>
            <Footer />
        </>
        )
    }

    const handleAdoptionSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Terima kasih telah melamar adopsi ${pet.name}! Tim kami akan menghubungi Anda segera.`)
        setShowAdoptionForm(false)
        setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        occupation: "",
        homeType: "",
        experience: "",
        })
    }

    return (
        <>
        <Header />

        <main className="min-h-screen bg-background">
            {/* Back Button */}
            <div className="bg-white border-b border-border sticky top-16 z-20">
            <div className="container mx-auto px-4 py-4">
                <Link href="/adopt" className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                <ArrowLeft size={20} />
                Back to Adoption
                </Link>
            </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Image Gallery */}
                <div className="lg:col-span-2">
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="bg-muted rounded-lg overflow-hidden">
                    <img
                        src={pet.images[selectedImage]}
                        alt={pet.name}
                        className="w-full h-96 object-cover"
                    />
                    </div>

                    {/* Thumbnail Images */}
                    {pet.images.length > 1 && (
                    <div className="flex gap-3">
                        {pet.images.map((image, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                            selectedImage === idx ? "border-primary" : "border-border"
                            }`}
                        >
                            <img src={image} alt={`${pet.name} ${idx}`} className="w-full h-full object-cover" />
                        </button>
                        ))}
                    </div>
                    )}
                </div>
                </div>

                {/* Info & CTA */}
                <div className="space-y-6">
                {/* Header */}
                <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">{pet.name}</h1>
                        <p className="text-muted-foreground">{pet.breed}</p>
                    </div>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Heart size={24} className="text-red-500" />
                    </button>
                    </div>

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1">
                    {pet.adoptionStatus === "available" ? (
                        <>
                        <Check size={16} className="text-green-600" />
                        <span className="text-green-600 font-semibold text-sm">Available for Adoption</span>
                        </>
                    ) : (
                        <>
                        <AlertCircle size={16} className="text-yellow-600" />
                        <span className="text-yellow-600 font-semibold text-sm">Adoption Pending</span>
                        </>
                    )}
                    </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white border border-border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-semibold">{pet.type === "dog" ? "🐕 Dog" : "🐱 Cat"}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Age</span>
                    <span className="font-semibold">
                        {pet.age} {pet.ageUnit === "years" ? "years" : "months"}
                    </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Gender</span>
                    <span className="font-semibold">{pet.gender === "male" ? "♂️ Male" : "♀️ Female"}</span>
                    </div>
                    {pet.weight && (
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                        <span className="text-muted-foreground">Weight</span>
                        <span className="font-semibold">{pet.weight}</span>
                    </div>
                    )}
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Color</span>
                    <span className="font-semibold">{pet.color}</span>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Vaccinated</span>
                    <span className="font-semibold flex items-center gap-1">
                        {pet.vaccinated ? (
                        <>
                            <Check size={16} className="text-green-600" />
                            <span className="text-green-600">Yes</span>
                        </>
                        ) : (
                        "No"
                        )}
                    </span>
                    </div>
                </div>

                {/* Price & CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-4">
                    <div>
                    <p className="text-sm text-muted-foreground mb-1">Adoption Fee</p>
                    <p className="text-3xl font-bold text-primary">
                        {/* Rp {pet.adoptionFee.toLocaleString()} */}Rp
                    </p>
                    </div>

                    <Button
                    onClick={() => setShowAdoptionForm(true)}
                    className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 py-3"
                    disabled={pet.adoptionStatus === "pending"}
                    >
                    <Heart size={18} />
                    {pet.adoptionStatus === "available" ? "Start Adoption Process" : "Adoption Pending"}
                    </Button>

                    <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                        <Share2 size={16} />
                        Share
                    </Button>
                    <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                        <Phone size={16} />
                        Call
                    </Button>
                    </div>
                </div>

                {/* Location */}
                <div className="bg-white border border-border rounded-lg p-4 flex items-start gap-3">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold text-foreground">{pet.location}</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Details Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {/* Description */}
                <div className="bg-white border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">About {pet.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{pet.description}</p>
                </div>

                {/* Personality */}
                <div className="bg-white border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Personality Traits</h2>
                <div className="flex flex-wrap gap-2">
                    {pet.personality.map((trait, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {trait}
                    </span>
                    ))}
                </div>
                </div>

                {/* Health Status */}
                <div className="bg-white border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Health Status</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <Check size={18} className="text-green-600" />
                    <span className="text-foreground font-semibold">{pet.healthStatus}</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                    <p>✓ Vaccinated: {pet.vaccinated ? "Yes" : "No"}</p>
                    <p>✓ Neutered/Spayed: {pet.neutered ? "Yes" : "No"}</p>
                    </div>
                </div>
                </div>

                {/* Adoption Requirements */}
                <div className="bg-white border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Adoption Requirements</h2>
                <ul className="space-y-2">
                    {pet.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{req}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>

            {/* Adoption Form Modal */}
            {showAdoptionForm && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-foreground">Adoption Application</h2>
                    <button
                    onClick={() => setShowAdoptionForm(false)}
                    className="text-muted-foreground hover:text-foreground"
                    >
                    ✕
                    </button>
                </div>

                <form onSubmit={handleAdoptionSubmit} className="p-6 space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 mb-6">
                    <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                        Anda sedang melamar untuk mengadopsi <strong>{pet.name}</strong>. Mohon isi informasi pribadi Anda dengan lengkap dan akurat.
                    </p>
                    </div>

                    {/* Full Name */}
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    </div>

                    {/* Email */}
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    </div>

                    {/* Phone */}
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    </div>

                    {/* Address */}
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Home Address *</label>
                    <textarea
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={3}
                        required
                    />
                    </div>

                    {/* Occupation */}
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Occupation</label>
                    <input
                        type="text"
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    </div>

                    {/* Home Type */}
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Home Type *</label>
                    <select
                        value={formData.homeType}
                        onChange={(e) => setFormData({ ...formData, homeType: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    >
                        <option value="">Select...</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                        <option value="other">Other</option>
                    </select>
                    </div>

                    {/* Pet Experience */}
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Pet Ownership Experience</label>
                    <textarea
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="Tell us about your experience with pets..."
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={3}
                    />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                    <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setShowAdoptionForm(false)}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                        Submit Application
                    </Button>
                    </div>
                </form>
                </div>
            </div>
            )}
        </main>

        <Footer />
        </>
    )
}
