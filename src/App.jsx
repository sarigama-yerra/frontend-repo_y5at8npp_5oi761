import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingGrid from './components/TrendingGrid'
import Footer from './components/Footer'

function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <TrendingGrid />
      <Footer />
    </div>
  )
}

export default App
