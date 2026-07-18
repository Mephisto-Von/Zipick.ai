"use client"

import { useState } from "react"
import { Button, Input, Card, Badge, StarRating } from "@/components/ui"
import { endpoints } from "@/lib/api"

interface Product {
  id: string
  name: string
  description?: string
  brand?: string
  category?: string
  current_price: number
  source: string
  rating?: number
  review_count?: number
  in_stock?: boolean
  free_shipping?: boolean
  image_url?: string
  buying_score?: number
}

const CATEGORIES = ["All", "Laptops", "Smartphones", "Headphones", "Monitors", "Graphics Cards", "Storage", "Keyboards", "Mice", "Tablets", "Smart Home", "Gaming"]
const SOURCES = ["All", "Amazon", "BestBuy", "Walmart", "AliExpress"]
const SORT_OPTIONS = [
  { value: "", label: "Best Match" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating_desc", label: "Highest Rated" },
  { value: "buying_score_desc", label: "Best Value" },
]

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [category, setCategory] = useState("All")
  const [source, setSource] = useState("All")
  const [sortBy, setSortBy] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    setSearched(true)

    const params: Record<string, string> = { query }
    if (category !== "All") params.category = category
    if (source !== "All") params.source = source
    if (sortBy) {
      const [sort, order] = sortBy.split("_")
      params.sort_by = sort
      params.sort_order = order
    }
    if (minPrice) params.min_price = minPrice
    if (maxPrice) params.max_price = maxPrice

    try {
      const res: any = await endpoints.products.list(params)
      setResults(res.data || [])
      setTotal(res.pagination?.total || 0)
    } catch (e) {
      console.error("Search failed:", e)
      setResults([])
    }
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Universal Product Search</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Search across Amazon, BestBuy, Walmart, AliExpress and more. Compare prices, ratings, and find the best deals with AI-powered insights.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex gap-3">
          <Input
            placeholder='Search any product... e.g., "RTX 4070", "MacBook Pro", "Sony headphones"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 h-12 text-base"
          />
          <Button size="lg" onClick={handleSearch} loading={loading}>Search</Button>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
          <select value={category} onChange={e => setCategory(e.target.value)} className="h-10 rounded-xl border border-gray-300 px-3 text-sm bg-white">
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={source} onChange={e => setSource(e.target.value)} className="h-10 rounded-xl border border-gray-300 px-3 text-sm bg-white">
            {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="h-10 rounded-xl border border-gray-300 px-3 text-sm bg-white">
            {SORT_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
          <input type="number" placeholder="Min $" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="h-10 rounded-xl border border-gray-300 px-3 text-sm" />
          <input type="number" placeholder="Max $" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="h-10 rounded-xl border border-gray-300 px-3 text-sm" />
        </div>
      </div>

      {loading && (
        <div className="mt-16 text-center">
          <div className="animate-pulse text-gray-500 text-lg">Searching {total || "all"} products...</div>
        </div>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="mt-16 text-center py-12 bg-gray-50 rounded-2xl">
          <p className="text-xl text-gray-500">No products found for "{query}"</p>
          <p className="text-gray-400 mt-2">Try a different search term or adjust filters</p>
        </div>
      )}

      {!loading && searched && results.length > 0 && (
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-500">{total} results for "{query}"</p>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((product) => (
          <Card key={product.id} hover className="flex flex-col">
            <a href={`/products/${product.id}`}>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">📦</div>
                    <div className="text-xs">{product.category}</div>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 line-clamp-2 leading-snug">{product.name}</h3>
                <p className="mt-1 text-xs text-gray-500">{product.brand}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-gray-900">${product.current_price?.toFixed(2)}</span>
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
                  <Badge variant="info">{product.source}</Badge>
                  {product.in_stock && <Badge variant="success">In Stock</Badge>}
                  {product.free_shipping && <Badge variant="warning">Free Shipping</Badge>}
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  )
}
