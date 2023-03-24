const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    const recebePeso = Number(peso.value);
    const recebeAltura = Number(altura.value);

    //console.log(recebePeso, recebeAltura);

    if (!recebePeso) {
        setResultado('Valor invalido');
        return recebePeso
    }

    if (!recebeAltura) {
        setResultado('Valor invalido');
        return recebeAltura
    }

    const sobreImc = calculoImc(recebePeso, recebeAltura);
    const resultadoImc = getImc(sobreImc)

    const msg = `Seu peso é ${sobreImc} ${resultadoImc}`

    setResultado(msg)

})

function calculoImc(recebePeso, recebeAltura) {
    const imc = recebePeso / recebeAltura ** 2;
    return imc.toFixed(2)
}

function getImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18) {return nivel[0] }
    if (imc > 18 && imc < 24) {return nivel[1]}
    if (imc > 24 && imc < 27) {return nivel[2] }
    if (imc > 27 && imc < 33) {return nivel[3] }
    if (imc > 33 && imc < 40) {return nivel[4] }
    if (imc > 40) {return nivel[5] }
}

function criaP() {
    const paragrafo = document.createElement('p');
    return paragrafo
}

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    const p = criaP();
    p.innerHTML = msg

    resultado.appendChild(p)
}


