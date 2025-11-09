import { Users, Luggage, Shield } from 'lucide-react';

export default function Fleet() {
  return (
    <section id="flotte" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NOTRE FLOTTE <span className="text-blue-600">DE VANS</span>
          </h2>
          <p className="text-lg text-gray-600 uppercase tracking-widest">
            VANS MERCEDES CLASS V
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Profitez du confort et de l’espace de nos vans
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Des Mercedes Classe V haut de gamme pour des trajets hors norme. Nous disposons d’une flotte de vans luxueux parfaitement équipés pour assurer votre confort et celui de vos passagers.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Users className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
                  <p className="text-sm text-gray-600">Passagers</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Luggage className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
                  <p className="text-sm text-gray-600">Bagages</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Shield className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                  <p className="text-sm text-gray-600">Assuré</p>
                </div>
              </div>

              <div className="bg-blue-600 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">Équipements Premium</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Climatisation multi-zones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Sièges en cuir capitonnés
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Espace modulable et spacieux
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Wifi et prises USB
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Bouteilles d’eau offertes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3452935/pexels-photo-3452935.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mercedes Class V Interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}