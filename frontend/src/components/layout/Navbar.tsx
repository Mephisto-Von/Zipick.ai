"use client"

import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex-none">
          <Link href="/" className="flex items-center gap-2" aria-label="Go to Zipick.ai homepage">
            <img src="/zipick-logo.png" alt="Zipick.ai" className="h-7 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center flex-1 gap-12">
          <a href="/#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
          <a href="/#benefits" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
          <a href="/#comparison" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Comparison</a>
          <a href="/#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
        </nav>

        <div className="flex-none flex items-center gap-2">
          <Link href="/search" className="inline-flex items-center justify-center h-12 w-12 p-3 rounded-md text-slate-600 transition-colors hover:bg-transparent" aria-label="Open search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/auth/login" className="inline-flex items-center justify-center h-12 w-12 p-3 rounded-md text-slate-600 transition-colors hover:bg-transparent" aria-label="Sign in">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
