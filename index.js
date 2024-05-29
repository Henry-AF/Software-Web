import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cadastroRoutes from './routes/menuController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: "minha chave secreta",
    saveUninitialized: true,
    resave: false
}));

// Conexão com o BD
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Conectado ao banco de dados"));

// Middleware
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads')); // Adicionado para servir arquivos de uploads

// Rotas
app.use('/', cadastroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});


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

import editar from "./routes/menuController.js"
app.use(editar)