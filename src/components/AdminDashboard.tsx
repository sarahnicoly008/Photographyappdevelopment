import { useState, useEffect } from 'react';
import { LogOut, DollarSign, MessageSquare, Settings, Edit, Save, X, Trash2, Clock } from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface BookingMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  sessionType: string;
  message: string;
  timestamp: string;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  category: string;
  features: string[];
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'messages' | 'plans' | 'settings'>('messages');
  const [messages, setMessages] = useState<BookingMessage[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [editingPlan, setEditingPlan] = useState<string | null>(null);
  const [editedPlan, setEditedPlan] = useState<Plan | null>(null);

  // Function to calculate relative time
  const getRelativeTime = (timestamp: string) => {
    const now = new Date();
    const messageDate = new Date(timestamp);
    const diffInMs = now.getTime() - messageDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMinutes < 1) return 'agora mesmo';
    if (diffInMinutes < 60) return `há ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`;
    if (diffInHours < 24) return `há ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    if (diffInDays < 7) return `há ${diffInDays} dia${diffInDays > 1 ? 's' : ''}`;
    if (diffInDays < 30) return `há ${Math.floor(diffInDays / 7)} semana${Math.floor(diffInDays / 7) > 1 ? 's' : ''}`;
    return `há ${Math.floor(diffInDays / 30)} mês${Math.floor(diffInDays / 30) > 1 ? 'es' : ''}`;
  };

  // Load messages and plans from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('bookingMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    const savedPlans = localStorage.getItem('photographyPlans');
    if (savedPlans) {
      setPlans(JSON.parse(savedPlans));
    } else {
      // Default plans
      const defaultPlans: Plan[] = [
        {
          id: 'basic',
          name: 'Básico',
          price: 599,
          category: 'events',
          features: [
            '2 horas de sessão',
            '50 fotos editadas',
            '1 fotógrafo',
            'Entrega em 15 dias',
            'Galeria online'
          ]
        },
        {
          id: 'professional',
          name: 'Profissional',
          price: 1299,
          category: 'events',
          features: [
            '4 horas de sessão',
            '150 fotos editadas',
            '1 fotógrafo + assistente',
            'Entrega em 10 dias',
            'Galeria online premium',
            'Álbum digital'
          ]
        },
        {
          id: 'premium',
          name: 'Premium',
          price: 2499,
          category: 'events',
          features: [
            '8 horas de sessão',
            '300+ fotos editadas',
            '2 fotógrafos',
            'Entrega em 7 dias',
            'Galeria online premium',
            'Álbum físico 30x30cm',
            'Vídeo highlights'
          ]
        },
        {
          id: 'essence',
          name: 'Essência',
          price: 1899,
          category: 'boudoir',
          features: [
            '2 horas de sessão',
            'Consultoria de estilo',
            '40 fotos editadas',
            'Maquiagem profissional',
            'Álbum digital premium',
            'Ambiente privativo'
          ]
        },
        {
          id: 'empowerment',
          name: 'Empoderamento',
          price: 3499,
          category: 'boudoir',
          features: [
            '3 horas de sessão',
            'Consultoria de estilo completa',
            '80 fotos editadas',
            'Maquiagem + cabelo',
            'Álbum físico 25x25cm',
            '3 looks diferentes',
            'Champagne e música'
          ]
        },
        {
          id: 'luxury',
          name: 'Luxo',
          price: 5999,
          category: 'boudoir',
          features: [
            '5 horas de sessão VIP',
            'Consultoria personalizada',
            '150+ fotos editadas',
            'Equipe completa de beleza',
            'Álbum físico premium 40x40cm',
            '5 looks + lingerie designer',
            'Spa day incluso',
            'Vídeo sensual editado'
          ]
        }
      ];
      setPlans(defaultPlans);
      localStorage.setItem('photographyPlans', JSON.stringify(defaultPlans));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    onLogout();
  };

  const deleteMessage = (id: string) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('bookingMessages', JSON.stringify(updatedMessages));
  };

  const startEditPlan = (plan: Plan) => {
    setEditingPlan(plan.id);
    setEditedPlan({ ...plan });
  };

  const cancelEditPlan = () => {
    setEditingPlan(null);
    setEditedPlan(null);
  };

  const savePlan = () => {
    if (editedPlan) {
      const updatedPlans = plans.map(p => p.id === editedPlan.id ? editedPlan : p);
      setPlans(updatedPlans);
      localStorage.setItem('photographyPlans', JSON.stringify(updatedPlans));
      setEditingPlan(null);
      setEditedPlan(null);
    }
  };

  const updatePlanFeature = (index: number, value: string) => {
    if (editedPlan) {
      const newFeatures = [...editedPlan.features];
      newFeatures[index] = value;
      setEditedPlan({ ...editedPlan, features: newFeatures });
    }
  };

  const addPlanFeature = () => {
    if (editedPlan) {
      setEditedPlan({ ...editedPlan, features: [...editedPlan.features, ''] });
    }
  };

  const removePlanFeature = (index: number) => {
    if (editedPlan) {
      const newFeatures = editedPlan.features.filter((_, i) => i !== index);
      setEditedPlan({ ...editedPlan, features: newFeatures });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-gray-900">Painel Administrativo</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'messages'
                  ? 'border-amber-600 text-amber-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Mensagens ({messages.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'plans'
                  ? 'border-amber-600 text-amber-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Planos
              </div>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === 'settings'
                  ? 'border-amber-600 text-amber-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Configurações
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-2xl mb-6 text-gray-900">Solicitações de Agendamento</h2>
            {messages.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p>Nenhuma mensagem recebida ainda.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl text-gray-900 mb-2">{msg.name}</h3>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-1 text-sm text-gray-600 bg-amber-50 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4 text-amber-600" />
                            <span className="text-amber-700">{getRelativeTime(msg.timestamp)}</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {new Date(msg.timestamp).toLocaleString('pt-BR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-red-600 hover:text-red-700 transition-colors ml-4"
                        title="Excluir mensagem"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Email:</p>
                        <p className="text-gray-900">{msg.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Telefone:</p>
                        <p className="text-gray-900">{msg.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Data Desejada:</p>
                        <p className="text-gray-900">{new Date(msg.date).toLocaleDateString('pt-BR')}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tipo de Sessão:</p>
                        <p className="text-gray-900">{msg.sessionType}</p>
                      </div>
                    </div>
                    {msg.message && (
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Mensagem:</p>
                        <p className="text-gray-900 bg-gray-50 p-3 rounded">{msg.message}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Plans Tab */}
        {activeTab === 'plans' && (
          <div>
            <h2 className="text-2xl mb-6 text-gray-900">Gerenciar Planos</h2>
            <div className="space-y-6">
              {/* Events & Sessions Plans */}
              <div>
                <h3 className="text-xl mb-4 text-gray-800">Eventos & Sessões</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.filter(p => p.category === 'events').map((plan) => (
                    <div key={plan.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      {editingPlan === plan.id ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editedPlan?.name}
                            onChange={(e) => setEditedPlan(editedPlan ? { ...editedPlan, name: e.target.value } : null)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <div className="flex items-center gap-2">
                            <span>R$</span>
                            <input
                              type="number"
                              value={editedPlan?.price}
                              onChange={(e) => setEditedPlan(editedPlan ? { ...editedPlan, price: Number(e.target.value) } : null)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                          <div className="space-y-2">
                            {editedPlan?.features.map((feature, index) => (
                              <div key={index} className="flex gap-2">
                                <input
                                  type="text"
                                  value={feature}
                                  onChange={(e) => updatePlanFeature(index, e.target.value)}
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                                <button
                                  onClick={() => removePlanFeature(index)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={addPlanFeature}
                              className="text-sm text-amber-600 hover:text-amber-700"
                            >
                              + Adicionar benefício
                            </button>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={savePlan}
                              className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                            >
                              <Save className="w-4 h-4" />
                              Salvar
                            </button>
                            <button
                              onClick={cancelEditPlan}
                              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h4 className="text-xl mb-2 text-gray-900">{plan.name}</h4>
                          <p className="text-3xl mb-4 text-amber-600">R$ {plan.price}</p>
                          <ul className="space-y-2 mb-4">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600">• {feature}</li>
                            ))}
                          </ul>
                          <button
                            onClick={() => startEditPlan(plan)}
                            className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                          >
                            <Edit className="w-4 h-4" />
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Boudoir Plans */}
              <div>
                <h3 className="text-xl mb-4 text-gray-800">Boudoir</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plans.filter(p => p.category === 'boudoir').map((plan) => (
                    <div key={plan.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      {editingPlan === plan.id ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editedPlan?.name}
                            onChange={(e) => setEditedPlan(editedPlan ? { ...editedPlan, name: e.target.value } : null)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <div className="flex items-center gap-2">
                            <span>R$</span>
                            <input
                              type="number"
                              value={editedPlan?.price}
                              onChange={(e) => setEditedPlan(editedPlan ? { ...editedPlan, price: Number(e.target.value) } : null)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                          <div className="space-y-2">
                            {editedPlan?.features.map((feature, index) => (
                              <div key={index} className="flex gap-2">
                                <input
                                  type="text"
                                  value={feature}
                                  onChange={(e) => updatePlanFeature(index, e.target.value)}
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                                <button
                                  onClick={() => removePlanFeature(index)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={addPlanFeature}
                              className="text-sm text-amber-600 hover:text-amber-700"
                            >
                              + Adicionar benefício
                            </button>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={savePlan}
                              className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                            >
                              <Save className="w-4 h-4" />
                              Salvar
                            </button>
                            <button
                              onClick={cancelEditPlan}
                              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h4 className="text-xl mb-2 text-gray-900">{plan.name}</h4>
                          <p className="text-3xl mb-4 text-rose-600">R$ {plan.price}</p>
                          <ul className="space-y-2 mb-4">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600">• {feature}</li>
                            ))}
                          </ul>
                          <button
                            onClick={() => startEditPlan(plan)}
                            className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                          >
                            <Edit className="w-4 h-4" />
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl mb-6 text-gray-900">Configurações</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl mb-4 text-gray-800">Informações do Sistema</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-sm text-gray-600">Total de Mensagens:</p>
                  <p className="text-2xl">{messages.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total de Planos:</p>
                  <p className="text-2xl">{plans.length}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      if (confirm('Tem certeza que deseja limpar todas as mensagens?')) {
                        setMessages([]);
                        localStorage.removeItem('bookingMessages');
                      }
                    }}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Limpar Todas as Mensagens
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}