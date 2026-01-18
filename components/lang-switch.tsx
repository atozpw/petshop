"use client"

import { usePathname, useRouter } from "next/navigation"

export function LangSwitch() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLang = pathname.startsWith("/en") ? "en" : "id"

  const switchLang = (lang: "id" | "en") => {
    const segments = pathname.split("/")
    segments[1] = lang
    router.push(segments.join("/"))
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border p-1 text-sm">
      <button
        onClick={() => switchLang("id")}
        className={`px-3 py-1 rounded ${
          currentLang === "id"
            ? "bg-black text-white"
            : "hover:bg-gray-100"
        }`}
      >
        ID
      </button>

      <button
        onClick={() => switchLang("en")}
        className={`px-3 py-1 rounded ${
          currentLang === "en"
            ? "bg-black text-white"
            : "hover:bg-gray-100"
        }`}
      >
        EN
      </button>
    </div>
  )
}
