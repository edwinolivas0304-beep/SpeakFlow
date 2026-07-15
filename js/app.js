const textarea = document.getElementById("ingresa");
const contador = document.getElementById("contador");
const botonHablar = document.getElementById("hablar");
const tiempo = document.getElementById("tiempo");
textarea.addEventListener("input", () => {
    contador.textContent = `${textarea.value.trim().length} caracteres`;
        const palabras = textarea.value.trim === "" 
            ? 0 : textarea.value.trim().split(/\s+/).length;
            const minutos = palabras / 200;
            if(minutos < 1 && palabras > 0){
    tiempo.textContent = "<1 min lectura";
}else{
    tiempo.textContent = `${Math.ceil(minutos)} min lectura`;
}
});
botonHablar.addEventListener("click", () => {
    hablar(textarea.value.trimStart());
});