import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientProviders from "./client-providers" 

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JJ Pet House - One Stop Pet Care Solution",
  description:
    "Pet Shop, Grooming, Hotel, Clinic 24 Jam, dan Delivery untuk hewan peliharaan Anda",
  generator: "Next.js 16",
  icons: {
    icon: [
      { url: "/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/logo.png", media: "(prefers-color-scheme: dark)" },
      { url: "/logo.png", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
