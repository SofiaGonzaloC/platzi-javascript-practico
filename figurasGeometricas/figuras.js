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

// Interacción con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value // accede al const input ^ para obtener lo que el usuario puso en el input

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value // accede al const input ^ para obtener lo que el usuario puso en el input

    const area = areaCuadrado(value)
    alert(area)
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputTrianguloLado1")
    const lado2 = document.getElementById("inputTrianguloLado2")
    const base = document.getElementById("inputTrianguloBase")

    const valueLado1 = lado1.value
    const valueLado2 = lado2.value
    const valueBase = base.value

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputTrianguloBase")
    const altura = document.getElementById("inputTrianguloAltura")

    const valueBase = base.value
    const valueAltura = altura.value

    const area = areaTriangulo(valueBase, valueAltura)
    alert(area)
}