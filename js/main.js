import { App } from '/js/app.js';

const inputs = new Pop({
  atacar: () => '<button>atacar</button>',
  defender:() => `<button>defender</button>`,
})

let text = '';
const saida = new Pop({
  messagem:() => text
})

let textoTela = `hello word`;
const game = new Pop({
    telaGame: () => `<div>${textoTela}</div>`,
    controles: () => {
    inputs.init(['atacar','defender']);
    inputs.evento('#atacar', 'click', () => {text='voce atacou';saida.init(['messagem'])})
    
    return ''
  }
})

App.init(["titulo", "play", "opcoes", "creditos"])

App.evento('#play', 'click', () => {
  App.remover('play')
  App.remover('opcoes')
  App.remover('creditos')
  game.show()
  
});

App.evento('#opcoes', 'click', () => {
  alert('laura feia')
  
})