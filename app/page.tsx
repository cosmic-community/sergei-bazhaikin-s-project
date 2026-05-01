import { getAllProducts, getAllCategories, getAllBrands } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import BrandCard from '@/components/BrandCard'
import Link from 'next/link'

export default async function HomePage() {
  const [products, categories, brands] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
    getAllBrands(),
  ])

  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sergei Bazhaikin's Project
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 max-w-2xl mb-8">
            A modern Product Information Management system. Browse our catalog of {products.length} products across {categories.length} categories.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-brand-600 hover:text-brand-700 font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-3xl font-bold">Shop by Category</h2>
              <Link href="/categories" className="text-brand-600 hover:text-brand-700 font-medium">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.slice(0, 8).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brands */}
      {brands.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-bold">Our Brands</h2>
            <Link href="/brands" className="text-brand-600 hover:text-brand-700 font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.slice(0, 8).map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}