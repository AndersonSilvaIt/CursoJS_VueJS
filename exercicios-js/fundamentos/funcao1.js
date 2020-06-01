function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

imprimirSoma(2)
// Quando passado desse jeito, o segundo parametro é tido undefined
// Impresso NaN

imprimirSoma(2,3,4,5,6,7,8,9)
//Impresso 5, irá pegar somente os dois primeiros valores

function soma(a, b = 0){
    return a+b
}

console.log(soma(2))