
//Agora vamos abordar o terceiro tipo de for. No caso a estrutura do (for of)

//Como já mostrado, foi explicado sobre o uso (for classico) e (for in). Sendo que ambos, é possivel montar uma estrutura na qual podemos:

// 1° for classico (A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.)

// 2° (for...in) interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

// 3° Por ultimo o loop (for...of) percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.


/*---------------------------------------------Trabalhando com for classico----------------------------------------*/

const nome = ['Maria', 'Joao', 'Jose'];
 
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); //RESULTADO:  Maria  Joao  Jose
}

/*-----------------------------------------------------Trabalhando com for in--------------------------------------*/

for (let chave in nome) {
    console.log(chave, nome[chave]); //RESULTADO:  0 Maria  1 Joao   2 Jose
}

/*-----------------------------------------------------Trabalhando com for of--------------------------------------*/

for (valor of nome) {
    console.log(valor); //veja que não foi necessário capturar o indice para imprimir o valor  
}

//OBS: NÃO É POSSIVEL UTILIZAR O (FOR OF) COM O OBJETO  CONFORME ABAIXO

/*  
        const pessoas = {
            nome:"Alex",
            sobrenome:'santos'
        }
        
        for(valor of pessoas){
            console.log(pessoas[valor]); RESULTADO: pessoas is not iterable    
        }
*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/

//RESUMINDO:

    // FOR CLASSICO - GERALMENTE COM ITERÁVEIS (ARRAY OU STRINGS)
    // FOR IN - RETORNA O INDICE OU CHAVE (STRING, ARRAY OU OBJETOS)
    // FOR OF - RETORNA O VALOR EM SI (ITERAVEIS, ARRAY OU STRINGS)