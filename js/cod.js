/* Mi primer programa Java*/

function inicio(){

 var a = document.querySelectorAll(".barra");

//document.querySelector(".barra").onclick=ejecuta;
 for(var i=0;i<a.length;i++){

         a[i].onclick=ejecuta;
// //    document.getElementById("importante").onclick=ejecuta               //devuelve un unico elemento
// //    document.getElementsByTagName("p")[i ].onclick=ejecuta;
// //    var aux=document.getElements("menu1") [i ].onclick=ejecuta;
 } 
}

function ejecuta(){
    alert('Mensaje on Click');
}

window.onload=inicio;