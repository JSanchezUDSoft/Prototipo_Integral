// Controlador

function controlador(){
    
}

function disSurcos(cultivo, largo, ancho) {
    let disSurcos = 0;
    let disPlanta = 0;
    let area = area(largo,ancho);
    let numSurcos = largo/2;
    let respuesta = `Cultivo de ${cultivo}:\n`;
    let totalCultivos= 0;
    let cultivosxSurco=0;
    
    if (cultivo == "papa") {
        disPlanta = 0.25;
        disSurcos = 1;
        cultivosxSurco = cultivosxSurco(ancho,disPlanta);
        totalCultivos = numCultivos(area,disPlanta);

        respuesta+= "papa";
        
    }else if( cultivo == "calabaza"){
        disPlanta = 0.6;
        disSurcos = 0.82;

        respuesta+= "calabaza";

    }else if( cultivo == "frijol"){
        disPlanta = 0.25;
        // Terrenos planos
        disSurcos = 1;

        // Terrenos con pendientes, elevados
        disSurcos = 1.35;

        respuesta+= "frijol";

    }else if( cultivo == "mazorca"){
        disPlanta = 0.2;
        disSurcos = 0.85;

        respuesta+= "mazorca";

    }else if( cultivo == "arveja"){
        disPlanta = 0.2;
        disSurcos = 0.95;

        respuesta+= "arveja";

    }else{
        respuesta="Error, no se han encontrado valores para ese tipo de cultivo."
    }

    return respuesta;
}

// Logica

function area(largo, ancho){
    return largo*ancho;
}

function cultivosxSurco(ancho, disPlanta){
   return ancho*disPlanta;
}

function numCultivos(area, disPlanta){
    return (area*disPlanta)/2;
}


