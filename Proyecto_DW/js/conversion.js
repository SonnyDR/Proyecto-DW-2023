const botonConvertir = document.getElementById("botonConvertir");
botonConvertir.addEventListener('click', function() {

    const numeroIngresado = parseFloat(document.getElementById("numeroIngresado").value);
    const verifNumIngreso = document.getElementById("numeroIngresado").value;
    const op1 = document.getElementById("op1").value;
    const op2 = document.getElementById("op2").value;
    const mostrar = document.getElementById("mostrar");

    let numConv; 

    if (verifNumIngreso !== "" ) {

        if (verifNumIngreso.includes("-")) {
            mostrar.value="No puede ingresar negativos!"
            
        } else {
            switch (op1) {
        
                //CONVIERTE DE SEGUNDO A LOS DEMAS.
                case "s1":
                    if (op2 === "s2") {
                        mostrar.value = "No se puede convertir de Seg a Seg"
        
                    } else if (op2 === "m2") {
                        numConv = numeroIngresado/60;
                        mostrar.value = numConv + " minutos";
                    
                    } else if (op2 === "h2") {
                        numConv = numeroIngresado/3600;
                        mostrar.value = numConv + " hora/s";
                    
                    } else if (op2 === "d2") {
                        numConv = numeroIngresado/86400;
                        mostrar.value = numConv + " dias";
                    }
                    break;
        
                //CONVIERTE DE MINUTOS A LOS DEMAS
                case "m1":
        
                    if (op2 === "s2") {
                        numConv = numeroIngresado * 60;
                        mostrar.value = numConv + " Segundos"
        
                    } else if (op2 === "m2") {
                        mostrar.value = "No se puede convertir de Min a Min"
                    
                    } else if (op2 === "h2") {
                        numConv = numeroIngresado/60;
                        mostrar.value = numConv + " hora/s";
                    
                    } else if (op2 === "d2") {
                        numConv = numeroIngresado/1440;
                        mostrar.value = numConv + " dia/s";
                    }
        
                    break;
        
                    //CONVIERTE DE HORAS A LOS DEMAS
                    case "h1":
        
                    if (op2 === "s2") {
                        numConv = numeroIngresado * 3600;
                        mostrar.value = numConv + " Segundos"
        
                    } else if (op2 === "m2") {
                        numConv = numeroIngresado * 60;
                        mostrar.value = numConv + " Minutos"
                    
                    } else if (op2 === "h2") {
                        mostrar.value = numConv + "No se puede convertir de horas a Horas";
                    
                    } else if (op2 === "d2") {
                        numConv = numeroIngresado/24;
                        mostrar.value = numConv + " dia/s";
                    }
        
                    break;
        
                    //CONVIERTE DE DIAS A LOS DEMAS
                    case "d1":
        
                    if (op2 === "s2") {
                        numConv = numeroIngresado * 86400;
                        mostrar.value = numConv + " Segundos"
        
                    } else if (op2 === "m2") {
                        numConv = numeroIngresado * 1440;
                        mostrar.value = numConv + " Minutos"
                    
                    } else if (op2 === "h2") {
                        numConv = numeroIngresado * 24;
                        mostrar.value = numConv + " Hora/s";
                    
                    } else if (op2 === "d2") {
                        mostrar.value = numConv + "No se puede convertir de Dias a Dias";
                    }
        
                    break;
            
                default:
                    mostrar.value = "Debe de seleccionar una unidad :)"
                    break;
            }
        }
        
    } else {

        mostrar.value = "Debe de ingresar un numero.."

    }

});


//BOTON PARA LIMPIAR LOS CAMPOS
const clear = document.getElementById('botonClear')
    clear.addEventListener('click', function() {

        numeroIngresado.value = ""
        op1.selectedIndex = 0
        op2.selectedIndex = 0
        mostrar.value = ""

    })

