//NÃO PODEMOS CRIAR CONSTANTES COM PALAVRAS RESERVADAS
//CONSTANTES PRECISAM TER NOMES SIGNIFICATIVOS
//NÃO PODE COMEÇAR O NOME DE UMA CONSTANTE COM UM NÚMERO
//NÃO PODEM CONTER ESPAÇOS OU TRAÇOS
//UTILIZAMOS CAMELCASE
//CASE-SENSITIVE
//NÃO PODE MODIFICAR O VALOR DE UMA CONSTANTE
//NÃO UTILIZE VAR, UTILIZE CONST

    //NÃO É VALIDO:
        /*
            const nome = 'Alex';
            nome = "anderson"; REDECLARANDO VARIAVEL
            console.log(nome); RESULTADO: TypeError: Assignment to constant variable.  
        */

    //É VALIDO
        const primeiraConta = 20;
        const segundaConta = 30;
        const resultado = primeiraConta * segundaConta;
        console.log(resultado);  //RESULTADO: 600
        
   
    //EVOLUINDO O CODIGO SEM REDECLARAR A VARIVEL CRIADA
        const resultadoDuplicado = resultado * 4; // 600 * 4
        console.log(resultadoDuplicado);  //RESULTADO: 2400
    
    //COMO IDENTIFICAR O TIPO DA VARIAVEL, QUE ESTÁ SENDO TRABALHADA?
        console.log(typeof resultado); //RESULTADO: number
