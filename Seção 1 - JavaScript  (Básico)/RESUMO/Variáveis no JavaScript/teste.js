const nome = "alex";
const sobrenome = "santos";
const idade = 27;
const peso = 90;
const altura = 1.70
let anoNascimento;
let indiceMassaCorporal;

indiceMassaCorporal = peso / (altura * altura)
anoNascimento = 2022 - idade; 

console.log(`${nome} ${sobrenome} tem ${idade} anos e seu peso é de ${peso} kilos`);
console.log(`Seu ano de nascimento é de ${anoNascimento}`);
console.log(indiceMassaCorporal);
