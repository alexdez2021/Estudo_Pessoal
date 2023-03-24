/*
    O que é o DOM?
        A tradução do acrônimo inglês DOM (Document Object Model) significa Modelo de Documento do Objeto; trata-se da modelagem de todo o HTML.
        A partir da sua quinta versão, o HTML até então estático, além das melhorias na estrutura e separação da semântica da estilização, ganhou
        interatividade com a criação da linguagem de programação JavaScript, e é nesse momento que surge o DOM.

        Uma das melhores formas para entender um conceito, e é algo recorrente no universo da tecnologia, é fazer abstrações e analogias.

    Estrutura
        O DOM é como uma árvore genealógica, porém, de forma invertida. O elemento que antecede o document é o window, que nada mais é que a janela do navegador. Em sua estrutura, o document está no topo como objeto global e tem como elemento raiz a tag html e todas as outras descendem dela através das suas ramificações (branchs).

        A tag html, objeto pai, apresenta dois objetos filhos: o head e o body (o cabeçalho e o corpo). Os objetos que seguem nas ramificações de baixo são denominados como child, e os de cima, parent. A tag head é parent da tag title, e a body é parent das tags a e h1, e assim sucessivamente, de acordo com a hierarquia. Das tags, derivam os atributos, e destes, seus valores.

*/
      /*
        1° No avegador o objeto global do navegador é o objeto chamado (window) ou seja, é a mãe de todos os elementos

        2° No objeto window, ao colocar o metodo chamado (document), será mostrado todo documento HTML. codigo: (window.document)

        3° A partir do momento que imprimir o objeto window.document. Dentro do documento HTML, começa a ser chamado de (arvore do DOM) na qual varios elementos, são filhos de outros elementos etc
      
      */
        



const elementos = [
    {tag:'div', texto:'bla bla'},
    {tag:'p', texto:'bla bla'},
    {tag:'section', texto:'bla bla'}
  ]

  const container = document.querySelector('.container');

for(let i = 0; i < elementos.length; i++ ) {
  let {tag,texto} = elementos[i];

  let tagCriada = document.createElement(tag);  //criando elemento 
  let div = document.createElement('div');
  
  let criaTexto = document.createTextNode(texto);
  tagCriada.appendChild(criaTexto);

  div.appendChild(tagCriada)

  container.appendChild(div)
 
}


