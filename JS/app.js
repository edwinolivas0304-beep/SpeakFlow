const textarea = document.getElementById("ingresa");

const botonHablar = document.getElementById("hablar");

botonHablar.addEventListener("click", () => {

    hablar(textarea.value);

});