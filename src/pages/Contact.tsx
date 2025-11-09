import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      description: 'Disponible 24h/24, 7j/7',
      action: 'tel:+33123456789',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+33 1 23 45 67 89',
      description: 'Chat instantané',
      action: 'https://wa.me/33123456789',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@elitevan-services.fr',
      description: 'Réponse dans 1h',
      action: 'mailto:contact@elitevan-services.fr',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Île-de-France',
      description: 'Service complet région IDF',
      action: '#',
    },
  ];

  return (
    <div>
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nous Contacter</h1>
          <p className="text-xl text-gray-200">Une question? Appelez-nous maintenant!</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-white border-2 border-gray-200 hover:border-blue-600 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-blue-50 group-hover:bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{method.value}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </a>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Vous avez des questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre équipe de professionnels est disponible pour répondre à toutes vos demandes et vous proposer la meilleure solution de transport adaptée à vos besoins.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Horaires d'ouverture</h4>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p>Lundi - Dimanche: 24/24</p>
                      <p className="text-sm text-gray-500">Service permanent</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Zone de service</h4>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p>Île-de-France</p>
                      <p className="text-sm text-gray-500">Paris et périphérie</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Réservation minimum</h4>
                  <p className="text-gray-600">15 minutes avant le trajet</p>
                </div>
              </div>

              <a
                href="tel:+33123456789"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                <Phone className="w-6 h-6" />
                Appeler maintenant
              </a>
            </div>

            <div
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3452935/pexels-photo-3452935.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <MessageCircle className="w-20 h-20 mb-4 opacity-30" />
                <h4 className="text-2xl font-bold">Contactez-nous</h4>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Avez-vous des besoins particuliers?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">Réservation d'urgence</h4>
                <p className="text-sm text-gray-600">
                  Besoin d'un transport en dernière minute? Appelez-nous, nous trouverons une solution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">Forfaits mensuels</h4>
                <p className="text-sm text-gray-600">
                  Trajets réguliers? Négociez vos tarifs avec notre équipe pour une meilleure offre.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">Service personnalisé</h4>
                <p className="text-sm text-gray-600">
                  Vous avez des demandes spéciales? Notre équipe s'adapte à vos exigences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Prêt à voyager?</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Rejoignez les centaines de clients satisfaits qui nous font confiance pour leurs transports
          </p>
          <a
            href="tel:+33123456789"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            <Send className="w-6 h-6" />
            Réserver maintenant
          </a>
        </div>
      </section>
    </div>
  );
}
