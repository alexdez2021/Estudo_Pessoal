//Trabalhar com atribuição via estruturação via objeto não muda muita coisa, apenas com os tipos de dados e pequenas outras coisas:
    const pessoa = {
        nome: 'Alex',
        sobrenome:'Santos',
        idade: 28,
        endereco: {  //criando um objeto dentro do objeto é permitido
           // rua: 'madureira calheiros',
            numero: 15
        }
    };
/*-----------------------------------------------------------------------------------------------------------------*/    

//para trabalhar Trabalhar com atribuição via estruturação via objeto, utiliza-se chaves conforme abaixo:
//selecionando a chave via atribuição via desestruturação
    //const { nome, sobrenome, idade } = pessoa; //extraindo do objeto (pessoa) as todas propriedades da chave
/*-----------------------------------------------------------------------------------------------------------------*/ 

//Caso não exista a propriedade entre as chaves do objeto criado, é possivel criar uma nova conforme abaixo:
    const { nome1 = 'Aqui estou criando uma variavel chamada nome' } = pessoa;  // OBS: isso também funcionado no array
    console.log(nome1);

//caso queira mudar o nome da varivel criada no objeto:
    const { nome: teste = 'Júlia' } = pessoa; //criando a variavel (teste) substituindo a variavel (nome)
    console.log(teste);

/*-----------------------------------------------------------------------------------------------------------------*/ 
   
    /*
        const {endereco} = pessoa;
        console.log(endereco);

            Caso queira imprimirir o objeto criado (endereco) o resultado vai ficar assim:

                RESP: { rua: ' madureira calheiros', numero: 15 }
                OBS: Veja que acabou imprimindo o objeto em vez dos valores 
    */


//Para imprimir os valores do endereço basta trabalhar conforme abaixo:

    /*
        Criando um valor padrão para o objeto:
            const {endereco:{rua = 'ddd'}} = pessoa
            console.log(rua);
    */

    const {endereco:{rua,numero}} = pessoa;
    console.log(rua,numero);