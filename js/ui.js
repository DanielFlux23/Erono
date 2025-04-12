const pop = new Pop({
  "tela-inicial": () => `
    <button class="começo" id="btn-comecar" onclick="mostraTelaPrincipal()">Começar</button>
    <button class="começo" onclick="opções()">Opções</button>
    <button class="começo" onclick="referências()" id="btn-referencias">Referências</button>
  `,
  
  "opções": () => `
    <label for="frase">Digite seu nome</label>
    <input type="text" id="MeuNome" onclick="verificarnome()">
    <p class="estilo" id="resposta"></p>
    <button class="começo" onclick="fácil()">fácil</button>
    <button class="começo" onclick="normal()">normal</button>
    <button class="começo" onclick="difícil()">difícil</button>
    <button class="começo">💳</button>
    <button class="começo" onclick="tutorial()">tutorial</button>
    <div id="tutorial">
      <p>ok = próximo ou confirmação</p>
      <p>não = negação</p>
      <p>atacar = atacar o inimigo</p>
      <p>defender = se defender dos ataques</p>
      <p>fugir = tentar fugir da batalha</p>
      <p>fletar = paquera, elogiar, etc.</p>
      <p>informações = informações do jogador</p>
      <p>treinar = aumentar a vida e força</p>
    </div>
    <button class="começo" onclick="computer()">computer</button>
  `,
  
  "telaprincipal": () => `
    <div id="conversation">
      <div class="texto" id="histories" onclick="verificarnome()"></div>
    </div>
    <div id="options">
      <button class="principal" onclick="okk()">ok✔</button>
      <button class="principal" onclick="cancelar()">não❌</button>
      <button class="principal" onclick="atacar()">Atacar💥</button>
      <button class="principal" onclick="defender()">Defender✴</button>
      <button class="principal" onclick="fugir()">Fugir🏃</button>
      <button class="principal" onclick="fletar()">fletar❤</button>
      <button class="principal" onclick="informações()">informações🔎</button>
      <button class="principal" onclick="funçãoemdesenvolvimento()">treinar🎽</button>
    </div>
  `,
  
  "quiz": () => `
    <div id="teste1">
      <h1>2+2</h1>
      <button onclick="certo()" class="começo">4</button>
      <button class="começo">22</button>
    </div>
    <div id="teste2">
      <h1>8+8−8×8÷8</h1>
      <button onclick="certo()" class="começo">8+8-8</button>
      <button class="começo">8+8</button>
    </div>
    <div id="teste3">
      <h1>notas musicais</h1>
      <button class="começo">5</button>
      <button onclick="certo()" class="começo">7</button>
    </div>
    <div id="teste4">
      <h1>.-/--.-/..-/..</h1>
      <button onclick="certo()" class="começo">aqui</button>
      <button class="começo">não aqui</button>
    </div>
    <div id="teste5">
      <h1>qual é a forma da água</h1>
      <button class="começo">H2O</button>
      <button onclick="certo()" class="começo">líquida</button>
    </div>
  `,
  
  "gamer": () => `
    <h1><strong>GAMER OVER kkkk</strong></h1>
    <button onclick="reviver()" class="começo">reviver</button>
  `,
  
  "erro": () => `
    <h3><strong>ERRO:[23] JavaScript não está funcionando. Tente abrir de outra forma ou ative o JS.</strong></h3>
  `
}, 'initPop');

// Exemplo de uso:
pop.init(["tela-inicial"]); // mostra a tela inicial