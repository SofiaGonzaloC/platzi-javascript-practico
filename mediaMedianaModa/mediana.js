

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( // recibe una funcion y va sumando cada uno de sus elementos
        function(valorAcumulado = 0, nuevoElemento){ 
            // valorAcumulado = suma de las iteraciones, 0 por defecto
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista/lista.length

    return promedioLista
}

function calcularMedianaAritmetica(lista){

    var mitadLista = lista.length / 2

    let medianaLista = 0

    if(lista.length % 2 == 0){ // es par
        const elemento1 = lista[parseInt(mitadLista)]
        const elemento2 = lista[parseInt(mitadLista - 1)    ]

        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2])

        medianaLista = promedioElementos

    }else{ // es impar
        console.log("Es impar")

        medianaLista = lista[parseInt(mitadLista)]

    }

    alert (medianaLista)
}