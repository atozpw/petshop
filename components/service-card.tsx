import Image from "next/image"
import Link from "next/link"
import { Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsappModal from "@/components/whatsappmodal"
interface ServiceCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  duration: string
  rating: number
  category: string,
  active: boolean
}

export function ServiceCard({ id, name, description, price, image, duration, rating, category, active }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 w-full bg-muted overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-full">
            <Star size={14} className="fill-accent text-accent" />
            <span className="text-xs font-semibold text-accent">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-default-500 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-xs text-default-500">
          {/* <span>{duration}</span> */}
          {/* {price > 0 && <span className="font-semibold">Rp {price.toLocaleString()}</span>} */}
        </div>

        {/* <Link href={`/booking?service=${id}`} className="w-full"> */}
        {/* <Link href="#" className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90">Pesan Sekarang</Button>
        </Link> */}
        <WhatsappModal active={active} />
      </div>
    </div>
  )
}
