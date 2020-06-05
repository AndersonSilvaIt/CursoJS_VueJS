// middleware pattern (chain of responsability)

const pass1 =  (ctx, next) => {
    ctx.valor1 = 'mid1',
    next()
}

const pass2 = (ctx, next) =>{
    ctx.valor2 = 'mid2',
    next()
}

const pass2 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...midlewares) => {
    
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
}