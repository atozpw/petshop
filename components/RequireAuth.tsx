"use client"

import { useAuth } from "@/context/auth-context"

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, authLoading } = useAuth()

  if (authLoading) {
    return (
      console.log("Loading authentication status..."), 
      <div className="min-h-screen flex items-center justify-center">
        <p>Memuat...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      console.log("User not authenticated, redirecting to login..."),
      <div className="min-h-screen flex items-center justify-center">
        <p>Silakan login untuk melanjutkan</p>
      </div>
    )
  }

  return <>{children}</>
}
