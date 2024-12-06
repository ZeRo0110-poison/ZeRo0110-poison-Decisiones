function mostrar(){
    let numero = document.getElementById('numero').value
    numero = parseFloat(numero)

    if(numero >= 0 )
     alert(`El valor absoluto del numero ${numero} es: ${numero} `);
    else 
    alert(`El valor absoluto del numero ${numero} es: ${numero*-1} `);

}                                           
