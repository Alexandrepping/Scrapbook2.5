let recados = [
  {
    titulo: "",
    mensagem: "",
  },
];
document.getElementById("messageTitle").focus();
function geraRecado() {
  // let scrapsfield = document.getElementById("scrapsfield");

  let tituloRecado = document.getElementById("messageTitle").value; //aqui tá pegando o valor escrito no titulo
  let mensagemRecado = document.getElementById("messageBody").value; //aqui tá pegando o valor escrito no textArea

  if (tituloRecado == "") {
    alert("Preencha o campo título");
    document.getElementById("messageTitle").focus();
    return false;
  } else if (mensagemRecado == "") {
    alert("Preencha o campo mensagem");

    document.getElementById("messageBody").focus();
    return false;
  } else {
    for (let i = 0; i < recados.length; i++) {
      scrapsfield.innerHTML += // aqui cria os card no HTML para depois por as mensagens
        '<div class="card text-white bg-success m-2"> ' +
        '<div class ="card-header"  id="titulodoRecado"> ' +
        ` ${tituloRecado}` +
        '</div> <div class="card-body"> <p class="card-text" id="areaRecado">' +
        `${mensagemRecado}` +
        "</p>" +
        "</div> " +
        '<div class="btn-group" role="group" aria-label="Basic example">' +
        ' <button type="button" onclick="apagaRecado()" class="btn btn-secondary">' +
        "  Excluir" +
        " </button>" +
        ' <button type="button" onclick="editaRecado()" class="btn btn-secondary">' +
        "   Editar" +
        "  </button>" +
        "</div>" +
        " </div>";

      document.getElementById("titulodoRecado").querySelector = tituloRecado; // aqui escreve no card-header
      recados.titulo = tituloRecado;

      document.getElementById("areaRecado").querySelector = mensagemRecado; // aqui escreve no card-body
      recados.mensagem = mensagemRecado;

      function apagaRecado() {
        let apaga = scrapsfield;
        apaga = apaga.remove();
      }
    }
  }

  document.getElementById("messageTitle").value = ""; // aqui limpa o campo titulo
  document.getElementById("messageBody").value = ""; // aqui limpa o campo area

  document.getElementById("messageTitle").focus();
}
