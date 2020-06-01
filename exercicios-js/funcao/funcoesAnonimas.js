const soma = function (x,y){
    return x + y
}

const imprimeResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimeResultado(3,4)
imprimeResultado(3,4,soma)
imprimeResultado(3,4, function(x,y){
    return x - y
})

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()