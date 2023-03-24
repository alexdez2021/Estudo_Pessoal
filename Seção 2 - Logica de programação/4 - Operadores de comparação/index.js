//Os operadores de comparações, sempre retorna valores booleanos. Ou seja, verdadeiros ou falsos

/*
    Operadores de comparação
    > maior que
    >= maior que ou igual a
    < menor que
    <= menor que ou igual a
    == igualdade (checa apenas valor)
    === igualdade estrito (checa valor e tipo)
    != diferente (checa valor)
    !== diferente estrito (checa valor e tipo)
*/

//perguntando ao motor js se o 10 é maior que 5

    console.log(`10 É MAIOR QUE 5?: ${10 > 5})`);  //resultado: TRUE

    const maior = 20 > 10;
    console.log(`20 É MAIOR QUE 10 ${maior}`); //resultado: TRUE

/*---------------------------------------------------*/

//perguntando se determinado valor é maior ou igual a

    console.log(`20 é maior ou igual a 15?: ${20 >= 15} `); // RESP: (TRUE), POIS 20 NÃO É IGUAL A 15, MAS É MAIOR QUE 15
    console.log(`15 é maior ou igual a 15?: ${15 >= 15}`); // RESP: (TRUE), POIS 15 NÃO MAIOR QUE 15, PORÉM É IGUAL A 15
    
    const maiorOuIgual = 30 >= 31;
    console.log(`30 é maior ou igual a 31?: ${maiorOuIgual}`); // RESP: (FALSE), POIS 30 NÃO É IGUAL A 31, É NÃO É MAIOR QUE 31

    
/*---------------------------------------------------*/

//perguntando ao motor js se o 20 é menor que 5

    console.log(20 < 5); //resultado: FALSE
    const menor = 20 < 5;
    console.log(menor); //resultado: FALSE

/*---------------------------------------------------*/

//perguntando se determinado valor é menor que ou igual a

    console.log(`20 É MENOR OU IGUAL A 5?: ${20 <= 5} `); // RESP:(FALSE). POIS 20 NÃO É MENOR QUE 5, É NÃO É IGUAL A 5
    console.log(`10 É MENOR OU IGUAL A 10?: ${40 <= 80}`); // RESP:(TRUE). POIS 40 NÃO É IGUAL A 80. PORÉM, É MENOR
    const menorOuIgual = 10 <= 10; 
    console.log(menorOuIgual); // RESP: (TRUE), POIS 10 NÃO É MENOR QUE 10. PORÉM É IGUAL A ELE MESMO

/*---------------------------------------------------*/

//perguntando se determinado valor é igual a ele mesmo

const num1 = 10;
const num2 = 10;


console.log(`10 É IGUAL A 10?:  ${num1 == num2}`); //RESP:(TRUE). POIS 10 É SIM IGUAL A ELE MESMO
console.log(`10 É IGUAL A 11?: ${num1 == 11}`); //RESP:(FALSE). POIS 10 NÃO É IGUAL A 11
console.log(`10 É IGUAL A 10, MESMO QUE FOI DEFINIDO O VALOR EM UMA STRING?: ${num1 == '10'}`) //RESP:(TRUE). POR MAIS QUE O VALOR FOI DEFINIDO EM UMA STRING, COM O USO DO OPERADOR DE (IGUALDADE) O JS VAI ENTENDER QUE OS VALORES SÃO IGUAIS. (NÃO É RECOMENDADO TRABALHAR COM ESSE OPERADOR NO JS)
console.log(`10 É IGUAL A 10 QUE FOI DECLARADO COMO STRING?: ${num1 === '10'}`); //RESP:(FALSE)É UM OPERADOR DE IGUALDADE TAMBÉM, POREM ELE CHECA O VALOR E O TIPO.

/*---------------------------------------------------*/

//perguntando se determinado valor é igual a ele mesmo

const num3 = 40;
const num4 = 40;
const num5 = 50;
const num6 = '40';


console.log(` 40 É DIFERENTE QUE 40?: ${num3 != num4}`); //RES:(FALSE). POIS 40 É IGUAL A 40 
console.log(`40 É DIFERENTE DE 50?: ${num3 != num5}`); //RES:(TRUE). 40 É SIM DIFERENTE DE 50 
console.log(`40 É DIFERENTE DO VALOR '40' QUE É UMA STRING?: ${num3 != num6}`); //RESP:(FALSE). POR MAIS QUE O VALOR FOI DEFINO EM UMA STRING, COM O USO DO OPERADOR DE (DIFERENTE) O JS VAI ENTENDER QUE OS VALORES SÃO IGUAIS DE QUALQUER FORMA (NÃO É RECOMENDADO TRABALHAR COM ESSE OPERADOR NO JS)
console.log(`40 É DIFERENTE DO VALOR '40' QUE É UMA STRING?: ${num3 !== num6}`);//RES:(TRUE). SIM, O VALOR 40 É DIFERENTE DO VALOR '40' QUE FOI DECLARADO COMO STRING. ELE CHECA O VALOR E O TIPO
