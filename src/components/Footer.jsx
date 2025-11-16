export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold">Aurum Atelier</div>
          <p className="mt-3 text-gray-600">Premium, performance‑priced essentials with global shipping.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Help</div>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">FAQ</a></li>
            <li><a href="#" className="hover:text-black">Shipping</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Trust</div>
          <ul className="space-y-2 text-gray-600">
            <li>30‑Day Money‑Back</li>
            <li>Secure Checkout</li>
            <li>24/7 Support</li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Aurum Atelier. All rights reserved.</div>
    </footer>
  )
}
