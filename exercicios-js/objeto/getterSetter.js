const  sequencia = {
    _valor: 1,   // o é uma convenção, uma variável que será alterada via funções
    get valor(){ return this._valor ++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)