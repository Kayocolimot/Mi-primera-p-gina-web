let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinarBoton = document.getElementById("adivinarBoton");
let numeroUsuario = document.getElementById("numeroUsuario");
let resultado = document.getElementById("resultado");

adivinarBoton.onclick = function() {
    let intento = numeroUsuario.value;
    if (intento == numeroSecreto) {
        resultado.textContent = "¡Felicitaciones! ¡Adivinaste el número!";
    } else {
        resultado.textContent = "Lo siento, ese no es el número. Intenta de nuevo.";
    }
};
