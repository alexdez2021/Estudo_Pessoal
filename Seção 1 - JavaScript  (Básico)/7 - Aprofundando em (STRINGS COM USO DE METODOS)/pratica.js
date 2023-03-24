
let umaString = 'Um texto';

//CAPTURANDO ITEM
console.log(umaString[3]); //[COLCHETES]) = nele é posisvel capturar a letra na posição desejada. RESP: Letra X da pos 3 capturada
console.log(umaString.charAt(5)); // charAT() = é semelhante ao uso do colchetes. serve para pegar o item desejado. RESP: Letra S da pos 5 capturada

//METODOS DE CONCATENAR COM USO DO (CONCAT, SINAL de +  E TEMPLATE STRING)
console.log(umaString.concat(' tem ','22 ','anos')); //RESP: Um texto em um lindo dia 
console.log(umaString+ ' em um lindo dia '); //RESP: Um texto em um lindo dia 
console.log(`${umaString} em um lindo dia `); //RESP: Um texto em um lindo dia 

//PESQUISANDO EM QUAL INDICE COMEÇA O DETERMINADO VALOR COM (INDEXOF)
console.log(umaString.indexOf('texto')); //RESP: 3 ou seja, a palavra texto começa no indice/posição 3 

//PESQUISANDO EM QUAL INDICE SE ENCONTRA  ITEM DESEJADO 
console.log(umaString.indexOf('m', 0)); //Em qual posição se encontra a letra M a partir da posição 0? RESP: A letra M está na pos 1

//PESQUISANDO EM QUAL INDICE SE ENCONTRA O ITEM DESEJADO COMEÇANDO PELO ULTIMO ITEM 
console.log(umaString.lastIndexOf('t', 7)); //Em qual posição se encontra a letra T a partir da posição 7? RESP: A primeira letra T está na pos 6

//EXPRESSÃO REGULAR COM USO DO REPLACE
console.log(umaString.replace('texto','simbolo')); //substituindo a palavra (TEXTO) por outra palavra. RESP: (SIMBOLO)

//PUXANDO O TAMANHO DA STRING
console.log(umaString.length);

let animal = 'O rato roeu a roupa do rei de roma';
console.log(animal.length);
//COMO FATIAR POR EX: ROEU A ROUPA DO REI
console.log(animal.slice(7, 26)); //RESP: INICIANDO PELO INDICE 7 ATÉ O INDICE 26 => (roeu a roupa do rei)

//COMO FATIAR INICIANDO DO FINAL EX:  ROUPA DO REI                                
console.log(animal.slice(-21,-8 )); // FATIANDO OS 12 INDICES FINAIS COMEÇANDO PELO ULTIMO VALOR E FATIANDO OS 5 INDICES FINAIS TAMBÉM COMEÇANDO PELO ULTIMO VALOR. resp: (ROUPA DO REI )

console.log(animal.split('a', 3));