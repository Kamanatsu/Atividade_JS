function verifica(tipo){
    if(Array.isArray(tipo)){
        console.log("É array!");
    }else{
        console.log("Não é Array");
    }
}

var tipo = prompt("digite algo: ");

verifica(tipo);