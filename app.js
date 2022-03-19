const express = require('express')
const app = express()
const db = require('./db/connection')

const port = 8000


app.listen(port, () => {
    console.log(`o projeto esta rodando na porta localhols:${port}`)
})


//db conenctions
db
    .authenticate()
    .then(() => {
        console.log("conectou ao banco")
    })
    .catch((error) => {
        console.log("ocorreu um erro" + error)
    })


//routes