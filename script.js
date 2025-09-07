let calcularBoton = document.getElementById("calcularBoton");
let pesoInput = document.getElementById("peso");
let alturaInput = document.getElementById("altura");
let resultadoParrafo = document.getElementById("resultado");

calcularBoton.onclick = function() {
  let peso = pesoInput.value;
  let altura = alturaInput.value;

  if (peso > 0 && altura > 0) {
    let imc = peso / (altura * altura);
    resultadoParrafo.textContent = "Tu IMC es: " + imc.toFixed(2);
  } else {
    resultadoParrafo.textContent = "Por favor, ingresa valores válidos.";
  }
};
