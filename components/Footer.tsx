export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Sergei's PIM</h3>
            <p className="text-sm text-gray-400">
              Product Information Management system built with Next.js and Cosmic CMS.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Browse</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/categories" className="hover:text-white">Categories</a></li>
              <li><a href="/brands" className="hover:text-white">Brands</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Powered By</h4>
            <p className="text-sm text-gray-400">
              Built with Next.js 16 and Cosmic CMS for blazing-fast content delivery.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Sergei Bazhaikin's Project. All rights reserved.
        </div>
      </div>
    </footer>
  )
}