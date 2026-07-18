import { Card } from "@/components/ui"

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">AI Comparison</h1>
        <p className="mt-3 text-gray-600">Add products to compare and let AI explain the differences.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="text-center">
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 mx-auto max-w-[200px]">
              Product {i}
            </div>
            <h3 className="font-semibold text-gray-900">Product {i}</h3>
            <p className="mt-1 text-2xl font-bold text-gray-900">${799 + i * 100}</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Rating: {4.5 - i * 0.3}/5</p>
              <p>Warranty: {12 + i * 6} months</p>
              <p>Shipping: {i === 1 ? "Free" : `$${5 * i}`}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-brand-50 border-brand-200">
        <h3 className="text-lg font-semibold text-brand-900">AI Analysis</h3>
        <p className="mt-2 text-sm text-brand-800">
          Product 1 offers the best value with the lowest price and free shipping.
          Product 2 has a longer warranty. Product 3 has the highest rating but costs more.
          <strong> Recommendation: Product 1 is the best choice for most buyers.</strong>
        </p>
      </Card>
    </div>
  )
}
