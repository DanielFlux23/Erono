// Sprite
class Sprite {
  constructor({ position, dimensions, imgSrc }) {
    this.position = position;
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.img = new Image();
    this.img.src = imgSrc;
  }
  
  draw() {
    ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
  }
}

const personagem = new Sprite({
  position: { x: 170, y: 180 },
  dimensions: { width: player.width, height: player.height },
  imgSrc: "/imagens/Miguel_erono.png"
});

const modox = new Sprite({
  position: { x: 1024, y: 190 },
  dimensions: { width: player.width, height: player.height },
  imgSrc: "/imagens/Untitled_erono_720_720.png"
});

// Lógica de movimento
function update() {
  if (keys.w) player.y -= config.playerSpeed;
  if (keys.s) player.y += config.playerSpeed;
  if (keys.a) player.x -= config.playerSpeed;
  if (keys.d) player.x += config.playerSpeed;
  
  // Simula gravidade
  if (player.y <= 50) {
    player.y += config.gravidade;
  } else if (player.y < 50) {
    player.y += config.chao;
  }
}
