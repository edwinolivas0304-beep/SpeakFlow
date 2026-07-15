const textarea = document.getElementById("ingresa");
const contador = document.getElementById("contador");
const botonReproducir = document.getElementById("reproducir");
const botonPausar = document.getElementById("pausar");
const botonDetener = document.getElementById("detener");
const botonContinuar=document.getElementById("continuar");
const tiempo = document.getElementById("tiempo");
botonContinuar.style.display = 'none';
botonPausar.style.display='none';
botonDetener.style.display='none';
textarea.addEventListener("input", () => {
    contador.textContent = `${textarea.value.trim().length} caracteres`;
        const palabras = textarea.value.trim() === "" 
            ? 0 : textarea.value.trim().split(/\s+/).length;
            const minutos = palabras / 200;
            if(minutos < 1 && palabras >= 0){
    tiempo.textContent = "<1 min lectura";
}else{
    tiempo.textContent = `${Math.ceil(minutos)} min lectura`;
}

});
botonReproducir.addEventListener("click", () => {
    hablar(textarea.value.trimStart());
    botonPausar.style.display='block';
    botonDetener.style.display='block';
    botonContinuar.style.display='none';
});
botonPausar.addEventListener("click", () => {
    pausar();
    botonContinuar.style.display = 'block';
    botonPausar.style.display='none';
});
botonDetener.addEventListener("click", ()=>{
    detener();
    botonContinuar.style.display='none';
    botonDetener.style.display='none';
    botonPausar.style.display='none';
});
botonContinuar.addEventListener("click",()=>{
    continuar();
    botonContinuar.style.display = 'none';
    botonPausar.style.display='block';
});