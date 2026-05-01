// app/brands/[slug]/page.tsx
import { getBrandBySlug, getProductsByBrand, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = await getBrandBySlug(slug)

  if (!brand) {
    notFound()
  }

  const products = await getProductsByBrand(brand.id)
  const name = getMetafieldValue(brand.metadata?.name) || brand.title
  const description = getMetafieldValue(brand.metadata?.description)
  const website = getMetafieldValue(brand.metadata?.website)
  const logo = brand.metadata?.logo

  return (
    <div>
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/brands" className="hover:text-brand-600">Brands</Link>
          </nav>
          <div className="flex items-center gap-6">
            {logo && (
              <img
                src={`${logo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={name}
                width={120}
                height={120}
                className="w-32 h-32 rounded-lg object-contain bg-gray-50 p-3"
              />
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
              {description && (
                <p className="text-lg text-gray-600 max-w-2xl mb-3">{description}</p>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 font-medium"
                >
                  Visit Website →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Products by {name}</h2>
        <p className="text-gray-600 mb-8">{products.length} products</p>

        {products.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No products from this brand yet.
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