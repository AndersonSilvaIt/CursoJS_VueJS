// Object.preventExtensions


//com essa função, não é permitido adicionar novos elementos para a entidade
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag: 'promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))

console.log(produto)

// é permitido deletar uma propriedade e alterar o valor de uma já existente
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'

delete produto.tag
console.log(produto)

// Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

// Não é possível adicionar novos elementos e nem excluir os atributos, é permitido alterar os que já existe

console.log(Object.isSealed(pessoa))

pessoa.nome = 'Bruce'
console.log(pessoa.nome)