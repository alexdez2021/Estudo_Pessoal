const form = document.querySelector('.form');

form.addEventListener('submit',function(evento) {
    evento.preventDefault(evento);
    const inputPeso = evento.target.querySelector('.peso');
    const inputAltura = evento.target.querySelector('.altura')
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido');
        return peso;
    }
    
    if (!altura) {
        setResultado('Altura invalido');
        return altura;
    }

    const recebeCalculo = calculoImc(peso , altura);
    const recebeImc = getImc(recebeCalculo)

    setResultado(recebeImc)

})

function calculoImc(peso , altura) {
    const resultadoImc = peso / altura ** altura
    return resultadoImc.toFixed(2)
}

function getImc(recebeCalculo) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if (recebeCalculo >= 40) {
        return nivel[5];
    }

    if (recebeCalculo >= 35) {
        return nivel[4];
    }

    if (recebeCalculo >= 30) {
        return nivel[3];
    }

    if (recebeCalculo >= 25) {
        return nivel[2];
    }

    if (recebeCalculo >= 20) {
        return nivel[1];
    }

    if (recebeCalculo <= 19) {
        return nivel[0];
    }
}

function criaElemeto() {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = ''
    return paragrafo
}

function setResultado(recebeImc) {
    const resultado = document.querySelector('.resultado');
    const recebeElemento = criaElemeto();
    resultado.appendChild(recebeElemento);
    recebeElemento.innerHTML =  recebeImc;
}