import {
  ImageCache,
  Ambiente,
  Sprite,
} from '/src/engine/index.js';

import createInputSystem from '/src/engine/input.js';
let musicaPrincipal = true
  const musica = new Audio("/audios/ERONO_MUSICA_2.wav");
  musica.loop = true;
  
  const musica_sus = new Audio("/audios/erono_musica_suspense.mp3");
musica_sus.loop = true;
 
document.getElementById("startGame").addEventListener("click", () => {
  if (musicaPrincipal) {
  musica.play();
  }else{
    musica.pause()
}
  // iniciar o jogo aqui
  document.getElementById("startGame").style.display = "none";
});

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const input = createInputSystem();

const player = {
  x: 50,
  y: 7,
  width: 40,
  height: 40,
  speed: 3
};

const config = {
  gravidade: 2,
  chao: 4,
};

function updatie() {
  const speed = player.speed;
  
  if (input.isPressed('w')) player.y += speed * 16;
  if (input.isDown('s')) player.y += speed;
  if (input.isDown('a')) player.x -= speed;
  if (input.isDown('d')) player.x += speed;
  
  input.update(); // limpa o estado de pressionado
}


// Config global para sprites
const spriteConfig = {
  dimensions: { width: 40, height: 40 },
  imgSrc: '/imagens/arvore_erono.png',
};

// Posições dos objetos
const posicoes = [
  // Primeiro agrupamento (pico de densidade)
  { x: 45, y: 255, id: 'tree_0' },
  { x: 60, y: 255, id: 'tree_1' },
  { x: 75, y: 255, id: 'tree_2' },
  { x: 90, y: 255, id: 'tree_3' },
  { x: 105, y: 255, id: 'tree_4' },
  
  // Espaço vazio
  { x: 220, y: 255, id: 'tree_5' },
  
  // Agrupamento médio
  { x: 255, y: 255, id: 'tree_6' },
  { x: 285, y: 255, id: 'tree_7' },
  { x: 310, y: 255, id: 'tree_8' },
  
  // Outro buraco
  { x: 450, y: 255, id: 'tree_9' },
  
  // Pico maior
  { x: 500, y: 255, id: 'tree_10' },
  { x: 515, y: 255, id: 'tree_11' },
  { x: 528, y: 255, id: 'tree_12' },
  { x: 540, y: 255, id: 'tree_13' },
  { x: 555, y: 255, id: 'tree_14' },
  { x: 570, y: 255, id: 'tree_15' },
  { x: 585, y: 255, id: 'tree_16' },
  { x: 600, y: 255, id: 'tree_17' },
  
  // Espaço grande
  { x: 800, y: 255, id: 'tree_18' },
  
  // Agrupamento pequeno
  { x: 840, y: 255, id: 'tree_19' },
  { x: 865, y: 255, id: 'tree_20' },
  
  // Final isolado
  { x: 1000, y: 255, id: 'tree_21' }
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
///imagens/floresta/misterio_erono.png
const necroorgon = floresta.createEntidade({
  position: { x: 170, y: 255},
  dimensions: { width: 40, height: 40 },
  imgSrc: '/imagens/Miguel_erono.png',
  ctx,
  id: 'necroorgon',
});

const misterio = floresta.createEntidade({
  position: { x: 1200, y: 255 },
  dimensions: { width: 40, height: 40 },
  imgSrc: '/imagens/floresta/misterio_erono.png',
  ctx,
  id: 'misterio',
});

const positionMisterio = { x: 1200, y: 255 };

function update() {
  const speed = player.speed;
  
  if (input.isPressed('w')) player.y -= speed * 16;
  if (input.isDown('s')) player.y += speed;
  if (input.isDown('a')) player.x -= speed;
  if (input.isDown('d')) player.x += speed;
  
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
  misterio.x=positionMisterio.x  - player.x+50
  if (misterio.x<384) {
    musicaPrincipal=false
    musica.pause()
    musica_sus.play()
  } else {
    musica.play();
    musica_sus.pause()
  }
  misterio.draw()
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