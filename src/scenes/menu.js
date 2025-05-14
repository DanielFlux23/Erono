import {href} from '/src/utils/utils.js';

const game = new TitanDOM({
});

game.evento('#play_menu','click',() =>{
  game.anime('#logo_erono',{
  props: [{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }],
  duration: 500
  })
setTimeout(() => {},4000)
href('/pages/game.html')
  
});

game.evento('#opcoes_menu','click',() => href('/pages/opcoes.html') )
game.evento('#creditos_menu','click',() => href('/pages/creditos.html'))