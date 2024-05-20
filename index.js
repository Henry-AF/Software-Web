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
