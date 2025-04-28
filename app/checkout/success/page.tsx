"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, CheckCircle, ArrowRight } from "lucide-react"

const plans = {
  pro: {
    name: "Pro",
    badge: "🥉 Pro",
    price: 197,
  },
  premium: {
    name: "Premium",
    badge: "🥈 Premium",
    price: 497,
  },
  luxurious: {
    name: "Luxurious",
    badge: "🥇 Luxurious",
    price: 997,
  },
}

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId") || ""
  const planId = searchParams.get("plan") || "premium"
  const [plan, setPlan] = useState(plans[planId] || plans.premium)
  const [paymentDetails, setPaymentDetails] = useState(null)

  useEffect(() => {
    // In a real app, you would fetch the payment details from your backend
    // Here we're just retrieving from localStorage for demo purposes
    const storedPaymentDetails = localStorage.getItem("paymentDetails")
    if (storedPaymentDetails) {
      setPaymentDetails(JSON.parse(storedPaymentDetails))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <header className="container mx-auto py-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-royal-gold" />
            <span className="text-xl font-bold">
              InstaLanding <span className="text-primary">AI</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 flex flex-col items-center">
        <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>

        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent mb-2">
          Payment Successful!
        </h1>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Thank you for your purchase. You now have access to InstaLanding AI {plan.badge}.
        </p>

        <Card className="border-primary/20 max-w-md w-full mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order ID:</span>
              <span className="font-medium">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Plan:</span>
              <span className="font-medium">{plan.badge}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-medium">${plan.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">
                {paymentDetails?.create_time
                  ? new Date(paymentDetails.create_time).toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex-col space-y-4 border-t pt-6">
            <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg w-full">
              <CheckCircle className="h-5 w-5 text-royal-gold shrink-0" />
              <div>
                <p className="text-sm font-medium">Lifetime Access</p>
                <p className="text-xs text-muted-foreground">
                  You now have lifetime access to all features included in your plan.
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-gradient-royal hover:opacity-90 transition-opacity">
            <Link href="/dashboard">
              Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
