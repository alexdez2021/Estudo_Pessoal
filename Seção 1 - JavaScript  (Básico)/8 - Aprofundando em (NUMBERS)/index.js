//ABAIXO POSSUI DOIS VALORES NUMERICOS. SENDO UM NÚMERO INTEIRO E OUTRO NÚMERO FLUTUANTE

//CONHECIDO COMO NÚMERO INTEIRO
let num1 = 1; 

//CONHECIDO COMO NÚMERO FLUTUANTE 
let num2 = 2.5; 

//CONVERTENDO UM TIPO NUMÉRICO PARA TIPO (STRING)
console.log(num1.toString() + num2); //BASTA APLICAR O USO DO METODO toString() = RESP: 12.5

//COMO FAZER REPRESENTAÇÃO BINÁRIA 
let num3 = 1010;
console.log(num3.toString(2)); //RESP: 1111110010

//COMO FAZER PARA DEIXAR AS QUANTIDADES DE CASAS DECIMAIS DESEJADA EX: (10.5678909) PARA (10.56) 
let num4 = 10.5678909;
console.log(num4.toFixed(2)); //RESP: 10.57

//IDENTIFICANDO SE O NUMERO É INTEIRO RETORNANDO SE É VERDADEIRO OU FALSO
let num5 = 30;
console.log(Number.isInteger(num5)); //RESP: (TRUE - VERDADEIRO) POIS O 30 É VALOR INTEIRO

//IDENTIFICANDO SE O VALOR COLOCADO NÃO É UM NÚMERO
let num6 = 30 * 'olá';
console.log(Number.isNaN(num6)); // A VARIAVEL num6 ESTÁ RECEBENDO UM VALOR DE 30 X 'OLÁ' PORTANTO A RESP É: (TRUE-VERDADEIRO) 

let num7 = 40 * 30;
console.log(Number.isNaN(num7)); // AQUI SERÁ RETORNADO O VALOR FALSO. POIS A VARIAVEL NUM7 VAI RECEBER UM VALOR NUMERICO = (FALSE)  

let num8 = 0.7;
let num9 = 0.1;

num8 += num9; //0.8
num8 += num9; // 0.9
num8 += num9; //1.00
num8 += num9; //1.1
num8 += num9; //1.2
num8 += num9; //1.3
num8 += num9; //1.4
num8 += num9; //1.5
num8 += num9; //1.6
num8 += num9; //1.7
num8 += num9; //1.8
num8 += num9; //1.9
num8 += num9; //2.0
//num8 = num8(num8.toFixed(2))
// console.log(Number.isInteger(num8));//IDENTIFICANDO SE É UM NÚMERO INTEIRO = RESP: FALSE

num8 = parseFloat(num8.toFixed(2)) //CONVERTENDO O NUMERO QUE POSSUI RESTO DE VALORES, PARA TIPO FLUTUANTE com uso (parseFloat)
console.log(num8);
console.log(Number.isInteger(num8));/*IDENTIFICANDO SE É UM NÚMERO INTEIRO = RESP: FALSE.  OBS: SE O RESULTADO SAIR COM NUMERO REDONDO EX: 2.0 O RESULTADO SERÁ (TRUE-VERDADEIRO)*/














