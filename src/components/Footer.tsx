import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">ELITEVAN SERVICES</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Votre partenaire de confiance pour tous vos déplacements en groupe. Service premium et ponctualité garantie.
            </p>
            <div className="flex items-center gap-2 text-blue-400">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Disponible 24h/24, 7j/7</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Transferts Aéroport</li>
              <li className="hover:text-white transition-colors cursor-pointer">Transport Professionnel</li>
              <li className="hover:text-white transition-colors cursor-pointer">Événements Privés</li>
              <li className="hover:text-white transition-colors cursor-pointer">Excursions & Tourisme</li>
              <li className="hover:text-white transition-colors cursor-pointer">Service VTC Aéroport</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+33123456789" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Téléphone</div>
                  <div className="font-semibold">+33 1 23 45 67 89</div>
                </div>
              </a>

              <a href="mailto:contact@elitevan-services.fr" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-semibold">contact@elitevan-services.fr</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Service</div>
                  <div className="font-semibold">Île-de-France</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ELITEVAN SERVICES - Prestige Ride. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}