//vamos abordar mais um tipo de for. No caso a estrtura do for in 
//O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
//Imagina que vc possui bastante objetos ou bastante arrays que são objetos indexados automaticamente

    /* 
        Um exemplo de for classico
            const frutas = ['maça','laranja','limão'];

            for(let i = 0; i < frutas.length; i++){
                console.log(i,frutas[i]);
            }
    */


/*----------------------------------------------------------------------------------------------------------------------*/

//Trabalhando com For in
//Veja abaixo que a estrutura do for ficou menor comparado a estrutura for classico
//É possivel declarar qualquer nome da variavel
//O for in, realiza a leitura de indices (array) ou chaves do objeto (objetos)

    const frutas = ['maça','laranja','limão'];
    for(let i in frutas){
        console.log(i, frutas[i]); //resultado (0 maça, 1 laranja, 2 limão)
    }

    const pessoa = {
        nome:'Alex',
        sobrenome:'Santos',
        idade:28
    }

    for(let chaves in pessoa){
      //  console.log(chaves);   .....................//resultado (nome, sobrenome, idade);
      //  console.log(pessoa[chaves]);.............      //resultado (Alex, Santos, 28);
      console.log(chaves, pessoa[chaves]);       //resultado (nome Alex, sobrenome Santos, idade 28)
    }

    



/*
    const pessoa = {
    nome:'Alex',
    sobrenome:'Santos',
    idade:27
}

const cor = ['azul','amarelo','azul']

const info = {...pessoa, ...cor}
        


for (let chave in info){
    console.log(chave, info[chave]);
}
*/
