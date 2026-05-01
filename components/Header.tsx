import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="text-2xl">📦</span>
            <span className="hidden sm:inline">Sergei's PIM</span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-6">
            <Link
              href="/products"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/brands"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              Brands
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}