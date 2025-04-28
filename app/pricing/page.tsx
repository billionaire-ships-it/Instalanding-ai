import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Crown, CheckCircle, Shield, ArrowRight } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-royal-gold" />
            <span className="text-xl font-bold">
              InstaLanding <span className="text-primary">AI</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-primary">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="bg-gradient-royal hover:opacity-90 transition-opacity">
              <Link href="/early-access">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2 bg-royal-gold text-royal-dark font-semibold" variant="outline">
                Elite Pricing
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Choose the perfect plan for your business needs with our lifetime access options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                badge="🥉 Pro"
                price="$197"
                description="Perfect for beginners"
                features={[
                  "AI Landing Page Builder",
                  "10 Industry Templates",
                  "Basic AI Ad Generator",
                  "PayPal Integration",
                  "Email Support",
                  "Pre-written Ad Templates",
                  "Basic Analytics",
                ]}
                planId="pro"
              />
              <PricingCard
                badge="🥈 Premium"
                price="$497"
                description="Most popular choice"
                features={[
                  "Everything in Pro",
                  "20+ Industry Templates",
                  "Advanced AI Ad Generator",
                  "Referral Rocket System",
                  "Dynamic Scarcity Timers",
                  "Priority Support",
                  "Custom Domain",
                  "AI Video Creator (Basic)",
                ]}
                highlighted
                planId="premium"
              />
              <PricingCard
                badge="🥇 Luxurious"
                price="$997"
                description="For serious entrepreneurs"
                features={[
                  "Everything in Premium",
                  "Unlimited Templates",
                  "Elite AI Marketing Engine",
                  "High-Ticket Funnel Templates",
                  "Advanced Retargeting Tools",
                  "VIP Support Access",
                  "White Label Option",
                  "Advanced Analytics",
                  "AI Video Creator (Premium)",
                ]}
                planId="luxurious"
              />
            </div>

            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg max-w-md border border-primary/20">
                <Shield className="h-10 w-10 text-royal-gold shrink-0" />
                <div>
                  <p className="font-bold">30-Day Money-Back Guarantee</p>
                  <p className="text-sm text-muted-foreground">
                    If you're not completely satisfied with InstaLanding AI, we'll refund your purchase. No questions
                    asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Find answers to common questions about our pricing and features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">What does "Lifetime Access" mean?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lifetime Access means you pay once and get access to the platform forever. There are no recurring
                    fees or subscriptions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Can I upgrade my plan later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade to a higher plan at any time. You'll only pay the difference between your
                    current plan and the new one.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">How does the money-back guarantee work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you're not satisfied with InstaLanding AI within 30 days of purchase, simply contact our support
                    team and we'll process a full refund.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Are there any hidden fees?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, the price you see is the price you pay. There are no hidden fees or additional charges. You get
                    lifetime access with a one-time payment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-royal text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="md:text-xl max-w-[700px] text-white/90">
                Join thousands of entrepreneurs who are growing their business with InstaLanding AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" variant="secondary" className="gap-2 text-royal-dark font-bold">
                  Choose Your Plan <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Crown className="h-6 w-6 text-royal-gold" />
              <span className="text-xl font-bold">
                InstaLanding <span className="text-primary">AI</span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
              <Link href="#" className="text-sm hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-primary">
                Contact Us
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} InstaLanding AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PricingCard({ badge, price, description, features, highlighted = false, planId }) {
  return (
    <Card
      className={`flex flex-col h-full ${
        highlighted ? "border-primary shadow-lg" : "border-primary/20"
      } hover:border-primary/50 transition-all hover:shadow-lg`}
    >
      <CardHeader className={highlighted ? "bg-gradient-to-r from-primary/20 to-primary/10" : ""}>
        <div className="font-bold text-lg mb-2">{badge}</div>
        <CardTitle className="flex items-end gap-1">
          <span className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-muted-foreground">Lifetime</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 mt-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-royal-gold shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <Button
          asChild
          className={`w-full ${
            highlighted ? "bg-gradient-royal hover:opacity-90 transition-opacity" : "bg-primary hover:bg-primary/90"
          }`}
        >
          <Link href={`/checkout?plan=${planId}`}>Get Started</Link>
        </Button>
        <div className="text-xs text-center text-muted-foreground">
          Secure payment via PayPal • 30-day money-back guarantee
        </div>
      </CardFooter>
    </Card>
  )
}
