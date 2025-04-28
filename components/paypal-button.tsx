"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import Script from "next/script"

// PayPal Client ID
const PAYPAL_CLIENT_ID = "AewNwX-rrrXNlGvG31GpPGS"

interface PayPalButtonProps {
  planId: string
  planName: string
  amount: number
  onSuccess?: (details: any) => void
  onError?: (error: any) => void
  className?: string
}

export function PayPalButton({ planId, planName, amount, onSuccess, onError, className = "" }: PayPalButtonProps) {
  const [loading, setLoading] = useState(true)
  const [paypalLoaded, setPaypalLoaded] = useState(false)
  const [buttonRendered, setButtonRendered] = useState(false)
  const router = useRouter()

  // Function to handle successful payment
  const handlePaymentSuccess = (details: any) => {
    // Store payment info in localStorage (in a real app, this would be in your database)
    localStorage.setItem("paymentDetails", JSON.stringify(details))

    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess(details)
    }

    // Redirect to success page
    router.push(`/checkout/success?orderId=${details.id}&plan=${planId}`)
  }

  // Function to handle payment error
  const handlePaymentError = (error: any) => {
    console.error("Payment failed:", error)

    // Call onError callback if provided
    if (onError) {
      onError(error)
    }
  }

  // Initialize PayPal button when the SDK is loaded
  useEffect(() => {
    if (!paypalLoaded || buttonRendered) return

    const paypalButtonContainer = document.getElementById("paypal-button-container")
    if (!paypalButtonContainer) return

    setLoading(true)

    // @ts-ignore - PayPal is loaded via script
    window.paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "pay",
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                reference_id: planId,
                description: `InstaLanding AI - ${planName} Plan`,
                amount: {
                  value: amount.toString(),
                  currency_code: "USD",
                },
              },
            ],
          })
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            handlePaymentSuccess(details)
          })
        },
        onError: (err: any) => {
          handlePaymentError(err)
        },
      })
      .render("#paypal-button-container")
      .then(() => {
        setButtonRendered(true)
        setLoading(false)
      })
      .catch((error: any) => {
        console.error("Failed to render PayPal button:", error)
        setLoading(false)
      })
  }, [paypalLoaded, buttonRendered, planId, planName, amount, onSuccess, onError, router])

  // Handle PayPal SDK loading
  const handlePayPalLoad = () => {
    setPaypalLoaded(true)
  }

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`}
        onLoad={handlePayPalLoad}
        strategy="afterInteractive"
      />

      <div className={`w-full ${className}`}>
        {loading && (
          <Button disabled className="w-full h-12">
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading PayPal...
            </span>
          </Button>
        )}
        <div id="paypal-button-container" className={loading ? "hidden" : ""}></div>
      </div>
    </>
  )
}
