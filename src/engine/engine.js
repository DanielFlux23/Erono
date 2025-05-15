export const ImageCache = (() => {
  const cache = {};
  return {
    load(src) {
      if (cache[src]) return cache[src];
      const img = new Image();
      img.src = src;
      cache[src] = img;
      return img;
    },
    get(src) {
      return cache[src];
    }
  };
})();

export class Ambiente {
  constructor({ nome, fundo, som, ctx, classeSprite }) {
    this.nome = nome;
    this.fundo = fundo;
    this.som = som;
    this.ctx = ctx;
    this.classeSprite = classeSprite;
    this.objetos = [];
  }
  
  createObjetos(configGlobal, listaPosicoes) {
    listaPosicoes.forEach(({ x, y, id }) => {
      const sprite = new this.classeSprite({
        x,
        y,
        id,
        width: configGlobal.dimensions.width,
        height: configGlobal.dimensions.height,
        imgSrc: configGlobal.imgSrc,
        ctx: this.ctx,
      });
      this.objetos.push(sprite);
    });
    
    return {
      render: () => {
        this.objetos.forEach(sprite => sprite.draw());
      }
    };
  }
}

export class Sprite {
  constructor({ x, y, id, width, height, imgSrc, ctx }) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.width = width;
    this.height = height;
    this.img = new Image();//ImageCache.load(imgSrc);
    this.img.src = imgSrc;
    this.ctx = ctx;
  }
  
  draw() {
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }
}

class Velocity {
  constructor(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
}