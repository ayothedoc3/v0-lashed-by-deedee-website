"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Book", href: "/book" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQs", href: "/faqs" },
    { name: "Policies", href: "/policies" },
    { name: "Contact", href: "/contact" },
    { name: "Reviews", href: "/reviews" },
    { name: "Training", href: "/training" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-lg">
      {/* Header */}
      <div className="bg-black py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Heart className="w-6 h-6 text-pink-500" />
            <h1 className="text-2xl md:text-3xl font-bold">Lashed by Deedee</h1>
          </Link>
          <p className="text-sm md:text-base text-gray-300 mt-1">Where Beauty Meets Precision</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-pink-500">
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-pink-200 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between py-3">
            <span className="text-white font-medium">Menu</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-pink-600"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-pink-600 border-t border-pink-400">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-pink-200 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
