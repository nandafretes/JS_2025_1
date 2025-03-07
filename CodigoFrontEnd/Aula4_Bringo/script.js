let numerosSorteados = [];

function sortearNumero() {
  let numero;
  do {
    numero = Math.floor(Math.random() * 75) + 1; // Gera um número aleatório entre 1 e 75
  } while (numerosSorteados.includes(numero)); // Garante que não repita

  numerosSorteados.push(numero);
  document.getElementById("roleta").textContent = numero;

  // Adiciona o número à lista de sorteados
  let lista = document.getElementById("listaSorteados");
  let itemLista = document.createElement("li");
  itemLista.textContent = numero;
  lista.appendChild(itemLista);

  // Desabilita o botão se todos os números foram sorteados
  if (numerosSorteados.length === 75) {
    document.querySelector("button").disabled = true;
    document.querySelector("button").textContent = "Todos os números sorteados!";
  }
}