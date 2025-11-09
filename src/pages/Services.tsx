import { Users, Briefcase, Heart, Calendar, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Transferts Aéroport',
      description: 'Service VTC vers CDG, Orly et Beauvais. Ponctualité garantie pour vos shifts.',
      icon: MapPin,
      image: 'https://images.pexels.com/photos/3452935/pexels-photo-3452935.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Suivi des vols', 'Accueil personnalisé', 'Tarif fixe'],
    },
    {
      id: 2,
      title: 'Transport Professionnel',
      description: 'Séminaires, conférences et réunions d\'affaires avec confort premium.',
      icon: Briefcase,
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Wifi à bord', 'Bouteilles d\'eau', 'Professionnalisme'],
    },
    {
      id: 3,
      title: 'Événements Privés',
      description: 'Mariages, anniversaires et soirées. Transport de luxe pour votre événement.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Discrétion', 'Disponibilité totale', 'Décoration possible'],
    },
    {
      id: 4,
      title: 'Excursions & Tourisme',
      description: 'Visites touristiques et sorties de groupe en toute sérénité.',
      icon: Calendar,
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Itinéraires personnalisés', 'Guide local', 'Flexibilité horaire'],
    },
  ];

  return (
    <div>
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nos Prestations</h1>
          <p className="text-xl text-gray-200">Des services de transport haut de gamme adaptés à tous vos besoins</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div
                    className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-white opacity-30" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl mb-6">
                      <h4 className="font-bold text-gray-900 mb-4">Ce service comprend:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="tel:+33123456789"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Réserver ce service
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service sur mesure pour votre besoin
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Vous avez un projet spécifique? Notre équipe s'adapte à vos exigences particulières.
          </p>
          <a
            href="tel:+33123456789"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            <Phone className="w-6 h-6" />
            Nous Contacter
          </a>
        </div>
      </section>
    </div>
  );
}
