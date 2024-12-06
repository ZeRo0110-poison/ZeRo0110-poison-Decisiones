
function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
    let sexo = document.getElementById('sexo').value
    edad=parseFloat(edad)


    if (edad >= 18 & sexo == 1 )
        alert(`Su nombre es: ${nombre} y su edad es: ${edad}`)
     
    else
        document.write('')
}