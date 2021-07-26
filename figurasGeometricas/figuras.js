// Cuadrado
console.group("Cuadrado")

function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}
console.groupEnd()

// Triángulo
console.group("Triángulo")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

console.groupEnd()

// Círculo
console.group("Círculo")

function diametroCirculo(radio){
    return radio * 2
}

function circunferenciaCirculo(radio){
    const diametro = diametroCirculo(radio) // Llama a esta función para evitar redundancia de código
    return diametro * Math.PI
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI
}

console.groupEnd()