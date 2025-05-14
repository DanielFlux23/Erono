export const canvas = document.getElementById("game");
export const ctx = canvas.getContext("2d");

import createInputSystem from '/src/engine/input.js';

export const input = createInputSystem(); // inicia o sistema

export function update(player) {
  // Movimento contínuo
  if (input.isPressed('w')) {
    player.y += player.speed * 16;
  }
  if (input.isDown('s')) player.y -= player.speed;
  if (input.isDown('a')) player.x += player.speed;
  if (input.isDown('d')) player.x -= player.speed;
  
  // Pressionados no frame atual
  //f (input.isPressed('w')) console.log("Pressionou cima!");
  
  input.update(); // Limpa as teclas pressionadas nesse frame
}

export class Render {
  constructor() {
    this.prop = ""
  }
  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (player.y <= 50) {
      player.y = player.y + config.gravidade;
    }
    if (player.y < 50) {
      player.y = player.y + config.chao;
    }
    player.y = player.y - config.gravidade;
    t[0].drawImage()
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
  
  gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
  }
}

