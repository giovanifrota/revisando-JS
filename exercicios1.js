//1. Boas-vindas personalizadas
let nomeCompleto = "Giovani Macedo Frota Dall'Acqua";
console.log("Olá", nomeCompleto, "! Seja Bem-vindo ao curso de JavaScript");

//2. Cálculo de idade
let anoAtual = 2026;
let anoNascimento = 2001;
let idade = anoAtual - anoNascimento;
console.log("Você tem ", idade, "anos");

//3. Mensagem de localização
let cidade = "São Paulo";
let estado = "SP";
let pais = "Brasil";
console.log("Você está em: ", cidade, "-", estado, pais);

//4. Tipo da variável:
let temCarteira = true;
console.log(typeof temCarteira);

//5. Simulação bancária simples:
let saldoInicial = 0;
let deposito = 200;
let saque = 50;
let saldoFinal = saldoInicial + deposito - saque;
console.log(
  "Seu saldo atual é de: ",
  saldoFinal,
  "Pois seu saldo inicial era de: ",
  saldoInicial,
  "Deposito de: ",
  deposito,
  "saque: ",
  saque,
);

//6. Média de notas:
let portugues = 5;
let matematica = 3;
let ciencias = 8;
let media = (matematica + portugues + ciencias) / 3;
console.log("Sua media é de: ", media);

//7. Reajuste de salário:
let salario = 3000;
let aumento = salario * 1.1;
console.log("Seu novo salario com aumento de 10% é de: ", aumento);

//8. Contador de cliques:
let cliques = 0;
for (let cliques = 0; cliques < 3; cliques++) {
  console.log(cliques);
}

//9. Constantes não podem ser alteradas
const pi = 3.14;
//const pi = 4;
console.log("Erro pois const nao pode ser alterado, é uma constante");

//10. Concatenando tipos diferentes
let mensagem = "Ola";
let numero = 7;
let juncao = mensagem + numero;
console.log(typeof juncao);
