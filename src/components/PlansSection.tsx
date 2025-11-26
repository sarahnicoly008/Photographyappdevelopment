import { Check, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Plan {
  id: string;
  name: string;
  price: number;
  category: string;
  features: string[];
}

const eventPlans: Plan[] = [
  {
    id: '1',
    name: 'Básico',
    price: 599,
    category: 'events',
    features: [
      '1 fotógrafo profissional',
      '50 fotos editadas em alta resolução',
      'Entrega em 15 dias',
      'Galeria online privada',
      'Download de todas as fotos',
    ],
  },
  {
    id: '2',
    name: 'Profissional',
    price: 1299,
    category: 'events',
    features: [
      '1 fotógrafo profissional',
      '150 fotos editadas em alta resolução',
      'Entrega em 10 dias',
      'Galeria online privada',
      'Download de todas as fotos',
      'Álbum digital personalizado',
      'Suporte prioritário',
    ],
  },
  {
    id: '3',
    name: 'Premium',
    price: 2499,
    category: 'events',
    features: [
      '2 fotógrafos profissionais',
      '300+ fotos editadas em alta resolução',
      'Entrega em 7 dias',
      'Galeria online privada',
      'Download de todas as fotos',
      'Álbum digital personalizado',
      'Álbum físico premium (20x30cm)',
      'Vídeo teaser do evento',
      'Suporte VIP 24/7',
    ],
  },
];

const boudoirPlans: Plan[] = [
  {
    id: '4',
    name: 'Essência',
    price: 1899,
    category: 'boudoir',
    features: [
      'Sessão privada em estúdio',
      'Consultoria de estilo pré-sessão',
      'Maquiagem e penteado profissional',
      '25 fotos finamente editadas',
      'Galeria online privada protegida',
      'Guia de poses e preparação',
      '100% confidencialidade garantida',
      'Roupões e acessórios disponíveis',
    ],
  },
  {
    id: '5',
    name: 'Empoderamento',
    price: 3499,
    category: 'boudoir',
    features: [
      'Sessão privada em estúdio premium',
      'Consultoria de estilo pré-sessão',
      'Maquiagem e penteado profissional',
      '50 fotos finamente editadas',
      '3 trocas de look incluídas',
      'Galeria online privada protegida',
      'Álbum boudoir personalizado (25x25cm)',
      'Pen drive luxo com todas as fotos',
      'Sessão de champagne',
      'Lingerie e acessórios premium disponíveis',
      '100% confidencialidade garantida',
    ],
  },
  {
    id: '6',
    name: 'Luxo',
    price: 5999,
    category: 'boudoir',
    features: [
      'Sessão privada VIP (estúdio ou hotel)',
      'Consultoria de estilo e personal stylist',
      'Maquiagem, penteado e spa pré-sessão',
      '80+ fotos finamente editadas',
      '5 trocas de look incluídas',
      'Galeria online privada protegida',
      'Álbum boudoir premium couro italiano (30x30cm)',
      'Caixa de revelação luxo com prints',
      'Pen drive cristal Swarovski',
      'Sessão de champagne premium',
      'Flores e presente surpresa',
      'Guarda-roupa de lingerie premium disponível',
      'Retoque artístico premium',
      '100% confidencialidade garantida',
      'Concierge pessoal dedicado',
    ],
  },
];

export function PlansSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'events' | 'boudoir'>('all');
  const [plans, setPlans] = useState<Plan[]>([]);

  // Load plans from localStorage or use defaults
  useEffect(() => {
    const savedPlans = localStorage.getItem('photographyPlans');
    if (savedPlans) {
      setPlans(JSON.parse(savedPlans));
    } else {
      const defaultPlans = [...eventPlans, ...boudoirPlans];
      setPlans(defaultPlans);
    }
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shouldShowEvents = selectedCategory === 'all' || selectedCategory === 'events';
  const shouldShowBoudoir = selectedCategory === 'all' || selectedCategory === 'boudoir';

  const displayEventPlans = plans.filter(p => p.category === 'events');
  const displayBoudoirPlans = plans.filter(p => p.category === 'boudoir');

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Nossos Planos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o pacote que melhor atende às suas necessidades
          </p>
        </div>

        {/* Category Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-8 py-3 rounded-full transition-colors ${
              selectedCategory === 'all'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Todos os Planos
          </button>
          <button
            onClick={() => setSelectedCategory('events')}
            className={`px-8 py-3 rounded-full transition-colors ${
              selectedCategory === 'events'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Eventos & Sessões
          </button>
          <button
            onClick={() => setSelectedCategory('boudoir')}
            className={`px-8 py-3 rounded-full transition-colors flex items-center gap-2 ${
              selectedCategory === 'boudoir'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Boudoir
          </button>
        </div>

        {/* Events Plans Section */}
        {shouldShowEvents && (
          <div className="mb-16">
            <h3 className="text-3xl text-center mb-8 text-gray-900">
              Planos de Eventos & Sessões
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayEventPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                    plan.price === 1299 ? 'ring-2 ring-amber-600' : ''
                  }`}
                >
                  {plan.price === 1299 && (
                    <div className="bg-amber-600 text-white text-center py-2">
                      <span className="text-sm uppercase tracking-wide">Mais Popular</span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl text-gray-900">R$ {plan.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={scrollToBooking}
                      className={`w-full py-3 rounded-lg transition-colors ${
                        plan.price === 1299
                          ? 'bg-amber-600 text-white hover:bg-amber-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Contratar Plano
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Boudoir Plans Section */}
        {shouldShowBoudoir && (
          <div>
            {/* Boudoir Info Banner */}
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Sobre a Fotografia Boudoir</h3>
                  <p className="text-gray-700 mb-3">
                    Nossas sessões boudoir são projetadas para celebrar sua beleza, confiança e
                    feminilidade em um ambiente privado, elegante e respeitoso. Cada sessão é
                    cuidadosamente planejada para que você se sinta confortável e empoderada.
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>✓ Ambiente 100% privado e seguro apenas para mulheres</li>
                    <li>✓ Fotógrafas especializadas com anos de experiência</li>
                    <li>✓ Confidencialidade total garantida</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl text-center mb-8 text-gray-900 flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8 text-rose-600" />
              Planos Boudoir
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayBoudoirPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                    plan.price === 3499 ? 'ring-2 ring-rose-600' : ''
                  }`}
                >
                  {plan.price === 3499 && (
                    <div className="bg-rose-600 text-white text-center py-2">
                      <span className="text-sm uppercase tracking-wide">Mais Popular</span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl text-gray-900">R$ {plan.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={scrollToBooking}
                      className={`w-full py-3 rounded-lg transition-colors ${
                        plan.price === 3499
                          ? 'bg-rose-600 text-white hover:bg-rose-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Contratar Plano
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Quote Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl mb-4 text-gray-900">Precisa de algo personalizado?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para criar um pacote sob medida para o seu evento especial ou
            sessão boudoir. Oferecemos soluções personalizadas para casamentos, eventos corporativos
            de grande porte, ensaios temáticos exclusivos e muito mais.
          </p>
          <button
            onClick={scrollToBooking}
            className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
          >
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
}