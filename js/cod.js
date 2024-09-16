// /* Mi primer programa Java*/

// /*Declaracion de variables*/

// var foto;

// ////////////////////////////////////

// function inicio(){

//  foto = document.getElementsByTagName("img")[ 0];
//  foto.addEventListener("click",ejecuta,false)
 
//  parrafo = document.getElementById("parrafo");
//  parrafo.addEventListener("click",ejecuta2,true);
//  // parrafo.addEventListener("click",ejecuta2,false);  // doy prioridad a segundo cartel (debo siempre leer secuencialmente)
// }

// function ejecuta(){
//     alert('Mensaje on Click de imagen');
// }

// function ejecuta2(){
//     alert('Mensaje on Click de parrafo');
// }

// validacion de formulario



function comenzar(){

var nombre=document.getElementById("nombre");

var apellido=document.getElementById("apellido");

nombre.addEventListener("input",validar, false);

apellido.addEventListener("input",validar, false);

validar();

}

function validar(){

    if (nombre.value=="" && apellido.value==""){

        nombre.setCustomValidity("Introduce nombre o apellido");
        nombre.style.background="#ffdddd";
        apellido.style.background="#ffdddd";
    }

    else{

        nombre.setCustomValidity(""); //importante poner mayusula
        nombre.style.background="#ffffff";
        apellido.style.background="#ffffff";
    }

}

window.addEventListener("load",comenzar,false);
//window.onload=inicio;
