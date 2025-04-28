import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight, CheckCircle, AlertCircle, ShieldCheck } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"

export default function SalesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">InstaLanding AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/early-access">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Badge className="mb-2" variant="destructive">
                Limited Time Offer
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
                The Ultimate Landing Page Solution for Entrepreneurs
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Stop wasting time and money on complicated website builders or expensive developers.
              </p>

              <div className="w-full max-w-md mx-auto my-8">
                <CountdownTimer targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  Get Started Now <ArrowRight className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">ONLY 200 Lifetime Seats Left!</p>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Are You Struggling With These Problems?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-full bg-destructive/10 text-destructive mb-4">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <CardTitle>Wasting Time on DIY Websites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Spending countless hours trying to figure out complicated website builders, only to end up with a
                    mediocre result that doesn't convert visitors into customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-full bg-destructive/10 text-destructive mb-4">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <CardTitle>Paying Expensive Developers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Spending thousands of dollars on web developers who take weeks to deliver a website that still
                    doesn't meet your expectations or business needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-full bg-destructive/10 text-destructive mb-4">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <CardTitle>Low Conversion Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your current landing page isn't converting visitors into leads or customers, costing you potential
                    revenue and growth opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-full bg-destructive/10 text-destructive mb-4">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <CardTitle>No Marketing Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You have a website but no clear strategy on how to drive traffic or convert visitors, leaving you
                    frustrated and your business stagnant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2" variant="outline">
                The Solution
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Introducing InstaLanding AI</h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                The all-in-one platform that helps entrepreneurs create high-converting landing pages in minutes, not
                weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="InstaLanding AI Dashboard"
                  className="rounded-lg shadow-lg border"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">How It Works</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Choose a template from our library</p>
                      <p className="text-muted-foreground">
                        Select from 20+ industry-specific templates designed to convert.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        2
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Customize with our no-code editor</p>
                      <p className="text-muted-foreground">
                        Easily edit text, images, colors, and layout without any coding knowledge.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Generate AI marketing content</p>
                      <p className="text-muted-foreground">
                        Use our AI to create compelling headlines, copy, and ads that convert.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        4
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Publish and start selling</p>
                      <p className="text-muted-foreground">
                        Go live with one click and start converting visitors into customers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2" variant="secondary">
                Exclusive Bonuses
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Get These Bonuses When You Sign Up Today
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                We're including these valuable bonuses to help you succeed even faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-bold">BONUS #1</span>
                  </div>
                  <CardTitle>Premium Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get access to our exclusive premium templates that are not available to regular users.
                  </p>
                  <p className="font-medium">Value: $497</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-bold">BONUS #2</span>
                  </div>
                  <CardTitle>Email Funnel Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ready-to-use email sequences to nurture leads and convert them into customers.
                  </p>
                  <p className="font-medium">Value: $297</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-bold">BONUS #3</span>
                  </div>
                  <CardTitle>VIP Support Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get priority support and direct access to our team of experts to help you succeed.
                  </p>
                  <p className="font-medium">Value: $997/year</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-bold mb-2">Total Bonus Value: $1,791</p>
              <p className="text-muted-foreground">Yours FREE when you sign up today!</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2" variant="outline">
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Choose Your Plan</h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Select the perfect plan for your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="font-bold text-lg mb-2">🥉 Pro</div>
                  <CardTitle className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$197</span>
                    <span className="text-muted-foreground">Lifetime</span>
                  </CardTitle>
                  <CardDescription>Perfect for beginners</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>AI Landing Page Builder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>10 Industry Templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Basic AI Ad Generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>PayPal Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Email Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              <Card className="border-primary shadow-lg">
                <CardHeader className="bg-primary/5">
                  <div className="font-bold text-lg mb-2">🥈 Premium</div>
                  <CardTitle className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$497</span>
                    <span className="text-muted-foreground">Lifetime</span>
                  </CardTitle>
                  <CardDescription>Most popular choice</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>20+ Industry Templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Advanced AI Ad Generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Target Audience Generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Priority Support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Custom Domain</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary">Get Started</Button>
                </CardFooter>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="font-bold text-lg mb-2">🥇 Luxurious</div>
                  <CardTitle className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$997</span>
                    <span className="text-muted-foreground">Lifetime</span>
                  </CardTitle>
                  <CardDescription>For serious entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Everything in Premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Unlimited Templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Elite AI Marketing Engine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>VIP Support Access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>White Label Option</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Advanced Analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>1-on-1 Strategy Call</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg max-w-md">
                <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
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

        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Launch Your Business?</h2>
              <p className="md:text-xl max-w-[700px] text-primary-foreground/90">
                Join thousands of entrepreneurs who are growing their business with InstaLanding AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                  Get Started Now <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">ONLY 200 Lifetime Seats Left!</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">InstaLanding AI</span>
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
