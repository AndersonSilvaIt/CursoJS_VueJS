const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDados = require('./bancoDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {

    //res.send({nome:'Notebook', preco: 123.45})
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {

    const produto = bancoDados.excluirProduto(req.body.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})