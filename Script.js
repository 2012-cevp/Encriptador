// Esconder el testo

const entrada=document.querySelector(".entrada-texto");
const salida= document.querySelector(".salida-txt");
const mensajeinf1=document.querySelector("#msj-txt");
const mensajeinf2=document.querySelector("#msj-inf"); 
const copiar=document.querySelector(".copiar");
copiar.style.visibility="hidden";

function btnEncriptar(){
    if(entrada.value== ""){
        alert("Debe ingresar texto para encriptar");
    }else{
        const txt_encriptado=encriptar(entrada.value);
        salida.value=txt_encriptado;
        salida.style.backgroundImage="none";
        mensajeinf1.style.visibility="hidden";
        mensajeinf2.style.visibility="hidden";
        entrada.value="";
        copiar.style.visibility="visible";
    }
    
}



function encriptar(encriptador){
    let reemplazo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    
    encriptador=encriptador.toLowerCase();
    
    for(let i=0;i<reemplazo.length;i++){
        if(encriptador.includes( reemplazo[i][0])){

            encriptador=encriptador.replaceAll(reemplazo[i][0],reemplazo[i][1])
        }
    }
    return encriptador;

}

function btnDesencriptar(){
    if(entrada.value== ""){
        alert("No hay nada para desencriptar");
    }else{
    const txt_encriptado=desencriptar(entrada.value);
    salida.value=txt_encriptado;
    entrada.value=""
    }
}

function desencriptar(desencriptador){
    let reemplazo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    
    desencriptador=desencriptador.toLowerCase();
    
    for(let i=0;i<reemplazo.length;i++){
        if(desencriptador.includes( reemplazo[i][1])){

            desencriptador=desencriptador.replaceAll(reemplazo[i][1],reemplazo[i][0])
        }
    }
    return desencriptador;

}
function btnCopiar(){
    salida.select();
    navigator.clipboard.writeText(salida.value);
    salida="";
    entrada.select();

}