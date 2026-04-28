const pessoa = {
  nome: "Murilo",
  idade: 30,
};

//console.log(pessoa.nome);
//console.log(pessoa.idade);

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

function saudacao({ nome, idade }) {
  console.log(`Olá, ${nome}`);
  if (idade > 18) {
    console.log("Maior de idade");
  }
}

saudacao(pessoa);

const frutas = ["Uva", "Banana"];

const [primeira, segunda] = frutas;
