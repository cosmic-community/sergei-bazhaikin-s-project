import { getAllBrands } from '@/lib/cosmic'
import BrandCard from '@/components/BrandCard'

export default async function BrandsPage() {
  const brands = await getAllBrands()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Brands</h1>
        <p className="text-gray-600">{brands.length} brands</p>
      </div>

      {brands.length === 0 ? (
        <div className="text-center py-16 text-gray-500">No brands found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      )}
    </div>
  )
}