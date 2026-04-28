const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = idade >= maiorDeIdade && possuiCNH; //AND

console.log(`Pode Dirigir? ${podeDirigir}`);

const podeViajarSozinha = maiorDeIdade >= 18 || possuiCNH; //OR

console.log(`Pode Viajar Sozinha? ${podeViajarSozinha}`);

const precisaDeAcompanhante = !maiorDeIdade; //NOT
console.log(`Precisa de acompanhante? ${precisaDeAcompanhante}`);
