import { Printer, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 text-white bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center">
                <Printer className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sand">Pankhuri Graphics</h3>
                <p className="text-gray-400">Akurdi, Pune</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted printing partner in Akurdi. High-quality prints with fast turnaround times.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-sand mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-sand mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Office No 9, D-Wing, Jai Ganesh Vision, near Fame Multiplex, Akurdi, Pune - 411035
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>+91 99226 83299</p>
                  <p>020-2764 1356</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@pankhurigraphics.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Pankhuri Graphics Akurdi. All rights reserved.
            <span className="text-orange"> Proudly serving Akurdi & Pimpri-Chinchwad</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
