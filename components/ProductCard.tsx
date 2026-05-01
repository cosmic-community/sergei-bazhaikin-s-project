import Link from 'next/link'
import { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProductCard({ product }: { product: Product }) {
  const name = getMetafieldValue(product.metadata?.product_name) || product.title
  const shortDesc = getMetafieldValue(product.metadata?.short_description)
  const price = product.metadata?.price
  const compareAtPrice = product.metadata?.compare_at_price
  const inStock = product.metadata?.in_stock
  const mainImage = product.metadata?.main_image
  const brand = product.metadata?.brand

  const onSale = typeof compareAtPrice === 'number' && typeof price === 'number' && compareAtPrice > price

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-brand-300 transition-all"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden relative">
        {mainImage ? (
          <img
            src={`${mainImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-6xl">
            📦
          </div>
        )}
        {onSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )}
        {inStock === false && (
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
            OUT OF STOCK
          </span>
        )}
      </div>

      <div className="p-4">
        {brand && (
          <p className="text-xs text-brand-600 font-medium uppercase tracking-wide mb-1">
            {getMetafieldValue(brand.metadata?.name) || brand.title}
          </p>
        )}
        <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
          {name}
        </h3>
        {shortDesc && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{shortDesc}</p>
        )}
        <div className="flex items-baseline gap-2 mt-3">
          {typeof price === 'number' && (
            <span className="text-lg font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
          )}
          {onSale && typeof compareAtPrice === 'number' && (
            <span className="text-sm text-gray-400 line-through">
              ${compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}