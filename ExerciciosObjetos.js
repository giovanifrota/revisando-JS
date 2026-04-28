//1. Criando um objeto pessoal
const pessoa = {
  nome: "Giovani",
  idade: 25,
  profissão: "Programador",
};
console.log(pessoa);

//2. Acessando propriedades

console.log(pessoa.nome);

//3. Atualizando valores
pessoa.idade = 26;

console.log("Nova Idade", pessoa.idade);

//4. Adicionando uma nova propriedade

pessoa.cidade = "São Paulo";

console.log(pessoa);

//5. Função com objeto
function saudacao(pessoa) {
  return (
    "Olá! Meu nome é " +
    pessoa.nome +
    "tenho " +
    pessoa.idade +
    "e sou " +
    pessoa.profissão
  );
}

console.log(saudacao(pessoa));

//6. Lista de pessoas
const pessoas = [
  {
    nome: "Marcos",
    idade: 65,
  },
  {
    nome: "Murilo",
    idade: 30,
  },
  {
    nome: "Renata",
    idade: 60,
  },
];

console.log(pessoas);

//7. Filtrando maiores de idade

for (let i of pessoas) {
  if (i.idade >= 18) {
    console.log(`${i.nome} é maior de idade`);
  }
}

//8. Objeto com método

const usuario = {
  nome: "Caue",
  saudacao: function () {
    console.log("Ola, eu sou " + usuario.nome);
  },
};

usuario.saudacao();
