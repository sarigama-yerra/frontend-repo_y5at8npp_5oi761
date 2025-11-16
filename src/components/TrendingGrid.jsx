import { useEffect, useState } from 'react'

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
            <article key={p.id} className="group border rounded-xl overflow-hidden bg-white hover:shadow-lg transition">
              <div className="aspect-square bg-gray-100" style={{backgroundImage:`url(${p.media?.[0]?.url || ''})`, backgroundSize:'cover', backgroundPosition:'center'}} />
              <div className="p-4">
                <h3 className="font-medium line-clamp-1">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold">${p.price?.target_price?.toFixed ? p.price.target_price.toFixed(2) : p.price?.target_price}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">{Math.round(p.trend_score)} Trend</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
