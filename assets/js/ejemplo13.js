function calcularValor() {
    
    let tipoUva = document.getElementById('tipoUva').value;
    let tamanoUva = document.getElementById('tamanoUva').value;
    let kilos = parseInt(document.getElementById('kilos').value);
    
   
    let  valorInicial = 2000;
    
   
    let ajustePrecio = 0;
    
    if (tipoUva === 'A') {
        if (tamanoUva === '1') {
            ajustePrecio = 2000;
        } else if (tamanoUva === '2') {
            ajustePrecio = 1000;
        }
    } else if (tipoUva === 'B') {
        if (tamanoUva === '1') {
            ajustePrecio = -500;
        } else if (tamanoUva === '2') {
            ajustePrecio = -900;
        }
    }
    
    
    let precioPorKilo = valorInicial + ajustePrecio;
    let valorTotal = precioPorKilo * kilos;
    
    // Mostrar el resultado
    document.getElementById('mensaje').innerText = `El valor total del embarque es: $${valorTotal.toLocaleString()}`;
}
