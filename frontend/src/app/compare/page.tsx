"use client"

import { useState } from "react"
import { Card, Button, Input, Badge } from "@/components/ui"
import { endpoints } from "@/lib/api"

export default function ComparePage() {
  const [productIds, setProductIds] = useState("")
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleCompare = async () => {
    const ids = productIds.split(",").map(s => s.trim()).filter(Boolean)
    if (ids.length < 2) return
    setLoading(true)
    try {
      const res: any = await endpoints.compare(ids)
      setResults(res.data)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">AI Comparison</h1>
        <p className="mt-3 text-gray-600">Enter product IDs to compare and let AI explain the differences.</p>
      </div>

      <div className="max-w-xl mx-auto flex gap-3 mb-12">
        <Input
          placeholder="Product IDs (comma separated)"
          value={productIds}
          onChange={(e) => setProductIds(e.target.value)}
        />
        <Button onClick={handleCompare} loading={loading}>Compare</Button>
      </div>

      {results?.products && (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {results.products.map((p: any, i: number) => (
            <Card key={p.id || i} className="text-center">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 mx-auto max-w-[200px]">
                Product Image
              </div>
              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-2xl font-bold text-gray-900">${p.current_price}</p>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>Rating: {p.rating}/5</p>
                <p>Source: {p.source}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
