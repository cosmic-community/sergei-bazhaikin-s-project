import Link from 'next/link'
import { Brand } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function BrandCard({ brand }: { brand: Brand }) {
  const name = getMetafieldValue(brand.metadata?.name) || brand.title
  const logo = brand.metadata?.logo

  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-brand-300 transition-all p-6"
    >
      <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
        {logo ? (
          <img
            src={`${logo.imgix_url}?w=400&h=400&fit=clip&auto=format,compress`}
            alt={name}
            width={150}
            height={150}
            className="max-w-full max-h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-5xl text-gray-300">🏢</span>
        )}
      </div>
      <h3 className="font-semibold text-center text-gray-900 group-hover:text-brand-600 transition-colors">
        {name}
      </h3>
    </Link>
  )
}