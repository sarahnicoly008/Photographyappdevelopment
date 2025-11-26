import { useState } from 'react';
import { Lock, Camera, Crown } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === 'karenphotography') {
      localStorage.setItem('adminAuth', 'true');
      onLogin();
    } else {
      setError('Senha incorreta. Tente novamente.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="relative">
              <Camera className="w-10 h-10 text-amber-600" />
              <Crown className="w-5 h-5 text-amber-600 absolute -top-1 left-1/2 -translate-x-1/2" />
            </div>
          </div>
          <h1 className="text-3xl mb-2 text-gray-900">Painel Administrativo</h1>
          <p className="text-gray-600">Karen Aciole Photography</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block mb-2 text-gray-700">
              Senha de Administrador
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder="Digite a senha"
                required
              />
            </div>
            {error && (
              <p className="mt-2 text-red-600 text-sm">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Acesso restrito a administradores</p>
        </div>
      </div>
    </div>
  );
}
