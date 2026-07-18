import { Card, Button } from "@/components/ui"

export default function ProcurementPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Business Procurement</h1>
        <p className="mt-3 text-gray-600">AI-powered procurement for your entire organization.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Purchase Requests", description: "Create and manage purchase requests with AI-powered suggestions." },
          { title: "Approval Workflows", description: "Multi-step approval workflows with role-based permissions." },
          { title: "Vendor Management", description: "Track supplier performance, ratings, and compliance." },
          { title: "Purchase Orders", description: "Generate and manage POs with automatic numbering." },
          { title: "RFQ Automation", description: "AI generates RFQs, finds suppliers, and compares quotes." },
          { title: "Inventory Management", description: "Real-time inventory tracking with reorder alerts." },
        ].map((feature) => (
          <Card key={feature.title} hover>
            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">Create Purchase Request</Button>
      </div>
    </div>
  )
}
