function Saudacao(){
    alert("olá")
}


function Somar(a,b){
    let soma = a + b
    return soma;
}


function SomarVarios(a, b, c, d){
    let somarvarios = a + b + c + d
    return somarvarios
}

function SomarVarios(a = 0, b = 0, c = 0, d = 0){
    let somarvarios = a + b + c + d
    return somarvarios
}


function MudarCor(){
    let Minhadiv = document.getElementById("Minhadiv");
    if(Minhadiv.style.backgroundColor == "red"){
        Minhadiv.style.backgroundColor = "lightblue";
    }
    else{
        Minhadiv.style.background = "red"
    }
}


//Saudacao()

//chamar funcao somar
// let res = Somar(10, 200)
// alert(res)


// result = SomarVarios(10, 20 , 30, 40 )
// document.write(`${result} <br>` )
// result = SomarVarios(10, 20 )
// document.write(`${result} <br>` )
// result = SomarVarios(10, 20 , 30 )
// document.write(`${result} <br>` )
// result = SomarVarios(10)
// document.write(`${result} <br>` )
