import Link from "next/link"
import { Button } from "@/components/ui"

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              The AI that buys
              <span className="text-brand-600"> smarter</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Zipick.ai is the world&apos;s first AI Commerce Operating System.
              It doesn&apos;t just find products — it thinks like the world&apos;s best buyer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link href="/search">
                <Button size="lg">Start Searching</Button>
              </Link>
              <Link href="/ai-chat">
                <Button variant="outline" size="lg">Talk to AI</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "AI Decision Engine", description: "Not just listings. AI tells you exactly what to buy, why, and whether you should wait." },
              { title: "Multi-Agent System", description: "Specialized AI agents collaborate: Search, Price, Review, Supplier, Logistics, and Finance." },
              { title: "Universal Search", description: "Search Amazon, Alibaba, eBay, Walmart, local stores, and supplier catalogs from one place." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">For Consumers & Enterprises</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Products Indexed", value: "1B+" },
              { label: "Marketplaces", value: "50+" },
              { label: "AI Agents", value: "14" },
              { label: "Price Predictions", value: "97% acc." },
            ].map((stat) => (
              <div key={stat.label} className="text-center rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-brand-600">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
