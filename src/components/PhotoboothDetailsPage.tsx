import React from 'react';
import { Sparkles, Users, Zap, Palette, Check, Award, Settings, Monitor, Play, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

interface PhotoboothDetailsPageProps {
  onAIAnimations?: () => void;
  onQuoteRequest?: () => void;
  arrondissementLinks: { label: string; onClick: () => void }[];
}

const PhotoboothDetailsPage: React.FC<PhotoboothDetailsPageProps> = ({ onAIAnimations, onQuoteRequest, arrondissementLinks }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/de55ql9ig/image/upload/v1756224464/261A8114-Avec-accentuation-Bruit-Modifier-scaled_yx9xjx.jpg" 
            alt="Photobooth premium BoostPix"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            Un Photobooth
            <span className="block text-yellow-400">
              Pensé Pour Vous
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Créations uniques et personnalisées pour transformer vos événements 
            en expériences mémorables et authentiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onQuoteRequest}
              className="bg-yellow-400 text-black px-10 py-4 rounded-full hover:bg-yellow-500 transition-all font-bold text-lg transform hover:scale-105"
            >
              Demander un devis
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-2 h-20 bg-yellow-400 mb-8"></div>
              <h2 className="text-5xl font-bold text-black mb-8 leading-tight">
                L'Excellence
                <span className="text-yellow-400"> Personnalisée</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Chaque photobooth BoostPix est une création unique, conçue spécialement 
                pour votre événement. Notre approche artisanale combine savoir-faire 
                traditionnel et technologies de pointe.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Palette className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">Design Sur Mesure</h3>
                    <p className="text-gray-600">Création adaptée à votre univers visuel</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">Qualité Premium</h3>
                    <p className="text-gray-600">Matériaux nobles et finitions soignées</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755162694/1695114722_vucsnf.jpg" 
                  alt="Design personnalisé photobooth"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                <Play className="w-12 h-12 text-black ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">
              Pourquoi Choisir
              <span className="text-yellow-400"> BoostPix</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une combinaison parfaite entre créativité, technologie et savoir-faire artisanal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1755009861/1695399602_vnkqqr.jpg" 
                alt="Technologie connectée"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-black mb-6">
                Technologie
                <span className="text-yellow-400"> Connectée</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Partage instantané, galerie privée et expérience utilisateur fluide. 
                Nos photobooths intègrent les dernières innovations pour une expérience moderne.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">Galerie en ligne sécurisée</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">Partage instantané sur réseaux sociaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">Interface tactile intuitive</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-black mb-6">
                Support
                <span className="text-yellow-400"> Complet</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                De la conception à l'installation, notre équipe vous accompagne à chaque étape. 
                Un service premium pour une expérience sans stress.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">Chef de projet dédié</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">Installation et formation incluses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">Assistance technique 24/7</span>
                </li>
              </ul>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://res.cloudinary.com/de55ql9ig/image/upload/v1756365690/Google_AI_Studio_2025-08-27T20_25_49.680Z_ddna6c.png" 
                alt="Support complet - Équipe BoostPix"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">
              Personnalisation
              <span className="text-yellow-400"> Illimitée</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque détail peut être ajusté selon vos besoins et votre identité visuelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-6">Interface & Expérience</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Interface personnalisée</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Galerie privée sécurisée</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Partage instantané</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Analytics en temps réel</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-12 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-6">Fonctionnalités</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Formats d'impression variés</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Galerie en ligne</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Statistiques avancées</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Intégration API</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-12 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-6">Expériences IA</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Effets créatifs temps réel</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Animations intelligentes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Personnalisation interactive</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Reconnaissance faciale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Notre Processus de
              <span className="text-yellow-400"> Création</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un accompagnement personnalisé de A à Z pour créer votre photobooth unique
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-black">1</span>
                </div>
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-700"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultation</h3>
              <p className="text-gray-300 leading-relaxed">
                Échange approfondi pour comprendre vos besoins, votre vision et vos objectifs.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-black">2</span>
                </div>
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-700"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Conception</h3>
              <p className="text-gray-300 leading-relaxed">
                Définition des solutions techniques et organisationnelles parfaitement adaptées.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-black">3</span>
                </div>
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-700"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Création</h3>
              <p className="text-gray-300 leading-relaxed">
                Développement des visuels et cadres personnalisés selon votre identité.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-black">4</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Livraison</h3>
              <p className="text-gray-300 leading-relaxed">
                Installation sur site, formation et assistance technique dédiée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6">
              Nos
              <span className="text-yellow-400"> Réalisations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos créations sur mesure qui ont marqué les esprits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Événement Corporate",
                description: "Design minimaliste pour une soirée d'entreprise tech",
                category: "Entreprise"
              },
              {
                image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Mariage Romantique",
                description: "Création florale pour un mariage en Provence",
                category: "Mariage"
              },
              {
                image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Lancement Produit",
                description: "Design futuriste pour une marque de cosmétiques",
                category: "Marketing"
              },
              {
                image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Style Vintage",
                description: "Photobooth rétro pour un anniversaire thématique",
                category: "Privé"
              },
              {
                image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Design Moderne",
                description: "Lignes épurées pour un salon professionnel",
                category: "Salon"
              },
              {
                image: "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Création Artistique",
                description: "Design unique pour une exposition d'art contemporain",
                category: "Culture"
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="text-sm font-semibold text-yellow-400 mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-full hover:bg-yellow-500 transition-colors font-bold text-lg transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Voir toutes nos réalisations</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Prêt à Créer Votre
            <span className="block">Photobooth Unique ?</span>
          </h2>
          <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons créer 
            le photobooth parfait pour votre événement exceptionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-all font-bold text-lg transform hover:scale-105 shadow-xl">
              Consultation Gratuite
            </button>
            <button className="border-3 border-black text-black px-12 py-5 rounded-full hover:bg-black hover:text-white transition-all font-bold text-lg transform hover:scale-105">
              Télécharger le Catalogue
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        arrondissementLinks={arrondissementLinks}
      />
    </div>
  );
};

export default PhotoboothDetailsPage;