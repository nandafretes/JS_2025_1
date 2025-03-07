//////////////////ESCOPO////////////////
let global = 100;

function variaveis(){
    let variavelLocal = 10;
    let variavelGlobalLocal = global + variavelLocal;
    return{
        variavelLocal: variavelLocal, 
        variavelGlobalLocal: variavelGlobalLocal
    };
}


let resultado = variaveis();
document.write(`Variveis de escopo`)
document.write(`variavel global: ${global}`);
//alert(variavelLocal)

document.write(`variavel local: ${resultado.variavelLocal}`);
document.write(`variavel global + local: ${resultado.variavelGlobalLocal}`);



//////////////////// CONSTANTES ////////////////////////

const desconto = 0.1;
let preco = 100;

//const desconto=0.5;
let precoComDesconto = preco - (preco * desconto);
document.write(`Preço com desconto: ${precoComDesconto}`);

/////////////////////CONJUNTOS////////////////////
document.write(`Arrays`)
let numeros = [1,2,3,4,5,6,7,8,9,10];
let nomes = ['Dori', 'Fer', 'Marcia', 'Mary', 'Lindo']

//para listar os elementos do array
document.write(`<p>for de Array</p>`)
for(let i in numeros){
    document.write(numeros[i] + '</br>');
}

for(let n in nomes){
    document.write(nomes[n] + '</br>');
}
//para listar os elementos do array
document.write(`<p>forEach de Array</>`)
nomes.forEach(function(nome){
    document.write(`Nome: ${nome} </br>`);
});


//arrow function com forEach
nomes.forEach(nome => document.write(nome + '</br>'));

document.write(`<p> Manipulção</p>`)
let pessoas = [ ];
//Inserindo no inicio da fila
pessoas.unshift('Amanda');
pessoas.unshift('Bruno');
pessoas.unshift('Carlos');
pessoas.unshift('Daniel');
//Inserindo no fim da fila
pessoas.push('Zelia');

pessoas.forEach(pessoa => document.write(pessoa +','));


//removendo o primeiro elemento
pessoas.shift();        

//removendo o ultimo elemento
pessoas.pop();

//removendo alguns elementos
const indice=2
const quantidade=2
pessoas.splice(indice, quantidade);
console.log(pessoas);


//MAP
document.write(`<p>Map</p>`)
let numerosDobrados = numeros.map(function(numero){
    return numero * 2;
}); 
document.write(numerosDobrados);

let nomesMaiusculos = nomes.map(function(nome){ 
    return nome.toUpperCase();
});
document.write(nomesMaiusculos);

//FILTER
document.write(`<p>Filter</p>`)
let numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
});
document.write(numerosPares);   

document.write(`<p>Nomes com A</p>`)
let nomesComA = nomes.filter(function(nome){
    return nome[0] === 'A';
});
document.write(nomesComA);

//REDUCE
document.write(`<p>Reduce</p>`)
let soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
});

document.write(soma);

let concatenacao = nomes.reduce(function(acumulador, nome){        
    return acumulador + ' ' + nome;
});
document.write(concatenacao);

//spread operator

livros1 = ['Harry Potter e a pedra filosofal', 'livro2', 'livro3'];