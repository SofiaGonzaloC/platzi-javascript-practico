// Cuadrado
console.group("Cuadrado 🟥")

function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}
console.groupEnd()

// Triángulo
console.group("Triángulo 🔺")

function perimetroTriangulo(lado1, lado2, base){
    const result = parseInt(lado1) + parseInt(lado2) + parseInt(base)

    return (result)
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

console.groupEnd()

// Triángulo Isosceles

console.group("Triángulo Isosceles")

function alturaTrianguloIsos(lado1, lado2, base){
    if(lado1 == lado2){
        return Math.sqrt(Math.pow(lado1, 2) - ( Math.pow(base,2)/4 ))
    }else{
        alert("Este no es un triángulo isosceles !")
    }
}

console.groupEnd()

// Círculo
console.group("Círculo 🔴")

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

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("inputTrianguloLado1")
    const lado2 = document.getElementById("inputTrianguloLado2")
    const base = document.getElementById("inputTrianguloBase")

    const valueLado1 = lado1.value
    const valueLado2 = lado2.value
    const valueBase = base.value

    const altura = alturaTrianguloIsos(valueLado1, valueLado2, valueBase)
    alert(altura)
} 

function calcularDiametroCirculo(){
    const radio = document.getElementById("inputCirculo")

    const valueRadio = radio.value

    const diametro = diametroCirculo(valueRadio)

    alert(diametro)
}

function calcularCircunferenciaCirculo(){
    const radio = document.getElementById("inputCirculo")

    const valueRadio = radio.value

    const circunferencia = circunferenciaCirculo(valueRadio)

    alert(circunferencia)
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculo")

    const valueRadio = radio.value

    const area = areaCirculo(valueRadio)

    alert(area)
}