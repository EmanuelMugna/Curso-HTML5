

function comenzar(){

    edad=document.getElementById("edad");
    edad.addEventListener("change",cambia_rango,false);
    
    document.registro_usuario.addEventListener("invalid", validar,true);
    document.getElementById("enviar").addEventListener("click",enviar,false);
    
    }
    
    function cambia_rango (){
    
        var salida=document.getElementById("rango");
        var calculo=edad.value-30;
    
        if (calculo<30){
            calculo=0;
    
            edad.value=30;
        }
    
        salida.innerHTML=calculo+" a "+edad.value;
    }
    
    function validar (e){
    
        var elemento=e.target;
        elemento.style.background="#ffdddd";
    
    }
    
    function enviar(){
    
        var correcto=document.registro_usuario.checkValidity();
    
        if(correcto==true){
            document.registro_usuario.submit();
        }
    }
    
    
    
    window.addEventListener("load",comenzar,false);
    