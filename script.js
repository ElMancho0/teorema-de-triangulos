document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const ladoA = parseFloat(document.getElementById('sideA').value);
            const ladoB = parseFloat(document.getElementById('sideB').value);
            const ladoC = parseFloat(document.getElementById('sideC').value);
            if (!isNaN(ladoA) && !isNaN(ladoB) && !isNaN(ladoC)) {
                calcularTriangulo(event);
            }
        });
    });

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const ladoA = parseFloat(document.getElementById('sideA').value);
            const ladoB = parseFloat(document.getElementById('sideB').value);
            const ladoC = parseFloat(document.getElementById('sideC').value);
            if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
                document.getElementById('resultado').innerHTML = '';
            }
        });
    });
});