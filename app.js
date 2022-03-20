const express    = require('express')
const app        = express()
const db         = require('./db/connection')
const bodyparser = require('body-parser')

const port = 8000


app.listen(port, () => {
    console.log(`o projeto esta rodando na porta localhols:${port}`)
})

// body parser

app.use(bodyparser.urlencoded({ extended: false }))


//db conenctions
db
    .authenticate()
    .then(() => {
        console.log("conectou ao banco");
    })
    .catch((error) => {
        console.log("ocorreu um erro" + error);
    })


//routes

app.get('/', (req, res) => {
    res.send("Está funcionando");
})

// Jobs routes

app.use('/jobs', require('./routes/jobs'))