const pessoas = {
  nome: "Giovani",
  idade: 25,
  nacionalidade: "Brasileiro",
};

//Percorrendo as chaves do objeto

for (const chave in pessoas) {
  console.log("Chave", chave);
  console.log("Valor", pessoas[chave]);
}

//Utilizando métodos de objetos

const chaves = Object.keys(pessoas);
const valores = Object.values(pessoas);
const entradas = Object.entries(pessoas);

console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("Entradas (chave/valor):", entradas);
