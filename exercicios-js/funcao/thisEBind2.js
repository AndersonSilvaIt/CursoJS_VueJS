function Pessoa(){
    this.idade = 0

    //Dispara uma função após algum tempo informado
    setInterval(function() {
        this.idade ++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa()

/*
    quando eu não utilizo o bind, é gerado o erro, pois a função interna não possui acesso a variavel
    idade, já quando utilizo o bind(this), começa obter acesso à variável
*/