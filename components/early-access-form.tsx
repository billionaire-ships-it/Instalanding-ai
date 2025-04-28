"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export function EarlyAccessForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    loading: false,
    success: false,
    error: null,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setFormState((prev) => ({ ...prev, loading: true, error: null }))

    // Simulate API call
    try {
      // In a real app, this would be an API call to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormState((prev) => ({
        ...prev,
        loading: false,
        success: true,
      }))
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: "Something went wrong. Please try again.",
      }))
    }
  }

  if (formState.success) {
    return (
      <div className="flex flex-col items-center text-center space-y-4 py-4">
        <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">You're on the list!</h3>
        <p className="text-muted-foreground">
          Thank you for joining our early access program. We'll notify you when we're ready to launch.
        </p>
        <p className="text-sm font-medium text-primary">Share with friends to move up the waitlist!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          value={formState.name}
          onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
          required
          className="border-primary/20 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formState.email}
          onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
          required
          className="border-primary/20 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="business">Business Type</Label>
        <Input
          id="business"
          placeholder="E-commerce, Coaching, Agency, etc."
          value={formState.business}
          onChange={(e) => setFormState((prev) => ({ ...prev, business: e.target.value }))}
          required
          className="border-primary/20 focus:border-primary"
        />
      </div>

      {formState.error && <div className="text-sm text-red-500">{formState.error}</div>}

      <Button
        type="submit"
        className="w-full bg-gradient-royal hover:opacity-90 transition-opacity"
        disabled={formState.loading}
      >
        {formState.loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Join Waitlist <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
}
