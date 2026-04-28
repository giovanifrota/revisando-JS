//1. Contador de 1 a 10
for (let contador = 0; contador <= 10; contador++) {
  console.log(`${contador}`);
}

//2. Soma de 1 a 100

let contador = 0;

while (contador <= 100) {
  contador++;
}
console.log(`${contador}`);

//4. Contagem regressiva
let contadorAté0 = 10;
while (contadorAté0 >= 0) {
  console.log(`de 10 ate 0: ${contadorAté0}`);
  contadorAté0--;
}

//5. Receber números até digitar 0
let numeroDigitado = 10;

do {
  if (numeroDigitado != 0) {
    numeroDigitado++;
    console.log(`${numeroDigitado}`);
  }
} while (numeroDigitado == 0);
