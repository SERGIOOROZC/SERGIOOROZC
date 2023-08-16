const nombre = document.getElementById("nombre");
const email = document.getElementById("emails");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensagem");
const error = document.getElementById("error");



function enviarFormulario(){
    console.log("enviando formulario...");
    
    const mensajesError = [];

    if(nombre.value === null || nombre.value ===""){
        mensajesError.push("Ingresa tu nombre");
    }

    if(email.value === null || email.value ===""){
        mensajesError.push("Ingresa tu email");
    }

    if(asunto.value === null || asunto.value ===""){
        mensajesError.push("Ingresa asunto");
    }

    if(mensagem.value === null || mensagem.value ===""){
        mensajesError.push("Ingresa tu mensaje");
    }  

    error.innerHTML= mensajesError.join(" , "); 

    return false;

}
                  
    

    
    
    

           

    
 