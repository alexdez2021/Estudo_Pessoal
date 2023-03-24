// Tipos primitivos EM JS: 

/* 
    //STRING: texto
	
      NUMBER:numero
	  
      UNDEFINED: quando a variavel não é inicializada ou seja, não possui valor atribuido
	  
      NULL: não aponta para lugar nenhum da memoria. Ou seja, criando uma variavel mas não vai ocupar espaço na memoria 
	  
      BOOLEAN: valor logico onde possui apenas duas possibilidades de valor que são (TRUE ou FALSE)
*/

const nome = 'Alex'; // STRING com uso de aspas simples
const nome1 = "Alex"; // STRING com uso de aspas duplas
const nome2 = `Alex`; // STRING com uso de crase
const num1 = 20; // NUMBER interpretando com numero inteiro
const num2 = 10.50; // NUMBER interpretando com numero flutuante 
let nomeAluno; // UNDEFINED = Indefinido -> não aponta para nenhum local da memoria
const sobreNome = null; // NULL = Nulo = -> também não aponta pra nenhum local da memoria
const boleano = false; //BOOLEAN: Com o uso do tipo primitivo (boolean) existe duas possibilidades de valores: true ou false Por exemplo, definindo se o aluno foi aprovado ou não, usando true ou falso é metodo legivel.

console.log(typeof boleano, boleano);
const aprovado = true; // boolean = true, false (lógico)
console.log(typeof nome1, nome1);


//(typeof nome1) serve para consultar o tipo de variavel declarada
//(typeof nome1, nome1) alem de consultar o tipo, vai ocorrer tbm amostra do valor



