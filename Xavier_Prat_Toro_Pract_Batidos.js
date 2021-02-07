class Batuts{
    precios = [
        ["Fresas", 1.5],
        ["Platano", 0.5],
        ["Mango", 2.5],
        ["Frutos del Bosque", 1],
        ["Coco", 1],
        ["Pera", 1.75],
        ["Piña", 3.5]
    ]
    ingredientes_tot = new Array();
    ingredientes_inexistentes = new Array();
    precio_total = 0.00;

 
    constructor(ingredientes){
        this.ingredientes_tot = ingredientes;

    }
    getCoste(){
        var i=0;
        while(i != this.ingredientes_tot.length){
            var ingrediente = this.ingredientes_tot[i];
            var compr_ingredientes = this.precio_total;
            for(var a = 0; a<this.precios.length; a++){
                if (ingrediente == this.precios[a][0]){
                    this.precio_total = this.precio_total + this.precios[a][1];
                }
            }
            //esto es un comprovante por si ponen un ingrediente que no existe en la lista.
            if (this.precio_total == compr_ingredientes){
                this.ingredientes_inexistentes.push(this.ingredientes_tot[i]);
                this.ingredientes_tot.splice(i, 1);
                i--;
            }
            i++;
        }
        return "Coste: " + Number.parseFloat(this.precio_total).toFixed(2);
    }
    getPrecio(){
        return "Precio: " + Number.parseFloat(this.precio_total*1.5).toFixed(2);
    }
    getDescription(){
        this.ingredientes_tot.sort();
        if (this.ingredientes_inexistentes.length >0){
            console.log("No tenemos estos ingredientes: " + this.ingredientes_inexistentes);
        }
        if (this.ingredientes_tot.length > 1){
            return "Fusion de: " + this.ingredientes_tot;
        } else {
            return "Batido de: " + this.ingredientes_tot;
        }
        
    }
}

miBatido = new Batuts(["Mango", "Platano"]);
console.log(miBatido.getCoste());
console.log(miBatido.getPrecio());
console.log(miBatido.getDescription());

miBatido = new Batuts(["Mango", "Manzana", "Aguacate","Platano"]);
console.log(miBatido.getCoste());
console.log(miBatido.getPrecio());
console.log(miBatido.getDescription());


