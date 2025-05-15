export const ImageCache = (() => {
  const cache = new Map();
  
  return {
    load(src) {
      if (cache.has(src)) return cache.get(src);
      
      const img = new Image();
      const entry = { img, loaded: false };
      
      img.onload = () => entry.loaded = true;
      img.src = src;
      
      cache.set(src, entry);
      return entry;
    },
    get(src) {
      return cache.get(src);
    }
  };
})();

export class Sprite {
  constructor({ x = 0, y = 0, id = '', width, height, imgSrc, ctx }) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    
    const cached = ImageCache.load(imgSrc);
    this.img = cached.img;
    this.imgLoadedRef = cached;
  }
  
  draw() {
    if (this.imgLoadedRef.loaded) {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }
}

export class Ambiente {
  constructor({ nome, fundo, som, ctx, classeSprite }) {
    Object.assign(this, { nome, fundo, som, ctx, classeSprite });
  }

  createObjetos(configGlobal) {
    const objetos = [];

    return {
      render: (listaPosicoes) => {
        objetos.length = 0;

        listaPosicoes.forEach(({ x, y, id }) => {
          const sprite = new this.classeSprite({
            x, y, id,
            width: configGlobal.dimensions.width,
            height: configGlobal.dimensions.height,
            imgSrc: configGlobal.imgSrc,
            ctx: this.ctx,
          });

          objetos.push(sprite);
          sprite.draw();
        });
      }
    };
  }
  
  createEntidade({ position, dimensions, imgSrc, ctx, id = '' }) {
  const entidade = new this.classeSprite({
    x: position.x,
    y: position.y,
    id,
    width: dimensions.width,
    height: dimensions.height,
    imgSrc,
    ctx: ctx || this.ctx,
  });
  
  return entidade;
}
}

class Velocity {
  constructor(dx = 0, dy = 0) {
    this.dx = dx;
    this.dy = dy;
  }
}