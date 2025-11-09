import { Phone, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3752268/pexels-photo-3752268.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            VTC POUR LE TRANSPORT DE GROUPES
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Pour tous vos trajets entre amis, en famille ou pour les groupes de professionnels
          </p>
          
          <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto mb-12">
            <div className="flex items-center gap-2 mb-6 text-blue-400">
              <Clock className="w-5 h-5" />
              <p className="text-sm">
                <span className="font-semibold">Tarif fixe et immédiat.</span> Réservation minimum 15 minutes avant
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="tel:+33123456789"
                className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 px-8 rounded-xl text-2xl font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-8 h-8 inline-block mr-3" />
                +33 1 23 45 67 89
              </a>
              <p className="text-gray-400 text-sm">Appelez-nous pour réserver immédiatement</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <h3 className="font-semibold mb-2">Transferts Aéroport</h3>
              <p className="text-sm text-gray-300">CDG, Orly, Beauvais</p>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <h3 className="font-semibold mb-2">Disponibilité 24/7</h3>
              <p className="text-sm text-gray-300">Service jour et nuit</p>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <h3 className="font-semibold mb-2">Événements</h3>
              <p className="text-sm text-gray-300">Mariés, séminaires, soirées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}