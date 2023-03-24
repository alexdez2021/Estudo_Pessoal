
//FUNÇÕES
//funções executa ações assim que são chamadas ou em decorrência de algum evento

function saudacao(nome) { // () Dentro dos parenteses é o que fica um valor armazenado como se fosse uma variavel. Porém tem um nome dado que é chamado de PARAMETRO. 

    /*
         Dentro das chaves da função é o corpo. É nele que fica os conteudos protegido pela função. Com isso, não é possivel acessar
         qualquer trecho da função fora da função. 
    */     
    
    console.log(`Bom dia ${nome}`); //AÇÃO 
}

const resultado = saudacao('alex'); //CHAMADA a função colocando os parenteses. Será jogado no parametro NOME da função
saudacao('Anderson')

/*-----------------------------------------------------------------------------------------------------------------------------------*/

// FUNÇÕES COM RETORNO

function saudacao (nome){
    return `Bom dia ${nome}` //aqui será feito o retorno dos valores
}

const variavel = saudacao('Alex Santos')

console.log(variavel); //imprimindo o valor que foi retornado

/*-----------------------------------------------------------------------------------------------------------------------------------*/

//FUNÇÃO RECEBENDO DOIS VALORES 

function soma (n1, n2){
    const numero = n1 * n2;
    return numero; //um ponto importanto. Quando o interpretador do javascript encontrar o RETURN  indica que será encerrado. Ou seja, o que tiver abaixo do return, não será executado
      console.log('ola mundo'); // NÃO SERA EXECUTADO PQ ESTA ABAIXO DO RETURN
    
}

console.log(soma(30, 10));

/*-----------------------------------------------------------------------------------------------------------------------------------*/
function novaSoma(n3, n4){
    
    return n3 * n4;
}

const total = novaSoma(10,10);

console.log(total);
/*-----------------------------------------------------------------------------------------------------------------------------------*/

//OUTRO JEITO DE CRIAR FUNÇÃO

const raiz = function(n5, n6){
    return n5 * n6
};

const final = raiz(40, 20)

console.log(final);

/*-----------------------------------------------------------------------------------------------------------------------------------*/
//JEITO CURTO E MAIS MODERNO DE CRIAR FUNÇÃO  

const novoJeito = (n10) => {
    return n10 * 7;
} 

const novoResultado = novoJeito(10)
console.log(novoResultado);

/*--------------------------------------------------------OU----------------------------------------------------------------------*/
const results = (n8,n9) => n8 * n9;

console.log(results(10,20));



