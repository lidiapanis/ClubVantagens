const aplicacao = new Vue({
    el: '#app',
    data: {
      nomeEmpresa: "Cineart",
      colecaoProcedimentos: [
        { id: 1, nome: 'Cadastro', descricao: "Ganhe 50 pontos ao se cadastrar no club"},
        { id: 2, nome: 'Pontue em compras', descricao: "Ganhe 10 pontos por ingresso para sessões 2D e 3D e 20 pontos por ingresso para sessões Imax e Premiere*"},
        { id: 3, nome: 'Promoções de pontuação extra', descricao: "Ganhe pontos extras participando de aceleradores sazonais"},
      ],
      colecaoNiveis: [
        { id: 1, nivel: "1º nível - Prata", descricao1: "Combo prata", descricao2: "Desconto em ingresso inteira*", descricao3: "Ingresso de aniversário", descricao4:"Ingresso gratis a cada 200 pontos" },
        { id: 2, nivel: "2º nível - Ouro", descricao1: "Combo ouro", descricao2: "Desconto em ingresso inteira*", descricao3: "Ingresso e combo de aniversário", descricao4:"Ingresso gratis a cada 200 pontos" },
        { id: 3, nivel: "3º nível - Diamante", descricao1: "Combo diamante", descricao2: "Desconto em ingresso inteira", descricao3:"Ingressos e combo de aniversário", descricao4:"Ingresso gratis a cada 200 pontos" },
      ],
    }
  });