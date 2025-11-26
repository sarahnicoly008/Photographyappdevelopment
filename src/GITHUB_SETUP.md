# 📋 Instruções para Deploy no GitHub Pages

Siga este passo a passo para colocar seu site no ar:

## 1️⃣ Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Faça login na sua conta
3. Clique no botão **"+"** no canto superior direito
4. Selecione **"New repository"**
5. Configure o repositório:
   - **Repository name**: `karen-aciole-photography` (ou outro nome de sua escolha)
   - **Description**: "Website profissional para Karen Aciole Photography"
   - **Visibility**: Public (para usar GitHub Pages gratuitamente)
   - **NÃO** marque "Add a README file"
6. Clique em **"Create repository"**

## 2️⃣ Fazer Upload dos Arquivos

### Opção A: Via Interface Web do GitHub (Mais Fácil)

1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos do projeto para a área de upload
3. Certifique-se de incluir a pasta `.github` com o arquivo de workflow
4. Na mensagem de commit, escreva: "Initial commit - Karen Aciole Photography website"
5. Clique em **"Commit changes"**

### Opção B: Via Git Command Line

```bash
# Inicialize o git na pasta do projeto
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit - Karen Aciole Photography website"

# Conecte com o repositório do GitHub (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/karen-aciole-photography.git

# Envie os arquivos
git branch -M main
git push -u origin main
```

## 3️⃣ Configurar GitHub Pages

1. No seu repositório, vá em **Settings** (Configurações)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **Source** (Origem), selecione:
   - **Source**: GitHub Actions
4. Aguarde alguns minutos - o site será automaticamente deployado!

## 4️⃣ Acessar Seu Site

Após o deploy (geralmente leva 2-5 minutos), seu site estará disponível em:

```
https://SEU-USUARIO.github.io/karen-aciole-photography/
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

## 5️⃣ Verificar Status do Deploy

1. Vá na aba **Actions** do seu repositório
2. Você verá o workflow "Deploy to GitHub Pages"
3. Se houver um ✅ verde, o deploy foi bem-sucedido
4. Se houver um ❌ vermelho, clique para ver os logs de erro

## 🔄 Atualizar o Site

Sempre que você quiser fazer mudanças:

1. Edite os arquivos localmente
2. Faça upload das mudanças (via web ou git)
3. O site será automaticamente atualizado em poucos minutos

### Via Git:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

## ⚠️ Problemas Comuns

### Site não carrega ou mostra erro 404
- Verifique se a pasta `.github/workflows` foi enviada corretamente
- Certifique-se de que selecionou "GitHub Actions" em Pages
- Aguarde alguns minutos após o primeiro deploy

### Imagens não aparecem
- As imagens estão sendo carregadas do Unsplash dinamicamente
- Se quiser usar suas próprias imagens, você precisará:
  1. Adicionar as imagens em uma pasta `public/images/`
  2. Atualizar os componentes para usar essas imagens

### CSS não está funcionando
- Verifique se o arquivo `styles/globals.css` está presente
- Limpe o cache do navegador (Ctrl + Shift + R)

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs em Actions
2. Consulte a documentação do GitHub Pages: https://docs.github.com/pages
3. Verifique se todos os arquivos foram enviados corretamente

## 📱 Próximos Passos (Opcional)

### Adicionar Domínio Personalizado
1. Compre um domínio (ex: karenaciole.com)
2. Em Settings → Pages → Custom domain
3. Digite seu domínio e siga as instruções

### Adicionar Google Analytics
Edite o arquivo `index.html` e adicione o código de tracking do Google Analytics antes de `</head>`

### Melhorar SEO
- Adicione meta tags no `index.html`
- Crie um arquivo `sitemap.xml`
- Adicione `robots.txt`

---

✅ **Pronto!** Seu site profissional estará no ar em minutos!
