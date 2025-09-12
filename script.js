let cantidadInput = document.getElementById("cantidad");
let interesInput = document.getElementById("interes");
let tiempoInput = document.getElementById("tiempo");
let calcularBoton = document.getElementById("calcularBoton");
let resultadoParrafo = document.getElementById("resultado");

calcularBoton.onclick = function() {
  let cantidad = parseFloat(cantidadInput.value);
  let interes = parseFloat(interesInput.value) / 100;
  let tiempo = parseFloat(tiempoInput.value);

  // Fórmula de interés compuesto:
  // Valor Futuro = Cantidad inicial * (1 + tasa de interés)^tiempo
  let valorFuturo = cantidad * Math.pow((1 + interes), tiempo);

  if (isNaN(valorFuturo)) {
    resultadoParrafo.textContent = "Por favor, ingresa valores válidos.";
  } else {
    resultadoParrafo.textContent = `Tu inversión crecerá a $${valorFuturo.toFixed(2)}`
  }
};
