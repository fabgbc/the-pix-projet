import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Camera,
  Users,
  Heart,
  Building,
  Calendar,
  Sparkles,
  Check,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail
} from 'lucide-react';
import HomeSectionLink from './HomeSectionLink';

interface QuotePageProps {
  onBack: () => void;
  onSEOPage?: () => void;
  onParis1Page?: () => void;
  onParis2Page?: () => void;
  onParis3Page?: () => void;
  onParis4Page?: () => void;
  onParis5Page?: () => void;
  onParis6Page?: () => void;
  onParis7Page?: () => void;
}

const QuotePage: React.FC<QuotePageProps> = ({ onBack, onSEOPage, onParis1Page, onParis2Page, onParis3Page, onParis4Page, onParis5Page, onParis6Page, onParis7Page }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientType: '', // 'enterprise' or 'wedding'
    location: '',
    eventType: '',
    services: [] as string[],
    meetingPreference: '',
    projectDescription: '',
    reference: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  });

  const steps = [
    { number: 1, title: 'Type de client', active: currentStep === 1 },
    { number: 2, title: 'Services', active: currentStep === 2 },
    { number: 3, title: 'Détails', active: currentStep === 3 },
    { number: 4, title: 'Contact', active: currentStep === 4 },
    { number: 5, title: 'Confirmation', active: currentStep === 5 }
  ];

  const clientTypes = [
    { 
      id: 'enterprise', 
      icon: Building, 
      label: 'Entreprise / Agence', 
      description: 'Événements professionnels, séminaires, soirées d\'entreprise',
      color: 'bg-blue-50 border-blue-200 hover:border-blue-300'
    },
    { 
      id: 'wedding', 
      icon: Heart, 
      label: 'Mariage / Particulier', 
      description: 'Mariages, anniversaires, événements privés',
      color: 'bg-pink-50 border-pink-200 hover:border-pink-300'
    }
  ];

  const eventTypes = {
    // Événements entreprise
    enterprise: [
      { id: 'corporate', icon: Building, label: 'Séminaire', description: 'Conférences, formations' },
      { id: 'company-party', icon: Users, label: 'Soirée d\'entreprise', description: 'Événements corporate' },
      { id: 'product-launch', icon: Sparkles, label: 'Lancement produit', description: 'Inaugurations, lancements' },
      { id: 'trade-show', icon: Calendar, label: 'Salon professionnel', description: 'Stands, expositions' },
      { id: 'team-building', icon: Heart, label: 'Team Building', description: 'Activités d\'équipe' },
      { id: 'other-pro', icon: Building, label: 'Autre événement pro', description: 'Autres événements professionnels' }
    ],
    // Événements mariage/particulier
    wedding: [
      { id: 'wedding', icon: Heart, label: 'Mariage', description: 'Cérémonie et réception' },
      { id: 'birthday', icon: Sparkles, label: 'Anniversaire', description: 'Fêtes d\'anniversaire' },
      { id: 'family-event', icon: Users, label: 'Événement familial', description: 'Réunions de famille' },
      { id: 'private-party', icon: Calendar, label: 'Fête privée', description: 'Soirées privées' },
      { id: 'other-private', icon: Heart, label: 'Autre événement privé', description: 'Autres célébrations' }
    ]
  };

  const getServicesForClientType = () => {
    if (formData.clientType === 'enterprise') {
      return [
        {
          category: 'Services disponibles',
          items: [
            { id: 'photobooth', label: '📷 Photobooth', description: 'Photobooth personnalisé avec décor sur mesure', color: 'border-l-yellow-400' },
            { id: 'photobooth-ia', label: '🤖 Photobooth IA connecté', description: 'Photobooth avec intelligence artificielle et effets créatifs en temps réel', color: 'border-l-purple-400' },
            { id: 'backdrop-rental', label: '🎭 Location toile fond', description: 'Toiles de fond professionnelles et décors sur mesure', color: 'border-l-green-400' },
            { id: 'connected-photographer', label: '🧠 Photographe connecté', description: 'Photographie avec IA et galerie live', color: 'border-l-blue-400' }
          ]
        }
      ];
    } else if (formData.clientType === 'wedding') {
      return [
        {
          category: 'Service disponible',
          items: [
            { id: 'photobooth', label: '📷 Photobooth', description: 'Photobooth personnalisé pour votre mariage avec décor romantique', color: 'border-l-pink-400' },
            { id: 'backdrop-rental', label: '🎭 Location de fonds', description: 'Fonds photographiques thématiques et élégants pour vos photos', color: 'border-l-purple-400' },
            { id: 'design-customization', label: '🎨 Personnalisation de votre design', description: 'Personnalisation du design et du cadre d\'impression selon vos couleurs et thème de mariage', color: 'border-l-blue-400' }
          ]
        }
      ];
    }
    return [];
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

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
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors font-semibold">
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
            <h1 className="text-3xl font-bold text-black">Type de client</h1>
            <p className="text-gray-600 text-lg">Sélectionnez le type d'événement pour personnaliser votre devis</p>

            {/* Client Type Selection */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {clientTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFormData(prev => ({ ...prev, clientType: type.id, services: [] }))}
                      className={`p-8 rounded-xl border-2 transition-all text-left ${
                        formData.clientType === type.id
                          ? 'border-yellow-400 bg-yellow-50'
                          : `${type.color} border-2`
                      }`}
                    >
                      <Icon className="w-12 h-12 mb-4 text-gray-600" />
                      <div className="font-bold text-xl text-black mb-2">{type.label}</div>
                      <div className="text-gray-600">{type.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-black">Services</h1>
            <p className="text-gray-600 text-lg">
              {formData.clientType === 'enterprise' 
                ? 'Sélectionnez les services pour votre événement professionnel'
                : 'Service disponible pour votre mariage'
              }
            </p>

            {/* Location */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Lieu de l'événement</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="relative mb-4">
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    >
                      <option value="">🇫🇷 Sélectionnez une région</option>
                      <option value="paris">Paris - Île-de-France</option>
                      <option value="other">Autre région</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Adresse complète de l'événement (optionnel)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Localisation de l'événement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Type */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Type d'événement</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {eventTypes[formData.clientType as keyof typeof eventTypes]?.map((type) => {
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

            {/* Services */}
            {getServicesForClientType().map((category) => (
              <div key={category.category} className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((service) => (
                    <div
                      key={service.id}
                      className={`border-l-4 ${service.color} bg-gray-50 p-4 rounded-r-lg cursor-pointer transition-all hover:bg-gray-100`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                            formData.services.includes(service.id)
                              ? 'bg-yellow-400 border-yellow-400'
                              : 'border-gray-300'
                          }`}>
                            {formData.services.includes(service.id) && (
                              <Check className="w-4 h-4 text-black" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-black">{service.label}</div>
                            <div className="text-sm text-gray-600">{service.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {formData.clientType === 'wedding' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">💍 Pour les mariages, notre photobooth premium inclut déjà la galerie live, les décors personnalisés et tous les accessoires nécessaires pour votre jour J.</p>
              </div>
            )}

            {/* Project Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Expliquez-nous votre projet</h2>
              <textarea
                placeholder="Décrivez votre événement, vos attentes, le nombre d'invités, l'ambiance souhaitée..."
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                value={formData.projectDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
              />
            </div>

            {/* Reference */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Référence</h2>
              <input
                type="text"
                placeholder="Référence de votre projet (optionnel)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={formData.reference}
                onChange={(e) => setFormData(prev => ({ ...prev, reference: e.target.value }))}
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-black">Date et détails</h1>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de l'événement
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    value={formData.eventDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre d'invités
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
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget approximatif
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
              >
                <option value="">Sélectionnez votre budget</option>
                <option value="1000-2500">1 000€ - 2 500€</option>
                <option value="2500-5000">2 500€ - 5 000€</option>
                <option value="5000-10000">5 000€ - 10 000€</option>
                <option value="10000+">Plus de 10 000€</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-black">Vos coordonnées</h1>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    value={formData.contactInfo.name}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, name: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    value={formData.contactInfo.email}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, email: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    value={formData.contactInfo.phone}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, phone: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise (optionnel)
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    value={formData.contactInfo.company}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      contactInfo: { ...prev.contactInfo, company: e.target.value }
                    }))}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
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
            onClick={handleNext}
            disabled={currentStep === steps.length}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 ${
              currentStep === steps.length
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-yellow-400 text-black hover:bg-yellow-500'
            }`}
          >
            <span>{currentStep === steps.length - 1 ? 'Finaliser' : 'Suivant'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold text-black">BoostPix</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Spécialiste des expériences visuelles premium pour vos événements d'exception. 
                Photobooths sur mesure, technologie connectée et décors immersifs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Facebook className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">Services</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Photobooths sur mesure</a>
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Technologie connectée</a>
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Décors immersifs</a>
                <a href="#" className="block text-gray-600 hover:text-yellow-500 transition-colors">Animation événementielle</a>
                <button 
                  onClick={onSEOPage}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris
                </button>
                <button 
                  onClick={onParis1Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 1
                </button>
                <button 
                  onClick={onParis2Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 2
                </button>
                <button 
                  onClick={onParis3Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 3
                </button>
                <button 
                  onClick={onParis4Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 4
                </button>
                <button 
                  onClick={onParis5Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 5
                </button>
                <button 
                  onClick={onParis6Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 6
                </button>
                <button 
                  onClick={onParis7Page}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors text-left"
                >
                  Location photobooth Paris 7
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <a href="tel:+33123456789" className="text-gray-600 hover:text-yellow-500 transition-colors">+33 1 23 45 67 89</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <a href="mailto:contact@boostpix.fr" className="text-gray-600 hover:text-yellow-500 transition-colors">contact@boostpix.fr</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600">Paris - Lyon - Marseille</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">&copy; 2024 BoostPix. Tous droits réservés.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuotePage;