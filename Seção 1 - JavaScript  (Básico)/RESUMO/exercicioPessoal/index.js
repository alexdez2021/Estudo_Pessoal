const numero = Number (prompt('Digite o numero: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada é: ${Number (numero ** 0.5)}</p>`;
texto.innerHTML += `<p>É inteiro?: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais?: ${numero.toFixed(2)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>É NaN?: ${Number.isInteger(numero)}</p>`