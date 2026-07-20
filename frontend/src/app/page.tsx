"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const POPULAR_SEARCHES = ["Gaming Laptop", "Wireless Earbuds", "Smart Watch", "RTX 4070", "Mechanical Keyboard"]

const RETAILERS = [
  { name: "Amazon", color: "#FF9900" },
  { name: "BestBuy", color: "#0046BE" },
  { name: "Walmart", color: "#0071DC" },
  { name: "Alibaba", color: "#FF6A00" },
  { name: "eBay", color: "#E53238" },
  { name: "AliExpress", color: "#E43225" },
]

const BENEFITS = [
  { icon: "⚡", title: "Smart Recommendations", desc: "AI-driven matching tailored to your needs" },
  { icon: "🔍", title: "Save Hours of Research", desc: "Skip endless tabs and product listings" },
  { icon: "💰", title: "Compare Prices", desc: "Find the best deals across all stores" },
  { icon: "✅", title: "100% Free to Use", desc: "No hidden fees or signups required" },
]

const HOW_IT_WORKS = [
  { step: "1", title: "Type what you need", desc: "Write what you're looking for in plain English (e.g., 'laptop for video editing')." },
  { step: "2", title: "Answer a few questions", desc: "Our AI asks smart questions to understand your specific needs and preferences." },
  { step: "3", title: "Compare top matches", desc: "Get TOP 3 matching results with side-by-side comparison of specs, prices, and reviews." },
  { step: "4", title: "Buy with confidence", desc: "Pick the winner knowing you got the best value for your exact requirements." },
]

const COMPARISON_ROWS = [
  { feature: "Personalized Recommendations", zipick: true, traditional: false, instore: false },
  { feature: "Time Investment", zipick: "Under 10 minutes", traditional: "30+ minutes", instore: "1-2 hours" },
  { feature: "Price Comparison", zipick: "Automated across stores", traditional: "Manual checking", instore: "Limited to inventory" },
  { feature: "Availability", zipick: "24/7 Instant", traditional: "24/7", instore: "Store hours only" },
  { feature: "Cost", zipick: "100% Free", traditional: "Free", instore: "Free (+ travel)" },
  { feature: "Bias", zipick: "None — AI-driven", traditional: "Algorithm-driven", instore: "Salesperson bias" },
]

const TESTIMONIALS = [
  {
    quote: "I needed a cordless vacuum that actually handles pet hair — not marketing fluff. Zipick narrowed it to two models I could compare side by side without opening twenty tabs.",
    name: "Sarah Chen",
    role: "Product Manager · San Francisco",
    initials: "SC",
  },
  {
    quote: "I needed a laptop that could handle 4K video editing but wouldn't melt in my backpack. Zipick found a Lenovo I never would have looked at on my own. Saved me $400.",
    name: "Marcus Rivera",
    role: "Video Editor · Austin",
    initials: "MR",
  },
  {
    quote: "I'm picky about noise levels on anything with a motor. The back-and-forth questions felt like talking to someone who gets why that matters — not a generic search.",
    name: "Aisha Patel",
    role: "Designer · London",
    initials: "AP",
  },
]

const FAQS = [
  {
    q: "Is Zipick.ai free to use?",
    a: "Yes, Zipick.ai is 100% free for users. Our AI product finder is committed to helping you find the best products without any paywalls or hidden fees.",
  },
  {
    q: "Are the results biased towards specific partners?",
    a: "No. Our algorithm is brand-agnostic. We don't take kickbacks to move a specific product to the top of your list. Our only job is finding the product that keeps the most money in your pocket.",
  },
  {
    q: "What types of products can I find?",
    a: "Our AI product finder excels at finding products with technical specifications (electronics, appliances, smart home devices) but can assist with almost any consumer good available online.",
  },
  {
    q: "Is my personal data safe?",
    a: "Absolutely. We do not sell your personal data. Your search inputs are used solely to generate recommendations during your session.",
  },
]

