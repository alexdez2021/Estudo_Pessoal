const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const nomeUsuario = document.querySelector('.nome');
    const senhaUsuario = document.querySelector('.senha');

    const recebeNome = nomeUsuario.value;
    const recebeSenha = Number (senhaUsuario.value);

    const div = document.createElement('div');

    const texto1 = document.createTextNode(recebeNome);
    const senha1 = document.createTextNode(recebeSenha);

    div.appendChild(texto1)
    div.appendChild(senha1)
    

    form.appendChild(div)

    //form.innerHTML += `Seu nome é ${recebeNome} e sua senha é ${recebeSenha}`

  
    
})