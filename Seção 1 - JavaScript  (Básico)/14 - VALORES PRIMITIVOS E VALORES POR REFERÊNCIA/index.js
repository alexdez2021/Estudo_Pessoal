/*
    PRIMITIVOS (IMUTAVEIS): 
      STRING, 
      BOOLEAN, 
      NUMBER, 
      UNDEFINED, 
      NULL, 
      BIGINT,
      SYMBOL
    QUANDO ESTAMOS DISCUTINDO SOBRE USO DOS DADOS PRIMITIVOS, ESTAMOS CITANDO VALORES IMUTAVEIS. OU SEJA, ESSES TIPOS NÃO PODEM SER ALTERADOS 
*/

//EX DE PRIMITIVO (IMUTAVEL)
    let nome1 = 'Julia';
    nome1[0] = 'M';
    console.log(nome1, nome1[0]); //RESP: Julia J 
    //AO TENTAR ALTERAR UM VALOR DO DADO NO INDICE 0 QUE FICA O ELEMENTO (J) PELO (M) NÃO SERÁ POSSIVEL, POIS ELE É IMUTAVEL OU SEJA, TANTO A LETRA (J) E O VALOR INTEIRO JULIA NÃO SERÁ AFETADO PELA LETRA (M)

    let nome = 'Joaõ';
    nome= 'Maria';
    console.log(nome);
    //AQUI A SITUAÇÃO É DIFERENTE, POIS O VALOR DA VARIAVEL FOI TROCADO, NESTE CASO ESTAMOS TROCANDO  O VALOR DA VARIAVEL (Joao) POR (Maria).
/***************************************************************************************************************/
    let varA = 'A';
    let varB = varA; //AQUI ESTA SENDO REALIZADO UMA COPIA, OU SEJA COPIANDO O VALOR DA VARIAVEL (varA) PARA (varB) 
    varA = 'Outra coisa' //ALTERANDO O VALOR DA VARIAVEL (varA) 
    console.log(varA);// resp da varA = 'outra coisa' 
    console.log(varB); // resp da varB = A *Na variavel varB, não será afetado pelo que foi feito na varA mantendo assim a primeira copia que foi feito*
/***************************************************************************************************************/
//EX DE REFERÊNCIA (MUTAVEL) = ARRAYS, OBJETOS, FUNÇÕES

//ARRAY
let a = [1,2,3];
let b = a;
let c = a;
//TANTO A VAIRIAVEL (a) (b) e (c) VÃO RECEBER O MESMO VALOR. POIS ESTÃO PASSANDO POR REFERÊNCIA OU SEJA, A VARIAVEL (b) ESTÁ LINKANDO PARA O MESMO VALOR DE (a) E O QUE FOR EDITADO NA VARIAVEL B VAI AFETAR A VARIAVEL (a)

a.push(4)
console.log(a,b); //RESP: [ 1, 2, 3, 4] [ 1, 2, 3, 4 ] 
b.pop()
console.log(a,b); //RESP: [1,2,3] [1,2,3] 
c.push('Alex');
console.log(a,b,c); //RESP: [ 1, 2, 3, 'Alex' ] [ 1, 2, 3, 'Alex' ] [ 1, 2, 3, 'Alex' ]

//OBJETO
const sobrenome = {
    nome:'Alex',
    sobrenome:'Santos',
}

const recebe = sobrenome;

sobrenome.nome = 'Julia';
console.log(recebe);
console.log(sobrenome);
