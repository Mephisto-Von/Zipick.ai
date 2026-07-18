"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Card, Badge, StarRating, ScoreGauge, Button } from "@/components/ui"
import { endpoints } from "@/lib/api"

interface Product {
  id: string
  name: string
  description?: string
  brand?: string
  category?: string
  current_price: number
  average_price?: number
  lowest_price?: number
  highest_price?: number
  source: string
  rating?: number
  review_count?: number
  in_stock?: boolean
  free_shipping?: boolean
  warranty_months?: number
  buying_score?: number
  image_url?: string
  product_url?: string
  specifications?: Record<string, any>
  currency: string
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    endpoints.products.get(id as string)
      .then((res: any) => { setProduct(res.data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="text-center py-24"><div className="animate-pulse text-lg text-gray-500">Loading product...</div></div>
  }

  if (!product) {
    return <div className="text-center py-24 text-gray-500">Product not found</div>
  }

  const avgPrice = product.average_price || product.current_price
  const priceDiff = ((product.current_price - avgPrice) / avgPrice) * 100
  const discountPercent = product.current_price < avgPrice
    ? Math.round((1 - product.current_price / avgPrice) * 100)
    : 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
            {product.image_url ? (
              <img src={product.image_url} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <div className="text-sm">{product.category}</div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="info">{product.source}</Badge>
            {product.in_stock && <Badge variant="success">In Stock</Badge>}
            {product.free_shipping && <Badge variant="warning">Free Shipping</Badge>}
            {product.warranty_months && <Badge variant="default">{product.warranty_months}m Warranty</Badge>}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.brand}{product.category ? ` • ${product.category}` : ''}</p>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-4xl font-bold text-gray-900">${product.current_price.toFixed(2)}</span>
            {avgPrice !== product.current_price && (
              <span className="text-lg text-gray-400 line-through">${avgPrice.toFixed(2)}</span>
            )}
            {discountPercent > 0 && <Badge variant="success">-{discountPercent}%</Badge>}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <StarRating rating={product.rating || 0} size="md" />
            <span className="text-sm text-gray-500">({product.review_count?.toLocaleString() || 0} reviews)</span>
          </div>

          {product.description && (
            <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
          )}

          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <a href={product.product_url || "#"} target="_blank" rel="noopener noreferrer">Buy Now — ${product.current_price.toFixed(2)}</a>
              </Button>
              <Button variant="outline" size="lg">Add to Wishlist</Button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">AI Buying Score</h3>
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-brand-600">{product.buying_score || "—"}</div>
              <div className="text-sm text-gray-500">/100</div>
            </div>
            {product.buying_score && (
              <div className="space-y-2">
                <ScoreGauge score={Math.round(product.buying_score * 0.35 + 65)} label="Price Value" />
                <ScoreGauge score={Math.round(product.buying_score * 0.25 + 70)} label="Quality" />
                <ScoreGauge score={product.warranty_months ? Math.min(100, product.warranty_months * 3 + 30) : 60} label="Warranty" />
                <ScoreGauge score={product.free_shipping ? 95 : 65} label="Shipping" />
                <ScoreGauge score={Math.round((product.rating || 4) * 20)} label="Review Trust" />
              </div>
            )}
          </div>
        </div>
      </div>

      <Card className="mt-12">
        <h3 className="font-semibold text-gray-900">AI Price Analysis</h3>
        <p className="mt-2 text-sm text-gray-600">
          {discountPercent > 0
            ? `This product is currently priced at $${product.current_price.toFixed(2)}, which is ${discountPercent}% below the average of $${avgPrice.toFixed(2)}. `
            : `This product is priced at $${product.current_price.toFixed(2)}, which is in line with the market average of $${avgPrice.toFixed(2)}. `
          }
          The price range across sources is ${product.lowest_price?.toFixed(2) || "—"} to ${product.highest_price?.toFixed(2) || "—"}.
          With a rating of {product.rating}/5 from {product.review_count?.toLocaleString() || 0} reviews, this product has strong social proof.
          {product.buying_score && product.buying_score >= 90
            ? " Our AI recommends this as an excellent buy."
            : product.buying_score && product.buying_score >= 70
              ? " This is a solid choice worth considering."
              : " Consider comparing with other options before purchasing."
          }
        </p>
      </Card>
    </div>
  )
}
