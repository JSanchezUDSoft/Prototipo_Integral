// Controlador

function verResultados() {
  let seleccion = document.getElementById("cultivo");
  let cultivo = seleccion.options[seleccion.selectedIndex].value;

  let largo = document.getElementById("largo").value;
  let ancho = document.getElementById("ancho").value

  let respuesta = "";

  if(ancho < 0 || largo < 0){
    respuesta = "La distancia no pueden ser negativa, por favor ingrese valores positivos."
  }else{
    respuesta = resultado(cultivo, largo, ancho);
  }

  document.getElementById("resultados").innerHTML = respuesta;
}

// Logica
function cultivosxSurco(ancho, disPlanta) {
  return Math.floor(ancho * disPlanta);
}

function numCultivos(area, disPlanta) {
  return Math.floor((area * disPlanta) / 2);
}

function resultado(cultivo, largo, ancho) {
  let disSurcos = 0;
  let disPlanta = 0;
  let area = largo * ancho;
  let numSurcos = largo / 2;
  let respuesta = "";
  let infoEspecifica = "\n";
  let totalCultivos = 0;
  let cultivoxSurco = 0;

  if (cultivo == "papa") {
    disPlanta = 0.25;
    disSurcos = 1;

    infoEspecifica +=
      "Ubicación sobre los 3000 m sobre el nivel del mar, una temperatura inferior a los 10 grados de manera constante puede resultar perjudicial (muy perjudicial para la papa criolla).";
  } else if (cultivo == "calabaza") {
    disPlanta = 0.6;
    disSurcos = 0.82;

    infoEspecifica += "La calabaza debe tener una temperatura óptima en el suelo de 15.5 grados centígrados.";
  } else if (cultivo == "frijol") {
    disPlanta = 0.25;
    // Terrenos planos
    disSurcos = 1;
    cultivoxSurco = cultivosxSurco(ancho, disPlanta);
    totalCultivos = numCultivos(area, disPlanta);

    respuesta+="Para terrenos planos:\n\n"
    respuesta += `Area del cultivo: ${area} m\xB2 \nNumero de surcos: ${numSurcos}\nDistacia entre surcos: ${disSurcos} m.\n`;
    respuesta += `Distancia entre plantas ${disPlanta}m\nNumero de cultivos por surco: ${cultivoxSurco}\nNumero total de cultivos: ${totalCultivos}\n`;
    respuesta += "\nPara terrenos con pendientes, elevados:\n\n";
    // Terrenos con pendientes, elevados
    disSurcos = 1.35;

    infoEspecifica += "El frijol para dar una buena cosecha libre de problemas debe estar entre los 15 y los 27 grados centígrados.";
  } else if (cultivo == "mazorca") {
    disPlanta = 0.2;
    disSurcos = 0.85;

    infoEspecifica += "El maíz debe tener una temperatura mínima de 10 grados centígrados y una máxima de 40 grados centígrados, es decir que el maíz tolera altas temperaturas, pero no bajas temperaturas (si el cultivo está por debajo del límite no es instantáneo que el cultivo de pierde o se estropea, pero sube la posibilidad de que esto suceda).";
  } else if (cultivo == "arveja") {
    disPlanta = 0.2;
    disSurcos = 0.95;

    infoEspecifica += "La arveja es un cultivo muy delicado que puede verse afectado por temperaturas inferiores a los 5 grados, cuando este cultivo se ve sometido a temperaturas de 5 grados o inferiores detiene su crecimiento, si este cultivo se somete a temperaturas bajo cero se pierde su cosecha, de igual manera no puede estar expuesto a temperaturas superiores a 34 grados, un rango óptimo es el de 13 grados a 20 grados.";
  } else {
    respuesta = "Error, por favor intente de nuevo.";
    return respuesta;
  }

  cultivoxSurco = cultivosxSurco(ancho, disPlanta);
  totalCultivos = numCultivos(area, disPlanta);

  respuesta += `Area del cultivo: ${area} m\xB2 \nNumero de surcos: ${numSurcos}\nDistacia entre surcos: ${disSurcos} m\n`;
  respuesta += `Distancia entre plantas ${disPlanta}m\nNumero de cultivos por surco: ${cultivoxSurco}\nNumero total de cultivos: ${totalCultivos}\n`;
  respuesta += infoEspecifica;

  return respuesta;
}
