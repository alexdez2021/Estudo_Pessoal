


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


  //const textoCriado = document.createTextNode(texto) ;
  //criaTag.appendChild(textoCriado)

 
}


/*

function global(){
    const elementos = [
        {tag:'p', texto:'frase 1'}, //posição 0
        {tag:'div', texto:'frase 2'}, //posição 1
        {tag:'section', texto:'frase 3'} //posição 2
    ]

    const container = document.querySelector('.container');
    

    for(let i = 0; i < elementos.length; i++ ){
        let {tag,texto} = elementos[i];
        
        function criandoTag (){
            const div = document.createElement('div');
            const tagCriada = document.createElement(tag);
            //Em caso de selecionar um texto que não esteja em nenhum elemento HTML, é melhor utilizar o metodo innerText
                // EX: tagCriada.innerText = texto;

            //Para criação 
            let textoCriado = document.createTextNode(texto);
            tagCriada.appendChild(textoCriado)
            div.appendChild(tagCriada);

            
            return div
        }
        
        const div = criandoTag();

        container.appendChild(div)

        
    }

}

global()

*/
