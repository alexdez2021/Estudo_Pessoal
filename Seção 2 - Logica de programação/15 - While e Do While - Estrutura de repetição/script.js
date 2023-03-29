/*

While e Do while = são duas estruturas de repetição, que funciona de maneira muito similar ao for.

Qual a diferença? geralmente a gente sabe o tamanho o tamanho do elemento que estamos trabalhando quando utilizamos array ou nodeList por ex: se possuir um array com 10 elementos, já sabemos que o laço vai repetir 10x. Com o uso do (while e Do while), não será possivel saber, quantas vezes a repetição, vai precisar percorrer, até que o laço finalize

while do-while, são dois tipos de loops em linguagens de programação que permitem que um trecho de código seja executado repetidamente até que uma determinada condição seja atendida. A principal diferença entre os dois é que em um whileloop, a condição é verificada antes que o código dentro do loop seja executado, enquanto em um do-whileloop, a condição é verificada depois que o código dentro do loop é executado pelo menos uma vez.

*/

//exemplo

/*
let i = 0;

while (i <= 10) {
    console.log(i);
    i++
}


*/





function random(max,min) {
    const resultado = Math.random() * (max - min) + min ;
    return Math.floor(resultado)
}

let max = 10;
let min = 5;
let rand = random(max,min);



while(rand !== 7){
    rand = random(max,min)
    console.log('trabalhando com (while) resultado:',rand);
}
console.log('#####################');

do{
    rand = random(max,min);
    console.log('trabalhando com (do while) resultado',rand);
}while (rand !== 7)

console.log(rand !== 7);

