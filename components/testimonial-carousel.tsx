"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Consultant",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "InstaLanding AI has completely transformed my business. I've increased my conversion rates by 320% and generated over $50,000 in new revenue in just 30 days!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "E-commerce Entrepreneur",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The AI-generated copy is incredible. It's like having a world-class copywriter on my team. My product launch generated $25,000 in the first week alone.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "Fitness Coach",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "I was struggling to get clients until I used InstaLanding AI. Now I have a waitlist of people wanting to work with me. The ROI has been incredible!",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Digital Agency Owner",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "We now offer landing page services to our clients using InstaLanding AI. It's added a new $10,000/month revenue stream to our agency with minimal effort.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-primary/20 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-royal-gold text-royal-gold" />
                    ))}
                  </div>
                  <p className="text-center text-lg italic mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background border-primary/20 shadow-lg hover:bg-primary/10 z-10 hidden md:flex"
        onClick={prev}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background border-primary/20 shadow-lg hover:bg-primary/10 z-10 hidden md:flex"
        onClick={next}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-primary/20"} transition-colors`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          />
        ))}
      </div>
    </div>
  )
}
