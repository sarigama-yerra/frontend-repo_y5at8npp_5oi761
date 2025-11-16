import { useEffect, useState } from 'react'
import { useCart } from './CartContext'

export default function CartPage(){
  const { items, remove, updateQty, subtotal, setCartId } = useCart()
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const createCartOnServer = async () => {
    const payload = items.map(i => ({ product_id: i.product.id, quantity: i.quantity }))
    const res = await fetch(`${base}/cart`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    if(!res.ok) throw new Error('Cart error')
    const data = await res.json()
    setCartId(data.id)
    return data
  }

  const checkout = async () => {
    try{
      setLoading(true)
      const cart = await createCartOnServer()
      const payload = {
        cart_id: cart.id,
        email,
        payment_method: 'stripe',
        shipping_country: 'ZA',
        shipping_city: 'Johannesburg',
        shipping_address: 'Customer Address'
      }
      const res = await fetch(`${base}/checkout`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      const order = await res.json()
      setMessage(`Order created. Status: ${order.status}. We'll redirect to payment when configured.`)
    }catch(e){
      setMessage('Something went wrong. Please try again.')
    } finally{
      setLoading(false)
    }
  }

  if(items.length===0) return <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">Your cart is empty.</div>

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      <div className="mt-6 space-y-6">
        {items.map(({product, quantity}) => (
          <div key={product.id} className="flex items-center gap-4 border-b pb-4">
            <div className="w-20 h-20 rounded bg-gray-100" style={{backgroundImage:`url(${product.media?.[0]?.url||''})`, backgroundSize:'cover', backgroundPosition:'center'}} />
            <div className="flex-1">
              <div className="font-medium">{product.title}</div>
              <div className="text-sm text-gray-600">${product.price?.target_price}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>updateQty(product.id, quantity-1)} className="px-2 py-1 border rounded">-</button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={()=>updateQty(product.id, quantity+1)} className="px-2 py-1 border rounded">+</button>
            </div>
            <button onClick={()=>remove(product.id)} className="text-sm text-red-600">Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="text-xl">Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span></div>
        <div className="flex items-center gap-2">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email for receipt" className="px-3 py-2 border rounded-md" />
          <button disabled={loading} onClick={checkout} className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-900 disabled:opacity-60">{loading? 'Processing…' : 'Checkout'}</button>
        </div>
      </div>

      {message && <div className="mt-4 text-sm text-gray-700">{message}</div>}
    </div>
  )
}
