import { Camera, Award, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Conheça Nossas Fotógrafas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Duas profissionais apaixonadas por capturar momentos únicos e transformar suas memórias em arte
          </p>
        </div>

        {/* Karen Aciole */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1724128197174-f864ac9811c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzU1MzgzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Karen Aciole - Fotógrafa Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  <span>10+ Anos</span>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                <Camera className="w-4 h-4" />
                <span>Fotógrafa Principal & Fundadora</span>
              </div>
              <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">Karen Aciole</h3>
              <p className="text-lg text-gray-600 mb-6">
                Fundadora do estúdio, Karen tem mais de 10 anos de experiência em fotografia profissional. 
                Especializada em capturar a essência e emoção de cada momento, ela transforma eventos comuns 
                em histórias visuais extraordinárias.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Com formação em Artes Visuais e certificações internacionais em fotografia, Karen já fotografou 
                mais de 500 casamentos e eventos ao redor do Brasil. Sua abordagem única combina técnica 
                impecável com sensibilidade artística, criando imagens que transcendem o momento.
              </p>

              {/* Especialidades */}
              <div className="space-y-4">
                <h4 className="text-xl text-gray-900 mb-4">Especialidades:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-amber-600" />
                    <span>Casamentos</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-amber-600" />
                    <span>Eventos Corporativos</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-amber-600" />
                    <span>Fotografia Artística</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-amber-600" />
                    <span>Sessões Sazonais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Second Photographer */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4" />
                <span>Fotógrafa Especialista em Boudoir</span>
              </div>
              <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">Marina Silva</h3>
              <p className="text-lg text-gray-600 mb-6">
                Especialista em fotografia boudoir e retratos íntimos, Marina traz uma abordagem delicada 
                e empoderadora para cada sessão. Com 8 anos de experiência, ela cria um ambiente confortável 
                e seguro onde cada cliente pode expressar sua beleza e confiança.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Certificada em fotografia de retrato e especialização em iluminação de estúdio, Marina 
                acredita que cada mulher merece se sentir poderosa e bela. Suas sessões boudoir são conhecidas 
                por capturar não apenas a beleza física, mas também a força interior de cada cliente.
              </p>

              {/* Especialidades */}
              <div className="space-y-4">
                <h4 className="text-xl text-gray-900 mb-4">Especialidades:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-rose-600" />
                    <span>Fotografia Boudoir</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-rose-600" />
                    <span>Retratos Femininos</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-rose-600" />
                    <span>Ensaios Gestante</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-rose-600" />
                    <span>Fotografia Íntima</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648662199460-34b7597ba771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwaG90b2dyYXBoZXIlMjBzdHVkaW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1NTM4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marina Silva - Especialista em Boudoir"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-rose-600 text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  <span>8+ Anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-12">
          <h3 className="text-3xl mb-4 text-gray-900">Pronta para criar memórias incríveis?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para tornar seus momentos inesquecíveis. 
            Agende uma conversa e descubra qual sessão é perfeita para você.
          </p>
          <button
            onClick={() => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
          >
            Agendar Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
