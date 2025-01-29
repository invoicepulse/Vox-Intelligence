import * as React from "react"
import { useLocation } from "react-router-dom"
import { SignInButton, useAuth } from "@clerk/clerk-react"
import { Button } from "./ui/Button"
import { ArrowRight } from "lucide-react"

export default function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false)
  const location = useLocation()
  const { isSignedIn } = useAuth()

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Fixed Position */}
          <nav className="hidden md:flex md:space-x-8 items-center px-4 py-1 rounded-full">
            <a className="text-lg flex items-center" href="/">
              <span className="font-black text-2xl tracking-tight">Vocyth</span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs font-bold px-3 py-1 rounded-full ml-2">Beta</span>
            </a>
          </nav>

          {/* Centered Navigation */}
          <nav className="hidden md:flex md:space-x-8 items-center bg-white/80 px-6 py-2 rounded-full border border-black">
            <a
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/features' ? 'text-primary' : 'text-muted-foreground'
              }`}
              href="/features"
            >
              Features
            </a>
            <a
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/usecases' ? 'text-primary' : 'text-muted-foreground'
              }`}
              href="/usecases"
            >
              Usecases
            </a>
            <a
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'
              }`}
              href="/contact"
            >
              Contact
            </a>
          </nav>

          {/* Right Side Actions - Fixed Position */}
          <div className="flex items-center space-x-4">
            <SignInButton mode="modal" redirectUrl="/post-signup">
              <Button size="sm">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignInButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" className="h-9 w-9 p-0">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-5 w-5"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
