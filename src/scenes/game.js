const game = new TitanDOM({});

const canvas = document.getElementById("game");
export const ctx = canvas.getContext("2d");

import createInputSystem from '/src/engine/input.js'; // supondo que você salvou o sistema em input.js
import {Sprite} from '/src/engine/Sprite.js';

const input = createInputSystem(); // inicia o sistema

// Posição e velocidade do personagem
const player = {
  x: 50,
  y: 50,
  width: 40,
  height: 40,
  speed: 4
};

let config = {
  gravidade: 2,
  chao: 4,
  
}
// Carrega a imagem do personagem
const arvore = new Image();
arvore.src = "/imagens/arvore_erono.png";

function update() {
  // Movimento contínuo
  if (input.isPressed('w')) {
    player.y += player.speed*16;
  }
  if (input.isDown('s')) player.y -= player.speed;
  if (input.isDown('a')) player.x += player.speed;
  if (input.isDown('d')) player.x -= player.speed;
  
  // Pressionados no frame atual
  //f (input.isPressed('w')) console.log("Pressionou cima!");
  
  input.update(); // Limpa as teclas pressionadas nesse frame
}



const personagem = new Sprite({
  position: {
    x: 170,
    y: 180
  },
  dimensions: {
    height: player.height,
    width: player.width,
  },
  imgSrc: "/imagens/Miguel_erono.png", //"/imagens/b60c5aab0337d42ecba9ad900dbd9725.jpg"
  ctx:ctx
})

const modox = new Sprite({
  position: {
    x: 1024,
    y: 190
  },
  dimensions: {
    height: player.height,
    width: player.width,
  },
  imgSrc: "/imagens/Untitled_erono_720_720.png",
  ctx:ctx
})



function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (player.y <= 50) {
    player.y = player.y + config.gravidade;
  }
  if (player.y < 50) {
    player.y = player.y + config.chao;
  }
  player.y = player.y - config.gravidade;
  // t[0].drawImage()
 personagem.drawImage()
  modox.drawImage()
  modox.position.x = 1024 + player.x
  modox.position.y = player.y + 130
  // Árvores
  const treeOffsets = [300, 400, 600, 700, 892, 1083];
  for (let offset of treeOffsets) {
    ctx.drawImage(arvore, offset + player.x, player.y + 130, player.width, player.height);
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Só inicia o loop depois que a imagem carregar
//img.onload = () => {
gameLoop();
//};
