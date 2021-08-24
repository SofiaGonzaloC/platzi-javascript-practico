const lista = document.getElementById("list")

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( // recibe una funcion y va sumando cada uno de sus elementos
        function(valorAcumulado = 0, nuevoElemento){ 
            // valorAcumulado = suma de las iteraciones, 0 por defecto
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista/lista.length

    alert(promedioLista)
}
