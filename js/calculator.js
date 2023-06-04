const display = document.querySelector(".calculator .display input");
const buttons = document.querySelectorAll(".buttons .calc-num");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");

buttons.forEach((button) => {
  button.addEventListener("click", calcButtons);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", calcOperadores);
});

equalButton.addEventListener("click", calcularResultado);

let expresion = "";
let resultado = 0;
let seleccionandoValor = true;

function calcButtons(event) {
  const button = event.target;
  const value = button.value;

  if (value === "CA") {
    resetDisplay();
    return;
  }

  expresion += value;
  display.value = expresion;
}

function calcOperadores(event) {
  const operador = event.target.value;

  if (seleccionandoValor) {
    if (operador === "-" && expresion === "") {
      expresion += operador;
      display.value = expresion;
    }
  } else {
    expresion = expresion.slice(0, -1); // Eliminar el último operador
    expresion += operador;
    display.value = expresion;
  }

  seleccionandoValor = false;
}

function calcularResultado() {
  if (!seleccionandoValor) {
    resultado = eval(expresion);
    display.value = resultado;
    expresion = resultado.toString();
    seleccionandoValor = true;
  }
}

function resetDisplay() {
  expresion = "";
  resultado = 0;
  seleccionandoValor = true;
  display.value = "";
}
