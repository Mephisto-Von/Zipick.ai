"use client"

import { useState } from "react"
import { Button, Input, Card, Badge, StarRating } from "@/components/ui"

export default function SearchPage() {
  const [query, setQuery] = useState("")

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Universal Search</h1>
        <p className="mt-3 text-gray-600">Search every marketplace, supplier, and store from one place.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex gap-3">
          <Input
            placeholder='Search products, suppliers, or categories... e.g., "RTX 5070"'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 h-12 text-base"
          />
          <Button size="lg">Search</Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          {["Amazon", "Alibaba", "eBay", "Walmart", "BestBuy", "Daraz", "AliExpress"].map((source) => (
            <Badge key={source} variant="default">{source}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} hover>
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Product Image
            </div>
            <h3 className="font-semibold text-gray-900">Product Name {i}</h3>
            <p className="mt-1 text-sm text-gray-500">Brand | Category</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">$799.99</span>
              <span className="text-sm text-gray-400 line-through">$999.99</span>
              <Badge variant="success">-20%</Badge>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <StarRating rating={4.5} />
              <span className="text-sm text-gray-500">(234 reviews)</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="info">Amazon</Badge>
              <Badge variant="success">In Stock</Badge>
              <Badge variant="warning">Free Shipping</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
