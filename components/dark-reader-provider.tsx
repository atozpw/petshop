"use client"

import { createContext, useContext, useEffect, useState } from "react"

type DarkReaderContextType = {
  enabled: boolean
  toggle: () => void
}

const DarkReaderContext = createContext<DarkReaderContextType | null>(null)

export function DarkReaderProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    let darkreader: any

    const init = async () => {
      if (typeof window === "undefined") return

      darkreader = await import("darkreader")

      const saved = localStorage.getItem("dark-reader")
      if (saved === "true") {
        darkreader.enable({
          brightness: 100,
          contrast: 90,
          sepia: 10,
        })
        setEnabled(true)
      }
    }

    init()

    return () => {
      if (darkreader?.disable) {
        darkreader.disable()
      }
    }
  }, [])

  const toggle = async () => {
    if (typeof window === "undefined") return

    const darkreader = await import("darkreader")

    if (enabled) {
      darkreader.disable()
      localStorage.setItem("dark-reader", "false")
      setEnabled(false)
    } else {
      darkreader.enable({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      })
      localStorage.setItem("dark-reader", "true")
      setEnabled(true)
    }
  }

  return (
    <DarkReaderContext.Provider value={{ enabled, toggle }}>
      {children}
    </DarkReaderContext.Provider>
  )
}

export function useDarkReader() {
  const ctx = useContext(DarkReaderContext)
  if (!ctx) {
    throw new Error("useDarkReader must be used within DarkReaderProvider")
  }
  return ctx
}
