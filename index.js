import express from 'express';
import mongoose from 'mongoose';
const app = express()
import session from 'express-session';
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(session({
    secret: "minha chave secreta",
    saveUninitialized: true,
    resave: false
}))

// conexao com o BD
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("Erro", (error) => console.log(error));
db.once("Open", () => console.log("Conectado ao banco de dados"))

app.get("/", function(req,res){
    res.render("home")
})

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

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

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`)
})