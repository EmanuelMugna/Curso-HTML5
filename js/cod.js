/* Mi primer programa Java*/

function inicio(){

for(var i=0;i<3;i++){

//    document.getElementsByTagName("p")[i ].onclick=ejecuta;
      var aux=document.getElementsByClassName("menu1") [i ].onclick=ejecuta;
} 
}

function ejecuta(){
    alert('Mensaje on Click');
}

window.onload=inicio;