  "use client"

  import { useState } from "react"
  import { useRouter } from "next/navigation"
  import Link from "next/link"
  import { Header } from "@/components/header"
  import { Footer } from "@/components/footer"
  import { Button } from "@/components/ui/button"
  import { useCart } from "@/context/cart-context"
  import { useAuth } from "@/context/auth-context"
  import { CreditCard, Wallet, Building2, Truck, ArrowLeft } from "lucide-react"
  import Image from "next/image"
  import { apiFetch, } from "@/lib/api"

  export default function CheckoutProductContent() {
    const router = useRouter()
    const { viewCart, total, clearCart } = useCart()
    const { user } = useAuth()
    const [paymentMethod, setPaymentMethod] = useState("credit-card")
    const [isProcessing, setIsProcessing] = useState(false)

    const taxAmount = Math.round(total * 0.1)
    const finalTotal = total + taxAmount

    const handleCheckout = async () => {
      if (!user) {
        router.push("/login")
        return
      }

      setIsProcessing(true)

      try {
        const token = localStorage.getItem("petshop-token")

        const res = await apiFetch(
          "/checkout",
          {
            method: "POST",
            body: JSON.stringify({
              shipping_cost: 0,
              notes: null,
            }),
          },
          token
        )

        console.log("ORDER CREATED:", res.data)

        // kosongkan cart context
        clearCart()

        // redirect success
        router.push(`/checkout-product/success?order=${res.data.number}`)
      } catch (err: any) {
        console.error("Checkout error:", err)

        alert(
          err?.response?.data?.message ||
          "Terjadi kesalahan saat checkout. Coba lagi."
        )
      } finally {
        setIsProcessing(false)
      }
    }

    if (viewCart.length === 0) {
      return (
        <>
          <Header />
          <main className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-bold text-primary mb-4">Keranjang Kosong</h1>
              <Link href="/pet-shop">
                <Button className="bg-primary hover:bg-primary/90">Kembali ke Pet Shop</Button>
              </Link>
            </div>
          </main>
          <Footer />
        </>
      )
    }

    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4">
            <Link href="/cart" className="flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft size={20} />
              Kembali ke Keranjang
            </Link>

            <h1 className="text-4xl font-bold text-default-foreground mb-8">Checkout Produk</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Customer Info */}
                <div className="bg-white rounded-lg border border-border p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Informasi Pemesan</h2>
                  <div className="grid grid-cols-2 gap-4 bg-muted p-4 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Nama</p>
                      <p className="font-semibold text-foreground">{user?.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Email</p>
                      <p className="font-semibold text-foreground">{user?.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">No. Telepon</p>
                      <p className="font-semibold text-foreground">{user?.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-white rounded-lg border border-border p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Pesanan Anda</h2>
                  <div className="space-y-3 border-b border-border pb-6">
                    {viewCart.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden border bg-muted">
                          <Image
                            src={item.image || "/no-image.png"}
                            alt={item.name || "Produk"}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <p className="font-semibold">{item.name}</p>

                          <p className="text-sm text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>

                      <p className="font-semibold">
                        Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                      </p>
                    </div>
                  ))}


                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg border border-border p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Metode Pembayaran</h2>
                  <div className="space-y-3">
                    {[
                      { id: "credit-card", label: "Kartu Kredit", icon: CreditCard },
                      { id: "ewallet", label: "E-Wallet", icon: Wallet },
                      { id: "bank-transfer", label: "Transfer Bank", icon: Building2 },
                      { id: "cod", label: "Bayar Saat Tiba", icon: Truck },
                    ].map(({ id, label, icon: Icon }) => (
                      <label
                        key={id}
                        className="flex items-center gap-3 p-4 border border-input rounded-lg cursor-pointer hover:bg-muted transition-colors"
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={id}
                          checked={paymentMethod === id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4"
                        />
                        <Icon size={20} className="text-primary" />
                        <span className="font-semibold text-foreground">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border border-border p-6 space-y-6 sticky top-20">
                  <h2 className="text-xl font-bold text-foreground">Ringkasan Pesanan</h2>

                  <div className="space-y-3 border-b border-border pb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">Rp {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (10%)</span>
                      <span className="font-semibold">Rp {taxAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ongkos Kirim</span>
                      <span className="font-semibold">Rp 0</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">Rp {finalTotal.toLocaleString()}</span>
                  </div>

                  <Button
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                  >
                    {isProcessing ? "Processing..." : "Konfirmasi Pembayaran"}
                  </Button>

                  <Link href="/cart">
                    <Button variant="ghost" className="w-full border border-primary text-primary">
                      Kembali ke Keranjang
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
