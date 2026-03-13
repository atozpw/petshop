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
          {/* <div
            className="fixed inset-0 pointer-events-none z-[-01]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Ccircle cx='35' cy='42' r='10' fill='%23888' opacity='0.09'/%3E%3Ccircle cx='22' cy='26' r='6' fill='%23888' opacity='0.06'/%3E%3Ccircle cx='36' cy='22' r='6' fill='%23888' opacity='0.06'/%3E%3Ccircle cx='50' cy='26' r='6' fill='%23888' opacity='0.06'/%3E%3Ccircle cx='85' cy='85' r='10' fill='%23888' opacity='0.06'/%3E%3Ccircle cx='72' cy='69' r='6' fill='%23888' opacity='0.06'/%3E%3Ccircle cx='86' cy='65' r='6' fill='%23888' opacity='0.06'/%3E%3Ccircle cx='100' cy='69' r='6' fill='%23888' opacity='0.06'/%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
            }}
          /> */}
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
