/*  
  const nome = 'Alex';
    const sobrenome = 'Santos';
    const idade = 27;

    const nome1 = 'Julia';
    const sobrenome1 = 'Caroline';
    const idade1 = 23;
    console.log(`${nome} ${sobrenome} ${idade}`);
    console.log(`${nome1} ${sobrenome1} ${idade1}`);
*/    

/*
pessoa1 = {
    nome:'Alex',
    sobrenome:'Santos',
    idade:27
}


pessoa2 = {
    nome:'Julia',
    sobrenome:'Caroline',
    idade:23
}

console.log(pessoa1.nome);
console.log(pessoa2.nome);

*/


function pessoa (nome,sobrenome,idade){
    return{
        nome,
        sobrenome,
        idade
    }
}
const pessoa1 = pessoa('Alex','Santos',27)
console.log(`Seu nome é ${pessoa1.nome} ${pessoa1.sobrenome}, e sua idade é ${pessoa1.idade}`);

const pessoa2 = pessoa('Julia','Caroline',23) 
console.log(`Seu nome é ${pessoa2.nome} ${pessoa2.sobrenome}, e sua idade é ${pessoa2.idade}`);

//QUANDO UMA FUNÇÃO ESTÁ DENTRO DO OBJETO, É CHAMADA DE METODO
const pessoa3 = {
    nome:'Alex',
    sobrenome:'Santos',
    idade:27,

    fala (){
        console.log(`A minha atual é ${this.idade}`);
    },

    incremento(){
        this.idade++
        console.log(`A idade mais atual do Alex é ${this.idade}`);
    }

}

pessoa3.fala();
pessoa3.incremento();
pessoa3.incremento();