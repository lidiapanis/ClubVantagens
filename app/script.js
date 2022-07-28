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
        { id: 1, nivel: "1º nível - Prata", descricao: "Combo prata, Desconto de 50% em ingresso inteira, ingresso de aniversário, ingresso gratis a cada 200 pontos" },
        { id: 2, nivel: "2º nível - Ouro", descricao: "Combo ouro, desconto de 50% em ingresso inteira, ingresso e combo de aniversário, ingresso gratis a cada 200 pontos" },
        { id: 3, nivel: "3º nível - Diamante", descricao: "Combo diamante, desconto de 50% em ingresso inteira, ingressos e combo de aniversário, ingresso gratis a cada 200 pontos" },
      ],
    }
  });