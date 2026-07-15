const textarea = document.getElementById("ingresa");
const contador = document.getElementById("contador");
const botonHablar = document.getElementById("hablar");
textarea.addEventListener("input", () => {
    contador.textContent = `${textarea.value.trimStart().length} caracteres`;
});
botonHablar.addEventListener("click", () => {
    hablar(textarea.value.trimStart());
});