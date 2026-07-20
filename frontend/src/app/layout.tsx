import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "Zipick.ai — AI Product Finder",
  description: "Find the perfect product without hours of research. Zipick.ai is your AI shopping assistant that helps you discover the best products with tailored recommendations.",
  icons: {
    icon: "/zipick-logo.png",
  },
  openGraph: {
    title: "Zipick.ai — AI Product Finder",
    description: "AI-powered universal product search, price comparison, and buying intelligence across Amazon, BestBuy, Walmart, and more.",
    images: ["/zipick-logo.png"],
  },
  keywords: "ai product finder, product finder ai, ai item finder, ai product search, find product ai, shopping assistant, product recommendations",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`${jakarta.className} min-h-screen bg-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
