function meuEscopo(){

  //selecionando o formulario
  //const form = document.querySelector('.form')

  //capturando evento do formulário.
  //Depois, será recebido uma função.
  //Após, foi criado o parametro chamado evento
  // com evento criado, ele vai tratar o         comportamento padrão do navegador

  /*
    form.onsubmit = function(evento) {
      evento.preventDefault(); 
      alert(1);
      console.log('Foi enviado');
    };
  */  
  //--------------ou------------------------//

  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  //O form adicionando escutador de evento no formularios
  //Com o uso do metodo (addEventListener()) dento dos parametros, está sendo colocado o evento chamado (submit)
  //Após, será criado uma função anonima 


  function recebendoEventoForm(evento) {
    evento.preventDefault()
    const nome = document.querySelector('.nome')
    const sobrenome = document.querySelector('.sobrenome')
    const peso = document.querySelector('.peso')
    const altura = document.querySelector('.altura')


    pessoas.push({
      nome:nome.value,
      sobrenome:sobrenome.value,
      peso:peso.value,
      altura:altura.value,
    })
  
    console.log(pessoas);
  
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
  }

  form.addEventListener('submit', recebendoEventoForm)

}

meuEscopo(); //executa ação da função  declarada