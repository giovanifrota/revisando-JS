//Contar quantos numeros pares e quantos numeros impares nós temos entre 0 e 100;

let totalNumeroPares = 0;
let totalNumerosImpares = 0;
let contador = 0;

//laço de repetição

while (contador <= 100) {
  if (contador % 2 == 0) {
    totalNumeroPares++;
  } else {
    totalNumerosImpares++;
  }
  contador++;
}
console.log(`Total de numeros pares: ${totalNumeroPares}`);
console.log(`Total de numeros Impares: ${totalNumerosImpares}`);
