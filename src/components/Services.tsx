import { Users, Briefcase, Heart, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Transferts Aéroport',
      description: 'Service VTC pour vos déplacements vers CDG, Orly et Beauvais. Ponctualité garantie pour vos shifts.',
    },
    {
      icon: Briefcase,
      title: 'Transports Professionnels',
      description: 'Séminaires, conférences, réunions d’affaires. Transport de qualité pour vos collaborateurs.',
    },
    {
      icon: Heart,
      title: 'Événements Privés',
      description: 'Mariés, anniversaires, soirées. Faites de votre événement un moment inoubliable.',
    },
    {
      icon: Calendar,
      title: 'Excursions & Tourisme',
      description: 'Visites touristiques, sorties de groupe. Découvrez la région avec confort et style.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NOS PRESTATIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services de transport premium adaptés à tous vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}