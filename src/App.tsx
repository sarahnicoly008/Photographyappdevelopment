import { useState } from 'react';
import { Camera, Calendar, Check, Menu, X, Crown } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { GallerySection } from './components/GallerySection';
import { PlansSection } from './components/PlansSection';
import { BookingForm } from './components/BookingForm';
import { AboutSection } from './components/AboutSection';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import heroImage from 'figma:asset/4332ee34ec02abee5e09ed3e9f7b6b28d9e90e51.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    localStorage.getItem('adminAuth') === 'true'
  );

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setShowAdminPanel(false);
  };

  // Show admin panel if authenticated
  if (showAdminPanel) {
    if (isAdminAuthenticated) {
      return <AdminDashboard onLogout={handleAdminLogout} />;
    } else {
      return <AdminLogin onLogin={handleAdminLogin} />;
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="relative inline-flex items-end pb-1">
                <Camera className="w-6 h-6 text-amber-600" />
                <Crown className="w-3 h-3 text-amber-600 absolute -top-1 left-1/2 -translate-x-1/2" />
              </div>
              <span className="text-xl text-gray-900">Karen Aciole Photography</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('plans')}
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
              >
                Agendar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left"
                >
                  Galeria
                </button>
                <button
                  onClick={() => scrollToSection('plans')}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left"
                >
                  Planos
                </button>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
                >
                  Agendar
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-[600px] overflow-hidden">
          <ImageWithFallback
            src={heroImage}
            alt="Professional Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl mb-6">
                  Capturando Seus Momentos Especiais
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Fotografia profissional para casamentos, eventos corporativos, aniversários e muito mais.
                  Transformamos momentos em memórias eternas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    Ver Galeria
                  </button>
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Agendar Sessão
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Camera className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Qualidade Profissional</h3>
              <p className="text-gray-600">
                Equipamentos de última geração e fotógrafos experientes para garantir as melhores fotos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Agendamento Fácil</h3>
              <p className="text-gray-600">
                Sistema simples e rápido de agendamento online. Reserve sua sessão em poucos cliques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Check className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">100% Satisfação</h3>
              <p className="text-gray-600">
                Garantimos sua satisfação total com nosso trabalho. Edição inclusa em todos os pacotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Plans Section */}
      <PlansSection />

      {/* Booking Section */}
      <BookingForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <Camera className="w-6 h-6 text-amber-600" />
                  <Crown className="w-3 h-3 text-amber-600 absolute -top-0.5 -right-0.5" />
                </div>
                <span className="text-lg">Karen Aciole Photography</span>
              </div>
              <p className="text-gray-400">
                Transformando momentos especiais em memórias eternas desde 2015.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Contato</h4>
              <div className="text-gray-400 space-y-2">
                <p>Email: contato@aciole.com</p>
                <p>Telefone: (11) 98765-4321</p>
                <p>WhatsApp: (11) 98765-4321</p>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Horário de Atendimento</h4>
              <div className="text-gray-400 space-y-2">
                <p>Segunda a Sexta: 9h - 18h</p>
                <p>Sábado: 10h - 16h</p>
                <p>Domingo: Apenas eventos agendados</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Karen Aciole Photography. Todos os direitos reservados.</p>
            <button
              onClick={() => setShowAdminPanel(true)}
              className="mt-4 text-xs text-gray-600 hover:text-amber-600 transition-colors"
            >
              Admin
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}