//const readline = require("readline");
import { createInterface } from "readline";
import {
  soma,
  subtracao,
  multiplicacao,
  divisao,
} from "./operacoesMatematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question(`Digite o primeiro numero:\n>`, (numero1) => {
  leitor.question(
    `Digite a operação: \n+: Soma\n-: Subtração\n x: multiplicacao\n/: Divisao\n> `,
    (operacao) => {
      leitor.question(`Digite o segundo numero:\n>`, (numero2) => {
        const num1 = Number(numero1);
        const num2 = Number(numero2);

        let resultado = null;

        if (operacao == "+") {
          resultado = soma(num1, num2);
        } else if (operacao == "-") {
          resultado = subtracao(num1, num2);
        } else if (operacao == "x") {
          resultado = multiplicacao(num1, num2);
        } else if (operacao == "/") {
          resultado = divisao(num1, num2);
        } else {
          console.log("Operação Invalida");
        }

        if (resultado != null) {
          console.log(`O resultado da operação é: ${resultado}`);
        }

        leitor.close();
      });
    },
  );
});
