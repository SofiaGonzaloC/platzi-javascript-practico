function calcularModaAritmetica(lista) {
    const listaCount = {}; // Objeto para contar cuantas veces aparece un elemento
    
    lista.map( // Ayuda a recorrer el array
        function (elemento) { // Por cada elemento del array (lista)
            if (listaCount[elemento]) { // Si ya existe se le agrega un 1 al objeto
                listaCount[elemento] += 1;
            } else { // Crea un elemento en el objeto, marcando que ya existe con un 1
                listaCount[elemento] = 1;
            }

        }
    );

    const listaArray = Object.entries(listaCount).sort( // Se le manda un objeto como argumento para convertir en un array
        function (elementoA, elementoB) { // Ordena el array de menos a más elementos
            return elementoA[1] - elementoB[1];
        }
    );

    console.log(listaArray)

    const moda = listaArray[listaArray.length - 1] // Toma el ultimo elemento del array (que es el más grande)

    alert (moda);
}
