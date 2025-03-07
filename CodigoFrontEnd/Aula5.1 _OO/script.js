class Livro {
    constructor(titulo, autor, isbn, preco, estoque) {
      this.titulo = titulo;
      this.autor = autor;
      this.isbn = isbn;
      this.preco = preco;
      this.estoque = estoque;
    }
  
    // Método para atualizar o estoque
    atualizarEstoque(quantidade) {
      this.estoque += quantidade;
    }
  
    // Método para vender um livro
    vender() {
      if (this.estoque > 0) {
        this.estoque--;
        return true;
      } else {
        return false;
      }
    }
  }

// Classe Cliente
class Cliente {
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
      this.carrinho = [];
    }
  
    // Método para adicionar um livro ao carrinho
    adicionarAoCarrinho(livro) {
      this.carrinho.push(livro);
    }
  
    // Método para remover um livro do carrinho
    removerDoCarrinho(livro) {
      const index = this.carrinho.indexOf(livro);
      if (index !== -1) {
        this.carrinho.splice(index, 1);
      }
    }
  
    // Método para finalizar a compra
    finalizarCompra() {
      let total = 0;
      for (const livro of this.carrinho) {
        if (livro.vender()) {
          total += livro.preco;
        } else {
          return false; // Falha na venda, livro sem estoque
        }
      }
      this.carrinho = []; // Limpa o carrinho
      return total; // Retorna o valor total da compra
    }
  }



// Classe Loja
class Loja {
  constructor() {
    this.livros = [];
    this.clientes = [];
  }

  // Método para adicionar um livro ao estoque
  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  // Método para encontrar um livro por ISBN
  encontrarLivro(isbn) {
    return this.livros.find(livro => livro.isbn === isbn);
  }

  // Método para cadastrar um cliente
  cadastrarCliente(cliente) {
    this.clientes.push(cliente);
  }

  // Método para realizar uma venda
  realizarVenda(cliente, isbn) {
    const livro = this.encontrarLivro(isbn);
    if (livro) {
      cliente.adicionarAoCarrinho(livro);
      return true;
    } else {
      return false;
    }
  }
}

// Funções para manipulação do DOM
function exibirLivros(livros) {
    const listaLivros = document.getElementById('lista-livros');
    listaLivros.innerHTML = ''; // Limpa a lista

    for (const livro of livros) {
        const divLivro = document.createElement('div');
        divLivro.classList.add('livro');
        divLivro.innerHTML = `
            <h3>${livro.titulo}</h3>
            <p>Autor: ${livro.autor}</p>
            <p>ISBN: ${livro.isbn}</p>
            <p>Preço: R$ ${livro.preco.toFixed(2)}</p>
            <p>Estoque: ${livro.estoque}</p>
        `;
        listaLivros.appendChild(divLivro);
    }
}

function exibirCarrinho(carrinho) {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = ''; // Limpa a lista

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<p>Carrinho vazio.</p>';
    } else {
        for (const livro of carrinho) {
            const divItemCarrinho = document.createElement('div');
            divItemCarrinho.classList.add('item-carrinho');
            divItemCarrinho.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p>Preço: R$ ${livro.preco.toFixed(2)}</p>
            `;
            listaCarrinho.appendChild(divItemCarrinho);
        }
    }
}

// Criando a loja e os livros
const loja = new Loja();
const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "9780618053267", 50, 10);
const livro2 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "9780747532699", 30, 5);
const livro3 = new Livro("Harry Potter e a camera secreta", "J.K. Rowling", "9780747532105", 35, 5);
const livro4 = new Livro("Harry Potter e o prisioneiro de askaban", "J.K. Rowling", "9780747532110", 55, 5);
loja.adicionarLivro(livro1);
loja.adicionarLivro(livro2);
loja.adicionarLivro(livro3);
loja.adicionarLivro(livro4);

// Exibindo os livros na página
exibirLivros(loja.livros);

// Selecionando elementos do HTML
const btnCadastrarCliente = document.getElementById('btn-cadastrar-cliente');
const btnAdicionarCarrinho = document.getElementById('btn-adicionar-carrinho');
const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');

// Eventos para os botões
btnCadastrarCliente.addEventListener('click', () => {
    const nome = document.getElementById('input-nome').value;
    const cpf = document.getElementById('input-cpf').value;

    if (nome && cpf) {
        const cliente = new Cliente(nome, cpf);
        loja.cadastrarCliente(cliente);
        alert('Cliente cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    document.getElementById('input-nome').value = '';
    document.getElementById('input-cpf').value = '';
});

btnAdicionarCarrinho.addEventListener('click', () => {
    const isbn = document.getElementById('input-isbn').value;
    const cliente = loja.clientes[loja.clientes.length - 1]; // Pega o último cliente cadastrado

    if (cliente && isbn) {
        const sucesso = loja.realizarVenda(cliente, isbn);
        if (sucesso) {
            exibirCarrinho(cliente.carrinho);
            alert('Livro adicionado ao carrinho!');
        } else {
            alert('Livro não encontrado no estoque.');
        }
    } else {
        alert('Por favor, cadastre um cliente e insira o ISBN do livro.');
    }
    document.getElementById('input-isbn').value = '';
});

btnFinalizarCompra.addEventListener('click', () => {
    const cliente = loja.clientes[loja.clientes.length - 1]; // Pega o último cliente cadastrado

    if (cliente) {
        const valorTotal = cliente.finalizarCompra();
        if (valorTotal) {
            alert(`Compra realizada com sucesso! Valor total: R$ ${valorTotal.toFixed(2)}`);
            exibirCarrinho(cliente.carrinho); // Atualiza o carrinho
            exibirLivros(loja.livros); // Atualiza a lista de livros
        } else {
            alert('Falha na compra: algum livro sem estoque.');
        }
    } else {
        alert('Por favor, cadastre um cliente.');
    }
});