const ARTICLES = [
  { title: "AI's Transformative E-commerce Role: What to Expect", source: "Digital Commerce 360", tag: "Industry" },
  { title: "How AI Agents Are Shopping for You", source: "TechCrunch", tag: "Technology" },
  { title: "AI-Driven Personalization in Online Shopping", source: "Forbes", tag: "Trends" },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Home() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-slate-950">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 135% 95% at 50% 35%, rgba(120, 45, 38, 0.45) 0%, rgba(60, 28, 28, 0.22) 38%, rgba(30, 18, 22, 0.08) 62%, transparent 82%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 125% 88% at 50% 36%, rgba(55, 48, 95, 0.38) 0%, rgba(35, 32, 58, 0.2) 45%, rgba(22, 20, 38, 0.08) 68%, transparent 88%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 80% at 22% 38%, rgba(90, 35, 52, 0.2) 0%, transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 80% at 78% 36%, rgba(48, 42, 88, 0.18) 0%, transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.72) 0%, rgba(15, 23, 42, 0.42) 12%, rgba(15, 23, 42, 0.24) 28%, rgba(15, 23, 42, 0.12) 42%, rgba(15, 23, 42, 0.04) 58%, rgba(15, 23, 42, 0) 72%)" }} />
        </div>

        {/* Glow blobs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-[35%] h-[85vh] max-h-[780px] w-[140%] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.68] blur-3xl" style={{ background: "radial-gradient(ellipse 100% 75% at 50% 50%, rgba(255, 120, 95, 0.22) 0%, rgba(180, 70, 60, 0.1) 42%, rgba(80, 40, 45, 0.05) 65%, transparent 82%)" }} />
          <div className="absolute left-1/2 top-[35%] h-[75vh] max-h-[700px] w-[120%] max-w-[960px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.6] blur-3xl" style={{ background: "radial-gradient(ellipse 95% 78% at 50% 50%, rgba(150, 130, 220, 0.2) 0%, rgba(80, 70, 140, 0.09) 48%, transparent 80%)" }} />
        </div>

        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: "linear-gradient(to right, rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.3) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-20 pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              AI Product Finder
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Find the perfect product without hours of research.
              <br className="hidden sm:block" />
              Just tell us what you need and get tailored AI recommendations instantly.
            </p>

            {/* Search bar */}
            <div className="mt-10 mx-auto max-w-2xl">
              <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 ring-1 ring-white/10">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder='Search any product... e.g., "RTX 4070", "MacBook Pro"'
                  className="flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                />
                <button
                  onClick={handleSearch}
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:scale-95 whitespace-nowrap"
                >
                  Find Best Match
                </button>
              </div>

              {/* Popular searches */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs text-slate-400">Popular:</span>
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => { setQuery(term); router.push(`/search?q=${encodeURIComponent(term)}`) }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature badges */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl mx-auto">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <span className="text-2xl">{b.icon}</span>
                  <span className="text-xs font-medium text-white">{b.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retailer logos */}
        <div className="relative z-10 border-t border-white/5 bg-white/[0.02] py-8">
          <div className="mx-auto max-w-5xl px-4">
            <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500 mb-6">Integrated with Major Retailers</p>
            <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
              {RETAILERS.map((r) => (
                <div key={r.name} className="flex items-center gap-2 text-slate-400 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: r.color }} />
                  <span className="text-sm font-medium">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why use an AI product finder instead of endless browsing?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              In-store sales assistants push high-margin inventory. Most shopping sites do the same with &ldquo;Recommended&rdquo; badges. Zipick flips the script.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { icon: "⏱️", title: "Save your time", desc: "Stop wasting hours scrolling through endless product listings. Our AI filters through the noise to find exactly what you need in seconds." },
              { icon: "💵", title: "Save your money", desc: "Don't overspend on features you don't need. Our AI finds the most affordable options that strictly meet your specific requirements." },
              { icon: "😌", title: "Stress-free shopping", desc: "Say goodbye to decision fatigue. Our product finder simplifies the complex world of online shopping into a guided, pleasant experience." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Zipick&apos;s AI Product Discovery works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Zipick turns product research into a simple conversation — no need to open dozens of tabs to compare specifications.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/search" className="inline-flex items-center rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:scale-95">
              Start Your Search Now
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Zipick Compares
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              See why Zipick beats manual browsing and generic search.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500"></th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <img src="/zipick-logo.png" alt="Zipick" className="h-5 w-auto" />
                      <span className="text-sm font-bold text-slate-900">Best</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">Traditional Online Shopping</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">In-Store Shopping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.zipick === "boolean" ? (
                        row.zipick ? <div className="flex justify-center"><CheckIcon /></div> : <div className="flex justify-center"><XIcon /></div>
                      ) : (
                        <span className="text-sm font-medium text-slate-900">{row.zipick}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.traditional === "boolean" ? (
                        row.traditional ? <div className="flex justify-center"><CheckIcon /></div> : <div className="flex justify-center"><XIcon /></div>
                      ) : (
                        <span className="text-sm text-gray-500">{row.traditional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.instore === "boolean" ? (
                        row.instore ? <div className="flex justify-center"><CheckIcon /></div> : <div className="flex justify-center"><XIcon /></div>
                      ) : (
                        <span className="text-sm text-gray-500">{row.instore}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* For Business */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-8 py-16 sm:px-16 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)" }} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Shopping Assistant for E-commerce Stores</h2>
              <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                Integrate Zipick&apos;s powerful AI engine directly into your storefront. Increase conversion rates by guiding your customers to the right purchase instantly.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <h3 className="font-semibold text-white">Plug & Play</h3>
                  <p className="mt-2 text-sm text-slate-400">Simple API integration with Shopify, WooCommerce, and custom stacks.</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <h3 className="font-semibold text-white">Boost Conversion</h3>
                  <p className="mt-2 text-sm text-slate-400">Reduce bounce rates by helping customers find what they want faster.</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <h3 className="font-semibold text-white">Customer Insights</h3>
                  <p className="mt-2 text-sm text-slate-400">Understand exactly what your customers are asking for in their own words.</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/procurement" className="inline-flex items-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-gray-100 active:scale-95">
                  View Business Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our users say
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Join thousands of smart shoppers who have found their perfect match.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-gray-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown open={openFaq === i} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Industry Insights</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Revolution of AI Shopping
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Artificial intelligence is revolutionizing e-commerce, making shopping smarter, faster, and more personalized than ever before.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ARTICLES.map((a) => (
              <div key={a.title} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{a.tag}</span>
                <h3 className="mt-3 text-base font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{a.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            AI Shopping is here.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Experience the future of e-commerce today. Stop searching and start finding.
          </p>
          <div className="mt-8">
            <Link href="/search" className="inline-flex items-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-gray-100 active:scale-95">
              Try Zipick Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
