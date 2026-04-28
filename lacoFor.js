//Estrutura do laco de repetição FOR
for (let contador = 1; contador <= 10; contador++) {
  console.log(`Número atual: ${contador}`);
}

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 0) {
    console.log(`Numero Par encontrado: ${numero}`);
  } else {
    console.log(`Numero impar encontrado: ${numero}`);
  }
}

const palavra = "Certificado de conclus";

//palavra.length - Indica quantos caracteres uma string possui
//palavra[1] - Pega a letra na posição indicada

for (let contador = 0; contador < palavra.length; contador++) {
  console.log(`${palavra[contador]}`);
}
