const receba = prompt("Digite seu nome");

document.body.innerHTML = `<p>Seu nome é: ${receba}</p>`;
document.body.innerHTML += `<p>Seu nome possui ${receba.length} letras</p>`
document.body.innerHTML += `<p>A segunda letra do seu nome é: ${receba[1]}</p>`
document.body.innerHTML += `<p>A letra x do seu nome está na posição ${receba.indexOf('x')}</p>`
document.body.innerHTML += `<p>Em qual posição se encontra a letra (D) a partir do indice 5: ${receba.indexOf('d', 5)}</p>`