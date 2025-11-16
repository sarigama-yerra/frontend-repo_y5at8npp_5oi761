import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingGrid from './components/TrendingGrid'
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext'

function Home(){
  return (
    <>
      <Hero />
      <TrendingGrid />
    </>
  )
}

function App(){
  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
