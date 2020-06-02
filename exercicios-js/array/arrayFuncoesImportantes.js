const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Retira o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

// Adiciona um elemento no fim do Array
pilotos.push('Verstappen')
console.log(pilotos)

// Remove o primeiro item do array
pilotos.shift()
console.log(pilotos)

// Insere o item na primeira posição, empurra os outros para posições adiante
pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice, pode adicionare remover elementos

//Adicionar
//Insere o Borras e Massa a partir da posição 2
pilotos.splice(2, 0, 'Borras', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Obtem o array a partir da posição 2
console.log(algunsPilotos1)

// Obtém o array do indice 1 até o 4, porém o indice 4 não entra
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)