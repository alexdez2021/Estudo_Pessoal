const nome = 'Alex';
const sobrenome = 'Santos';
const idade = 28;
const peso = 90;
const altura = 1.70;
let imc;
let anoNascimento ;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

//TEMPLATE STRING COM O USO DO ${}
console.log(`${nome} ${sobrenome}, nascido em ${anoNascimento}. Sua idade é ${idade} anos. Seu peso é de ${peso} Kilos e tem ${altura.toFixed(2)} de altura. E seu IMC é de ${imc.toFixed(2)}`);

