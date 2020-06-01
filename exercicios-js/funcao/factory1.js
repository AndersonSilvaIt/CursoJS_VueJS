//Se o nome das propriedades forem igual a dos parametros, basta retornar as propriedades
// que já terão os valores dos parâmetros

function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

