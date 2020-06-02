const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Obter as chaves do objeto
console.log(Object.keys(pessoa))

// Obter os valores do objeto
console.log(Object.values(pessoa))

//Obtem todos as chavese  valores do objeto
console.log(Object.entries(pessoa))

//Consigo fazer um laço nas propriedades do objeto
Object.entries(pessoa).forEach(element => {
    console.log(element)
});

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave} : ${valor}`)
});


// Define uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable : true, // valida se vai ser listado ou não quando utilizar o Objet.Keys
    writable: false, // não pode ser alterada
    value: '01/01/2019'
})
//Não será alterado
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

// Adicionado no ES6 (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b:2}
const o2 = {c:3, a: 4}

const obj = Object.assign(dest, o1, o2)

console.log(obj)

