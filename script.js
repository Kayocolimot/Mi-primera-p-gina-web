let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinarBoton = document.getElementById("adivinarBoton");
let numeroUsuario = document.getElementById("numeroUsuario");
let resultado = document.getElementById("resultado");

// Nuevas variables
let intentosRestantes = document.getElementById("intentosRestantes");
let intentos = 3; // El jugador tendrá 3 intentos

adivinarBoton.onclick = function() {
    intentos--; // Resta 1 a los intentos

    let intento = numeroUsuario.value;
    if (intento == numeroSecreto) {
        resultado.textContent = "¡Felicitaciones! ¡Adivinaste el número!";
        intentosRestantes.textContent = "";
    } else {
        if (intentos > 0) {
            resultado.textContent = `Lo siento, ese no es el número. Te quedan ${intentos} intentos.`;
        } else {
            resultado.textContent = `¡Se acabaron los intentos! El número era ${numeroSecreto}.`;
            adivinarBoton.disabled = true;
        }
    }
};
