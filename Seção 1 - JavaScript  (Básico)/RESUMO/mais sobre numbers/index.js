
let num1 = 10.5; //number
let num2 = 2.5; //number

//toString serve para converter o numero para tipo string
       /*
            concatenando 1 com 2 deixando com = 12.5  
                console.log(num1.toString() + num2);

            mostrando que o num1 agr é temporariamente do tipo string
                console.log(typeof num1); 

            Deixando o num1 definitivo como string
                num1 = num1.toString();
        */
        
        //toFixed serve para arredondar valores e assim define qtns casas decimais deseja
            // console.log(num1.toFixed(2));

        //isInteger serve para informar se o valor é um numero inteiro
            //console.log(Number.isInteger(num1));

        //isNaN serve para informar se o valor é um numero ou não. ex: o valor temp não é um numero? r: verdadeiro não é um numero
        let temp = num1 * 'olá';
        console.log(Number.isNaN(temp));
        
        // O valor temp não é um numero? r: falso, é um numero
        temp = num1 * '10'; // OBS: não é uma boa pratica colocar numeros utilizando strings. Mesmo que o JS consiga entender que é um numero
        console.log(Number.isNaN(temp));


        //let num4 = 10;
        //let num5 = 5;

        //console.log(num4.toString() + num5); //REALIZANDO ALTERAÇÃO PARA TIPO STRING E FAZENDO CONCATENAÇÃO 
        //num4 = num4.toString();              // ALTERANDO PARA TIPO STRING
        //console.log(num4.toString(2));         // REALIZANDO A FORMAÇÃO BINARIA
        //console.log(num4.toFixed(2));          // DEIXANDO 2 CASAS DECIMAIS
        //console.log(Number.isInteger(num4));   // IDENTIFICAR SE O NUMERO É DO TIPO INTEIRO
        
        let num5 = 0.8;
        let num6 = 0.1;

        num5 += num6; // 0.9
        num5 += num6; // 1
        num5 += num6; // 1.1
        num5 += num6; // 1.2
        num5 += num6; // 1.3
        num5 += num6; // 1.4
        num5 += num6; // 1.5
        num5 += num6; // 1.6
        num5 += num6; // 1.7
        num5 += num6; // 1.8
        num5 += num6; // 1.9
        num5 += num6; // 2.0
      
        
        
        num5 = Number(num5.toFixed(2))
        console.log(`É numero inteiro? ${Number.isInteger(num5)}`);
        console.log(num5);