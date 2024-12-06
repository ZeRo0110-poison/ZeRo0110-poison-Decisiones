function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value

    edad=parseFloat(edad)


    if (edad >= 18 )
        alert(`Su nombre es: ${nombre} y su edad es: ${edad}`)
     
    else
       alert('Eres menor de edad, no puedes usar esta APP.')
}