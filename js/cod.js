/* Mi primer programa Java*/

/*Declaracion de variables*/

var foto;

////////////////////////////////////

function inicio(){

 foto = document.getElementsByTagName("img")[ 0];
 foto.addEventListener("click",ejecuta,false)
 
 parrafo = document.getElementById("parrafo");
 parrafo.addEventListener("click",ejecuta2,true);
 // parrafo.addEventListener("click",ejecuta2,false);  // doy prioridad a segundo cartel (debo siempre leer secuencialmente)
}

function ejecuta(){
    alert('Mensaje on Click de imagen');
}

function ejecuta2(){
    alert('Mensaje on Click de parrafo');
}


window.onload=inicio;