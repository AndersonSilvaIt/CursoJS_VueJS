const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// callback chamada a cada iteração, passando o índice e o elemento
aprovados.forEach( function(nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})


/aprovados.forEach( nome => console.log(nome))
/
/const exibirAprovados = aprovado => console.log(aprovado)
/
/aprovados.forEach(exibirAprovados)