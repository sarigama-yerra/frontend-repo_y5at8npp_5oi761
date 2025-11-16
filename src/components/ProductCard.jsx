import { Link } from 'react-router-dom'

export default function ProductCard({ p }){
  const price = p.price?.target_price
  return (
    <article className="group border rounded-xl overflow-hidden bg-white hover:shadow-lg transition">
      <Link to={`/product/${p.id}`}>
        <div className="aspect-square bg-gray-100" style={{backgroundImage:`url(${p.media?.[0]?.url || ''})`, backgroundSize:'cover', backgroundPosition:'center'}} />
      </Link>
      <div className="p-4">
        <Link to={`/product/${p.id}`} className="font-medium line-clamp-1 hover:underline">{p.title}</Link>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold">${typeof price === 'number' ? price.toFixed(2) : price}</span>
          <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">{Math.round(p.trend_score)} Trend</span>
        </div>
      </div>
    </article>
  )
}
