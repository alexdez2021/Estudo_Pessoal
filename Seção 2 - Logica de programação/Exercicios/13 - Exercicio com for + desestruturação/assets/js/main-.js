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
            //Para selecionar um texto que não esteja em nenhum elemento HTML, é melhor utilizar o metodo:  document.innerText = aqui vc seleciona o texto
                // EX: tagCriada.innerText = texto;

            //Para criação de um texto qualquer basta utilizar o comando:  document.createTextNode()
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