import { useState, FormEvent } from 'react';
import { Calendar, Clock, Mail, Phone, User, MapPin, Camera } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  location: string;
  plan: string;
  guests: string;
  message: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    plan: '',
    guests: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Save message to localStorage
    const bookingMessage = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.eventDate,
      sessionType: formData.eventType,
      message: formData.message,
      timestamp: new Date().toISOString(),
    };

    // Get existing messages
    const existingMessages = localStorage.getItem('bookingMessages');
    const messages = existingMessages ? JSON.parse(existingMessages) : [];
    
    // Add new message
    messages.push(bookingMessage);
    localStorage.setItem('bookingMessages', JSON.stringify(messages));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        eventTime: '',
        location: '',
        plan: '',
        guests: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Agende Sua Sessão</h2>
          <p className="text-xl text-gray-600">
            Preencha o formulário abaixo e entraremos em contato em até 24 horas
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Camera className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl mb-2 text-gray-900">Agendamento Enviado!</h3>
            <p className="text-gray-600">
              Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve para confirmar os
              detalhes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Telefone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="(11) 98765-4321"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="eventType" className="block mb-2 text-gray-700">
                  Tipo de Evento *
                </label>
                <div className="relative">
                  <Camera className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="casamento">Casamento</option>
                    <option value="aniversario">Aniversário</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="formatura">Formatura</option>
                    <option value="ensaio">Ensaio Fotográfico</option>
                    <option value="boudoir">Boudoir</option>
                    <option value="newborn">Newborn</option>
                    <option value="familia">Retrato de Família</option>
                    <option value="smash-cake">Smash the Cake</option>
                    <option value="tematica">Sessão Temática</option>
                    <option value="sazonal">Sessão Sazonal</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="eventDate" className="block mb-2 text-gray-700">
                  Data do Evento *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Event Time */}
              <div>
                <label htmlFor="eventTime" className="block mb-2 text-gray-700">
                  Horário do Evento *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="md:col-span-2">
                <label htmlFor="location" className="block mb-2 text-gray-700">
                  Local do Evento *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                    placeholder="Endereço completo do evento"
                  />
                </div>
              </div>

              {/* Plan */}
              <div>
                <label htmlFor="plan" className="block mb-2 text-gray-700">
                  Plano de Interesse *
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="">Selecione...</option>
                  <option value="basico">Básico - R$ 599</option>
                  <option value="profissional">Profissional - R$ 1.299</option>
                  <option value="premium">Premium - R$ 2.499</option>
                  <option value="personalizado">Personalizado</option>
                </select>
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="guests" className="block mb-2 text-gray-700">
                  Número de Convidados (estimativa)
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
                  placeholder="Ex: 50"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Mensagem Adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none resize-none"
                  placeholder="Conte-nos mais sobre seu evento ou necessidades especiais..."
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Enviar Agendamento
              </button>
              <p className="text-center text-gray-500 mt-4 text-sm">
                * Campos obrigatórios
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}