//falso
console.log(this === global)
//falso
console.log(this === module)

// verdadeiro
console.log(this === module.exports)

//
function logThis(){
    console.log('Dentro de uma função')
    //false
    console.log(this === exports)
}

logThis()