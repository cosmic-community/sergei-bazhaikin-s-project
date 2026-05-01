// app/products/[slug]/page.tsx
import { getProductBySlug } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductGallery from '@/components/ProductGallery'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const name = getMetafieldValue(product.metadata?.product_name) || product.title
  const sku = getMetafieldValue(product.metadata?.sku)
  const shortDesc = getMetafieldValue(product.metadata?.short_description)
  const description = getMetafieldValue(product.metadata?.description)
  const price = product.metadata?.price
  const compareAtPrice = product.metadata?.compare_at_price
  const status = getMetafieldValue(product.metadata?.product_status)
  const inStock = product.metadata?.in_stock
  const stockQty = product.metadata?.stock_quantity
  const brand = product.metadata?.brand
  const categories = product.metadata?.categories || []
  const specs = product.metadata?.specifications
  const mainImage = product.metadata?.main_image
  const gallery = product.metadata?.gallery || []

  const allImages = mainImage ? [mainImage, ...gallery] : gallery

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-brand-600">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12">
        <ProductGallery images={allImages} alt={name} />

        <div>
          {brand && (
            <Link
              href={`/brands/${brand.slug}`}
              className="text-sm text-brand-600 font-medium uppercase tracking-wide hover:underline"
            >
              {getMetafieldValue(brand.metadata?.name) || brand.title}
            </Link>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">{name}</h1>
          {sku && <p className="text-sm text-gray-500 mb-4">SKU: {sku}</p>}

          {shortDesc && (
            <p className="text-lg text-gray-700 mb-6">{shortDesc}</p>
          )}

          <div className="flex items-baseline gap-3 mb-6">
            {typeof price === 'number' && (
              <span className="text-3xl font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
            )}
            {typeof compareAtPrice === 'number' && compareAtPrice > (price || 0) && (
              <span className="text-xl text-gray-400 line-through">
                ${compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mb-6">
            {inStock ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                In Stock {typeof stockQty === 'number' && `(${stockQty} available)`}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Out of Stock
              </span>
            )}
            {status && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {status}
              </span>
            )}
          </div>

          {categories.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm hover:bg-brand-100 transition-colors"
                  >
                    {getMetafieldValue(cat.metadata?.name) || cat.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {description && (
            <div className="prose prose-sm max-w-none mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}

          {specs && typeof specs === 'object' && Object.keys(specs).length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-100 py-2">
                    <dt className="text-sm font-medium text-gray-600 capitalize">
                      {key.replace(/_/g, ' ')}
                    </dt>
                    <dd className="text-sm text-gray-900">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}