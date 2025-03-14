function CalcularTotal(){
    let precoPrato = parseFloat(document.getElementById("prato").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);

    if(precoPrato === 0 || quantidade < 0){
        alert('Erro no calculo')
        document.getElementById('resultado').textContent ='Informações inválidas, verifique o prato e a quantidade';
        
    }
    else{
        let total = precoPrato * quantidade
        document.getElementById('resultado').textContent = `O valor total é de ${total.toFixed(2) }`
    }
}