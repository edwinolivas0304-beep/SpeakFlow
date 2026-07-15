const voz = new SpeechSynthesisUtterance();

voz.lang = "es-ES";
voz.volume = 1;
voz.rate = 1;
voz.pitch = 1;

function hablar(texto){

    if(texto.trim() === ""){
        return;
    }

    window.speechSynthesis.cancel();

    voz.text = texto;

    window.speechSynthesis.speak(voz);

}