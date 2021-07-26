// Cuadrado
console.group("Cuadrado")

const ladoCuadrado = 5
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`)

const perimetroCuadrado = ladoCuadrado * 4
console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log(`El área del cuadrado es ${areaCuadrado} cm²`)

console.groupEnd()

// Triángulo
console.group("Triángulo")

const lado1Triangulo = 6
const lado2Triangulo = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log(`Los lados del triángulo miden ${lado1Triangulo}, ${lado2Triangulo} y ${baseTriangulo} cm`)

const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo
console.log(`El perimetro del cuadrado es ${perimetroTriangulo} cm`)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`El área del cuadrado es ${areaCuadrado} cm²`)

console.groupEnd()

// Círculo
console.group("Círculo")

const radioCirculo = 6
const diametroCirculo = radioCirculo * 2
const pi = Math.PI
const circunferenciaCirculo = diametroCirculo * pi
const areaCirculo = (radioCirculo * radioCirculo) * pi

console.log(`El diámetro del círculo mide ${radioCirculo} cm`)

console.log(`PI es ${pi}`)

console.log(`El área del círculo es ${areaCirculo} cm²`)

console.groupEnd()