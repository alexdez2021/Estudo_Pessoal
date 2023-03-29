const container = document.querySelector('.container');

const elementos = [
    { tag: 'p', nome: 'Alex', idade: '28' },
    { tag: 'p', nome: 'Júlia', idade: '24' }
]

for(let i = 0; i < elementos.length; i++){
    const { tag, nome, idade } = elementos[i];

    const tagCriada = document.createElement(tag);

    const pessoa = document.createTextNode(nome);
    tagCriada.appendChild(pessoa)

    const idadePessoa = document.createTextNode(idade)
    tagCriada.appendChild(idadePessoa)

    container.appendChild(tagCriada)


}
