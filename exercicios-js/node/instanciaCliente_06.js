const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Esse arquivo retorna uma função
const contadorC = require('./instanciaNova_06')()
const contadorD = require('./instanciaNova_06')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
//contadorD.inc()

console.log(contadorD.valor)