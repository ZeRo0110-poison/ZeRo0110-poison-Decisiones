function calcular() {
    let estrato = parseInt(document.getElementById('estrato').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let longitud = parseFloat(document.getElementById('longitud').value);
    let ancho = parseFloat(document.getElementById('ancho').value);
    
    
    if (isNaN(estrato) || isNaN(altura) || isNaN(longitud) || isNaN(ancho) || estrato <= 0 || altura <= 0 || longitud <= 0 || ancho <= 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    
    let volumen = altura * longitud * ancho;
    let costo = volumen * estrato;
    
   
    document.getElementById('resultado').innerHTML = `El consumo de agua es de ${volumen} m³ y el costo es de $${costo}.`;
}
