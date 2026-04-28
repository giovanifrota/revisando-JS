let pessoa = {
  nome: "Ana",
  idade: 26,
  temCNH: true,
};

pessoa.sobrenome = "Paula";

console.log(`Nome: ${pessoa.nome}`);
console.log(`Sobrenome: ${pessoa.sobrenome}`);

const livro = {
  titulo: "Transformando Suor em Ouro",
  autor: "Jõao Pedro Paes Leme",
  paginas: 215,
};

livro.publicado = true;
livro.idiomas = ["Portugues", "Ingles", "Espanhol", "Italiano"];

console.log("Livro antes de adicionar novos idiomar: ", livro);

//adicionando idiomar

livro.idiomas.push("Mandarim");
livro.idiomas.push("Francês");

console.log("Livro depois de adicionar novos idiomas: ", livro);

//Manipulando propriedades do objeto

delete livro.paginas;

console.log("Livro apos a remoção das paginas: ", livro);

//Acessando a propriedade de forma alternativa

console.log("Autor do Livro: ", livro["autor"]);

//Criando e utilizando objetos alinhados

const autor = {
  nome: "Jõao Pedro Paes Leme",
  nacionalidade: "Brasileiro",
  idade: 70,
};

console.log("Autor", autor);

livro.autor = autor;

console.log(livro);
