 class Modal {
  constructor({ conteudo = '', close={text:'<', color:'gray'}, botoes = [], backdrop = true, background='white'}) {
    this.modal = document.createElement('dialog');
    this.background = background;
    this.closeButton = this.criarBotao(close.text, this.fechar.bind(this), close.color);

    this.conteudoWrapper = document.createElement('div');
    this.conteudoWrapper.innerHTML = conteudo;

    this.botoes = botoes.map(({ nome, callback }) => this.criarBotao(nome, callback));

    this.backdrop = backdrop;
    this.init();
  }

  init() {
    this.modal.style.background = this.background;
    this.modal.appendChild(this.conteudoWrapper);
    this.modal.appendChild(this.closeButton);

    this.botoes.forEach(botao => this.modal.appendChild(botao));
    document.body.appendChild(this.modal);
  }

  criarBotao(nome, callback, color) {
    const botao = document.createElement('button');
    botao.textContent = nome;
    if(color) botao.style.background =color;
    botao.addEventListener('click', callback);
    return botao;
  }

  abrir() {
    if (this.backdrop) this.modal.showModal();
    else this.modal.show();

  }

  fechar() {
    this.modal.close();
  }
}
