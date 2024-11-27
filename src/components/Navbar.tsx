import * as React from "react"
import { Link, useLocation } from "react-router-dom"
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
        <div className="rounded-full glass-effect transition-all duration-300">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center">
              <Link className="text-lg flex items-center" to="/">
                <img 
                  src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732707944/Voiceflows__5_-removebg-preview_kwyo4t.png"
                  alt="Voiceflows"
                  className="h-12 w-auto"
                />
              </Link>
              
            </div>
            <nav className="hidden md:flex md:space-x-8 items-center">
              <Link
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/features' ? 'text-primary' : 'text-muted-foreground'
                }`}
                to="/features"
              >
                Features
              </Link>
              <Link
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/usecases' ? 'text-primary' : 'text-muted-foreground'
                }`}
                to="/usecases"
              >
                Usecases
              </Link>
              <Link
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'
                }`}
                to="/contact"
              >
                Contact
              </Link>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <Link
                  to="/for-startups"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === "/for-startups"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  For Startups
                </Link>
              </div>
              <SignInButton mode="modal" redirectUrl="/post-signup">
                <Button variant="ghost" size="sm">Sign in</Button>
              </SignInButton>
              <SignInButton mode="modal" redirectUrl="/post-signup">
                <Button size="sm">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </nav>
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
      </div>
    </header>
  )
}
