/*
	O QUE SÃO FUNÇÕES:
		FUNÇÕES SÃO ESTRUTURAS DE CODIGOS MENORES QUE SÃO REAPROVEITADOS DURANTE A EXECUÇÃO/CONSTRUÇÃO DE UM PROGRAMA.
		POR EX: REALIZAR CALCULO DE UMA IDADE. NESTE CASO É POSSIVEL CRIAR UMA ESTRUTURA REFERENTE A IDADE 
 		PRINCIPAL OBJETIVO? POUPAR REPETIÇÃO DE CÓDIGO E PODEM SER CONSIDERADAS COMO 'SUBPROGRAMAS'
			
		//FUNÇÕES: São ações executadas assim que são chamadas ou em decorrência de algum evento
		//A FUNÇÃO PODE RECEBER PARAMETROS E RETORNAR UM RESULTADO OU NÃO
		//para criar a FUNÇÃO, tem a mesma regra de criar variavel
		// O que tiver dentro do escopo da FUNÇÃO criada, será protegido. Ou seja, se caso queira executar algo por fora, não será possivel

*/


    //EX NA PRATICA:				
        function acao(num1) { //(num1) DENTRO DOS PARENTESES, É O QUE FICA OS PARAMETROS. NELA PODEMOS CRIAR QUALQUER NOME DE VARIAVEL. NESTE CASO, OS PARAMETROS VAI RECEBER O VALOR 5 QUE FOI ENVIADA PELA CHAMADA.

            //AQUI DENTRO DO ESCOPO DA FUNÇÃO, É O QUE FICA A AÇÃO.

        }

        // acao(5) É A CHAMADA E RESPOSAVEL PELA EXECUÇÃO DA FUNÇÃO OU SEJA, RESP PELO DISPARO DA AÇÃO.
        acao(5) // O VALOR 5 DENTRO DOS PARENTESES, SERÁ ENVIADO PARA OS PARAMETROS
	

/*----------------------------------------------------------------------*/
    //CRIANDO UMA FUNÇÃO COM A TENTATIVA DE EXECUTAR ELA POR FORA
        function executandoFora() {
            console.log(`Olá mundo`);
        }

        const executa = executandoFora();
        console.log(executa); //RESP: undefined 
/*---------------------------------------------------------------------*/
    //CRIANDO UMA FUNÇÃO COM RECEBENDO RETORNO - (RETURN)
        function saudacao(nome) {
            //(return) - JOGANDO A AÇÃO PARA FORA DO ESCOPO 
            return `Bom dia ${nome}` //AQUI SE ENCERRA O TRECHO DO CODIGO
            //NENHUM TRECHO DE CODIGO, VAI EXECUTAR O QUE TIVER ABAIXO DA DECLARAÇÃO (RETURN)
            //console.log('Olá mundo') **---NÃO SERÁ EXECUTADO--**
        }
            const receba = saudacao('Alex'); //A AÇÃO DESPEJADA PELO RETURN, SERÁ JOGADA NA VARIAVEL RECEBA
            console.log(receba); //RESULTADO: Bom dia Alex

/*-------------------------------------------------------------------------*/
    //CRIANDO DUAS CHAMADAS
        function pessoa(nome) {
            console.log(nome); //RESP: Alex Julia
        }

        pessoa('Alex')
        pessoa('Julia')

/*-------------------------------------------------------------------------*/

//CRIANDO UMA FUNÇÃO RECEBENDO DOIS VALORES
    function doisValores(num1,num2) {
        console.log(num1 + num2); //RESP: 65
    }
    doisValores(10,55)

/*-------------------------------------------------------------------------*/    

//CRIANDO UMA FUNÇÃO RECEBENDO DOIS VALORES E POSSUINDO RETORNO
    function doisValoresRetorno(num1,num2) {
        const resul = num1 * num2;
        return resul;
    }

    const valorFinal = doisValoresRetorno(10,5);
    console.log(valorFinal);
/*------------------------------------------------------------------------------------------------------*/
    //CRIANDO UMA FUNÇÃO COM OS PARAMETROS VAZIO
        function parametroVazio(num) { //NO PARAMETRO FORMAL, POSSUI UMA VARIAVEL QUE NÃO TEM VALOR NENHUM
            const resultado = num * 10;
            return resultado;
        }

        //VEJA QUE NAO POSSUI NENHUM VALOR NO PARAMETRO 
        console.log (parametroVazio()) //O RESULTADO SERÁ: NAN POIS NÃO FOI APONTADO PARA NENHUM LOCAL DA MEMORIA 
/*-------------------------------------------------------------------------------------------------------*/
//CRIANDO FUNÇÃO ANONIMA
    //AQUI ESTÁ SENDO CRIADA UMA VARIAVEL QUE ESTÁ RECEBENDO A FUNÇÃO
    const raiz = function(num1) {
        return num1 ** 0.5;
    }

    console.log(raiz(9).toFixed(2));
/*--------------------------------------------------------------------------------------------------------*/

	/*
		PORTANTO O PASSO A PASSO FUNCIONA DA SEGUINTE FORMA:
			1°: SERÁ REALIZADO A CHAMADA, ENVIANDO O VALOR 5 PARA OS PARAMETROS. EX: acao(5)
			2°: DENTRO DOS PARENTESES, DEVE CRIAR UM NOME PARA RECEBER O VALOR 5 ENVIADO PELA CHAMADA. EX: (num)
			3°: DENTRO DO CORPO DA FUNÇÃO, VOCÊ PEGA O VALOR QUE ESTA NO PARAMETRO E REALIZA AÇÃO)
            4° SE CASO QUEIRA TER O RETORNO DA AÇÃO CRIADA, BASTA CRIAR A DECLARAÇÃO CHAMADA (RETURN)
	*/
