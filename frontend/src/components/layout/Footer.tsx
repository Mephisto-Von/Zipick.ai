export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/search" className="text-sm text-gray-600 hover:text-gray-900">Search</a></li>
              <li><a href="/compare" className="text-sm text-gray-600 hover:text-gray-900">Compare</a></li>
              <li><a href="/ai-chat" className="text-sm text-gray-600 hover:text-gray-900">AI Assistant</a></li>
              <li><a href="/price-alerts" className="text-sm text-gray-600 hover:text-gray-900">Price Alerts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Business</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/procurement" className="text-sm text-gray-600 hover:text-gray-900">Procurement</a></li>
              <li><a href="/suppliers" className="text-sm text-gray-600 hover:text-gray-900">Suppliers</a></li>
              <li><a href="/rfq" className="text-sm text-gray-600 hover:text-gray-900">RFQ</a></li>
              <li><a href="/inventory" className="text-sm text-gray-600 hover:text-gray-900">Inventory</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; 2026 Zipick.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
