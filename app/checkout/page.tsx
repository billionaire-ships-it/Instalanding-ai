"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Crown, ArrowLeft, CheckCircle, Shield } from "lucide-react"
import { PayPalButton } from "@/components/paypal-button"

const plans = [
  {
    id: "pro",
    name: "Pro",
    badge: "🥉 Pro",
    price: 197,
    description: "Perfect for beginners",
    features: [
      "AI Landing Page Builder",
      "10 Industry Templates",
      "Basic AI Ad Generator",
      "PayPal Integration",
      "Email Support",
      "Pre-written Ad Templates",
      "Basic Analytics",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    badge: "🥈 Premium",
    price: 497,
    description: "Most popular choice",
    features: [
      "Everything in Pro",
      "20+ Industry Templates",
      "Advanced AI Ad Generator",
      "Referral Rocket System",
      "Dynamic Scarcity Timers",
      "Priority Support",
      "Custom Domain",
      "AI Video Creator (Basic)",
    ],
  },
  {
    id: "luxurious",
    name: "Luxurious",
    badge: "🥇 Luxurious",
    price: 997,
    description: "For serious entrepreneurs",
    features: [
      "Everything in Premium",
      "Unlimited Templates",
      "Elite AI Marketing Engine",
      "High-Ticket Funnel Templates",
      "Advanced Retargeting Tools",
      "VIP Support Access",
      "White Label Option",
      "Advanced Analytics",
      "AI Video Creator (Premium)",
    ],
  },
]

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const initialPlanId = searchParams.get("plan") || "premium"
  const [selectedPlan, setSelectedPlan] = useState(initialPlanId)
  const [plan, setPlan] = useState(plans.find((p) => p.id === initialPlanId) || plans[1])

  useEffect(() => {
    const newPlan = plans.find((p) => p.id === selectedPlan)
    if (newPlan) {
      setPlan(newPlan)
    }
  }, [selectedPlan])

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

      <main className="container mx-auto py-12 px-4">
        <div className="flex flex-col items-start mb-8">
          <Link href="/" className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to home
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
            Complete Your Purchase
          </h1>
          <p className="text-muted-foreground mt-2">
            You're just one step away from creating high-converting landing pages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Select Your Plan</CardTitle>
                <CardDescription>Choose the plan that best fits your business needs.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-4">
                  {plans.map((p) => (
                    <div key={p.id} className="relative">
                      <RadioGroupItem value={p.id} id={p.id} className="peer sr-only" />
                      <Label
                        htmlFor={p.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-md border-primary/20 cursor-pointer hover:border-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <div className="flex flex-col">
                          <span className="font-bold">{p.badge}</span>
                          <span className="text-muted-foreground text-sm">{p.description}</span>
                        </div>
                        <div className="flex items-end gap-1 mt-2 sm:mt-0">
                          <span className="text-2xl font-bold bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                            ${p.price}
                          </span>
                          <span className="text-muted-foreground">Lifetime</span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="border-primary/20 mt-6">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Complete your purchase securely with PayPal.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md border-primary/20 bg-primary/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-royal-gold" />
                        <span className="font-medium">Secure Payment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="/placeholder.svg?height=20&width=40" alt="PayPal" className="h-5" />
                        <img src="/placeholder.svg?height=20&width=40" alt="Visa" className="h-5" />
                        <img src="/placeholder.svg?height=20&width=40" alt="Mastercard" className="h-5" />
                      </div>
                    </div>
                    <PayPalButton planId={plan.id} planName={plan.name} amount={plan.price} className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-primary/20 sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">{plan.badge}</span>
                    <span>${plan.price}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-xl bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-medium">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-royal-gold shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-4 border-t pt-6">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg w-full">
                  <Shield className="h-5 w-5 text-royal-gold shrink-0" />
                  <div>
                    <p className="text-sm font-medium">30-Day Money-Back Guarantee</p>
                    <p className="text-xs text-muted-foreground">Not satisfied? Get a full refund within 30 days.</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
