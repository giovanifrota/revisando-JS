const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let acertos = 0;

rl.question(
  `Qual o maior campeao da Champions League? \n a( Real Madrid, \n b( Bayern de Munique, \n c) Milan, \n d)Liverpool ,\n e)Barcelona \n  `,
  (resposta1) => {
    if (resposta1 == "a") {
      acertos++;
    }
    rl.question(
      `Qual o maior campeao da libertadores? \n a) River Plate, \n b) Boca Juniors , \n c) Peñarol, \n d) Independente \n `,
      (resposta2) => {
        if (resposta2 == "d") {
          acertos++;
        }
        rl.question(
          `Qual seleção com mais titulos? \n a) França, \n b) Brasil, \n c) Alemanha, \n d) Italia \n`,
          (resposta3) => {
            if (resposta3 == "b") {
              acertos++;
            }

            if (acertos == 3) {
              console.log(`Parabens você manja muito de futebol!`);
            } else if (acertos == 2) {
              console.log(`Você entende bem de futebol!`);
            } else if (acertos == 1) {
              console.log(`Voce entende de futebol, mas da para melhorar!`);
            } else {
              console.log(`Estude mais!`);
            }

            rl.close();
          },
        );
      },
    );
  },
);
