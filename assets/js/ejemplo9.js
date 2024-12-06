function mostrar(){
 
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value

    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)

    let suma = numero1 + numero2

    alert(`Numero 1: ${numero1}, Numero 2: ${numero2}, La suma de los numeros es: ${suma} `)
    
}