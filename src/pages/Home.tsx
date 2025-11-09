import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3452935/pexels-photo-3452935.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            ELITEVAN SERVICES
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gray-200">Prestige Ride</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Votre transport privé haut de gamme en camionnette Mercedes pour vos trajets aéroport, événements et déplacements professionnels
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Réserver Maintenant
            </a>
            <button
              className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-bold backdrop-blur-sm transition-all duration-200"
            >
              Nos Services
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center max-w-3xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-xs sm:text-sm text-gray-200">Disponible 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-xs sm:text-sm text-gray-200">Île-de-France</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-xs sm:text-sm text-gray-200">Ponctualité Garantie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">+500</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Clients Satisfaits</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Des centaines de clients nous font confiance pour leurs transports importants
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">100%</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Professionnalisme</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Chauffeurs qualifiés et expérimentés, véhicules impeccables en permanence
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">24/7</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">À Votre Service</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Disponibles jour et nuit pour répondre à vos besoins de transport urgent
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}