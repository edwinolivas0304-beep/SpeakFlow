const voz = new SpeechSynthesisUtterance();
voz.volume = 1;
voz.rate = 1;
voz.pitch = 1;

function hablar(texto){

    if(texto.trim() === ""){
        return;
    }

    speechSynthesis.cancel();
    speechSynthesis.getVoices();
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