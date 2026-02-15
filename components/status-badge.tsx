export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    paid: "bg-green-100 text-green-700",
    shipped: "bg-blue-100 text-blue-700",
    cancelled: "bg-red-100 text-red-700",
  }

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${map[status] || "bg-muted text-muted-foreground"}`}
    >
      {status}
    </span>
  )
}
