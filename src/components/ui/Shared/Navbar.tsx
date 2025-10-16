import React from "react"
import { ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/clerk-react"
export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0d011a]/80 border-b border-[#2e1f47]/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-2 rounded-full">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
      <a href="/">    <span className="font-semibold text-lg text-white">Sasifye</span></a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-sm text-gray-300 hover:text-white hover:bg-transparent"
          >
            Cart (0)
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-5">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#120424]/95 border-t border-[#2e1f47]/40 p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-gray-300 hover:text-pink-400 text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </a>
          ))}

          <div className="mt-3 flex flex-col gap-2">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-transparent"
            >
              Cart (0)
            </Button>
             <SignedOut>
              <SignUpButton mode="modal">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  )
}
