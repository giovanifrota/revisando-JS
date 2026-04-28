const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let acertos = 0;

rl.question(
  `1- Qual a palavra usamos para criar uma função?\n a) define \n b) function \n c) create \n`,
  (resposta1) => {
    if (resposta1 === "b") {
      console.log("Parabéns, você acertou!");
      acertos++;
    } else {
      console.log("Você errou! resposta certa: b) function");
    }

    rl.question(
      `2- Qual dessas é uma estrutura de repetição?\n a) loopar \n b) repeat \n c) for \n`,
      (resposta2) => {
        if (resposta2 === "c") {
          console.log("Parabéns, você acertou!");
          acertos++;
        } else {
          console.log("Você errou! resposta certa: c) for");
        }

        rl.question(
          `3- Qual valor é considerado falsy em JavaScript?\n a) 1 \n b) 0 \n c) "texto" \n`,
          (resposta3) => {
            if (resposta3 === "b") {
              console.log("Parabéns, você acertou!");
              acertos++;
            } else {
              console.log("Você errou! resposta certa: b) 0");
            }

            if (acertos === 3) {
              console.log("🎉 Parabéns! Você acertou tudo!");
            } else if (acertos === 2) {
              console.log("👍 Muito bom! Continue assim!");
            } else if (acertos === 1) {
              console.log("🙂 Continue melhorando!");
            } else {
              console.log("📚 Continue praticando!");
            }

            rl.close();
          },
        );
      },
    );
  },
);
