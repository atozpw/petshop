export interface User {
  id: string
  email: string
  name: string
  phone: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Dummy users for testing
const DUMMY_USERS: Record<string, { email: string; password: string; name: string; phone: string }> = {
  user1: {
    email: "customer@petshop.com",
    password: "password123",
    name: "Budi Santoso",
    phone: "081234567890",
  },
  user2: {
    email: "test@example.com",
    password: "password123",
    name: "Siti Nurhaliza",
    phone: "089876543210",
  },
}

export function validateLogin(email: string, password: string): User | null {
  const user = Object.values(DUMMY_USERS).find((u) => u.email === email && u.password === password)
  if (user) {
    return {
      id: Math.random().toString(36).substr(2, 9),
      email: user.email,
      name: user.name,
      phone: user.phone,
    }
  }
  return null
}

export function validateRegister(email: string, password: string, name: string, phone: string): User | null {
  // Simple validation - in real app would check against database
  if (email && password && name && phone) {
    return {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      phone,
    }
  }
  return null
}
