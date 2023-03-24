/*
     As strings são indexadas. assim como tambem os arrays, mas os arrays são por casas exemplo: 
               0123
     STRINGS: 'Alex' cada valor possui a quantidades de indices
     
                    0        1        2
     Com ARRAYS: ['Alex', 'Julia', 'Snow']  cada elemento possui seu indice

*/    

//*******************************************************************************************************************/

    /* //EDITANDO O INDICE COM USO DO ARRAY
        alunos[0] = 'Duque'
        console.log(alunos); 
    */
 
//******************************************************************************************************************

/* 
//ADICIONANDO UM NOVO INDICE 

        alunos[3] = 'Anderson'; 

        // Se não possuir indice na posição 3 do array, um novo indice com valor será criado. Porém, será arriscado pois é necessário saber a quantidade de indices. 
*/

//*******************************************************************************************************************/

//CAPTURANDO ELEMENTOS COM ARRAY

    const alunos = ['Alex','Julia','Snow'];

    /*    
       console.log(alunos[0]); //Capturando o elemento da posição 0. RESULTADO = Alex
       console.log(alunos[1]); //Capturando o elemento da posição 0. RESULTADO = Julia
       console.log(alunos[2]); //Capturando o elemento da posição 0. RESULTADO = Snow
    */ 
//*******************************************************************************************************************/

// ADICIONANDO UM ELEMENTO NO FINAL DO ARRAY COM A FUNÇÃO (PUSH)
       /*
            alunos.push('José')
            console.log(alunos); //RESULTADO [ '*', '*', '*', 'José' ]: 
        */

//*******************************************************************************************************************/

// ADICIONANDO UM ELEMENTO NO COMEÇO DO ARRAY COM A FUNÇÃO (UNSHIT)
        /*  
            alunos.unshift('Duque')
                console.log(alunos); RESULTADO: [ 'Duque', '*', '*', '*', '*' ]
                OBS: O valor duque, será adicionado na posição 0 do array. empurrando o valor que estava no indice 0 para o indice 1

            alunos.unshift('Meire')
            alunos.unshift('João')
                console.log('alunos'); RESULTADO: [ 'João', 'Meire', 'Alex', 'Julia', 'Snow' ]
        */
    
//*******************************************************************************************************************/


//MANEIRA DE CRIAR UM NOVO INDICE CORRETAMANETE SABENDO AS QUANTIDADES DE INDICES COM (LENGTH)
    /* 

        Adicionando um novo item automaticamente com length
       
            alunos [alunos.length] = 'João'; 
            alunos [alunos.length] = 'Maria';
            console.log(alunos); //RESULTADO: [ 'Alex', 'Julia', 'Snow', 'João', 'Maria' ]

    */

//REMOVENDO O ULTIMO ELEMENTO DO ARRAY COM A FUNÇÃO (POP)
            /* 
                const removido = alunos.pop(); //AQUI SERÁ ARMAZENADO O VALOR REMOVIDO
                console.log(alunos);
                console.log(removido, , 'REMOVIDO'); 
            */

//REMOVENDO O PRIMEIRO ELEMENTO DO ARRAY COM A FUNÇÃO (SHIFT)

          /*   
                const removido = alunos.shift();
                console.log(removido, 'REMOVIDO');
                console.log(alunos); 
          */

//REMOVENDO APENAS O ELEMENTO EXCETO O INDICE

            /* 
                delete alunos[1]; //DELETANDO APENAS O ELEMENTO QUE ESTÁ NA POSIÇÃO 1 DO ARRAY
                console.log(alunos);
             */

//FATIANDO OS ELEMENTOS DETERMINANDO ATÉ QUE POSIÇÃO DESEJA CAPTURAR 

            /* 
                console.log(alunos.slice(0 , 2)); RESULTADO:  [Alex','Julia']
                // SERÁ FATIADO OS ELEMENTOS DA POSIÇÃO 0 ATÉ O 1 IGNORANDO O ELEMENTO DO INDICE 3 
            */

//QUERENDO SABER DO QUE SE TRATA O ARRAY
            /* 
                console.log(typeof alunos); RESULTADO: OBEJECT
                console.log(alunos instanceof Array); TRUE 
            */


    