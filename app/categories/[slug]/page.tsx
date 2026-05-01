// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.image

  return (
    <div>
      <div className="bg-gradient-to-br from-brand-600 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <nav className="text-sm text-brand-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-white">Categories</Link>
          </nav>
          <div className="flex items-center gap-6">
            {image && (
              <img
                src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-lg object-cover border-4 border-white/20"
              />
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
              {description && (
                <p className="text-lg text-brand-100 max-w-2xl">{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-gray-600 mb-8">{products.length} products in this category</p>

        {products.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No products in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}