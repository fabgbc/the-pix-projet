import React, { useState } from 'react';
import {
  ArrowLeft,
  Camera,
  Sparkles,
  Users,
  Building,
  Calendar,
  MapPin,
  Bot,
  Check,
  ChevronRight,
  Phone,
  Mail,
  User
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';
import Footer from './Footer';

interface DemoRequestPageProps {
  onBack: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
  onParis8Page?: () => void;
  onQuoteRequest?: () => void;
  onParis9Page?: () => void;
}

const DemoRequestPage: React.FC<DemoRequestPageProps> = ({ onBack, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page, onParis8Page, onQuoteRequest, onParis9Page }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    demoType: '', // 'live' or 'video'
    eventType: '',
    location: '',
    eventDate: '',
    guestCount: '',
    specificNeeds: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: '',
      position: ''
    }
  });

  const steps = [
    { number: 1, title: 'Votre événement', active: currentStep === 1 },
    { number: 2, title: 'Contact', active: currentStep === 2 },
    { number: 3, title: 'Confirmation', active: currentStep === 3 }
  ];

  const eventTypes = [
    { id: 'corporate', icon: Building, label: 'Événement d\'entreprise', description: 'Séminaires, soirées corporate' },
    { id: 'wedding', icon: Sparkles, label: 'Mariage', description: 'Célébrations privées' },
    { id: 'birthday', icon: Calendar, label: 'Anniversaire', description: 'Fêtes d\'anniversaire' },
    { id: 'launch', icon: Bot, label: 'Lancement produit', description: 'Événements marketing' },
    { id: 'other', icon: Users, label: 'Autre événement', description: 'Autres types d\'événements' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Ici on pourrait envoyer les données
    console.log('Demande de démo soumise:', formData);
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">BoostPix</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={onBack}
               className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
               Accueil
              </button>
              <button 
                onClick={onBack}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Photobooth sur mesure
              </button>
              <HomeSectionLink label="Événements Privés" targetId="mariages" onBack={onBack} />
              <button 
                onClick={onBack}
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
              >
                Animations IA
              </button>
              <HomeSectionLink label="Galerie" targetId="galerie" onBack={onBack} />
              <button 
                onClick={onQuoteRequest}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
              >
                Devis Gratuit
              </button>
            </nav>

            <button 
              onClick={onBack}
              className="lg:hidden flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </button>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-3 ${step.active ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step.active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.number}
                  </div>
                  <span className="font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-12 h-px bg-gray-200 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-black mb-4">Demande de Démonstration</h1>
              <p className="text-gray-600 text-lg">Découvrez nos animations photobooth IA en action</p>
            </div>

            <h1 className="text-3xl font-bold text-black">Votre événement</h1>
            <p className="text-gray-600 text-lg">Aidez-nous à personnaliser la démonstration selon vos besoins</p>

            {/* Event Type */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Type d'événement</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {eventTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFormData(prev => ({ ...prev, eventType: type.id }))}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${
                        formData.eventType === type.id
                          ? 'border-yellow-400 bg-yellow-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <div className="font-semibold text-sm text-black">{type.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Détails de l'événement</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lieu de l'événement
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Ville ou région"
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date prévue (optionnel)
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    value={formData.eventDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre d'invités approximatif
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={formData.guestCount}
                  onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                >
                  <option value="">Sélectionnez</option>
                  <option value="1-50">1-50 personnes</option>
                  <option value="51-100">51-100 personnes</option>
                  <option value="101-200">101-200 personnes</option>
                  <option value="201-500">201-500 personnes</option>
                  <option value="500+">Plus de 500 personnes</option>
                </select>
              </div>
            </div>

            {/* Specific Needs */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Besoins spécifiques</h2>
              <textarea
                placeholder="Décrivez vos attentes, le style souhaité, les animations qui vous intéressent..."
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                value={formData.specificNeeds}
                onChange={(e) => setFormData(prev => ({ ...prev, specificNeeds: e.target.value }))}
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-black">Vos coordonnées</h1>
            <p className="text-gray-600 text-lg">Pour organiser votre démonstration personnalisée</p>
            
            {/* Contact Method */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">📞 Comment souhaitez-vous être contacté ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setFormData(prev => ({ ...prev, demoType: 'live' }))}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    formData.demoType === 'live'
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Phone className="w-6 h-6 text-yellow-500" />
                    <h3 className="font-bold text-black">Par téléphone</h3>
                  </div>
                  <p className="text-gray-600">Pour organiser un rendez-vous</p>
                </button>
                
                <button
                  onClick={() => setFormData(prev => ({ ...prev, demoType: 'video' }))}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    formData.demoType === 'video'
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="w-6 h-6 text-yellow-500" />
                    <h3 className="font-bold text-black">Par email</h3>
                  </div>
                  <p className="text-gray-600">Avec des informations détaillées</p>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      value={formData.contactInfo.name}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        contactInfo: { ...prev.contactInfo, name: e.target.value }
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      value={formData.contactInfo.email}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        contactInfo: { ...prev.contactInfo, email: e.target.value }
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      value={formData.contactInfo.phone}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        contactInfo: { ...prev.contactInfo, phone: e.target.value }
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      value={formData.contactInfo.company}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        contactInfo: { ...prev.contactInfo, company: e.target.value }
                      }))}
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fonction / Poste
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Responsable événementiel, Wedding planner..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    value={formData.contactInfo.position}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, position: e.target.value }
                    }))}
                  />
                </div>
              </div>
            </div>

          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center space-y-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-black">Demande envoyée !</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Merci pour votre intérêt ! Notre équipe va vous contacter dans les 24h pour organiser 
              votre démonstration personnalisée des animations photobooth IA.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
              <h3 className="font-bold text-black mb-4">Prochaines étapes :</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">1</div>
                  <span className="text-gray-700">Nous vous contactons pour planifier la démonstration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">2</div>
                  <span className="text-gray-700">Démonstration personnalisée selon vos besoins</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">3</div>
                  <span className="text-gray-700">Proposition sur mesure pour votre événement</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onBack}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors font-semibold"
            >
              Retour à l'accueil
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 3 && (
          <div className="flex justify-between items-center pt-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Précédent
            </button>
            
            <div className="text-sm text-gray-500">
              Étape {currentStep} sur {steps.length}
            </div>
            
            <button
              onClick={currentStep === 2 ? handleSubmit : handleNext}
              className="px-6 py-3 rounded-lg font-semibold transition-colors bg-yellow-400 text-black hover:bg-yellow-500 flex items-center space-x-2"
            >
              <span>{currentStep === 2 ? 'Envoyer la demande' : 'Suivant'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer
        onSEOPage={onSEOPage}
        arrondissementLinks={[
          { label: 'Location photobooth Paris 1', onClick: onParis1Page },
          { label: 'Location photobooth Paris 2', onClick: onParis2Page },
          { label: 'Location photobooth Paris 3', onClick: onParis3Page },
          { label: 'Location photobooth Paris 4', onClick: onParis4Page },
          { label: 'Location photobooth Paris 5', onClick: onParis5Page },
          { label: 'Location photobooth Paris 6', onClick: onParis6Page },
          { label: 'Location photobooth Paris 7', onClick: onParis7Page },
          { label: 'Location photobooth Paris 8', onClick: onParis8Page },
          { label: 'Location photobooth Paris 9', onClick: onParis9Page },
        ]}
      />
    </div>
  );
};

export default DemoRequestPage;