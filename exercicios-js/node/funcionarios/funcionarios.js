const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const  funcionarios = response.data
    //console.log(funcionarios)
})


/**/ 
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcAtual) => {
    return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
}


axios.get(url).then(response => {
    const  funcionarios = response.data
    
    /*
        Obter a mulher chinesa que contem o maior salario
    */
    const func = funcionarios
            .filter(chineses)
            .filter(mulheres)
            .reduce(menorSalario)
    console.log(func)
})
