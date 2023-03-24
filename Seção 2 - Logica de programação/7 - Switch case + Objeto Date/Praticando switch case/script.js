const diaSemana = document.querySelector('.diaSemana');
const valorUsuario = Number (prompt('Digite o dia da semana'));
let resultado;

switch (valorUsuario) {
    case 0:
        resultado = 'Domingo' 
        break;
    case 1:
        resultado = 'Segunda' 
        break;
    case 2:
        resultado = 'Terça-feira' 
        break;
    case 3:
        resultado = 'Quarta-feira' 
        break;
    case 4:
        resultado = 'Quinta-feira' 
        break;
    case 5:
        resultado = 'Sexta-feira' 
        break;
    case 6:
        resultado = 'Sabado' 
        break;
    case 7:
        resultado = 'Domingo' 
        break;

    default: 'Valor digitado não corresponde a nenhum dia da semana'
        break;

        
}

diaSemana.innerHTML = `O dia da semana é ${valorUsuario} ${resultado}`




