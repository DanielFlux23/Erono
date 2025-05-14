//import {ctx} from '/src/scenes/game.js';
import {
  Sprite,
  Ambiente,
  Render,
  ctx
} 
  from '/src/engine/index.js';
const floresta = new Ambiente({
  nome: 'floresta',
  fundo: 'imagemExemplo.png',
  som: 'audio.mp3',
  ctx: ctx,
  classeSprite: Sprite
})

const arvores = floresta.createObjetos({
  type: 'arvore',
  dimensions: {
    height: 32,
    width: 64,
  },
  imgSrc: '/imagens/Untitled_erono_720_720.png',
})

//console.log(arvores)

 let t = arvores.render([
  { x: 180, y: 170, id: 'tree1' },
 { x: 59, y: 50, id: 'tree2' },
]);
console.log(t)
console.log(t[0].drawImage)
console.log(t[0].drawImage())
console.log(t[1].drawImage())
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