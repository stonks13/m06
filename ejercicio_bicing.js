var request = require("request");

var options = {
    method: 'GET',
    url: 'https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=f59e276c-1a1e-4fa5-8c89-8a8a56e56b34'
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    var elMeuarray = JSON.parse(body);

    var estaciones = elMeuarray.result.records;
    var bikes_disponibles = estaciones.filter(bike => bike.bikes > 10);
    bikes_disponibles.sort(function(a, b){return a.bikes - b.bikes});
    for(var i = 0; i<bikes_disponibles.length; i++){
        console.log(i + "  Estacion: " + bikes_disponibles[i].streetName + "  Latitud: " + bikes_disponibles[i].latitude + "  Longitud: " + bikes_disponibles[i].longitude);
    }
    
});