import {App} from '/js/app.js';

const inputs = new Pop({
  atacar:() => '<button>atacar</button>',
  mesagemAtacar:() => `voce atacou!`
})

let textoTela = `hello word`;
const game = new Pop({
  telaGame:()=> `<canvas>${textoTela}</canvas>`,
 controles:() => {inputs.init(['atacar']);
inputs.evento('#atacar', 'click', () => inputs.init(['mesagemAtacar']))
   return ''
 }
})

App.init(["titulo", "play", "opcoes", "creditos"])

App.evento('#play', 'click', () => {
  App.remover('play')
  App.remover('opcoes')
  App.remover('creditos')
 game.show()
  
})