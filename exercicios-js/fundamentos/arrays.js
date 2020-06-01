const valores = [7.7, 8.9, 6.3, 9.2]

valores[4] = 10
console.log(valores)

//Com arrays consigo adicionar valor apenas colocando a posição que desejo

//também é possível implementar através de função
valores.push({id: 3}, false, null, 'teste')

console.log(valores)
console.log(valores.length)

valores.pop()
//Para remover um elemento

delete valores[0]
// o delete não diminui o array, somente coloca vazio no lugar
console.log(valores.length)

