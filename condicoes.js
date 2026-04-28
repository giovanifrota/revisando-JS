const nome = "Giovani";
if (nome) {
  console.log(`Olá , `, nome);
} else {
  console.log(`Ainda não sei seu nome!`);
}

const idade = null;

if (idade != null) {
  if (idade >= 18) {
    console.log(`Maior de idade!`);
  } else if (idade >= 0 && idade < 18) {
    console.log(`Menor de idade!`);
  }
}

//Pois a condição de maior de idade tem que ser maior ou igual a 18, e null não é maior e nem igual a 18 entao ele cai no else.
