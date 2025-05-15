//import {ctx} from '/src/scenes/game.js';
import {
  ImageCache,
  Ambiente,
  Sprite,
}
from '/src/engine/index.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const floresta = new Ambiente({
  nome: 'floresta',
  fundo: 'imagemExemplo.png',
  som: 'audio.mp3',
  ctx: ctx,
  classeSprite: Sprite
})

const arvores = floresta.createObjetos(
  {
    type: 'arvore',
    dimensions: {
      height: 32,
      width: 34,
    },
    imgSrc: '/imagens/arvore_erono.png',
  },
  [
    { x: 50, y: 100, id: 'tree1' },
    { x: 120, y: 110, id: 'tree2' },
    { x: 190, y: 90, id: 'tree3' },
    { x: 260, y: 105, id: 'tree4' },
    { x: 330, y: 98, id: 'tree5' },
    { x: 400, y: 115, id: 'tree6' },
    { x: 470, y: 100, id: 'tree7' },
    { x: 540, y: 110, id: 'tree8' },
    { x: 610, y: 95, id: 'tree9' },
  ]
);


arvores.render(); // Se for função válida


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