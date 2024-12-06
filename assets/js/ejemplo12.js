function calcularPresupuesto() {
    let numeroPersonas = parseInt(document.getElementById('numeroPersonas').value);
    let costoPorPersona;

    

    if (numeroPersonas <= 200) {
        costoPorPersona = 14000;
    } else if (numeroPersonas <= 300) {
        costoPorPersona = 11000;
    } else {
        costoPorPersona = 9000;
    }

   let total = costoPorPersona * numeroPersonas;
    document.getElementById('mensaje').innerText = `El presupuesto total para ${numeroPersonas} persona(s) es: $${total}`;
}
