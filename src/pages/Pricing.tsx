import { Check, Phone } from 'lucide-react';

export default function Pricing() {
  const pricing = [
    {
      title: 'Transfert Aéroport',
      description: 'Aller simple',
      price: '89€',
      features: ['1-8 passagers', 'Suivi de vol', 'Accueil personnalisé', 'Bagages inclus'],
    },
    {
      title: 'Journée Complète',
      description: '12 heures',
      price: '350€',
      highlight: true,
      features: ['Disponibilité totale', 'Itinéraire flexible', 'Pauses incluses', 'Tous déplacements'],
    },
    {
      title: 'Demi-Journée',
      description: '6 heures',
      price: '200€',
      features: ['Forfait horaire', 'Déplacements illimités', 'Chauffeur à disposition', 'Eau offerte'],
    },
    {
      title: 'Trajet Événement',
      description: 'Sur devis',
      price: 'Devis',
      features: ['Mariage', 'Anniversaire', 'Séminaire', 'Concert/Événement'],
    },
  ];

  return (
    <div>
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nos Tarifs</h1>
          <p className="text-xl text-gray-200">Des prix transparents et compétitifs pour tous vos trajets</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tarification Flexible et Transparente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous nos prix incluent l'assurance, les péages et l'essence. Pas de frais cachés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  plan.highlight
                    ? 'lg:scale-105 bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    POPULAIRE
                  </div>
                )}

                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : ''}`}>
                    {plan.title}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Devis' && <span className={plan.highlight ? '' : 'text-gray-600'}>/trajet</span>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-yellow-300' : 'text-blue-600'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:+33123456789"
                    className={`block w-full py-3 rounded-lg font-bold text-center transition-colors ${
                      plan.highlight
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {plan.price === 'Devis' ? 'Demander un devis' : 'Réserver'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Comment ça marche?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Appelez-nous</h4>
                <p className="text-sm text-gray-600">Contactez notre équipe pour votre réservation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Confirmez</h4>
                <p className="text-sm text-gray-600">Détails du trajet et tarif confirmés</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Payez</h4>
                <p className="text-sm text-gray-600">Paiement sécurisé à la réservation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Profitez</h4>
                <p className="text-sm text-gray-600">Transport confortable et ponctuel</p>
              </div>
            </div>
          </div>

          <div
            className="relative py-20 bg-cover bg-center bg-fixed rounded-2xl overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto px-4 relative z-10 text-center text-white">
              <h3 className="text-4xl font-bold mb-6">Offre spéciale groupes</h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Réductions à partir de 5 trajets. Contactez-nous pour un tarif groupé personnalisé.
              </p>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                <Phone className="w-6 h-6" />
                Demander une offre groupe
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
