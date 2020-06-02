const nums = [1,2,3,4,5]

// For com propósito
// Retorna cada elemento multiplicado por 2
//Função parecida com Linq no C#
let resultado = nums.map( function(e){
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

let resultado2 = []

//é o mesmo que utilizar o foreach e adicionar para um novo array
//
//nums.forEach( e => resultado2.push(e * 2))
//console.log(resultado2)

//console.log(resultado)