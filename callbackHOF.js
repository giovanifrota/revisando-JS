// HOF -> Higher-Order function === função que recebe outra funçao como parametro

function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function soma(num1, num2) {
  return num1 + num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

const resultadoDaSoma = calcular(3, 8, soma);
console.log(`Resultado da soma: ${resultadoDaSoma}`); //soma é um callback

const resultadoDaDivisao = calcular(32, 8, divisao);
console.log(`Resultado da divisão: ${resultadoDaDivisao}`); //divisão é um callback
