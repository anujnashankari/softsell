import { Testimonials } from "@/components/testimonials"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ContactForm } from "@/components/contact-form"
import { ChatWidget } from "@/components/chat-widget"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-primary"
          >
            <path d="M19 16V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v11" />
            <rect width="20" height="5" x="2" y="19" rx="2" />
            <circle cx="12" cy="9" r="2" />
            <path d="M10 15h4" />
          </svg>
          <span className="text-xl font-bold">SoftSell</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#why-choose-us" className="hover:text-primary transition-colors">
            Why Choose Us
          </a>
          <a href="#testimonials" className="hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>

      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
