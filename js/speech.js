const voz = new SpeechSynthesisUtterance();
var lenguaje=document.getElementById("idioma")
voz.volume = 1;
voz.rate = 1;
voz.pitch = 1;
voz.lang = "'"+lenguaje.value+"'";

function hablar(texto){
console.log(voz.lang)
    if(texto.trim() === ""){
        return;
    }

    speechSynthesis.cancel();
    voz.text = texto;
    speechSynthesis.speak(voz);

}
function pausar(){
    speechSynthesis.pause();
}
function continuar(){
    speechSynthesis.resume();
}
function detener(){
    speechSynthesis.cancel();
}