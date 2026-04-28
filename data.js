const agora = new Date();

console.log(agora);

console.log("Ano: ", agora.getFullYear());
console.log("Mês: ", agora.getMonth());
console.log("dia do Mês: ", agora.getDate());
console.log("Hora: ", agora.getHours());
console.log("Minutos: ", agora.getMinutes());

const nascimento = new Date("2001-01-11:09:00:00.000Z");

console.log(nascimento);

console.log("Data formatada (BR): ", nascimento.toLocaleDateString("pt-BR"));
console.log("Data formatada (USA): ", nascimento.toLocaleDateString("en-US"));
