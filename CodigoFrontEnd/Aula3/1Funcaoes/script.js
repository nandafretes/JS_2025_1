//funções - bloco de codigos que podem ser reutilizaveis

//função de mostrar imagens ao usuário
function Saudar(){
    alert("Olá, bora dar os primeiros passos em JS né?")
}

//soma de dois valores
function Somar(a,b){
    return a +b
}



const subtrair = function(c,d){
    return c - d
}

const somarVarios = function(n1,n2,n3,n4){
    return n1 + n2 + n3 + n4
}


function converteParaMaiusculas(texto) {
    return texto.toUpperCase();
  }


function comprimentoDaString(texto) {
    return texto.length;
  }  

  function pegaParteDaString(texto, inicio, fim) {
    return texto.substring(inicio, fim);
  }

function removeEspacos(texto) {
   return texto.trim();
 }

 function validarEmailSimples(email) {
    // Verifica se o email contém "@" e "."
    if (email.includes("@") && email.includes(".")) {
      return email; 
    } else {
      return "Informe um valor valido";
    }
  }

const dividir = (v1, v2)=> v1/v2

//chamando a funcao de saudar
Saudar()

//chamar funcao soma
resultado = Somar(10,20)
alert(` o resultado da soma entre os numeros é ${resultado}`)
//alert(Somar(10,20))

alert(`A subtração dos numeros reultou em ${subtrair(20,10)}`)

alert(`A soma de varios valores resultou em ${somarVarios(10,20, 20 ,20)}`)

alert(`Arrow function é ${dividir(100,50)}`)

let frase = prompt("Informe uma frase: ")
//converter para maiuscula
let fraseMaiuscula = converteParaMaiusculas(frase)
alert(fraseMaiuscula)

//comprimento
let tamanho = comprimentoDaString(frase)
alert(tamanho)

//pegar parte
let parte = pegaParteDaString(frase, 25, 32);
alert(parte)

let textoComEspacos = "   Olá!   ";
let textoLimpo = removeEspacos(textoComEspacos);
alert(textoLimpo)


let email = prompt("informe um email")
let emailv = validarEmailSimples(email)
alert(emailv)