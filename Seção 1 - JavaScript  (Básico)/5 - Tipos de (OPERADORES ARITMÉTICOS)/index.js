/*
    OPERADORES ARITMÉTICOS
        + ADIÇÃO / CONCATENÇÃO
        * MULTIPLICAÇÃO | ** POTENCIAÇÃO EX: 2^10
        / DIVISÃO
        % RESTO DA DIVISÃO EX: 10 / 2 = SOBROU 0 
        - SUBTRAÇÃO

    PRECEDÊNCIA DA MATEMATICA:
        Mesmo querendo realizar o calculo conforme a ordem abaixo, a multiplicação será feita primeiro:
            console.log(num1 + num2 + num3 * num4); // será multiplicado o num3 x num4 e depois será feito a soma

    ALTERANDO A PRECEDÊNCIA:
        Para alterar a precendência, basta colocar os parenteses conforme abaixo   
            console.log((num1 + num2 + num3) * num4);

    NIVEIS DE PRECENDENCIA
        () É a primeira precedencia mais forte 
        ** Segunda: é a potenciação
        *  Terceira: Multiplicação
        /  Quarta: Divisão
        %  Quinta: Modulo da divisão
        +  Sexta:  Adição
        -  Sétima: Subtração

        /* 
            const num1 = 10;
            const num2 = 4;
            const num3 = 5;
            const num4 = 9;

            console.log( num1 + num2); // ADIÇÃO
            console.log( num1 * num2); // MULTIPLICAÇÃO
            console.log(num1 ** num2); // POTENCIAÇÃO
            console.log(num1 % num2); // RESTO DA DIVISÃO
         */

        /* 
    OPERADOR DE INCREMENTO:
            pós incremento: primeiro ele mostra o valor e em seguida executa
                let contador = 1;
                    contador++; // contador que possui o numero 1 armazenado, vai possuir agr 2
                    contador++; // 3
                    contador++; // 4
                    contador++; // 5
                    console.log(contador); // resultado vai ser 5

            pré incremento: primeiro ele executa em seguida executa mostra o valor 

                let contador = 1;
                    ++contador;
                    ++contador;
                    ++contador;
                    ++contador;
                    console.log(contador);

                    //OBS: Na constante não é possivel trabalhar com incremento

                    */

        
                /* let num1 = 40;
                   let numero = '20';
					
					//convertendo a string para o tipo numero
					console.log(num1 + parseInt(numero));
				*/

               















