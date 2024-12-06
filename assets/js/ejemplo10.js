function mostrar(){
 
    let numero1 = document.getElementById('numero1').value

    numero1 = parseFloat(numero1)
    

    let porcentaje = numero1 * 0.05;

    alert(`Numero 1: ${numero1}, el 5% del numero es ${porcentaje}`)
    
   
}