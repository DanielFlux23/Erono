import {Ntyle} from '/css/ntyle.js';
const nty = new Ntyle();

nty.ntyle({
  paleta: { principal: '#425A51', secundario: 'black' },
  debug: console.log
});

nty.add('css',{
//  padding:'10px, 20px',
  background:'red'
})
.$('button',['css']);

