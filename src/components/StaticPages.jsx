import React from 'react'

export function About(){
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold">About Aurum Atelier</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">We curate premium everyday essentials designed to elevate your rituals. From tech and fitness to home and lifestyle, every product is selected for performance, aesthetics, and lasting value.</p>
    </div>
  )
}

export function FAQ(){
  const faqs = [
    {q:'How long does shipping take?', a:'South Africa: 2–5 working days standard, 1–2 express. International: 5–12 working days depending on zone.'},
    {q:'What is your return policy?', a:'30 days hassle-free returns. Items must be unused and in original packaging.'},
    {q:'Which payments do you accept?', a:'PayFast, PayFlex, Yoco, Ozow, Visa, Mastercard, Stripe, PayPal.'},
  ]
  return (
    <div id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold">FAQ</h1>
      <div className="mt-6 space-y-4">
        {faqs.map((f,i)=> (
          <details key={i} className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}

export function ShippingPolicy(){
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold">Shipping Policy</h1>
      <p className="mt-4 text-gray-700">South Africa: R69–R99 standard; free over R1000. Express R149–R199. International: zone-based by weight; free over $150.</p>
    </div>
  )
}

export function ReturnsPolicy(){
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold">Returns Policy</h1>
      <p className="mt-4 text-gray-700">30-Day Money-Back Guarantee. If it’s not right, contact us within 30 days for a refund or exchange.</p>
    </div>
  )
}

export function Contact(){
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-4 text-gray-700">Questions? Email support@aurumatelier.shop and we’ll get back within 24 hours.</p>
    </div>
  )
}
