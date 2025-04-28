"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PenTool, CreditCard, Video, Share2, Sparkles } from "lucide-react"

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("templates")

  const features = [
    {
      id: "templates",
      title: "Dynamic Templates",
      icon: <PenTool className="h-6 w-6 text-royal-gold" />,
      description: "Choose from 20+ industry-specific templates designed to convert visitors into customers.",
      image: "/images/dynamic-templates.png",
    },
    {
      id: "godfather",
      title: "Godfather Offer Copy",
      icon: <Sparkles className="h-6 w-6 text-royal-gold" />,
      description: "Generate irresistible offers using AI-driven copy inspired by Sabri Suby's methodology.",
      image: "/images/godfather-offer.png",
    },
    {
      id: "payments",
      title: "PayPal Integration",
      icon: <CreditCard className="h-6 w-6 text-royal-gold" />,
      description: "Seamless integration with PayPal for quick and secure payments with upsell capabilities.",
      image: "/images/paypal-integration.png",
    },
    {
      id: "video",
      title: "AI Video Creator",
      icon: <Video className="h-6 w-6 text-royal-gold" />,
      description: "Generate compelling video ads that convert visitors into customers.",
      image: "/images/ai-video-creator.png",
    },
    {
      id: "referral",
      title: "Referral System",
      icon: <Share2 className="h-6 w-6 text-royal-gold" />,
      description: "Built-in viral loops to turn customers into promoters with automated tracking.",
      image: "/images/referral-system.png",
    },
  ]

  return (
    <Card className="border-primary/20 overflow-hidden">
      <CardContent className="p-0">
        <Tabs defaultValue="templates" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex overflow-x-auto scrollbar-hide border-b">
            <TabsList className="bg-transparent h-auto p-0 w-full flex justify-start">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 rounded-none data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-transparent`}
                >
                  {feature.icon}
                  <span className="hidden md:inline">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="p-0 m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                          1
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">Select your template</p>
                        <p className="text-sm text-muted-foreground">
                          Choose from our library of high-converting templates.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                          2
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">Customize with AI</p>
                        <p className="text-sm text-muted-foreground">
                          Let our AI generate perfect copy for your business.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                          3
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">Launch & convert</p>
                        <p className="text-sm text-muted-foreground">
                          Publish your page and start converting visitors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="rounded-lg shadow-lg border border-primary/20 max-w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
