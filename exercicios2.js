//1. Verificação de maioridade
const idade = 25;
const maiorIdade = 18;
const verificaMaioridade = idade >= maiorIdade;

console.log(`${verificaMaioridade}`);

//2. Situação do aluno
const notaUm = 5;
const notaDois = 7;
const media = (notaUm + notaDois) / 2;
const passouDeAno = media >= 7;
console.log(`A media foi maior ou igual que 7?: ${passouDeAno}`);

//3. Simulação de troco
const valorDeCompra = 35.9;
const valorPago = 50;
const troco = valorDeCompra - valorPago;
console.log(`O valor do troco é de: R$ ${troco}`);

//4. Validação de senha
const senhaAntiga = "123456";
const novaSenha = "123456";
const senhaIguais = senhaAntiga == novaSenha;
console.log(`Senhas iguais? ${senhaIguais}`);

//5. Controle de faltas
const totalAulas = 10;
const faltas = 5;
const limiteDeFaltas = totalAulas * 0.25 < faltas;
console.log(`Voce teve: ${faltas} ultrapassou as faltas? ${limiteDeFaltas}`);

//6. Verificação de login
const temLogin = true;
const temSenha = false;
const temAmbas = temLogin && temSenha;
console.log(`Tem login e senha? ${temAmbas}`);

//7. Valor negado
const disponivel = true;
console.log(`tem disponivel? ${!disponivel}`);

//8. Condições compostas
const numeroUm = 3;
const numeroDois = 7;
const numerosPares = numeroUm % 2 && numeroDois % 2;
const numerosIguais = numeroUm == numeroDois;
console.log(`Os dois numeros são pares? ${numerosPares}`);
console.log(`Os numeros são iguais? ${numerosIguais}`);

//9. Calculadora de porcentagem
const porcentagem = 120 * 0.15;
console.log(`15% de 120 é igual a ${porcentagem}`);

//10. Ordem de operações
const numeroTres = 2;
const numeroQuatro = 3;
const multiplicacao = numeroTres + numeroQuatro * 5;
console.log(
  `a multiplicação foi feita antes da soma pois primeiro faz a multiplicacao e depois a soma. Para fazer a soma primeiro coloca parenteses na soma`,
);
