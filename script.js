function login() {
  // Implementar lógica de autenticação aqui
  // Exemplo básico: Verificar se o usuário e senha estão corretos
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "seu_usuario" && password === "sua_senha") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-container").style.display = "block";
  } else {
    alert("Usuário ou senha incorretos");
  }
}

function salvarCliente() {
  // Implementar lógica para salvar cliente
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var numero = document.getElementById("numero").value;

  // Exemplo básico: Adicionar o cliente a uma lista
  var cliente = { nome: nome, cpf: cpf, numero: numero };
  // Lógica para armazenar ou enviar os dados ao backend

  alert("Cliente salvo com sucesso!");
}

function buscarClientes() {
  // Implementar lógica para buscar clientes
  // Exemplo básico: Listar clientes na página
  var clientesList = document.getElementById("clientes-list");
  clientesList.innerHTML = ""; // Limpar lista antes de exibir

  // Lógica para buscar clientes e adicionar à lista
  // Substitua esta parte com a lógica real do seu aplicativo
  var clientes = [
    { nome: "Cliente 1", cpf: "111.111.111-11", numero: "123456789" },
    { nome: "Cliente 2", cpf: "222.222.222-22", numero: "987654321" }
  ];

  clientes.forEach(function(cliente) {
    var li = document.createElement("li");
    li.textContent = `Nome: ${cliente.nome}, CPF: ${cliente.cpf}, Número: ${cliente.numero}`;
    clientesList.appendChild(li);
  });
}
