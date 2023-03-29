//(querySelectorAll): Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma NodeList.
const paragrafos = document.querySelectorAll('p');

//capturando os estilos computados do CSS do determinado elemento com uso do metodo getComputedStyle()
const estilosBody = getComputedStyle(document.body) //capturando todo estilo CSS configurado no body

//Em seguida vc verifica qual estilo deseja capturar se é um border, background, color etc....
const corFundo = estilosBody.backgroundColor;

//CASO QUEIRA CAPTURAR ALGUM OUTRO ELEMENTO DIRETO, BASTA USAR O COMANDO ABAIXO:
/*
    const corTitulo = getComputedStyle(document.querySelector('h1'));
    const corFundo = corTitulo.backgroundColor;
*/


//mostrando no console qual tipo de cor foi aplicada na variavel corFundo
console.log(corFundo);

for(valores of paragrafos){
    //Retornando a cor do fundo definida na variavel corFundo 
    valores.style.backgroundColor = corFundo
    //Definindo pelo estilo CSS qual propriedade e a cor que o texto vai possuir
    valores.style.color = 'white'
}



