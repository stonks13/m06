var data = null;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function(){  
    if (this.readyState == this.DONE) {
        console.log(typeof(this.responseText));
        console.log(typeof(JSON.parse(this.responseText)));
    }
    
  });

xhr.open("GET", "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=f59e276c-1a1e-4fa5-8c89-8a8a56e56b34");

xhr.send(data);