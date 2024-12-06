

function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value

    edad=parseFloat(edad);


    if (edad >= 18 )
        alert(`su nombre es: ${nombre} y su edad es: ${edad}`)
     
    else
        document.write('')
}