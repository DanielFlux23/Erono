let usuario = {
  nome: '',
  vida: 50,
  dano: 15,
  defesa: 10,
  agilidade: 20,
  dinheiro: 100,
  itens: [],
  namoros: [],
  endereco:'florestaNegra', 
  interagindo: 'herodes',
  treinamento: 0, //%
  chame: 1,
}

let personagens = {
  vento: {
    tipo: 'passivo',
    personalidade: 'inocente',
    vida: 0,
    dano: 0,
    resistenciaAoAmor: 0,
  },
  modox: {
    tipo: 'passivo',
    personalidade: 'atacante/inocente',
    vida: 40,
    dano: 20,
    resistenciaAoAmor: 3,
  },

  herodes: {
    tipo: 'inimigo',
    personalidade: 'cruel',
    vida: 10000,
    dano: usuario.vida - 1, //vida do usuário menos um
    resistenciaAoAmor: 10000,
    informacoes: 'Herodes é muito forte caso você não tenha força o suficiente a melhor escolha',
  },

  antonio: {
    tipo: 'passivo',
    personalidade: 'humildade/folgado',
    vida: 200,
    dano: 1,
    resistenciaAoAmor: 10,
  },
  jose: {
    tipo: 'passivo',
    personalidade: 'calmo',
    vida: 150,
    dano: 25,
    resistenciaAoAmor: 7,
  },

  julia: {
    tipo: 'passivo',
    personalidade: 'inteligente',
    vida: 250,
    dano: 15,
    resistenciaAoAmor: 100,
  },
  misterio: {
    tipo: '??',
    personalidade: 'misterioso',
    vida: 500,
    dano: 15,
    resistenciaAoAmor: 0,
  },
  alien: {
    tipo: 'inimigo',
    personalidade: 'narcisista',
    vida: 700,
    dano: 0,
    //ataque do usuário diminui implementar no futuro
    resistenciaAoAmor: 20,
  },
  oraculo: {
    tipo: '??', //inimigo oculto
    personalidade: 'manipulador',
    vida: 1000,
    dano: 5,
    //ataque do usuário diminui implementar no futuro
    resistenciaAoAmor: 25,
  },
  rainha: {
    tipo: '??', //inimigo oculto
    personalidade: 'manipulador',
    vida: 400,
    dano: 50,
    //ataque do usuário diminui implementar no futuro
    resistenciaAoAmor: 25,
  },

  rei: {
    tipo: '??', //inimigo oculto
    personalidade: 'manipulador',
    vida: 450,
    dano: 5,
    //ataque do usuário diminui implementar no futuro
    resistenciaAoAmor: 25,
  },
  necroorgon: {
    tipo: 'inimigo',
    personalidade: 'calmo',
    vida: 2304,
    dano: usuario.vida * 2, //vida do usuário vezes 2
    resistenciaAoAmor: 2304,
    informacoes: 'necroorgon diferente de Herodes que era burro, é muito perigoso capaz de criar presentes gregos com sabor âmago',
  },
};


let items = {
  escudo: {
    funcao: () => a,
    descricao: 'um escudo que te defende de ataques'
  },

  espada: {
    funcao: (dano, desgastante = 1) => config.dano = dano / desgastante,
    descricao: 'um espada ótima para ataques'
  }
}


let lugares = {
  florestaNegra: {},
  noaepi: {
    mercearia: {
      compras: [items.escudo, items.espada],
      descricao: 'Na mercearia você pode comprar itens para as batalhas'
    }
  }
}
