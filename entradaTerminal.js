const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question(`Qual o seu nome? `, (nome) => {
  console.log(`Olá ${nome}`);
  console.log(`Seja muito bem vindo ao nosso sistema`);

  leitor.question(
    `Esse site é para maiores de idade! Voce tem mais que 18 anos? `,
    (idade) => {
      if (idade >= 18) {
        console.log(`Você esta autorizado a entrar no sistema`);
      } else {
        console.log(`Você não está autorizado a entrar no sistema`);
      }

      leitor.close();
    },
  );
});
