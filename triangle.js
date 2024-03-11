function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

function classifyBySides(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

function classifyByAngles(a, b, c) {
    const sides = [a, b, c].sort((x, y) => x - y);
    const [sideA, sideB, sideC] = sides;
    const angleC = Math.acos((sideA * sideA + sideB * sideB - sideC * sideC) / (2 * sideA * sideB));
    const angleB = Math.acos((sideA * sideA + sideC * sideC - sideB * sideB) / (2 * sideA * sideC));
    const angleA = Math.PI - angleC - angleB;

    if (angleA === Math.PI / 2 || angleB === Math.PI / 2 || angleC === Math.PI / 2) {
        return "Rectángulo";
    } else if (angleA > Math.PI / 2 || angleB > Math.PI / 2 || angleC > Math.PI / 2) {
        return "Obtusángulo";
    } else {
        return "Acutángulo";
    }
}

function calculatePerimeter(a, b, c) {
    return a + b + c;
}

function calculateArea(a, b, c) {
    const s = calculatePerimeter(a, b, c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
function calcularTriangulo(event) {
    event.preventDefault();
    const ladoA = parseFloat(document.getElementById('sideA').value);
    const ladoB = parseFloat(document.getElementById('sideB').value);
    const ladoC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        document.getElementById('resultado').innerHTML = `
        <div id="back">
            <p>Por favor, ingrese números válidos para los lados del triángulo.</p>
        </div>
    `;
        return;
    }

    if (!isTriangle(ladoA, ladoB, ladoC)) {
        document.getElementById('resultado').innerHTML = `
        <div id="back">
            <p>Los lados ingresados no forman un triángulo válido.</p>
        </div>
    `;
        return;
    }

    const tipoPorLados = classifyBySides(ladoA, ladoB, ladoC);
    const tipoPorAngulos = classifyByAngles(ladoA, ladoB, ladoC);
    const perimetro = calculatePerimeter(ladoA, ladoB, ladoC);
    const area = calculateArea(ladoA, ladoB, ladoC);

    document.getElementById('resultado').innerHTML = `
        <div id="back">
        <p>El triángulo es de tipo: ${tipoPorLados} por lados.</p>
        <p>El triángulo es de tipo: ${tipoPorAngulos} por ángulos.</p>
        <p>El perímetro del triángulo es: ${perimetro}.</p>
        <p>El área del triángulo es: ${area}.</p>
        </div>
    `;
}
