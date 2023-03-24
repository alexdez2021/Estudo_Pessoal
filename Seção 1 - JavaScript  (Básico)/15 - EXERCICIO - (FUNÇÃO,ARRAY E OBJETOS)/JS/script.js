function meuEscopo() {
    const form = document.querySelector('#form');
    const sobrePessoa = [];
    const resultado = document.querySelector('#resultado')

    

    function informacao(evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
      

        sobrePessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso,
            altura
        })
        console.log(sobrePessoa);
        resultado.innerHTML += `${nome.value} ${sobrenome.value}`;



    }
    form.addEventListener('submit',informacao)
}
meuEscopo()