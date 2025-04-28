import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Zap, ArrowRight, Eye } from "lucide-react"

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">InstaLanding AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/templates" className="text-sm font-medium text-primary">
              Templates
            </Link>
            <Link href="/sales" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/early-access">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Choose from 20+ Industry Templates</h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Select the perfect template for your business and customize it to match your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <TemplateCard key={index} template={template} />
              ))}
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

function TemplateCard({ template }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={template.image || "/placeholder.svg"}
          alt={template.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{template.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{template.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1 gap-2">
          <Eye className="h-4 w-4" /> Preview
        </Button>
        <Button className="flex-1 gap-2">
          Use Template <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

const templates = [
  {
    name: "Fitness Coach",
    description: "Perfect for personal trainers and fitness coaches looking to attract new clients.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Business Consultant",
    description: "Ideal for consultants and coaches who want to showcase their expertise.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "E-commerce Product",
    description: "Designed to showcase and sell physical or digital products with high conversion.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "SaaS Platform",
    description: "Perfect for software companies looking to generate leads and demo requests.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Local Restaurant",
    description: "Ideal for restaurants and cafes wanting to attract local customers.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Real Estate Agent",
    description: "Designed for real estate professionals to generate property inquiries.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Digital Agency",
    description: "Perfect for marketing and design agencies to showcase their portfolio.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Online Course",
    description: "Ideal for course creators and educators to sell their knowledge products.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Event Registration",
    description: "Designed for webinars, workshops, and events to maximize registrations.",
    image: '/placeholder.svg?height=225&width=400"  and events to maximize registrations.',
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Podcast Launch",
    description: "Perfect for podcasters looking to grow their audience and subscribers.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Photography Portfolio",
    description: "Ideal for photographers to showcase their work and attract new clients.",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    name: "Nonprofit Organization",
    description: "Designed for charities and nonprofits to increase donations and awareness.",
    image: "/placeholder.svg?height=225&width=400",
  },
]
