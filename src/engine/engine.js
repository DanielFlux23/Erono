export class Ambiente {
  constructor({
    nome,
    fundo,
    som,
    ctx,
    classeSprite
  }) {
    this.nome = nome;
    this.fundo = fundo;
    this.som = som;
    this.ctx = ctx;
    this.classeSprite = classeSprite;
    this.objetos = {};
  }
  
  createObjetos(configObjeto) {
   // this.ctx.drawImage(arvores, offset + player.x, player.y + 130, player.width, player.height);
    
   const funcoes = {
    render:(objetos) => {
      let spriteObjetos = [];
      for (let i = 0; i < objetos.length; i++) {
        // Tab to edit
        configObjeto.ctx = this.ctx;
        configObjeto.position = {x:objetos[i].x, y:objetos[i].y};
        spriteObjetos.push(new this.classeSprite(configObjeto));
       }
       
       return spriteObjetos
     }
   }
  
    return funcoes;
  }
  
  createEntidade(configEntidade) {
    configEntidade.ctx = this.ctx;
    return new this.classeSprite(configEntidade);
  }
}

const ImageCache = (() => {
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