//import {ctx} from '/src/scenes/game.js';
import {
  ImageCache,
  Ambiente,
  Sprite,
}
from '/src/engine/index.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Config global para todos os sprites do ambiente
const configGlobal = {
  dimensions: { width: 32, height: 32 },
  imgSrc: '/imagens/arvore_erono.png', // Substitui pelo caminho real
};

// Lista de posições dos objetos que serão desenhados
const listaPosicoes = [
  { x: 100, y: 265, id: 'obj1' },
  { x: 200, y: 265, id: 'obj2' },
  { x: 300, y: 265, id: 'obj3' },
];

// Criando o ambiente
const floresta = new Ambiente({
  nome: 'Floresta',
  fundo: '/imagens/plano-de-fundo-do-jogo-de-pixel-com-ceu-de-grama-aderecos-e-personagem_148553-371.jpg', // pode usar como plano de fundo se quiser
  som: null, // adiciona som se quiser
  ctx,
  classeSprite: Sprite,
});

// Criando objetos e renderizando
const objetosAmbiente = floresta.createObjetos(configGlobal);
objetosAmbiente.render(listaPosicoes);

const necroorgon = floresta.createEntidade({
  position: { x: 170, y: 265 },
  dimensions: {
    height: 32,
    width: 32
  },
  imgSrc: "/imagens/Miguel_erono.png",
  ctx: ctx,
  id: 'necroorgon'
});

let num = 0
// Se quiser fazer isso em loop (e com verificação de carregamento de imagens):
function renderLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  listaPosicoes[2].x--
  objetosAmbiente.render(listaPosicoes); // você pode armazenar os objetos e evitar recriar sempre
  necroorgon.draw();
  requestAnimationFrame(renderLoop);
}

// Ativa o loop de render (opcional)
renderLoop();