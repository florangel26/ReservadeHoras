// validacion 

function validar(){
    let rut, nombre, apellidos, edad, correo, fecha, expresionrut, expresionnombre, expresionapellido, expresionedad, expresionmail, expresionfecha, alertaespecialidad, alertahora;

    rut = document.getElementById("rut").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    fecha = document.getElementById("fecha").value;
    expresionrut = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
    expresionnombre =  /^([a-z]{1}[a-zñáéíóú]+[\s]*)+$/;
    expresionapellido = /^([a-z]{1}[a-zñáéíóú]+[\s]*)+$/;
    expresionedad =  /^(\+|\-)?\d+$/;
    expresionmail = /\w+@\w+\.+[a-z]/;
    expresionfecha = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
    // para el alert
    alertaespecialidad = especialidad.options[especialidad.selectedIndex].text;
    alertahora = hora.options[hora.selectedIndex].text;
    
    


    if(!expresionrut.test(rut)){
        alert("El RUT debe ir con punto (.) y guion (-)");
        return false;
    }


    else if (!expresionnombre.test(nombre)){
        alert("en el campo NOMBRES debe ingresar solo letras.");
        return false;
    }
    else if (!expresionapellido.test(apellidos)){
        alert("en el campo APELLIDOS debe ingresar solo letras.");
        return false;
    }
    else if (!expresionedad.test(edad)){
        alert("la edad debe ser solo números.");
        return false;
    }
    
    else if (!expresionmail.test(correo)){
        alert("El correo no es válido.");
        return false;
    }
   
    else if (!expresionfecha.test(fecha)){
        alert("el formato debe ser: dd-mm-yyyy");
        return false;
    }
   
    alert(`Estimado(a)  ${nombre}  ${apellidos}, su hora para ${alertaespecialidad} ha sido reservada para el día ${fecha} a las  ${alertahora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita. Gracias por preferirnos.`);
   
    return true;
   
             
    }

