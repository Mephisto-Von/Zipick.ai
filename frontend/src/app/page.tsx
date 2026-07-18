import Link from "next/link"
import { Button, Card, Badge, StarRating } from "@/components/ui"

interface Product {
  id: string
  name: string
  brand?: string
  category?: string
  current_price: number
  source: string
  rating?: number
  review_count?: number
  in_stock?: boolean
  buying_score?: number
}

function getApiBase(): string {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/v1$/, '')
  }
  return 'http://localhost:8080'
}

async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const base = getApiBase()
    const res = await fetch(`${base}/api/v1/products?limit=6&sort_by=buying_score&sort_order=desc`, {
      next: { revalidate: 30 }
    })
    const data = await res.json()
    return data.data || []
  } catch {
    return []
  }
}

async function getCategories(): Promise<string[]> {
  try {
    const base = getApiBase()
    const res = await fetch(`${base}/api/v1/products?limit=100`, { next: { revalidate: 30 } })
    const data = await res.json()
    const cats = [...new Set((data.data || []).map((p: Product) => p.category).filter(Boolean))] as string[]
    return cats.slice(0, 8)
  } catch {
    return []
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([getFeaturedProducts(), getCategories()])

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
              Search, compare, and buy with AI-powered intelligence across Amazon, BestBuy, Walmart, and more.
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

      {categories.length > 0 && (
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <Link key={cat} href={`/search?category=${encodeURIComponent(cat)}`}>
                  <Badge variant="default" className="text-sm px-4 py-2 cursor-pointer hover:bg-brand-50 transition-colors">{cat}</Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {products.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Top Picks</h2>
              <Link href="/search" className="text-sm text-brand-600 hover:text-brand-700 font-medium">View all →</Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map(product => (
                <Card key={product.id} hover>
                  <a href={`/products/${product.id}`}>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                      <div className="text-center p-4">
                        <div className="text-3xl mb-2">📦</div>
                        <div className="text-xs">{product.category}</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">{product.brand}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-900">${product.current_price.toFixed(2)}</span>
                      <span className="text-xs text-gray-400">{product.source}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <StarRating rating={product.rating || 0} size="sm" />
                      <span className="text-xs text-gray-500">({product.review_count || 0})</span>
                      {product.buying_score && (
                        <span className="ml-auto text-xs font-semibold text-brand-600">{product.buying_score}/100</span>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.in_stock && <Badge variant="success">In Stock</Badge>}
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "AI Decision Engine", description: "Not just listings. AI tells you exactly what to buy, why, and whether you should wait." },
              { title: "Multi-Agent System", description: "Specialized AI agents collaborate: Search, Price, Review, Supplier, Logistics, and Finance." },
              { title: "Universal Search", description: "Search Amazon, Alibaba, eBay, Walmart, local stores, and supplier catalogs from one place." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
