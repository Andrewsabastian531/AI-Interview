import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Video, FileText, BarChart3, Clock, Zap, Shield, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            🚀 AI-Powered Hiring Revolution
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Automate Hiring with <span className="text-primary">AI-Powered Interviews</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Save time, cut costs, and hire smarter with AI-driven interview automation. Transform your recruitment
            process with intelligent screening and evaluation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">The Hiring Challenge</h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Recruiters and HR teams waste hours on repetitive interviews and candidate screening. Traditional hiring is
            slow, costly, and inconsistent, leading to poor hiring decisions and missed opportunities.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <Clock className="mx-auto h-12 w-12 text-destructive" />
              <h3 className="mt-4 text-xl font-semibold">Time Consuming</h3>
              <p className="mt-2 text-muted-foreground">Hours spent on repetitive screening calls</p>
            </div>
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-destructive" />
              <h3 className="mt-4 text-xl font-semibold">Inconsistent Results</h3>
              <p className="mt-2 text-muted-foreground">Subjective evaluations lead to bias</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-destructive" />
              <h3 className="mt-4 text-xl font-semibold">Resource Heavy</h3>
              <p className="mt-2 text-muted-foreground">Multiple team members required per interview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">Our AI-Powered Solution</h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Our SaaS automates the entire interview process. From resume screening to AI-conducted interviews,
              real-time analysis, and post-interview reports — all in one platform.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <img src="/ai-interview-dashboard-with-candidate-evaluation-m.jpg" alt="AI Interview Dashboard" className="rounded-lg shadow-lg" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Automated Screening</h3>
                  <p className="text-muted-foreground">
                    AI analyzes resumes and matches candidates to job requirements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Intelligent Interviews</h3>
                  <p className="text-muted-foreground">
                    AI conducts structured interviews with dynamic follow-up questions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Comprehensive Reports</h3>
                  <p className="text-muted-foreground">
                    Detailed analysis with scores, transcripts, and recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">Powerful Features</h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Everything you need to revolutionize your hiring process
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-primary" />
                <CardTitle>AI Interviewer</CardTitle>
                <CardDescription>HR, Technical, or Mixed interview types</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary" />
                <CardTitle>Resume Integration</CardTitle>
                <CardDescription>Automatic resume and job description matching</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Video className="h-10 w-10 text-primary" />
                <CardTitle>Video Integration</CardTitle>
                <CardDescription>Zoom, Google Meet, and WebRTC support</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary" />
                <CardTitle>Real-time Q&A</CardTitle>
                <CardDescription>Dynamic questions with job-specific FAQs</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary" />
                <CardTitle>Candidate Scoring</CardTitle>
                <CardDescription>Comprehensive evaluation and reports</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary" />
                <CardTitle>Admin Dashboard</CardTitle>
                <CardDescription>Complete HR management and decision tools</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Simple 5-step process to transform your hiring
            </p>
          </div>
          <div className="mt-16 space-y-8">
            {[
              {
                step: 1,
                title: "Upload resumes and job description",
                description: "Import candidate resumes and define job requirements",
              },
              {
                step: 2,
                title: "AI prepares interview questions",
                description: "Our AI generates tailored questions based on the role",
              },
              {
                step: 3,
                title: "Candidate joins interview via video call",
                description: "Seamless integration with popular video platforms",
              },
              {
                step: 4,
                title: "AI interviewer conducts session",
                description: "Structured interview with intelligent follow-ups",
              },
              {
                step: 5,
                title: "Get detailed reports and recordings",
                description: "Comprehensive analysis with transcripts and scores",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">What Our Customers Say</h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg">
                  "This platform saved us 100+ hours in interviews last quarter. The AI interviewer is incredibly
                  thorough and consistent."
                </blockquote>
                <footer className="mt-4">
                  <cite className="font-semibold">Sarah Johnson</cite>
                  <p className="text-sm text-muted-foreground">HR Manager, TechCorp</p>
                </footer>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg">
                  "AI interviewing streamlined our hiring pipeline. We're making better decisions faster than ever
                  before."
                </blockquote>
                <footer className="mt-4">
                  <cite className="font-semibold">Michael Chen</cite>
                  <p className="text-sm text-muted-foreground">CTO, StartupXYZ</p>
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Choose the plan that fits your hiring needs
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Free Trial</CardTitle>
                <CardDescription>Perfect for testing</CardDescription>
                <div className="text-3xl font-bold">$0</div>
                <p className="text-sm text-muted-foreground">5 interviews/month</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>For small teams</CardDescription>
                <div className="text-3xl font-bold">$99</div>
                <p className="text-sm text-muted-foreground">50 interviews/month</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="border-primary border-2 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For growing companies</CardDescription>
                <div className="text-3xl font-bold">$499</div>
                <p className="text-sm text-muted-foreground">Unlimited interviews</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Custom solutions</CardDescription>
                <div className="text-3xl font-bold">Custom</div>
                <p className="text-sm text-muted-foreground">Volume pricing</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-16 space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Can the AI handle both HR and technical interviews?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can select the interview type (HR, Technical, or Mixed) based on your needs. Our AI is
                  trained on various interview formats and can adapt accordingly.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Is it integrated with Zoom or Meet?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we support Zoom, Google Meet, and custom in-app video calls through WebRTC. You can use your
                  preferred video platform seamlessly.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Do I still need HR to monitor interviews?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  HR can oversee the process if desired, but our AI handles the entire interview end-to-end. You'll
                  receive comprehensive reports and can review recordings afterward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
            Revolutionize hiring with AI
          </h2>
          <p className="mt-6 text-pretty text-lg text-primary-foreground/90">
            Start your free trial today and transform your recruitment process with intelligent automation.
          </p>
          <div className="mt-10">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Your Free Trial Today!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold text-foreground">Product</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Resources</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AI Interview SaaS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
