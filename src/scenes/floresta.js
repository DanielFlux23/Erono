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
  dimensions: { width: 64, height: 64 },
  imgSrc: '/imagens/Untitled_erono_720_720.png', // Substitui pelo caminho real
};

// Lista de posições dos objetos que serão desenhados
const listaPosicoes = [
  { x: 100, y: 100, id: 'obj1' },
  { x: 200, y: 150, id: 'obj2' },
  { x: 300, y: 200, id: 'obj3' },
];

// Criando o ambiente
const ambiente = new Ambiente({
  nome: 'Floresta',
  fundo: 'path/to/bg.jpg', // pode usar como plano de fundo se quiser
  som: null, // adiciona som se quiser
  ctx,
  classeSprite: Sprite,
});

// Criando objetos e renderizando
const objetosAmbiente = ambiente.createObjetos(configGlobal);
objetosAmbiente.render(listaPosicoes);

// Se quiser fazer isso em loop (e com verificação de carregamento de imagens):
function renderLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  objetosAmbiente.render(listaPosicoes); // você pode armazenar os objetos e evitar recriar sempre
  requestAnimationFrame(renderLoop);
}

// Ativa o loop de render (opcional)
renderLoop();
/*const floresta = new Ambiente({
  nome: 'floresta',
  fundo: 'imagemExemplo.png',
  som: 'audio.mp3',
  ctx: ctx,
  classeSprite: Sprite
})

const arvores = floresta.createObjetos({
  type: 'arvore',
  dimensions: { height: 32, width: 34 },
  imgSrc: '/imagens/arvore_erono.png',
});

arvores.render([
  { x: 50, y: 100, id: 'tree1' },
  { x: 120, y: 110, id: 'tree2' },
  { x: 190, y: 90, id: 'tree3' },
  { x: 260, y: 105, id: 'tree4' },
  { x: 330, y: 98, id: 'tree5' },
  { x: 400, y: 115, id: 'tree6' },
  { x: 470, y: 100, id: 'tree7' },
  { x: 540, y: 110, id: 'tree8' },
  { x: 610, y: 95, id: 'tree9' },
]);
/*
let teste = 0

function draw() {
//  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  teste++
  */
  
/*}
draw()*/

/*function gameLoop() {
  //draw();
  requestAnimationFrame(gameLoop);
}


gameLoop();*/
/*console.log(t.drawImage())
console.log(t.drawImage)

console.log(t)*/
/*const necroorgon = floresta.createEntidade({
  position: {
    x: 170,
    y: 180
  },
  dimensions: {
    height: player.height,
    width: player.width,
  },
  imgSrc: "/imagens/Miguel_erono.png", //"/imagens/b60c5aab0337d42ecba9ad900dbd9725.jpg"
  ctx: ctx
})


console.log(floresta)*/