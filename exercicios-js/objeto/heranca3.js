const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

//Cria um novo objeto, onde aponta o propótipo a entidade pai, filha herda de pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// Herda de pai e cria as propriedades
const filha2 = Object.create(pai,
    {
        nome: {value: 'Bia', writable: false, enumerable: true}
    }
)

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    //Imprime a chave da entidade (propriedade)
    //console.log(key)

    //Verifica se essa propriedade pertence à essa entiade ou está herdando de alguém
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}