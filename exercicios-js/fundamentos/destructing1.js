const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero:  1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

//Opção para onter uma propriedade de um objeto

//Extraindo propriedades de um objeto para uma outra variavel
const {nome: n, idade: i} = pessoa

console.log(n,i)

const {endereco : {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)