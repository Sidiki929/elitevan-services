import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5" />
              <div className="hidden sm:block">
                <div className="text-xs text-gray-400">Téléphone</div>
                <div className="font-semibold">+33 1 23 45 67 89</div>
              </div>
            </a>
          </div>

          <Link to="/" className="text-center hover:opacity-90 transition-opacity">
            <h1 className="text-xl md:text-2xl font-bold tracking-wider">ELITEVAN SERVICES</h1>
            <p className="text-2xs md:text-sm text-gray-300 uppercase tracking-widest">Prestige Ride</p>
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden lg:block">
            <a href="tel:+33123456789" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold transition-colors">
              Réserver
            </a>
          </div>
        </div>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block pb-4 lg:pb-0 border-t border-gray-700 lg:border-t-0 mt-4 lg:mt-0 lg:pt-4`}>
          <ul className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 text-sm uppercase tracking-wide">
            <li>
              <Link
                to="/"
                className={`hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-400 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`hover:text-blue-400 transition-colors ${isActive('/services') ? 'text-blue-400 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/flotte"
                className={`hover:text-blue-400 transition-colors ${isActive('/flotte') ? 'text-blue-400 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Flotte
              </Link>
            </li>
            <li>
              <Link
                to="/tarifs"
                className={`hover:text-blue-400 transition-colors ${isActive('/tarifs') ? 'text-blue-400 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-400 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}