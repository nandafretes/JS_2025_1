let h1 = window.document.getElementsByTagName('h1')[0];
let corpo = window.document.body;
h1.style.color= 'blue';
corpo.style.background = "black";



//mudar cor de uma div pelo ID
function mudarCor(){

    let div = document.getElementById("minhaDiv");

    if(div.style.backgroundColor =="blueviolet"){
        div.style.backgroundColor = "red";
    }
    else{
        (div.style.backgroundColor ="blueviolet")
    }
}


//mudar a estrutura de uma dic por programação
let box = document.querySelector(".box");
box.style.backgroundColor="green";
box.style.width="400px";