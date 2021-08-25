const salariosCol = colombia.map(
    function (persona) { // Por cada persona retorna su salario
        return persona.salary
    }
)

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
)

function esPar(numero) {
    return numero % 2 === 0; // Retorna true o false dependiendo del caso
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length

    return promedioLista
}


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2); 

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2)

        return mediana
    } else {
        const mediana = lista[mitad];

        return mediana
    }
}

console.log(medianaSalarios(salariosColSorted))