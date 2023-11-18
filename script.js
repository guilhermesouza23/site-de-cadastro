var clientes = []; // Array para armazenar os clientes

function salvarCliente() {
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var numero = document.getElementById("numero").value;

  // Adiciona o cliente ao array
  clientes.push({ nome: nome, cpf: cpf, numero: numero });

  // Atualiza a tabela de clientes
  atualizarTabelaClientes();

  alert("Cliente salvo com sucesso!");
}

function atualizarTabelaClientes() {
  var clientesList = document.getElementById("clientes-list");
  clientesList.innerHTML = ""; // Limpa a tabela antes de exibir

  // Preenche a tabela com os clientes do array
  clientes.forEach(function(cliente) {
    var row = document.createElement("tr");
    row.innerHTML = `<td>${cliente.nome}</td><td>${cliente.cpf}</td><td>${cliente.numero}</td>`;
    clientesList.appendChild(row);
  });
}
