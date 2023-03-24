
//1° OBJETIVO: CRIAR UMA VARIAVEL CHAMADA NÚMERO,E NELA SERÁ ARMAZENADA O VALOR DIGITADO PELO USUÁRIO
//2° OBJETIVO: CRIAR UMA SEGUNDA VARIAVEL, SENDO QUE NELA SERÁ ARMAZENADO O ELEMENTO CAPTURADO EM UM DOCUMENTO HTML
//3° OBJETIVO: OBTER A SINTAXE HTML E DESCREVER NELA OS VALORES DESCEDENTES

/*NA VARIAVEL (NUMERO) SERÁ ARMAZENADO O VALOR QUE O USUÁRIO DIGITOU*/
const numero = Number (prompt('Digite seu número: '));

/*O (DOCUMENT) VAI SOLICITAR AO (getElementById) PARA QUE SEJA SELECIONADO O ID QUE ESTÁ LOCALIZADO EM UMA TAG HTML  */
const numeroTitulo = document.getElementById('titulo'); /*A TAG QUE FOI SELECIONADO FOI O (TITULO) QUE FOI SALVA NA VARIAVEL (numeroTitulo)*/

/*O (DOCUMENT) VAI SOLICITAR AO (getElementById) PARA QUE SEJA SELECIONADO O ID QUE ESTÁ LOCALIZADO EM UMA TAG HTML  */
const texto = document.getElementById('texto') /*A TAG QUE FOI SELECIONADO FOI O (TEXTO) QUE FOI SALVA NA VARIAVEL (texto)*/


//JOGANDO OS VALORES DESCENDENTES EM UM ELEMENTO (HTML)
/* A propriedade Element.innerHTML define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes. */
numeroTitulo.innerHTML += `<p>O número é ${numero}</p>`;
texto.innerHTML += `<p>A raiz quadrada de <strong> ${numero}</strong> é <strong>${numero ** 0.5}</strong></p>`
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;