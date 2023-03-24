/* const data = new Date('1998-11-40 00:00:00');
let dia = data.getDay();
let diaSemana;

//consultando qual variavel pretende checar
switch (dia) {
    case 0: //por exemplo caso o dia da semana for zero:
        diaSemana = (dia,'domingo'); //faça isso
        break; // quando finaliza o trecho do codigo, fecha ele com uso do break:

    case 1: 
        console.log( dia, 'segunda-feira');
        break;
    case 2: 
        console.log(dia, 'terça-feira');
        break;
    case 3: 
        console.log(dia,'quarta-feira');
        break;
    case 4: 
        console.log(dia,'quinta-feira');
        break;
    case 5: 
        console.log(dia,'sexta-feira');
        break;
    case 6: 
        console.log(dia,'sexta-sabado');
        break;    

    //se a variavel não corresponder a nenhuma condição
    default:
        console.log('Não tem');// faça isso
        break;
} */

function getDiaSemanaTexto(diaSemana) {
   
    let diaSemanaTexto;

    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto; 
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;      
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;      
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;  
        case 6:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;  
        case 7:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;     

        default:
            break;
    }

}

const data = new Date('2023-01-31');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)

console.log(diaSemanaTexto, diaSemana);
