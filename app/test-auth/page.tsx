"use client"

import { useAuth } from "@/context/auth-context"

export default function TestAuthPage() {
  const { user, isAuthenticated } = useAuth()

  return (
    <div>
      <p>Authenticated: {String(isAuthenticated)}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
