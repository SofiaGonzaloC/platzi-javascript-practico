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
    
    const mitadLista = parseInt(lista.length / 2)

    const medianaLista = 0

    if(mitadLista % 2 == 0){ // es par
        const elemento1 = lista1[mitadLista1]
        const elemento2 = lista1[mitadLista1 - 1]
    
        const promedioElementos = calcularMediaAritmetica(elemento1, elemento2)
    
        medianaLista = promedioElementos
    }else{ // es impar
        medianaLista = lista1[mitadLista1]
    }

    return medianaLista
}