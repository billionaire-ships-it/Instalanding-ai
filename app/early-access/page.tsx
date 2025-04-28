import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Crown, Clock, Share2, Trophy } from "lucide-react"
import { EarlyAccessForm } from "@/components/early-access-form"
import { CountdownTimer } from "@/components/countdown-timer"

export default function EarlyAccess() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-royal-gold" />
            <span className="text-xl font-bold">
              InstaLanding <span className="text-primary">AI</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-background via-primary/5 to-background">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-royal-purple to-royal-blue bg-clip-text text-transparent">
                  Get Early Access to InstaLanding AI v5.5
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Join our exclusive early access program and be among the first to experience the power of InstaLanding
                  AI's Royal Edition.
                </p>

                <div className="w-full max-w-md">
                  <CountdownTimer targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                  <Clock className="h-6 w-6 text-royal-gold shrink-0" />
                  <div>
                    <p className="font-medium">Limited Time Offer</p>
                    <p className="text-sm text-muted-foreground">Early access spots are limited. Sign up now!</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Share2 className="h-5 w-5 text-royal-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Refer Friends</p>
                      <p className="text-sm text-muted-foreground">Invite friends to unlock bonuses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-royal-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Leaderboard</p>
                      <p className="text-sm text-muted-foreground">Top referrers get special rewards</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="border-primary/20 shadow-lg overflow-hidden">
                  <div className="bg-gradient-royal h-2"></div>
                  <CardHeader>
                    <CardTitle>Join the Waitlist</CardTitle>
                    <CardDescription>
                      Fill out the form below to secure your spot in our early access program.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EarlyAccessForm />
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4 border-t p-6">
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm text-muted-foreground">Share with friends:</div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline" className="border-primary/20 hover:bg-primary/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="h-4 w-4"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        </Button>
                        <Button size="icon" variant="outline" className="border-primary/20 hover:bg-primary/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="h-4 w-4"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Button>
                        <Button size="icon" variant="outline" className="border-primary/20 hover:bg-primary/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="h-4 w-4"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </Button>
                        <Button size="icon" variant="outline" className="border-primary/20 hover:bg-primary/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="h-4 w-4"
                          >
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
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
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} InstaLanding AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
