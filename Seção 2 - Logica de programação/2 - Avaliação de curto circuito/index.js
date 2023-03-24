

console.log('Alex' && true &&  'julia'); // vai retornar julia TRUE
console.log('Alex' && true &&  NaN); // vai retornar falso


/*
Em JS tudo pode avaliar o que é verdadeiro e o que é falso ex:
    //Avaliações falsas em JS
        FALSE
        0
        '' "" ``
        NULL
        UNDEFINED QUE NÃO APONTA PARA NENHUM LUGAR
        NaN
*/

console.log('Alex' && 'Julia'); //aqui não vai ter avaliaão de curto circuito pq não possui valor falso
console.log('Alex' && false); //Resp: vai retornar o valor (FALSE)
console.log('Alex' && 0); //Resp: vai retornar o valor 0 
console.log('Alex' && ''); //Resp: vai retornar vazio
console.log('Alex' && null); //Resp: vai retornar o valor null
console.log('Alex' && undefined); //Resp: vai retornar o valor undefined
console.log('Alex' && NaN); //Resp: vai retornar o valor NaN


function nome () {
    return `imprimiu`
}

let vaiExcutar = true;

console.log(vaiExcutar && nome());


const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);