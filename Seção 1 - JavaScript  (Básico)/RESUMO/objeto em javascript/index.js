const nome = function(nome,sobrenome,idade){
    return{
        nome,
        sobrenome,
        idade,
    }

};

const primeiraPessoa = nome('Alex','Santos',27)
const segundaPessoa = nome('Júlia','Caroline',23)
const terceiraPessoa = nome('Anderson','Santos',19)


console.log(`O nome é ${primeiraPessoa.nome} ${primeiraPessoa.sobrenome} sua idade é ${primeiraPessoa.idade} anos`);

console.log(`O nome é ${segundaPessoa.nome} ${segundaPessoa.sobrenome} sua idade é ${segundaPessoa.idade}`);

/*-------------------------------------------------------*/

    const nome = {
    nome:'Alex',
    sobrenome:'santos',
    idade:27,

     primeiroNome (nome,sobrenome){
        console.log(this.nome + this.sobrenome)
    },

    incrementaIdade(nome,sobrenome,idade){
        this.idade++
        console.log(this.idade);
    }
}

/*-------------------------------------------------------*/

nome.primeiroNome() 
nome.incrementaIdade()

/* function primeiroNome (){
    return{
        nome:'Alex',
        sobrenome: 'santos',
    }
}

console.log(primeiroNome().nome);
 */

/*-------------------------------------------------------*/
const sobrePessoa = {
    nome: 'Alex',
    sobrenome:'santos',
    idade:27,

    primeiroNome(nome,sobrenome,idade){
        console.log(`Meu nome completo é ${this.nome} ${this.sobrenome} minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++
    }


}

sobrePessoa.primeiroNome()
sobrePessoa.incrementaIdade()
sobrePessoa.primeiroNome()