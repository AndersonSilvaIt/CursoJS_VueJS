const _lodash = require('lodash')

// Lodash usado para obter função com valores randômicos

// Executa uma função a cada x tempo
setInterval(() => {
    console.log( _lodash.random(1, 1000))
}, 1000);