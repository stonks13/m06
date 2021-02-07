class Immueble {
    direccion;
    m2;
    refCatastral;
    coordenadas;
    nuevo;
    precio; //precio local/piso

    constructor(direccion, m2,refCatastral,coordenadas,nuevo,precio){
        this.direccion = direccion;
        this.m2 = m2;
        this.refCatastral = refCatastral;
        this.coordenadas = coordenadas;
        this.nuevo = nuevo;
        this.precio = precio;
    }
    setDireccion(direccion){
        this.direccion = direccion;
    }
    setM2(m2){
        this.m2 = m2;
    }
    setRefCatastral(refCatastral){
        this.refCatastral = refCatastral;
    }
    setCoordenadas(coordenadas){
        this.coordenadas = coordenadas;
    }
    setNuevo(nuevo){
        this.nuevo = nuevo;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    setTipo(tipo){
        this.tipo = tipo;
    }
    
}


class Piso extends Immueble {
    planta;
    puerta;
    ascensor;
    años;
    

    constructor(direccion, m2, refCatastral, coordenadas, nuevo, precio,planta,puerta,ascensor, años){
        super(direccion, m2, refCatastral, coordenadas, nuevo, precio);
        this.planta = planta;
        this.puerta = puerta;
        this.ascensor = ascensor;
        this.años = años;

    }
    setPlanta(planta){
        this.planta = planta;
    }
    setPuerta(puerta){
        this.puerta = puerta;
    }
    setAscensor(ascensor){
        this.ascensor = ascensor;
    }
    Precio(){
        function calc (precio, ascensor, planta){
            if (planta >= 3 && ascensor == true){
                return precio*0.03;
            }
            return 0;

        }

        if (this.años > 10){
            if (this.años > 20) {
                return this.precio - this.precio*0.1 + calc(this.precio, this.ascensor, this.planta);
            }
            return this.precio - this.precio*(0.01*(this.años - 10)) + calc(this.precio, this.ascensor, this.planta);
        }
        return this.precio + calc(this.precio, this.ascensor, this.planta);
    }
}


class Local extends Immueble {
    numero_ventanas;
    persiana_metalica;

    constructor(direccion, m2, refCatastral, coordenadas, nuevo, precio, numero_ventanas, persiana_metalica){
        super(direccion, m2, refCatastral, coordenadas, nuevo, precio);
        this.numero_ventanas = numero_ventanas;
        this.persiana_metalica = persiana_metalica;
    }

    setNumeroventanas (numero_ventanas){
        this.numero_ventanas = numero_ventanas;
    }
    setPersianaMetalica (persiana_metalica){
        this.persiana_metalica = persiana_metalica;
    }
    
}

class Comercial extends Local{
    adaptado; //para personas impedidas

    constructor(direccion, m2, refCatastral, coordenadas, nuevo, precio, numero_ventanas, persiana_metalica, adaptado){
        super(direccion, m2, refCatastral, coordenadas, nuevo, precio, numero_ventanas, persiana_metalica);
        this.adaptado = adaptado;
    }
    setAdaptado (adaptado){
        this.adaptado = adaptado;
    }
    Precio(){
        function numVentprecio(numero_ventanas, precio){
            if (numero_ventanas < 2){
                return precio*(-0.02);
            }
            if (numero_ventanas > 4){
                return precio*0.02;
            }
            return 0;
        }
        if (this.m2 > 50){
            return this.precio + numVentprecio(this.numero_ventanas, this.precio) + this.precio*0.01;
        }
    
        return this.precio + numVentprecio(this.numero_ventanas, this.precio);
    }
    
}
class Industrial extends Local{
    puerto_carga;
    suelo_urbano;

    constructor(direccion, m2, refCatastral, coordenadas, nuevo, precio, numero_ventanas, persiana_metalica, puerto_carga, suelo_urbano){
        super(direccion, m2, refCatastral, coordenadas, nuevo, precio, numero_ventanas, persiana_metalica);
        this.puerto_carga = puerto_carga;
        this.suelo_urbano = suelo_urbano;
    }
    setPuertoCarga (puerto_carga){
        this.puerto_carga = puerto_carga;
    }
    setSueloUrbano (suelo_urbano){
        this.suelo_urbano = suelo_urbano;
    }
    Precio(){
        function numVentprecio(numero_ventanas, precio){
            if (numero_ventanas < 2){
                return precio*(-0.02);
            }
            if (numero_ventanas > 4){
                return precio*0.02;
            }
            return 0;
        }
        if (this.m2 > 50){
            if (this.suelo_urbano == true){
                this.precio = this.precio + numVentprecio(this.numero_ventanas, this.precio) + this.precio*0.01; 
                //primero guardamos el precio y despues hacemos el calculo de +25%(comision del ayuntamiento), porque ese seria del precio total.
                return this.precio + this.precio*0.25;
            }
            return this.precio + numVentprecio(this.numero_ventanas, this.precio) + this.precio*0.01;
        }
        return this.precio + numVentprecio(this.numero_ventanas, this.precio);
    }
}
class Restauracion extends Local{
    exctractorHumo;
    cafetera;
    muebles;

    constructor(direccion, m2, refCatastral, coordenadas, nuevo, precio, numero_ventanas, persiana_metalica, exctractorHumo,cafetera,muebles){
        super(direccion, m2, refCatastral, coordenadas, nuevo, precio, numero_ventanas, persiana_metalica);
        this.exctractorHumo = exctractorHumo;
        this.cafetera = cafetera;
        this.muebles = muebles;
    }
    setExctractorHumo(exctractorHumo){
        this.exctractorHumo = exctractorHumo;
    }
    setCafetera (cafetera){
        this.cafetera = cafetera;
    }
    setMuebles(muebles){
        this.muebles = muebles;
    }
    Precio(){
        function numVentprecio(numero_ventanas, precio){
            if (numero_ventanas < 2){
                return precio*(-0.02);
            }
            if (numero_ventanas > 4){
                return precio*0.02;
            }
            return 0;
        }
        if (this.m2 > 50){
            return this.precio + numVentprecio(this.numero_ventanas, this.precio) + this.precio*0.01;
        }
    
        return this.precio + numVentprecio(this.numero_ventanas, this.precio);
    }

}

//prueba1 = new Industrial("asdf", 52, "", "",false, 20000, 5, true, true, true);
//console.log(prueba1);
//console.log(prueba1.Precio());

//es lo mismo para restauracion, ya que son los mismos calculos para el precio.

//prueba1 = new Comercial("asdf", 49, "", "", false, 20000, 1, true, false);
//console.log(prueba1);
//console.log(prueba1.Precio());
//prueba2 = new Comercial("asdf", 422, "", "", false, 20000, 1, true, false);
//console.log(prueba2.Precio());
//prueba3 = new Comercial("asdf", 422, "", "", false, 20000, 2, true, false);
//console.log(prueba3.Precio());
//prueba4 = new Comercial("asdf", 422, "", "", false, 20000, 5, true, false);
//console.log(prueba4.Precio());

//prueba1 = new Restauracion("asdf", 49, "", "", false, 20000, 1, true, false);
//console.log(prueba1);
//console.log(prueba1.Precio());
//prueba2 = new Restauracion("asdf", 422, "", "", false, 20000, 1, true, false);
//console.log(prueba2.Precio());
//prueba3 = new Restauracion("asdf", 422, "", "", false, 20000, 2, true, false);
//console.log(prueba3.Precio());
//prueba4 = new Restauracion("asdf", 422, "", "", false, 20000, 5, true, false);
//console.log(prueba4.Precio());

//prueba1= new Piso("", 60, "", "", true, 20000, 2, 1, true, 10);
//console.log(prueba1.Precio());
//prueba1= new Piso("", 60, "", "", true, 20000, 4, 1, false, 10);
//console.log(prueba1.Precio());
//prueba1= new Piso("", 60, "", "", true, 20000, 4, 1, true, 10);
//console.log(prueba1.Precio());
//prueba1= new Piso("", 60, "", "", true, 20000, 2, 1, true, 11);
//console.log(prueba1.Precio());
//prueba1= new Piso("", 60, "", "", true, 20000, 2, 1, true, 13);
//console.log(prueba1.Precio());
//prueba1= new Piso("", 60, "", "", true, 20000, 2, 1, true, 20);
//console.log(prueba1.Precio());
//prueba1= new Piso("", 60, "", "", true, 20000, 2, 1, true, 111);
//console.log(prueba1.Precio());