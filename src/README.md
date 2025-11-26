# Karen Aciole Photography

Website completo para empresa de fotografia com galeria de eventos, planos fotográficos e sistema de agendamento.

## 🌟 Funcionalidades

- **Galeria Organizada**: 17 tipos de sessões fotográficas incluindo casamentos, boudoir, newborn, smash the cake e mais
- **Planos Personalizados**: 
  - Eventos & Sessões (3 planos: Básico R$599, Profissional R$1.299, Premium R$2.499)
  - Boudoir (3 planos: Essência R$1.899, Empoderamento R$3.499, Luxo R$5.999)
- **Sistema de Agendamento**: Formulário integrado para solicitação de sessões
- **Seção Sobre**: Perfis das fotógrafas Karen Aciole e Marina Silva
- **Painel Administrativo**: Gerenciamento de mensagens e edição de planos
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile

## 🚀 Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Lucide React (ícones)

## 📦 Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/karen-aciole-photography.git

# Entre na pasta
cd karen-aciole-photography

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🔨 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 🔐 Painel Administrativo

Para acessar o painel administrativo:
1. Clique em "Admin" no rodapé do site
2. Use a senha: `karenphotography`

No painel você pode:
- Visualizar todas as mensagens de agendamento com data de envio
- Excluir mensagens
- Editar valores e características dos planos
- Adicionar ou remover benefícios dos planos
- Limpar todas as mensagens

## 📱 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

### Configuração:

1. Faça push do código para o GitHub
2. Vá em **Settings** → **Pages** no seu repositório
3. Em **Source**, selecione **GitHub Actions**
4. O site será automaticamente deployado a cada push na branch `main`

A URL será: `https://seu-usuario.github.io/karen-aciole-photography/`

## 📄 Estrutura do Projeto

```
karen-aciole-photography/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de deploy automático
├── components/
│   ├── AboutSection.tsx        # Seção sobre as fotógrafas
│   ├── AdminDashboard.tsx      # Painel administrativo
│   ├── AdminLogin.tsx          # Login do admin
│   ├── BookingForm.tsx         # Formulário de agendamento
│   ├── GallerySection.tsx      # Galeria de fotos
│   └── PlansSection.tsx        # Seção de planos
├── styles/
│   └── globals.css             # Estilos globais e Tailwind
├── App.tsx                     # Componente principal
├── index.html                  # HTML base
├── package.json                # Dependências
├── vite.config.ts              # Configuração do Vite
└── README.md                   # Este arquivo

```

## 🎨 Personalização

### Alterar Cores

As cores principais estão definidas no `/styles/globals.css`. A cor primária é âmbar (amber-600).

### Adicionar Imagens

As imagens são carregadas via Unsplash. Para usar suas próprias imagens, substitua as URLs no componente `GallerySection.tsx`.

### Modificar Planos

Os planos podem ser editados:
- Diretamente no código em `/components/PlansSection.tsx`
- Ou pelo painel administrativo (recomendado)

## 📞 Contato

Para suporte ou dúvidas sobre o projeto, entre em contato através do formulário de agendamento no site.

## 📝 Licença

© 2024 Karen Aciole Photography. Todos os direitos reservados.
