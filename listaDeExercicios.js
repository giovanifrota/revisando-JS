//1. Verificação de idade para compra de bebida
const idade = 25;

if (idade >= 18) {
  console.log(`Pode comprar bebida alcoólica`);
} else {
  console.log(`Venda proibida para menores de 18 anos`);
}

//2. Saudação de acordo com a hora
const horaAtual = 11;
if (horaAtual >= 6 && horaAtual < 12) {
  console.log(`Bom dia`);
} else if (horaAtual >= 12 && horaAtual <= 18) {
  console.log(`Boa tarde`);
} else {
  console.log(`Boa Noite`);
}

//3. Verificação de número positivo ou negativo
const numero = -1;

if (numero > 0) {
  console.log(`Numero Positivo`);
} else if (numero == 0) {
  console.log(`Igual a zero`);
} else {
  console.log(`Numero Negativo`);
}

//4. Conversão de nota em conceito
const nota = 10;

if (nota >= 9) {
  console.log(`A (9-10)`);
} else if (nota == 8) {
  console.log(`B (8-9)`);
} else if (nota == 6 || nota == 7) {
  console.log(`C (6-7.9)`);
} else if (nota == 4 || nota == 5) {
  console.log(`D (4-5.9)`);
} else {
  console.log(`E (0-3.9)`);
}

//5. Número par ou ímpar com ternário
const numeroParOuImpar = 1;

numeroParOuImpar % 2 == 0 ? console.log(`Par`) : console.log(`Impar`);

//6. Menu com switch-case
const opcao = 3;

switch (opcao) {
  case 1:
    console.log(`1- Cadastrar`);
    break;
  case 2:
    console.log(`2- Listar`);
    break;
  case 3:
    console.log(`3- Sair`);
}

//7. Validação de campo obrigatório
const email = "";

if (!email) {
  console.log(`Preencha o campo de e-mail`);
}

//8. Validação de senha segura
const senha = 12345;
const senhaValida = false;

if (senhaValida) {
  console.log(`Senha válida`);
} else {
  console.log(`Senha muito curta`);
}

//9. Compra com saldo
const saldoDisponivel = 50;
const valorCompra = 30;

if (saldoDisponivel >= valorCompra) {
  console.log(`Compra aprovada`);
} else {
  console.log(`Saldo insuficiente`);
}

//10. Validação de formulário completo
const nome = "Giovani";
const emailFormulario = "giovanifrota45@gmail.com";
const idadeFormulario = 25;
const formularioValido = false;

if (formularioValido) {
  console.log(`Formulário enviado com sucesso`);
} else {
  console.log(`Por favor, preencha todos os campos corretamente`);
}
