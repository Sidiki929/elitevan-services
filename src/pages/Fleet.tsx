import { Users, Luggage, Shield, Wifi, Droplet, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Fleet() {
  const features = [
    { icon: Users, label: '8 Passagers', description: 'Espace confortable pour 8 personnes' },
    { icon: Luggage, label: '8+ Bagages', description: 'Large coffre pour vos affaires' },
    { icon: Shield, label: 'Assurance 100%', description: 'Couverture complète garantie' },
    { icon: Wifi, label: 'Wifi à Bord', description: 'Connexion internet haut débit' },
    { icon: Droplet, label: 'Climatisation', description: 'Contrôle multi-zones' },
    { icon: Music, label: 'Système Audio', description: 'Immersion sonore premium' },
  ];

  return (
    <div>
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3452935/pexels-photo-3452935.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Notre Flotte</h1>
          <p className="text-xl text-gray-200">Mercedes Classe V haut de gamme pour votre confort</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Profitez du confort de nos vans premium
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Des Mercedes Classe V haut de gamme pour des trajets inoubliables. Notre flotte est régulièrement entretenue et rénovée pour garantir votre confort et votre sécurité.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Chauffeurs qualifiés, véhicules impeccables, et service irréprochable. Chaque détail est pensé pour que votre voyage soit une véritable expérience.
              </p>
              <Link
                to="/tarifs"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Voir nos tarifs
              </Link>
            </div>

            <div
              className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3452935/pexels-photo-3452935.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-12 rounded-2xl mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Équipements & Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">{feature.label}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Shield className="w-16 h-16 mb-3" />
                <h4 className="text-2xl font-bold">Sécurité Garantie</h4>
              </div>
            </div>

            <div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Users className="w-16 h-16 mb-3" />
                <h4 className="text-2xl font-bold">Chauffeurs Qualifiés</h4>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Entretien & Maintenance</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Tous nos véhicules bénéficient d'un entretien régulier et d'une maintenance préventive stricte. Sécurité et confort sont nos priorités absolues.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">15j</div>
                <p className="text-sm">Révisions programmées</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <p className="text-sm">Nettoyage après chaque course</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">Certifié</div>
                <p className="text-sm">Assurance et contrôle techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
