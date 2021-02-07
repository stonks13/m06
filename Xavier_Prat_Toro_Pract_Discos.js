class Disco {
    disc_Name;
    disc_Author;
    disc_date;
    disc_style;
    disc_location = 0;
    disc_borrowed = false;
    disc_Url = "www.hfds";

    //sistema de guardado de localizacion --> 145(posicion)5(estante) --> 3455 // 7341 // 0012

    constructor(){

    }
    set_inf(x, y, z, t, a){
        // FALTA DECLARAR EXCEPTION ERROR
        // AAAAAAAAAAAAAAAAA
        // AAAAAAAAAAAAAAAAA
        // AAAAAAAAAAAAAAAAA
        this.set_Name(x);
        this.set_Author(y);
        this.set_Date(z);
        this.set_style(t);
        if (!!a) this.set_Location(a);

    }

    set_Name(x){
        this.disc_Name = x;
    }
    set_Author(x){
        this.disc_Author = x;
    }
    set_Date(x){
        this.disc_date = x;
    }
    set_style(x){
        this.disc_style = x;
    }
    set_Location(x){
        this.disc_location = x; 
    }
    set_Borrowed(x){
        this.disc_borrowed = x;
    }
    set_Url(x){
        this.disc_Url = x;
    }
    get_Disco(){
        var mostrar = [
            ["Nombre: " + this.disc_Name],
            ["Autor: " + this.disc_Author],
            ["Fecha: " + this.disc_date],
            ["Estilo: " + this.disc_style],
            ["Estante: " + this.disc_location],
            ["Prestado: " + this.disc_borrowed],
            ["Foto: " + this.disc_Url]
        ]
        return mostrar;
    }
}

class Author{
    Author;
    Date_born;
    constructor(){

    }
    set_Author(x){
        this.Author = x;
    }
    set_Date_Born(x){
        this.Date_born = x;
    }
}

class Discografia{
    
    constructor(){

    }

    set_Add(disc_Name, disc_Author, disc_date, disc_style, disc_location){
        var ds = new Disco();
        ds.set_inf(disc_Name, disc_Author, disc_date, disc_style, disc_location);
        discos.push(ds);

    }
    set_remove(name){
        function remove(name){
            return discos[1] != name;
        }
        var filtr_discs = discs.filter((aa) => discs[aa] != name);
        return filtr_discs;
    }

}

var discs = [
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "ACDC", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"],
    ["Chinese Democracy", "Guns `n Roses", 2008, "Hard Rock", 0, false, "www.url.es"]
]

da = new Discografia();
console.log(discs);
da.set_remove("ACDC");
console.log(discs);
