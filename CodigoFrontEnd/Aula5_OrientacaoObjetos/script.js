// Classe Conta
class Conta {
    //começo com meu construtor
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    // Método para verificar saldo
    verificarSaldo() {
        return `Seu saldo atual é: R$ ${this.saldo.toFixed(2)}`;
    }

    // Método para realizar saque
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque realizado com sucesso! Novo saldo: R$ ${this.saldo.toFixed(2)}`;
        } else {
            return `Saldo insuficiente!`;
        }
    }

    // Método para realizar depósito
    depositar(valor) {
        this.saldo += valor;
        return `Depósito realizado com sucesso! Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    }

    // Método para realizar transferência
    transferir(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return `Transferência realizada com sucesso! Novo saldo: R$ ${this.saldo.toFixed(2)}`;
        } else {
            return `Saldo insuficiente!`;
        }
    }
}

// Criando uma conta de exemplo
const contaUsuario = new Conta(12345, 7000);

// Selecionando elementos HTML
const tela = document.getElementById('tela');
const btnSaldo = document.getElementById('btn-saldo');
const btnSaque = document.getElementById('btn-saque');
const btnDeposito = document.getElementById('btn-deposito');
const btnTransferencia = document.getElementById('btn-transferencia');
const btnSair = document.getElementById('btn-sair');

// Função para atualizar a tela
function atualizarTela(mensagem) {
    tela.textContent = mensagem;
}

// Eventos para os botões
btnSaldo.addEventListener('click', () => {
    atualizarTela(contaUsuario.verificarSaldo());
});

btnSaque.addEventListener('click', () => {
    const valorSaque = parseFloat(prompt("Digite o valor do saque:"));
    atualizarTela(contaUsuario.sacar(valorSaque));
});

btnDeposito.addEventListener('click', () => {
    const valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
    atualizarTela(contaUsuario.depositar(valorDeposito));
});

btnTransferencia.addEventListener('click', () => {
    const valorTransferencia = parseFloat(prompt("Digite o valor da transferência:"));
    atualizarTela(contaUsuario.transferir(valorTransferencia)); // Exemplo, precisa ser adaptado
});

btnSair.addEventListener('click', () => {
    alert('Obrigado por utilizar o Caixa Eletrônico!');
    // Você pode implementar a lógica para redirecionar o usuário para outra página aqui.
});