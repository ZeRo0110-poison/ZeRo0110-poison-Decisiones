function mostrar(){
 
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value

    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
 
    if (numero1>0 || numero2>0)

       alert(`Los numeros escritos fueron: ${numero1} y ${numero2}`)
    else 
      alert('')


        






}