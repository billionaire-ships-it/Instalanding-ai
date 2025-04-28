import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  PlusCircle,
  BarChart3,
  ArrowUpRight,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-muted/40">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">InstaLanding AI</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/pages"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary transition-all hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              My Pages
            </Link>
            <Link
              href="/dashboard/templates"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary transition-all hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Templates
            </Link>
            <Link
              href="/dashboard/audience"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary transition-all hover:bg-muted"
            >
              <Users className="h-4 w-4" />
              Audience
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary transition-all hover:bg-muted"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <div className="md:hidden">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm">Upgrade Plan</Button>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's an overview of your landing pages.</p>
              </div>
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" /> Create New Page
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                    <span className="text-green-500">+12.5%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                    <span className="text-green-500">+0.5%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Pages</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">of 10 pages in your plan</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                    <span className="text-green-500">+8</span> new leads this week
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Pages */}
            <div>
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Your Landing Pages</h2>
                  <TabsList>
                    <TabsTrigger value="all">All Pages</TabsTrigger>
                    <TabsTrigger value="published">Published</TabsTrigger>
                    <TabsTrigger value="drafts">Drafts</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {pages.map((page, i) => (
                      <PageCard key={i} page={page} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="published" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {pages
                      .filter((p) => p.status === "published")
                      .map((page, i) => (
                        <PageCard key={i} page={page} />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="drafts" className="mt-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {pages
                      .filter((p) => p.status === "draft")
                      .map((page, i) => (
                        <PageCard key={i} page={page} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function PageCard({ page }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={page.image || "/placeholder.svg"} alt={page.title} className="object-cover w-full h-full" />
        <div className="absolute top-2 right-2">
          <Badge variant={page.status === "published" ? "default" : "secondary"}>
            {page.status === "published" ? "Published" : "Draft"}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{page.title}</CardTitle>
        <CardDescription>Created on {page.createdAt}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <span>{page.views} views</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{page.conversions} leads</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm" className="flex-1 gap-1">
          <Eye className="h-4 w-4" /> View
        </Button>
        <Button variant="outline" size="sm" className="flex-1 gap-1">
          <Edit className="h-4 w-4" /> Edit
        </Button>
        <Button variant="outline" size="sm" className="w-9 p-0 text-destructive hover:text-destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

const pages = [
  {
    title: "Fitness Program Landing Page",
    status: "published",
    createdAt: "Apr 15, 2023",
    views: 523,
    conversions: 18,
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "Business Coaching Webinar",
    status: "published",
    createdAt: "May 2, 2023",
    views: 342,
    conversions: 12,
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "E-book Download Page",
    status: "published",
    createdAt: "Jun 10, 2023",
    views: 289,
    conversions: 8,
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "Product Launch (Coming Soon)",
    status: "draft",
    createdAt: "Jul 5, 2023",
    views: 0,
    conversions: 0,
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "Membership Site",
    status: "draft",
    createdAt: "Jul 12, 2023",
    views: 0,
    conversions: 0,
    image: "/placeholder.svg?height=225&width=400",
  },
]
