let valor
console.log(valor)
//Undefined, pois a variavel foi declarada, porém nenhum valor foi imposto a ela

//console.log(valor2)
// Erro, a variavel não existe


//null = ausencia de valor
const produto = {}
console.log(produto)
//unefined

produto.preco = 10
console.log(produto.preco)

delete produto.preco
//Retiro a propriedade preco do tipo produto
console.log(produto.preco)