console.log(module.exports === this)

console.log(module.exports === exports)

//a variavel "a" será vista em outros arquivos, pois é ela que está sendo exportada
this.a = 1

// o mesmo ocorre com a variável b
exports.b = 2

// o mesmo ocorre com a variável c
module.exports.c = 3

exports = null

// mesmo atribuindo null no exports, o module.exports mantém a referêmcia das variáveis
console.log(module.exports)
exports ={
    nome: 'Teste'
}

console.log(module.exports)