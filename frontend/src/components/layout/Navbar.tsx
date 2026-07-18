"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 10))
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
              <span className="text-sm font-bold text-white">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zipick.ai</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Search</Link>
            <Link href="/compare" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Compare</Link>
            <Link href="/ai-chat" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Chat</Link>
            <Link href="/procurement" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Business</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
