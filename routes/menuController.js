import express from 'express';
import multer from 'multer';
import CatDono from '../models/gatoDono.js';

const router = express.Router();

// Configuração do multer para salvar arquivos no diretório 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Rota para renderizar o formulário de edição de um gato específico
router.get("/edit/:id", async (req, res) => {
    try {
        const gato = await CatDono.findById(req.params.id);
        if (!gato) {
            return res.status(404).send("Gato não encontrado");
        }
        res.render("edit", { title: "Editar Gato", gato: gato });
    } catch (error) {
        console.error('Erro ao buscar gato:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para atualizar os dados de um gato específico
router.post("/edit/:id", upload.single('file'), async (req, res) => {
    const { nomeGato, idadeGato, sexoGato, nomeDono, estadoDono, cidadeDono, emailDono, telefoneDono, enderecoDono } = req.body;
    const imagem = req.file ? req.file.path : null;

    try {
        const gato = await CatDono.findById(req.params.id);
        if (!gato) {
            return res.status(404).send("Gato não encontrado");
        }

        gato.nomeGato = nomeGato;
        gato.idadeGato = idadeGato;
        gato.sexoGato = sexoGato;
        gato.nomeDono = nomeDono;
        gato.estadoDono = estadoDono;
        gato.cidadeDono = cidadeDono;
        gato.emailDono = emailDono;
        gato.telefoneDono = telefoneDono;
        gato.enderecoDono = enderecoDono;
        if (imagem) {
            gato.imagem = imagem;
        }

        await gato.save();

        req.session.message = {
            type: "success",
            message: "Gato atualizado com sucesso!"
        };
        res.redirect("/");
    } catch (error) {
        console.error('Erro ao atualizar gato:', error);
        req.session.message = {
            type: "error",
            message: "Erro ao atualizar gato. Por favor, tente novamente"
        };
        res.redirect("/");
    }
});

// Outras rotas para renderizar as páginas
router.get("/cadastro", (req, res) => {
    res.render("cadastro", { title: "Adicionar" });
});

router.post("/cadastrar/new", upload.single('file'), (req, res) => {
    const { nomeGato, idadeGato, sexoGato, nomeDono, estadoDono, cidadeDono, emailDono, telefoneDono, enderecoDono } = req.body;
    const imagem = req.file ? req.file.path : null;

    if (!nomeGato || !idadeGato || !sexoGato || !nomeDono || !estadoDono || !cidadeDono || !emailDono || !telefoneDono || !enderecoDono) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    const catDono = new CatDono({
        nomeGato,
        idadeGato,
        sexoGato,
        nomeDono,
        estadoDono,
        cidadeDono,
        emailDono,
        telefoneDono,
        enderecoDono,
        imagem
    });

    catDono.save()
        .then(result => {
            req.session.message = {
                type: "success",
                message: "Gato e dono cadastrados com sucesso!"
            };
            res.redirect("/");
        })
        .catch(error => {
            req.session.message = {
                type: "error",
                message: "Erro ao adicionar ao Banco de Dados. Por favor, tente novamente"
            };
            res.redirect("/");
        });
});

router.get("/", async (req, res) => {
    try {
        const gatos = await CatDono.find(); // Buscar todos os gatos e donos do banco de dados
        res.render("home", { title: "Home", gatos: gatos }); // Passar os gatos para o modelo EJS
    } catch (error) {
        console.error('Erro ao buscar gatos:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get("/relatorio", async (req, res) => {
    try {
        const gatos = await CatDono.find();
        res.render("relatorio", { title: "Relatório", gatos: gatos });
    } catch (error) {
        console.error('Erro ao buscar gatos:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

router.get("/stats", (req, res) => {
    res.render("stats");
});

router.get("/cfg", (req, res) => {
    res.render("cfg");
});

export default router;
