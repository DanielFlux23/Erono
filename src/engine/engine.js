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

    // Carrega imagem de fundo se for string (caminho)
    if (typeof this.fundo === 'string') {
      const fundoCache = ImageCache.load(this.fundo);
      this.fundoImg = fundoCache.img;
      this.fundoCarregado = fundoCache;
    }

    // Prepara som
    if (this.som) {
      this.audio = new Audio(this.som);
      this.audio.loop = true;
    }
  }

  tocarSom() {
    if (this.audio) {
      this.audio.play().catch(err => {
        console.warn('Falha ao tocar áudio:', err);
      });
    }
  }

  pararSom() {
    if (this.audio) this.audio.pause();
  }

  desenharFundo() {
    if (this.fundoCarregado?.loaded) {
      this.ctx.drawImage(this.fundoImg, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    } else if (!this.fundoImg && typeof this.fundo === 'string') {
      // se for uma cor como fundo
      this.ctx.fillStyle = this.fundo;
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }

  createEntidade({ position, dimensions, imgSrc, ctx, id = '' }) {
    return new this.classeSprite({
      x: position.x,
      y: position.y,
      id,
      width: dimensions.width,
      height: dimensions.height,
      imgSrc,
      ctx: ctx || this.ctx,
    });
  }

  createObjetos(configGlobal) {
    const objetos = [];

    return {
      render: (listaPosicoes) => {
        objetos.length = 0;

        // Desenha fundo antes dos objetos
        this.desenharFundo();

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
}

class Velocity {
  constructor(dx = 0, dy = 0) {
    this.dx = dx;
    this.dy = dy;
  }
}

export class Position {
  constructor(x=0,y=0) {
    this.x = x;
    this.y = y;
  }
}