"use client"

import { Moon, Sun } from "lucide-react"
import { useDarkReader } from "./dark-reader-provider"

export function DarkModeSwitch() {
  const { enabled, toggle } = useDarkReader()

  return (
    <button
      onClick={toggle}
      className="text-xs"
    >
      {enabled ? "Dark" : "Light"}
    </button>

  )
}
