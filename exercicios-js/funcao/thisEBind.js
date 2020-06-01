// uma função dentro de pessoa, se chamar diretamente o saudacao, não irá funcionar, nesse caso
// o this aponta para as propriedades dentro da própria classe
// se não usar o this, será gerado um erro de compilação
const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()
/*
    nesse caso será gerado um erro, não é possível obter diretamente uma função de uma classe para uma variável
    é necessário utilizar o bind
*/

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()