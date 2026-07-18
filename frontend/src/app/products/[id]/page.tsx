"use client"

import { useParams } from "next/navigation"
import { Card, Badge, StarRating, ScoreGauge, Button } from "@/components/ui"

export default function ProductDetailPage() {
  const { id } = useParams()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
            Product Image
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="info">Amazon</Badge>
            <Badge variant="success">In Stock</Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Product Name</h1>
          <p className="mt-2 text-gray-600">Brand • Model • SKU</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-4xl font-bold text-gray-900">$799.99</span>
            <span className="text-lg text-gray-400 line-through">$999.99</span>
            <Badge variant="success">-20%</Badge>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <StarRating rating={4.5} size="md" />
            <span className="text-sm text-gray-500">(234 reviews)</span>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">Buy Now</Button>
              <Button variant="outline" size="lg">Add to Wishlist</Button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">AI Buying Score</h3>
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-brand-600">94</div>
              <div className="text-sm text-gray-500">/100</div>
            </div>
            <div className="space-y-2">
              <ScoreGauge score={92} label="Price Value" />
              <ScoreGauge score={88} label="Quality" />
              <ScoreGauge score={75} label="Warranty" />
              <ScoreGauge score={95} label="Shipping" />
              <ScoreGauge score={85} label="Repairability" />
              <ScoreGauge score={90} label="Longevity" />
              <ScoreGauge score={88} label="Review Trust" />
            </div>
          </div>
        </div>
      </div>

      <Card className="mt-12">
        <h3 className="font-semibold text-gray-900">AI Recommendation</h3>
        <p className="mt-2 text-sm text-gray-600">
          This product is an excellent buy. The current price of $799.99 is 20% below the average of $999.99.
          Price prediction suggests it may drop another 5% in the next 2 weeks, but the current discount already
          makes it a great value. The review trust score of 88% indicates genuine positive feedback.
          Highly recommended for your needs.
        </p>
      </Card>
    </div>
  )
}
