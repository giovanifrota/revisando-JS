let contador = 1;

while (contador <= 10) {
  console.log(`Número atual: ${contador}`);
  contador++;
}

let numero = 1;
do {
  console.log(`Numero Atual com Do While: ${numero}`);
  numero++;
} while (numero <= 5);

let numeroImparOuPar = 0;

while (numeroImparOuPar <= 10) {
  if (numeroImparOuPar % 2 == 0) {
    console.log(`Número par: ${numeroImparOuPar}`);
  } else {
    console.log(`Número impar:  ${numeroImparOuPar}`);
  }
  numeroImparOuPar++;
}
