function copiadora(arrayPrincipal){
    
    let arrayCopia = [];

    for (i = 0; i < arrayPrincipal.length; i++) {
        arrayCopia[i] = arrayPrincipal[i];
    }
    
    console.log(arrayCopia);
}

arrayPrincipal = [1, 2, 3];
copiadora(arrayPrincipal);
