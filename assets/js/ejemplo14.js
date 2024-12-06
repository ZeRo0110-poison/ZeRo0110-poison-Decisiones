function calcularCosto() {
   let numeroAlumnos = parseInt(document.getElementById('numeroAlumnos').value);
    let costoPorAlumno;

    if (numeroAlumnos >= 100) {
        costoPorAlumno = 6500;
    } else if (numeroAlumnos >= 50) {
        costoPorAlumno = 7000;
    } else if (numeroAlumnos >= 30) {
        costoPorAlumno = 9500;
    } else if (numeroAlumnos > 0) {
        costoPorAlumno = 400000 / numeroAlumnos;
    } else {
        document.getElementById('mensaje').innerText = 'Por favor, ingrese un número de alumnos válido.';
        return;
    }

    let costoTotal = numeroAlumnos * costoPorAlumno;
    document.getElementById('mensaje').innerText = `El costo total del viaje es: $${costoTotal.toLocaleString()}`;
}
