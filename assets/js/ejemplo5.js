function mostrar(){
    let numero = document.getElementById('numero').value
    numero= parseFloat(numero)

    if ( numero <0 )
        alert(`El numero ${numero} tiene una raiz imaginaria`)
    else
    alert(`La raiz del numero ${numero} es: ${Math.sqrt(numero,2)}` )
 }