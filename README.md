# HealthTrackFree Website

Site oficial da app HealthTrackFree - Monitorização de saúde para utilizadores de medicamentos GLP-1.

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar repositório
1. Vai a https://github.com/new
2. Nome: `healthtrackfree` (ou outro à escolha)
3. Marca como **Public**
4. Clica em "Create repository"

### Passo 2: Fazer upload dos ficheiros
**Opção A - Via Interface Web (mais fácil):**
1. No repo criado, clica em "Add file" → "Upload files"
2. Arrasta todos os ficheiros desta pasta (index.html, style.css, script.js)
3. Arrasta a pasta `screenshots` completa
4. Clica em "Commit changes"

**Opção B - Via Git:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USERNAME/healthtrackfree.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. No repo, vai a **Settings** → **Pages**
2. Em "Source", seleciona:
   - Branch: `main`
   - Folder: `/ (root)`
3. Clica em **Save**
4. Aguarda 1-2 minutos

### Passo 4: Aceder ao site
O site ficará disponível em:
```
https://SEU-USERNAME.github.io/healthtrackfree/
```

## 📁 Estrutura de Ficheiros

```
healthtrackfree-site/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript
├── screenshots/        # Imagens da app (12 screenshots)
│   ├── shot1.jpg
│   ├── shot2.jpg
│   └── ...
└── README.md          # Este ficheiro
```

## 🌍 Funcionalidades

- ✅ Design moderno Material Design 3
- ✅ 100% responsive (mobile, tablet, desktop)
- ✅ Bilíngue (Português/Inglês)
- ✅ Carousel de screenshots
- ✅ FAQ com accordion
- ✅ Zero dependências externas
- ✅ Performance otimizada

## 🎨 Cores

- Primary: #2E7D32 (Verde)
- Accent: #FF6F00 (Laranja)
- Background: #FAFAFA

## 📝 Customização

Para alterar conteúdo:
1. Edita `index.html` - textos em português e inglês (atributos `data-pt` e `data-en`)
2. Edita `style.css` - cores e estilos
3. Edita `script.js` - funcionalidades JavaScript

## 🔗 Links Importantes

- Google Play Store: https://play.google.com/store/apps/details?id=com.ruifelix.healthtrackfree
- Email de contacto: ruifelix.dev@gmail.com

---

Desenvolvido por Rui Félix
