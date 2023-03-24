
//               01234567
let umaString = 'Um texto' // possui 6 caracteres

// uma string[posição] serve para pegar o item na posição desejada
console.log(umaString[7]);  // RESP: SERÁ CAPTURADO A LETRA O

// umastring.charAt(posição) serve tbm para pegar o item na posição desejada
console.log(umaString.charAt(6)); 

//Formas de trabalhar com concatenação
console.log(umaString.concat(' em',' um',' lindo dia.'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

//Identificação de indice
let umaTexto = 'Um texto do alex' //possui 15 caractere
//Identificando qual posição se encontra a letra 't' do indice 7 para trás
console.log(umaString.lastIndexOf('t',7)); 



						//EXPRESSÃO REGULAR

//expressão regular solicitando todas as letras minuscula
console.log(umaString.match(/[a-z]/g));

//Outra expressão regular chamado replace substituindo a palavra 'Um' por 'Novo' 
console.log(umaString.replace('Um', 'Novo'));

let nomeTexto = 'O rato roeu a roupa do rei de roma.';
//.lenght vai pegar as quantidades totais de caracteres que são 32
console.log(nomeTexto.length);

// vai diminuir as quantidades dos ultimos 10 caracteres
console.log(nomeTexto.length -10);

//vai capturar a partir do indice (posição) 7 até o indice(posição) 19
console.log(nomeTexto.slice(7, 19 ));

// vai capturar a partir do indice 32 até o final
console.log(nomeTexto.slice(32)); //resultado: ma.

// vai capturar os ultimos cincos indices
console.log(nomeTexto.slice(-4)); 

//O rato roeu a roupa do rei de roma.
console.log(nomeTexto.slice(-5, -1));
// resultado: roma

console.log(nomeTexto.split('', 4));
// resultado  [ 'O', 'rato', 'roeu' ]



