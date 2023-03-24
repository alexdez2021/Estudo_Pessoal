

//por padrão, não é possivel redeclarar a variavel
//let nome = 'Alex';

//aqui já funciona, pois trabalhandoi com a variavel var, é possivel redeclarar
//var nome2 = 'Alex'
//console.log(nome2);



// O let tem escopo de bloco {...bloco}
// O var só tem escopo de função
/*-----------------------------------------------------------------------------------------------*/
const verdadeira = true;
let nome = 'Julia'; //criando uma variavel
var nome2 = 'Júlia'; 

if(verdadeira) {
    //let nome = 'Alex' //criando uma variavel porem dentro do bloco de if
    //console.log(nome, nome2);
    let nome = 'santos';
    var nome2 = 'silva'

    if (verdadeira) {
        //let nome = 'outra coisa' // A engine do JS vai checar o escopo que possui a variavel (nome)
        var nome2 = 'Alex'
        console.log(nome, nome2); 
       
    }
}

/*  1° mesmo criando uma variavel fora do escopo e dentro do escopo com o mesmo
    nome usando let, o motor do JS vai entender que cada bloco possui nova variavel 

        //AQUI É UM ESCOPO GLOBAL
        let nome = 'Julia'; //criando uma variavel
        var nome2 = 'Júlia'; 

        //AQUI COMO SE FOSSE UM ESCOPO PRIVADO
        if(verdadeira) {
        let nome = 'Alex' //criando uma variavel porem dentro do bloco de if
        console.log(nome, nome2);
        
        //OUTRO BLOCO COM O MESMO NOME DA VARIAVEL 
        if (verdadeira) {
            //const nome = 'outra coisa'  //se aqui estiver comentado, a engine do JS vai checar o proximo bloco
            console.log('ok');
        }
}
    
        
*/