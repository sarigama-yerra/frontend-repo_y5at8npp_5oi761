import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_items')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [cartId, setCartId] = useState(null)
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    localStorage.setItem('cart_items', JSON.stringify(items))
  }, [items])

  const add = (product, quantity = 1) => {
    setItems(curr => {
      const existing = curr.find(i => i.product.id === product.id)
      if (existing) {
        return curr.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i)
      }
      return [...curr, { product, quantity }]
    })
  }

  const remove = (productId) => {
    setItems(curr => curr.filter(i => i.product.id !== productId))
  }

  const updateQty = (productId, qty) => {
    setItems(curr => curr.map(i => i.product.id === productId ? { ...i, quantity: Math.max(1, qty) } : i))
  }

  useEffect(() => {
    const s = items.reduce((acc, i) => acc + (i.product?.price?.target_price || 0) * i.quantity, 0)
    setSubtotal(Number(s.toFixed(2)))
  }, [items])

  const value = useMemo(() => ({ items, add, remove, updateQty, subtotal, cartId, setCartId }), [items, subtotal, cartId])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(){
  return useContext(CartContext)
}
