import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function TrendingGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    async function run() {
      try {
        const res = await fetch(`${base}/products?sort=trend`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  if (loading) return <div className="py-12 text-center">Loading products…</div>

  return (
    <section id="trending" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Trending Now</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-black">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
