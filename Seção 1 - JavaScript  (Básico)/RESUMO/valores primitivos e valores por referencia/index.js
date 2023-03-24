/*

(Imutável) Quando estamos de tipo de dados primitivos, estamos citando de (valores imutaveis) ou seja, os valores não podem ser alterados 

    Primitivos: string,number,boolean,undefined,null (biging,symbol)

    
(Mutável) é o tipo da variável que pode ser alterada. Em JavaScript, somente objetos e arrays são mutáveis, valores primitivos não.

    Referência: array, object, function.

*/

/*********************************************************/

/*IMUTAVEL*/
let nome = 'Alex';
nome = 'Julia'; /*Trocando o (Alex) por (Julia)*/
nome[0] = 'L'; // NÃO VAI OCORRER NENHUM EFEITO. PQ A STRING É IMUTAVEL NÃO É POSSIVEL MEXER EM UM DADO DE UMA STRING
console.log(nome[0]);

let a = 'Letra A';
let b = a;
a = 'Substituindo'

console.log(a); // O valor 'Letra A' foi alterado pelo valor 'Substituindo'

console.log(b); //Veja que o primeiro valor 'Letra A' armezanado na variavel (a) se mantém na variavel (b) porque se trata de uma copia

/*********************************************************/


/*MUTAVEL*/
let numero = [0,1,2,3,4,5];
let numero2 = numero; //Aqui a variavel (numero2) não está recebendo uma copia do (numero). Mas sim ocorre uma referencia do numero2 com numero. Ou seja, o que determinar na variavel (numero) será aplicado também na variavel numero2

//acrescentando mais um numero 
numero.push(6)

console.log(numero,numero2);

//E se alterar qualquer valor na variavel numero2?
numero2.pop()

//O que for alterar na variavel que receba o valor de outra variavel, ambas vai possui o mesmo efeito
console.log(numero,numero2);


let n1 = [0,1,2,3,4];
let n2 = n1;
let n3 = [...n1]; //Forçando uma copia da variavel n1

n1.push(10)

console.log(n1,n2,n3);

/*********************************************************/
const pessoa = {
    nome:'Alex',
    sobrenome:'Santos',

};



const novaPessoa = pessoa;

novaPessoa.nome = 'julia';
console.log(novaPessoa)
console.log(pessoa);