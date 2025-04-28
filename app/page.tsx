import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  PenTool,
  CreditCard,
  Target,
  ArrowRight,
  Crown,
  Sparkles,
  Video,
  Share2,
  BarChart3,
  Rocket,
  Clock,
} from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FeatureShowcase } from "@/components/feature-showcase"

export default function Home() {
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
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#templates" className="text-sm font-medium hover:text-primary">
              Templates
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
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
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Badge className="mb-2 bg-royal-gold text-royal-dark font-semibold" variant="outline">
                InstaLanding AI v5.5 - Royal Edition
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                Launch Your Online Business in Under 60 Seconds
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Generate irresistible, high-converting landing pages instantly with AI-driven Godfather offer copy and
                built-in payment systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-royal hover:opacity-90 transition-opacity shadow-lg"
                  asChild
                >
                  <Link href="/checkout?plan=premium">
                    Get Started Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary hover:bg-primary/10">
                  <Link href="#templates">See Templates</Link>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full">
                <div className="flex flex-col items-center p-3 bg-background rounded-lg shadow-md border border-primary/20">
                  <Sparkles className="h-6 w-6 text-royal-gold mb-2" />
                  <p className="text-sm font-medium">AI-Driven Copy</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-background rounded-lg shadow-md border border-primary/20">
                  <CreditCard className="h-6 w-6 text-royal-gold mb-2" />
                  <p className="text-sm font-medium">PayPal Integration</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-background rounded-lg shadow-md border border-primary/20">
                  <Video className="h-6 w-6 text-royal-gold mb-2" />
                  <p className="text-sm font-medium">AI Video Creator</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-background rounded-lg shadow-md border border-primary/20">
                  <Clock className="h-6 w-6 text-royal-gold mb-2" />
                  <p className="text-sm font-medium">Scarcity Timers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <FeatureShowcase />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2 bg-royal-gold text-royal-dark font-semibold" variant="outline">
                Elite Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                The Ultimate Landing Page Solution
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Everything you need to create high-converting landing pages and grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<PenTool className="text-royal-gold" />}
                title="AI Landing Page Builder"
                description="Create stunning landing pages in minutes with our AI-powered builder and dynamic templates."
              />
              <FeatureCard
                icon={<Sparkles className="text-royal-gold" />}
                title="Godfather Offer Copy"
                description="Generate irresistible offers using AI-driven copy inspired by Sabri Suby's methodology."
              />
              <FeatureCard
                icon={<CreditCard className="text-royal-gold" />}
                title="PayPal One-Click Payment"
                description="Seamless integration with PayPal for quick and secure payments with upsell capabilities."
              />
              <FeatureCard
                icon={<Video className="text-royal-gold" />}
                title="AI Video Ad Creator"
                description="Generate compelling video ads that convert visitors into customers."
              />
              <FeatureCard
                icon={<Share2 className="text-royal-gold" />}
                title="Referral Rocket System"
                description="Built-in viral loops to turn customers into promoters with automated tracking."
              />
              <FeatureCard
                icon={<BarChart3 className="text-royal-gold" />}
                title="Advanced Analytics"
                description="Track conversions, engagement, and ROI with our comprehensive analytics dashboard."
              />
              <FeatureCard
                icon={<Target className="text-royal-gold" />}
                title="Retargeting Tools"
                description="Automated retargeting ads to capture lost visitors and increase conversions."
              />
              <FeatureCard
                icon={<Clock className="text-royal-gold" />}
                title="Dynamic Scarcity Timers"
                description="Create genuine urgency with customizable countdown timers and limited offers."
              />
              <FeatureCard
                icon={<Rocket className="text-royal-gold" />}
                title="High-Ticket Funnels"
                description="Premium funnel templates designed specifically for high-ticket offers and services."
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2 bg-royal-gold text-royal-dark font-semibold" variant="outline">
                Success Stories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Join thousands of entrepreneurs who are growing their business with InstaLanding AI.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2 bg-royal-gold text-royal-dark font-semibold" variant="outline">
                Elite Pricing
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Choose the perfect plan for your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-royal text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Launch Your Business?</h2>
              <p className="md:text-xl max-w-[700px] text-white/90">
                Join thousands of entrepreneurs who are growing their business with InstaLanding AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" variant="secondary" className="gap-2 text-royal-dark font-bold" asChild>
                  <Link href="/checkout?plan=premium">
                    Get Started Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  See Templates
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

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="flex flex-col h-full border-primary/20 hover:border-primary/50 transition-colors group">
      <CardHeader>
        <div className="p-2 w-fit rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function PricingCard({ badge, price, description, features, highlighted = false, planId }) {
  return (
    <Card
      className={`flex flex-col h-full ${highlighted ? "border-primary shadow-lg" : "border-primary/20"} hover:border-primary/50 transition-all hover:shadow-lg`}
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
      <CardFooter>
        <Button
          className={`w-full ${highlighted ? "bg-gradient-royal hover:opacity-90 transition-opacity" : "bg-primary hover:bg-primary/90"}`}
          asChild
        >
          <Link href={`/checkout?plan=${planId}`}>Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
