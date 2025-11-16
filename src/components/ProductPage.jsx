import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import { useCart } from './CartContext'

export default function ProductPage(){
  const { id } = useParams()
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [p, setP] = useState(null)
  const [loading, setLoading] = useState(true)
  const { add } = useCart()

  useEffect(() => {
    async function run(){
      try {
        const res = await fetch(`${base}/products/${id}`)
        if(!res.ok) throw new Error('Not found')
        const data = await res.json()
        setP(data)
      } catch(e){
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [id])

  if (loading) return <div className="py-20 text-center">Loading…</div>
  if (!p) return <div className="py-20 text-center">Product not found</div>

  const price = p.price?.target_price

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-3">
          <div className="aspect-square rounded-xl bg-gray-100" style={{backgroundImage:`url(${p.media?.[0]?.url || ''})`, backgroundSize:'cover', backgroundPosition:'center'}} />
        </div>
        <div>
          <nav className="text-sm text-gray-500"><Link to="/" className="hover:underline">Home</Link> / <span>{p.title}</span></nav>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{p.title}</h1>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex text-amber-500">{Array.from({length:5}).map((_,i)=> <Star key={i} size={16} fill="currentColor" />)}</div>
            <span className="text-sm text-gray-600">({p.reviews?.length || 128} reviews)</span>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed">{p.description}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {(p.badges||[]).map((b,i)=> <li key={i} className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-600" /> <span>{b}</span></li>)}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-3xl font-semibold">${typeof price==='number'?price.toFixed(2):price}</div>
            <button onClick={()=>add(p,1)} className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-900">Add to Cart</button>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2"><Truck size={16}/> Fast Shipping</div>
            <div className="flex items-center gap-2"><RotateCcw size={16}/> 30-Day Returns</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16}/> Secure Checkout</div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">What customers say</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {(p.reviews||[]).slice(0,4).map((r,i)=> (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">{Array.from({length:r.rating}).map((_,j)=> <Star key={j} size={14} fill="currentColor" />)}</div>
                <span className="text-sm text-gray-600">{new Date(r.date).toLocaleDateString()}</span>
              </div>
              <p className="mt-2 text-gray-800">“{r.comment}”</p>
              <div className="mt-1 text-sm text-gray-600">— {r.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
