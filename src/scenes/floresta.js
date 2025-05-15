import {
  ImageCache,
  Ambiente,
  Sprite,
} from '/src/engine/index.js';

import createInputSystem from '/src/engine/input.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const input = createInputSystem();

const player = {
  x: 50,
  y: 50,
  width: 40,
  height: 40,
  speed: 4
};

const config = {
  gravidade: 2,
  chao: 4,
};

function updatie() {
  const speed = player.speed;
  
  if (input.isPressed('w')) player.y += speed * 16;
  if (input.isDown('s')) player.y -= speed;
  if (input.isDown('a')) player.x += speed;
  if (input.isDown('d')) player.x -= speed;
  
  input.update(); // limpa o estado de pressionado
}


// Config global para sprites
const spriteConfig = {
  dimensions: { width: 32, height: 32 },
  imgSrc: '/imagens/arvore_erono.png',
};

// Posições dos objetos
const posicoes = [
  { x: 100, y: 265, id: 'obj1' },
  { x: 200, y: 265, id: 'obj2' },
  { x: 300, y: 265, id: 'obj3' },
];

// Ambiente
const floresta = new Ambiente({
  nome: 'Floresta',
  fundo: '/imagens/plano-de-fundo-do-jogo-de-pixel-com-ceu-de-grama-aderecos-e-personagem_148553-371.jpg',
  som: '/audios/ERONO_MUSICA_2.wav',
  ctx,
  classeSprite: Sprite,
});

floresta.tocarSom();

const objetos = floresta.createObjetos(spriteConfig);
objetos.render(posicoes);

const necroorgon = floresta.createEntidade({
  position: { x: 170, y: 265 },
  dimensions: { width: 32, height: 32 },
  imgSrc: '/imagens/Miguel_erono.png',
  ctx,
  id: 'necroorgon',
});

function update() {
  const speed = player.speed;
  
  if (input.isPressed('w')) player.y += speed * 16;
  if (input.isDown('s')) player.y -= speed;
  if (input.isDown('a')) player.x += speed;
  if (input.isDown('d')) player.x -= speed;
  
  input.update();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Exemplo: mover objetos com base no player.x (tipo câmera 2D burra)
  const posicoesAtualizadas = posicoes.map(obj => ({
    ...obj,
    x: obj.x - player.x + 50, // "+50" pra manter visível
  }));
  
  objetos.render(posicoesAtualizadas);
  necroorgon.draw();
  
  // Render player como um retângulo por enquanto
  //ctx.fillStyle = 'red';
  //ctx.fillRect(player.x, player.y, player.width, player.height);
}

function renderLoop() {
  update();
  draw();
  requestAnimationFrame(renderLoop);
}

renderLoop();