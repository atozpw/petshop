export interface ProductOrder {
  id: string
  userId: string
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
    image: string
  }>
  subtotal: number
  tax: number
  total: number
  paymentMethod: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: string
}

export function generateOrderId(): string {
  return "ORD-" + Date.now().toString().slice(-8)
}