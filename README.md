# Galdev Agency

Este é um projeto de estudo em Vanilla JavaScript, HTML e CSS, focado na criação de uma landing page para uma agência de desenvolvimento criativo chamada **Galdev Agency**. O objetivo do projeto é explorar animações avançadas de scroll e a integração de elementos 3D na web.

## 🚀 Tecnologias Utilizadas

- **HTML5 & CSS3**: Estrutura e estilização (Vanilla), utilizando `mix-blend-mode`, variáveis CSS, fontes customizadas (`Clash Display` e `Inter`) e layouts responsivos.
- **JavaScript (Vanilla)**: Lógica da aplicação.
- **GSAP (GreenSock Animation Platform)**:
  - `ScrollTrigger`: Para animações baseadas no scroll da página.
  - `ScrollSmoother`: Para uma experiência de rolagem suave.
  - `SplitText`: Para revelar textos e caracteres de forma animada.
- **Three.js**: Biblioteca JavaScript 3D para renderizar um modelo de diamante na tela, interagindo com o scroll.

## ✨ Funcionalidades e Animações

- **Hero Section**: Introdução com vídeos de fundo operando no background de forma sutil, combinando perfeitamente com a estética dark-mode.
- **Animações de Scroll (GSAP)**:
  - Transições de elementos retangulares em cascata (`stagger`).
  - Letras e palavras surgindo dinamicamente pela página.
- **Integração WebGL/Three.js**:
  - Renderização de um objeto 3D interativo (Diamante `.glb`).
  - Iluminação baseada em imagem (HDRI) para os reflexos do material do diamante.
  - O diamante reage ao scroll da página (rotação e movimento com integração do `ScrollTrigger`).

## 📁 Estrutura do Projeto

- `index.html`: Layout da página.
- `style.css`: Toda a estilização.
- `script.js`: Toda a parte lógica, configuração do GSAP e a cena 3D construída no Three.js.
- `public/`: Contém os assets, como modelagem 3D (`.glb`), imagens baseadas no ambiente para luz (`.webp`), vídeos curtos de background e ícones.

## 💻 Como Rodar o Projeto

1. Faça o clone ou o download do projeto.
2. Como o projeto usa um modelo 3D carregado via Javascript (`three/addons/loaders/GLTFLoader.js`), você precisa rodar um **Servidor Local** (devido às políticas de CORS dos navegadores para leitura de arquivos).
   - Você pode usar a extensão **Live Server** no VS Code.
   - Ou usar o python: `python3 -m http.server 8000`.
3. Abra `http://localhost:8000` ou a porta designada pelo Live Server em seu navegador.
