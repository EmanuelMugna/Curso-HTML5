/* Mi primer programa Java*/

function inicio(){

 var foto = document.getElementsByTagName("img")[ 0];
 foto.addEventListener("click", ejecuta,false)


}

function ejecuta(){
    alert('Mensaje on Click');
}

window.onload=inicio;