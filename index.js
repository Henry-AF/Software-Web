import express from 'express'
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(5000, function(error){
    if(error){
        console.log("Erro!")
    }
    else("Rodando na porta 5000")
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", function(req,res){
    res.render("index")
})

import cadastro from "./routes/menuController.js"
app.use(cadastro)

import relatorio from "./routes/menuController.js"
app.use(relatorio)

import stats from "./routes/menuController.js"
app.use(stats);

import cfg from "./routes/menuController.js"
app.use(cfg)

import home from "./routes/menuController.js"
app.use(home)