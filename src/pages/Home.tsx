import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3452935/pexels-photo-3452935.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-5 tracking-tight leading-tight">
            ELITEVAN SERVICES
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-200">Prestige Ride</p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Votre transport privé haut de gamme en camionnette Mercedes pour vos trajets aéroport, événements et déplacements professionnels
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-8 rounded-xl text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-6 h-6 mr-3" />
              Réserver Maintenant
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white py-4 px-8 rounded-xl text-lg font-bold backdrop-blur-sm transition-all duration-200"
            >
              Nos Services
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Phone className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-200">Disponible 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-200">Île-de-France</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-200">Ponctualité Garantie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-3">+500</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clients Satisfaits</h3>
              <p className="text-gray-600">
                Des centaines de clients nous font confiance pour leurs transports importants
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-3">100%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professionnalisme</h3>
              <p className="text-gray-600">
                Chauffeurs qualifiés et expérimentés, véhicules impeccables en permanence
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-3">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">À Votre Service</h3>
              <p className="text-gray-600">
                Disponibles jour et nuit pour répondre à vos besoins de transport urgent
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
