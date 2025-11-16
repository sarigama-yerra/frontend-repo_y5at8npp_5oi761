import { ShoppingCart, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl tracking-tight">Aurum Atelier</Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#trending" className="hover:text-black">Trending</a>
          <a href="#categories" className="hover:text-black">Categories</a>
          <a href="#faq" className="hover:text-black">FAQ</a>
        </nav>
        <Link to="/cart" className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white hover:bg-gray-900">
          <ShoppingCart size={18} />
          <span className="hidden sm:block">Cart</span>
        </Link>
        <button className="md:hidden p-2 rounded hover:bg-gray-100">
          <Menu />
        </button>
      </div>
    </header>
  )
}
