/*
    O operador condicional (ternário)

    //Sobre o operador (ternário)
    Operador ternário, é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if. Util para encurtar o codigo em partes que precisa do if else.

    Com essa condição, utilizamos os sinais (Interrogação ? e dois pontos :);
*/

//Trabalhando com if else
const usuarioVip = 1000;
if (usuarioVip >= 1000 ) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

//Trabalhando com operador ternário
const resultado = usuarioVip >= 1000 ? ' Operador ternário Usuário VIP' : 'Usuário normal';
console.log(resultado);