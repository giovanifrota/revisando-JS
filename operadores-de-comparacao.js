const idadeVinny = "25";
const minhaIdade = 25;

//igualdade
//const comparacao = minhaIdade == idadeVinny;
const comparacao = minhaIdade != idadeVinny;
//maior que
//const comparacao = minhaIdade > idadeVinny;
//menor que
//const comparacao = minhaIdade < idadeVinny;
console.log(`São diferentes? ${comparacao}`);

const idadeIrmao = 30;

const souMaiorDeIdade = minhaIdade >= 18;
const meuImraoEMaiorDeIdade = minhaIdade >= 18;

console.log(`Sou maior de idade? ${souMaiorDeIdade}`);
console.log(`Meu irmao é maior de idade? ${meuImraoEMaiorDeIdade}`);

//Comparação estrita

const comparacaoEstrita = minhaIdade !== idadeVinny;
console.log(`São estritamente diferentes? ${comparacaoEstrita}`);
