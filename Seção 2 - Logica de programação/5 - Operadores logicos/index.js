
//Operadores lógicos - são uteis para checar mais de uma comparação 
    //&& = AND = E: //TODAS AS EXPRESSÕES, PRECISAM SER VERDADEIRAS PARA RETORNAR (VERDADEIRA-TRUE)
    //|| = OR = OU // UMA DAS EXPRESSÕES PRECISAM SER VERDADEIRAS
    //! =  NOT = NÃO


//-------------------------------------------------------------------------------------------------------
//(AND) o resultado sempre deve ser TRUE ou seja, as duas expressões tanto lado esquerdo e direito deve ser verdadeira*/

    //EX: 40 é maior que 20 (e) 12 é maior que 10? RESP: Sim. são verdadeiras (TRUE)
        console.log(40 > 20 && 12 > 10);//REALIZANDO EXPRESSÃO, SENDO QUE AS DUAS SÃO VERDADEIRAS:

    // 40 é maior que 20 (e) 80 é maior que 90? RESP: Não. Pois 40 é maior que 20 mas 80 não é maior que 90
        console.log(40 > 20 && 80 > 90); //REALIZANDO EXPRESSÃO SENDO UMA VERDADEIRA E OUTRA FALSA: (FALSE)

    // É possivel jogar os valores da expressão em uma variavel:
        const expressaoAnd = 40 > 20 && 80 > 90;
        console.log(expressaoAnd); //FALSE
//-------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------
    // 100 é maior que 90 ou 100 é menor que 70? RESP: Sim. Por mais que 100 é menor que 70, por outro lado 100 é maior que 90. aqui pode colocar diversas expressões, se uma das comparações for verdadeira, o resultado vai ser TRUE
        console.log(100 > 90 || 100 < 70); //REALIZANDO EXPRESSÃO SENDO UMA VERDADEIRA E OUTRA FALSA: (TRUE)

    // 100 É MAIOR QUE 200 OU 200 É MENOR QUE 70?: RESP: Não. Pois 100 não é maior que 200 ou 200 tbm não é menor que 70
        console.log(100 > 200 || 200 < 70); //REALIZANDO EXPRESSÃO SENDO QUE UMA É FALSA E OUTRA É FALSA:


//Uma noção de como funciona os operadores logicos no mundo real
const login = 'Alex';
const senha = 1234;

console.log(login === 'Alex' && senha === 12346);

//-------------------------------------------------------------------------------------------------------
// (NEGAÇÃO) o que for verdadeiro, passa a ser verdadeiro ou seja ele serve para inverter o valor
console.log(! true);  // RESP: (FALSE)
console.log(!! true); //RESP: (TRUE) // quando se usa duas vezes o exclamação (!!) ele não inverte