/*
    As estruturas de repetição permitem executar mais de uma vez um mesmo trecho de código. Trata-se de uma forma de executar blocos de comandos somente sob determinadas condições, mas com a opção de repetir o mesmo bloco quantas vezes for necessário.
*/

//Imagina que você queira exibir o mesmo trecho de codigo mais de uma vez conforme abaixo:
    console.log('Linha 1');
    console.log('Linha 2');
    console.log('Linha 3');
    console.log('Linha 4');
    console.log('Linha 5');
//Veja que foi necessário de criar 5 linhas de códigos 

//Resolvendo essa situação trabalhando a estrutura (for)
//Para trabalhar com (for) precisa de três coisas:
    //1° Criar uma variavel 
    //2° Criar uma condição, para travar a repetição do laço
    //3° Incrementar ou decrementar a variavel de controle

// Criando uma variavel i que recebe o valor de zero
// Checando se zero é menor e igual a 10 utilizando a condição
// Se zero for menor que 10, será realizado o incremento somandoo mais um até o resultado chegar no 10

    //Estrutura for com incremento ++
        for(let i = 0; i<=5; i++ ) {  //Criação de estrutura do for com uso dos parenteses e a chave 
            console.log(`Linha ${i}`); //RESULTADO: linha 1, linha 2, linha 3, linha 4, linha 5
        }

    //Determinando de quantos numeros deseja pular += valor desejado
        for (let i = 5; i <= 50; i += 2 ){
            console.log(i);
        }
/*--------------------------------------------------------------------------------------------------------------*/
    
//Estrutura for com decremento --
        for(let i = 100; i >= 20; i--){
            console.log(i);
        }

        //               0       1        2
        let pessoas = ['Alex','Julia','Anderson'];

        for(let i = 0; i < pessoas.length; i++){
            console.log(`indice ${i}`, pessoas[i]);
        }