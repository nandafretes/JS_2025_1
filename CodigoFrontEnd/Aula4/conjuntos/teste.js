// //variaveis


// let variavelGlobal = 100

// function novasVariaveis(){
//     let variavel = 20;
//     variavelGlobal = variavelGlobal + 200
//     return {variavel, variavelGlobal}

// }

// let resultado = novasVariaveis()
// document.getElementById("variaveis").innerHTML = (`Global:  ${variavelGlobal}`);
// document.getElementById("variaveis2").innerHTML =(`Local: ${resultado.variavel}`)
// document.getElementById("variaveis3").innerHTML =(`Local Global: ${resultado.variavelGlobal}`)


////////////////////Const//////////////////////////////
// const desconto = 0.01

// let preco = 99.99
// desconto = preco * desconto
// alert(desconto)


/////////////////Conjuntos///////////////////////////
let numeros = [10, 15 ,20 ,25, 30, 35 ,40 , 45 ,50];
let nomes = ['Sofia', 'Ian', 'Elisa', 'Teodora', 'Valentina'];

// //exibir o indice
// for(let indice in numeros){
//     alert(indice)
// }

// //exibir itens de um array
// for(let valor of nomes){
//     alert(valor)
// }

// //percorrer array
// numeros.forEach(function(valor){
//     document.write(`${valor}<br>`)
// })

// nomes.forEach(item=> document.write(`${item}<br>`))

//inserindo no final da fila
numeros.push(60)
document.write(numeros)
document.write('<p>')

//inserindo um valor no inicio da fila
numeros.unshift(5)
document.write(numeros)
document.write('<p>')

//excluindo ultimo
numeros.pop()
document.write(numeros)
document.write('<p>')

//excluindo 1
numeros.shift()
document.write(numeros)
document.write('<p>')

//MAP
let numerosDobrados = numeros.map(n=> n * 2)
document.write(numerosDobrados)
document.write('<p>')


let nomesUpper = nomes.map(nome => nome.toUpperCase())
document.write(nomesUpper)
document.write('<p>')


//filter
let numerosdiv3 = numeros.filter(function(numero){
    return numero % 3 ===0
})
document.write(numerosdiv3)
document.write('<p>')

//find
let primeiroPar = numeros.find(function(numero){
    return numero % 2 ===0
})
document.write(primeiroPar)
document.write('<p>')


//dstruturação
const livros = ['HTML', 'CSS', 'JS']
alert(livros[1])

let[html, css, js] = livros
alert(js)


//Spread
let livros1 = ['Harry Potter a pedra filosofal', 'HP camara secreta']
let livros2 = ['HP - Prizioneiro de Aszcaban', 'HP - Calice de Fogo']
catalogo = [...livros1, ...livros2]
document.write(catalogo)