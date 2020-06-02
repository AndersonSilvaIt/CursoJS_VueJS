console.log(typeof Array, typeof new Array,  typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'

console.log(aprovados)

aprovados.push('Bruce')
console.log(aprovados)

//Nesse caso, todos os elementos entre o 4 e o 9 ficarão vazios
// ficam como undefined
aprovados[9] = 'Rafael'

console.log(aprovados)

//Ordena o array
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
// Exclui um elemento
aprovados.splice(1, 1)
console.log(aprovados)