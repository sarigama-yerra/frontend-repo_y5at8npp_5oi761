export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-amber-100 text-amber-800">Luxury • Fast Shipping • 30-Day Guarantee</span>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">Everyday Essentials, Elevated</h1>
          <p className="mt-4 text-gray-600 text-lg">Curated best‑sellers across tech, beauty, home and lifestyle—meticulously optimized for performance and price.</p>
          <div className="mt-8 flex gap-3">
            <a href="#trending" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-black text-white hover:bg-gray-900">Shop Trending</a>
            <a href="#categories" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-100">Browse Categories</a>
          </div>
          <ul className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-600">
            <li>Secure Payments</li>
            <li>COD (SA) + Global</li>
            <li>Free Returns</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff')] bg-cover bg-center shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
