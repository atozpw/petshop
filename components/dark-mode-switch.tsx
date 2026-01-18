"use client"

import { Moon, Sun } from "lucide-react"
import { useDarkReader } from "./dark-reader-provider"

export function DarkModeSwitch() {
  const { enabled, toggle } = useDarkReader()

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {enabled ? (
        <>
          <Sun size={16} />
          {/* Light */}
        </>
      ) : (
        <>
          <Moon size={16} />
          {/* Dark */}
        </>
      )}
    </button>
  )
}
