import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, Info } from 'lucide-react';

const galleryEvents = [
  {
    id: 1,
    category: 'Casamentos',
    subcategory: 'Pré-Casamento',
    images: [
      'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzMDM3MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Sessões realizadas de 3 a 12 meses antes do casamento',
  },
  {
    id: 2,
    category: 'Sessões Sazonais',
    subcategory: 'Primavera',
    images: [
      'https://images.unsplash.com/photo-1681930105498-a43e2b095228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBwaG90b2dyYXBoeSUyMHNlc3Npb258ZW58MXx8fHwxNzYzMTIwNTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Sessões disponíveis: Março a Junho',
  },
  {
    id: 3,
    category: 'Sessões Sazonais',
    subcategory: 'Outono',
    images: [
      'https://images.unsplash.com/photo-1603878305969-99902e51db75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWxsJTIwYXV0dW1uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzMTIwNTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Sessões disponíveis: Setembro a Novembro',
  },
  {
    id: 4,
    category: 'Sessões Sazonais',
    subcategory: 'Inverno',
    images: [
      'https://images.unsplash.com/photo-1705255093812-4b41b056ad40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBwaG90b2dyYXBoeSUyMHNlc3Npb258ZW58MXx8fHwxNzYzMTIwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Sessões disponíveis: Dezembro a Fevereiro',
  },
  {
    id: 5,
    category: 'Aniversários',
    subcategory: 'Smash the Cake',
    images: [
      'https://images.unsplash.com/photo-1577110949352-b27e8eff8a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFzaCUyMGNha2UlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjMxMjA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Celebração especial do primeiro aniversário',
  },
  {
    id: 6,
    category: 'Sessões Temáticas',
    subcategory: 'Natal',
    images: [
      'https://images.unsplash.com/photo-1609456316959-20e682a69dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBmYW1pbHklMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjMxMjA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Disponível em Dezembro - 25 de Dezembro',
  },
  {
    id: 7,
    category: 'Sessões Temáticas',
    subcategory: 'Páscoa',
    images: [
      'https://images.unsplash.com/photo-1623115866690-03d6a83f1141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXN0ZXIlMjBwaG90b2dyYXBoeSUyMHNlc3Npb258ZW58MXx8fHwxNzYzMTIwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Disponível em Março/Abril - Data varia anualmente',
  },
  {
    id: 8,
    category: 'Sessões Temáticas',
    subcategory: 'Dia dos Namorados',
    images: [
      'https://images.unsplash.com/photo-1613552132931-819d710615d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWxlbnRpbmVzJTIwZGF5JTIwY291cGxlfGVufDF8fHx8MTc2MzEyMDUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Disponível em Fevereiro - 14 de Fevereiro',
  },
  {
    id: 9,
    category: 'Sessões Temáticas',
    subcategory: 'Dia das Mães',
    images: [
      'https://images.unsplash.com/photo-1639832060243-442b6125f18c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXJzJTIwZGF5JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzMTIwNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Disponível em Maio - Segundo domingo de Maio',
  },
  {
    id: 10,
    category: 'Sessões Temáticas',
    subcategory: 'Dia dos Pais',
    images: [
      'https://images.unsplash.com/photo-1589566823954-99c9a30ced9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXRoZXIlMjBzb24lMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjMxMjA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Disponível em Junho - Terceiro domingo de Junho',
  },
  {
    id: 11,
    category: 'Eventos Corporativos',
    subcategory: 'Empresas',
    images: [
      'https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzA3MzI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Cobertura profissional para eventos empresariais',
  },
  {
    id: 12,
    category: 'Retratos de Família',
    subcategory: 'Família',
    images: [
      'https://images.unsplash.com/photo-1593968007877-b351c54bef61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzExODE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Sessões familiares em estúdio ou externos',
  },
  {
    id: 13,
    category: 'Formaturas',
    subcategory: 'Graduação',
    images: [
      'https://images.unsplash.com/photo-1623461487986-9400110de28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYzMDg5ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Momento especial de conquista acadêmica',
  },
  {
    id: 14,
    category: 'Ensaios',
    subcategory: 'Casal',
    images: [
      'https://images.unsplash.com/photo-1622013384027-047cbcf8b575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NjMxMTgxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Ensaios românticos para casais',
  },
  {
    id: 15,
    category: 'Newborn',
    subcategory: 'Bebê',
    images: [
      'https://images.unsplash.com/photo-1610901158532-d246c011729e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzMTE4MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Fotografias delicadas dos primeiros dias de vida',
  },
  {
    id: 16,
    category: 'Aniversários',
    subcategory: 'Festas',
    images: [
      'https://images.unsplash.com/photo-1637059396137-363973e2e37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZXZlbnR8ZW58MXx8fHwxNzYzMDE0ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Cobertura completa de festas de aniversário',
  },
  {
    id: 17,
    category: 'Boudoir',
    subcategory: 'Ensaio Boudoir',
    images: [
      'https://images.unsplash.com/photo-1762195020829-835d05d3ee80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3Vkb2lyJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc2MzEyMDg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    description: 'Sessões privadas e elegantes para autoestima e empoderamento',
  },
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedImage, setSelectedImage] = useState<{ url: string; event: any } | null>(null);

  const categories = ['Todos', ...Array.from(new Set(galleryEvents.map((e) => e.category)))];

  const filteredEvents =
    selectedCategory === 'Todos'
      ? galleryEvents
      : galleryEvents.filter((e) => e.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Galeria de Eventos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nosso portfólio de trabalhos realizados em diversos tipos de eventos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => setSelectedImage({ url: event.images[0], event })}
            >
              <ImageWithFallback
                src={event.images[0]}
                alt={event.subcategory}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white mb-1">{event.subcategory}</p>
                  {event.description && (
                    <p className="text-gray-200 text-sm">{event.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={selectedImage.url}
              alt="Selected"
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-4">
              <div className="flex items-start gap-3 text-white">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl mb-2">{selectedImage.event.subcategory}</h3>
                  <p className="text-gray-200 mb-1">Categoria: {selectedImage.event.category}</p>
                  {selectedImage.event.description && (
                    <p className="text-gray-300 text-sm">{selectedImage.event.description}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}