function sobrePessoa() {
    const recebe = Number(prompt('Digite o numero: '))
    const form = document.getElementById('form');
    const informacao = document.getElementById('infoPessoa')
    
    function calculo(num) {
        form.innerHTML += `${recebe * num }`
    }
    calculo(2);

    function dadosPessoa(nome,sobrenome,idade) {
        return{
            nome,
            sobrenome,
            idade
        }
    }
    const acesso = dadosPessoa('Alex','Santos',27);
    informacao.innerHTML += `${acesso.nome}`
    
}

sobrePessoa()