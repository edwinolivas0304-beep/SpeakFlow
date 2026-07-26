const voz = new SpeechSynthesisUtterance();
voz.volume = 1;
voz.rate = 1;
voz.pitch = 1;
voz.lang = "es-ES";
function hablar(texto){

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