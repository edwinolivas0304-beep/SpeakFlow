const voz = new SpeechSynthesisUtterance();

voz.lang = "es-ES";
voz.volume = 1;
voz.rate = 1;
voz.pitch = 1;

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