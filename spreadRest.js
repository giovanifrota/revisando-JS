let giovani1 = {
  nome: "Giovani",
  idade: 25,
  profissao: "Desenvolvedor",
};

const giovani2 = { ...giovani1 };

giovani2.idade = 26;

console.log(giovani2);

giovani1 = {
  ...giovani2,
  profissao: "Desenvolvedor Senior",
  possuiCNH: true,
};

console.log(giovani1);

const { nome, ...restante } = giovani1;

console.log(nome);
console.log(restante);
