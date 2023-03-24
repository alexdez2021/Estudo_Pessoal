function parImp(num) {
    if (num % 2 === 0) {
        return`PAR`
    }else{
        return`IMPAR`
    }
}

let recebe = parImp(11);
console.log(recebe);

