function ex1_sepVocCons()
{
    function separarVocalesDeConsonantes(str){
        var copy_word = str + "";
        var x = copy_word.length;
        var vocales = "aeiou";
        var conson = "bcdfghjklmnpqrstvwxyz";
        var voc = "";
        var cons = "";
        for(i = 0; i<x; i++){
            for(ii = 0; ii< vocales.length; ii++){
                if(copy_word.toLowerCase().charAt(i)==vocales.charAt(ii)){
                    voc = voc + "" + copy_word.charAt(i);
                }
            }

            for(ii = 0; ii< conson.length; ii++){
                if(copy_word.toLowerCase().charAt(i)==conson.charAt(ii)){
                    cons = cons + "" + copy_word.charAt(i);
                }
            }

        }
        copy_word = voc + "" + cons;
        return copy_word;


    }
    var cadena = "jhvgdsiuhucxnjjzo";
    console.log(cadena);
    cadena = separarVocalesDeConsonantes(cadena);
    console.log(cadena);

}

function ex2_FortPassw (){
    var contraseña = "Holaala1327659";
    var seguro = checkFortalezaContraseña(contraseña);
    if (seguro==true){
        console.log("Contraseña segura");
    } else {
        console.log("Contraseña no segura")
    }


    function checkFortalezaContraseña (passwrd){
        var passwrd = passwrd;
        var l_min = 0;
        var l_may = 0;
        var cant_dig = 0;
        var l_min_seguidas = false;
        var seguridad = true;
        var abc = "abcdefghijklmnñopqrstuvwxyz";
        var nums = "0123456789"
        for (var i = 0; i<passwrd.length; i++){
            for(var ii=0; ii<abc.length; ii++){
                if(passwrd.charAt(i) == abc.toUpperCase().charAt(ii)){
                    l_may++;
                } else if (passwrd.charAt(i) == abc.charAt(ii)){
                    l_min++;
                }
            }
            for (var ii = 0; ii<nums.length; ii++){
                if(passwrd.charAt(i) == nums.charAt(ii)){
                    cant_dig++;
                }
            }
            if(i > 0){
                if (passwrd.charAt(i)==passwrd.charAt(i-1)){
                    l_min_seguidas++;
                } else{
                    l_min_seguidas = 0;
                }

                if (l_min_seguidas >= 2){
                    seguridad = false;
                }
            }
        }
        
        if (seguridad == false){
            return false;
        } else {
            if (passwrd.length < 8) return false;
            if (l_min < 3) return false;
            if (l_may < 1) return false;
            if (cant_dig < 2) return false;
        }
        
        return true;
    }

}

console.log(ex2_FortPassw());