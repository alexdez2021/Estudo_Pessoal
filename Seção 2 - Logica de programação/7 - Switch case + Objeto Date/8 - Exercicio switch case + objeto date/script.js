//selecionando o h1 que está dentro da classe chamada container
//const h1 = document.querySelector('.container h1');
//const data = new Date();

//primeira primeira de trabalhar com data
/*
function getDiaSemana(diaSemana) {
    switch (diaSemana) {
        case 1:
            dia = 'segunda'
            return dia;
        case 2:
            dia = 'terça'
            return dia;
        case 3:
            dia = 'quarta'
            return dia;
        case 4:
            dia = 'quinta'
            return dia;
        case 5:
            dia = 'sexta'
            return dia;
        case 6:
            dia = 'sabado'
            return dia;
        case 7:
            dia = 'domingo'
            return dia;
    
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro'
            return nomeMes;

        case 1:
            nomeMes = 'Fevereiro'
            return nomeMes; 

        case 2:
            nomeMes = 'março'
            return nomeMes;          

        case 3:
            nomeMes = 'abril'
            return nomeMes;          

        case 4:
            nomeMes = 'maio'
            return nomeMes;          

        case 5:
            nomeMes = 'junho'
            return nomeMes;          

        case 6:
            nomeMes = 'julho'
            return nomeMes;          

        case 7:
            nomeMes = 'agosto'
            return nomeMes;          

        case 8:
            nomeMes = 'setembro'
            return nomeMes;          

        case 9:
            nomeMes = 'outubro'
            return nomeMes;          
        case 10:
            nomeMes = 'novembro'
            return nomeMes;          
        case 11:
            nomeMes = 'dezembro'
            return nomeMes;          
    }
}

function criaData(data) {
    const diaSemana = data.getDay(); // dia da semana
    const numeroMes = data.getMonth(); // mes do ano

    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getNomeMes(numeroMes)

    console.log(nomeDia, nomeMes);
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}`+ 
    ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
    
    )
}

h1.innerHTML =  criaData(data)

*/


//segunda maneira de trabalhar com data
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-br', opcoes);




