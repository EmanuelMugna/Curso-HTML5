/* Mi primer programa Java*/

/*Declaracion de variables*/

var foto;

////////////////////////////////////

function inicio(){

 foto = document.getElementsByTagName("img")[ 0];
 foto.addEventListener("mouseover", crecer,false)
 foto.addEventListener("mouseout", decrecer,false)
 foto.addEventListener("click",ejecuta,false)
}

function ejecuta(){
    alert('Mensaje on Click');
}

function crecer(){
    foto.width=225;
    foto.heigth=225;
}

function decrecer(){
    foto.width=200;
    foto.heigth=200;
}

window.onload=inicio;