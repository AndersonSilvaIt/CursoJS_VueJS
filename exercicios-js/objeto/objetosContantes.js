//Pessoa -> 123, pessoa aponta para o endereço 123

const pessoa = {nome: 'Joao'}

// Consigo alterar os dados da constante, pois não é alterado o endereço da classe
pessoa.nome = 'Pedro'

//Aqui gera um erro, pois estou tentando colocar um novo objeto dentro de pessoa
//pessoa = { nome: 'Ana'}

//Aqui eu congelo o objeto pessoa, não consigo alterar suas propriedades
Object.freeze(pessoa);

//não altera
pessoa.nome = 'Maria'

console.log(pessoa.nome)

//cria o objeto diretamente sendo congelado
const pessoaConstante = Object.freeze({nome: 'Adao'})
