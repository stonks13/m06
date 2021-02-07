// Importa el modul 
var stdin = process.openStdin();

var rand = Math.floor(Math.random() * 11);
//Defineix un event
//Analitza la sintaxis que significa function(d).... es una funcion sense nom
console.log('Introduce un numero:');


stdin.addListener("data", function(d) {
    if (d>rand) {
        console.log('Te has pasado!');
    } else if (d<rand) {
        console.log('Te has quedado corto!');
    } else if (d==rand) {
        console.log('Acertaste!');
    }else {
        console.log('No te he entendido');
    }


    //console.log("Aixo es el que has entrat: " + d.toString() + "");
});
