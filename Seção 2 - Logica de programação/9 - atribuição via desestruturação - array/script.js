
    /*
        A atribuição de desestruturação é um recurso interessante que veio com a ES6. Desestruturação é uma expressão do JavaScript que torna possível "desembalar" valores dos arrays ou propriedades de objetos em variáveis distintas. Ou seja, podemos extrair dados dos arrays e dos objetos e atribuí-los às variáveis.
        Por que isso é necessário?

            Imagine que queremos extrair dados de um array. Anteriormente, como isso seria feito?

                let apresentacao = ["Olá", "eu" , "sou", "a", "Sarah"];
                let saudacao = apresentacao[0];
                let nome = apresentacao[4];
                console.log(saudacao);//"Olá"
                console.log(nome);//"Sarah"

            Podemos ver que, quando queremos extrair dados de um array, temos de fazer o mesmo repetidamente. Portantoo, com uso da (atribuição via desestruturação), podemos diminuir as quantidades de linhas de códigos. Veja abaixo:
    */    

            //Trabalhando com atribuição via desestruturação
                let apresentacao = ['ola','eu','sou','o','Alex']; //criando uma variavel, onde nela vai possui os valores embutido do array
                //em vez de criar uma variavel fora do array, basta abrir os colchetes, criando variavel nela e definindo qual indice deseja capturar
                let [primeiro,segundo,terceiro,quarto,quinto] = apresentacao; 
                console.log(primeiro,terceiro,quinto);

            //Capturando resto dos valores:
                let numeros = [100, 200, 300, 400, 500, 600, 700];
                let [num1, num2, ...resto] = numeros; //Basta acrescentar ... e o nome da variavel desejada 
                console.log(num1, num2, resto);
                console.log(resto);//imprimindo apenas o resto dos valores 

            // Colocando valores vazios ou seja, pulando valores já definidos utilizando virgula  
                let [cem , , trezentos , , quinhentos , , setessentos ] = numeros;
                console.log(cem, trezentos, quinhentos,setessentos); 
                //                  0         1         2
                const numero = [ [1,2,3] , [4,5,6] , [7,8,9] ]

                const [,[num10, num11]] = numero;
                console.log(num10, num11);


            /*
                A atribuição de desestruturação da ES6 torna mais fácil extrair esses dados. Como? Primeiro, discutiremos a atribuição de desestruturação com arrays. Em seguida, passaremos à desestruturação de objetos. 
            */

    
            /*
                let a = 'A';
                let b = 'B';
                let c = 'C'; 
                //aqui é a atribuição via desestruturação
                [a,b,c]  = [b,c,a] // aqui está sendo modificado os valores das variaveis
                console.log(a,b,c);
            */
            /**************************************************************************************************/
            //podemos trabalhar dessa forma também
                let a = 'A';
                let b = 'B';
                let c = 'C';

                //criando uma variavel (letras) que recebe os valores invertidos de (a,b,c)
                let letras = [b,c,a];
                //aqui é a atribuição via desestruturação repassando os valores da variavel (letras) para variaveis (a,b,c)
                [a,b,c] = letras

                console.log(a,b,c);