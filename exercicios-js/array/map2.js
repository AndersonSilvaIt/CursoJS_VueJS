const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar usando map, retornar apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// Fazendo sem utilizar o map
const resultado2 = []
carrinho.forEach( e => {
    resultado2.push(JSON.parse(e).preco)
})

console.log(resultado2)