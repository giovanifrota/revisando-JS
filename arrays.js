const frutas = ["Maça", "Banana", "Uva", "Kiwi", "Melão"];

console.log(`${frutas}`);

console.log(`Primeira fruta: ${frutas[0]}`);

console.log(`Ultima fruta: ${frutas[4]}`);

console.log(`${frutas.length}`);

frutas.push("Melancia");

console.log(`${frutas.length}`);

console.log(`A ultima fruta apos acrescentar +1  ${frutas[frutas.length - 1]}`);

//Como remover um item do array?

frutas.splice(2, 1); // esse metodo recebe 2 parametros. qual a posição do item que você quer remover do array e quantos(no caso só 1 item)

console.log(`${frutas}`);

console.log(`Percorrendo o array com for`);

for (let i = 0; i < frutas.length; i++) {
  console.log(`Indice: ${i}`);
  console.log(`${frutas[i]}`);
}

console.log(`Percorrendo com ForEach`);

frutas.forEach((indice, valor) => {
  console.log(`Indice: ${indice}, ${valor}`);
});

console.log(`Percorrendo com for of`);

for (const fruta of frutas) {
  console.log(`Fruta da vez: ${fruta}`);
}
