const express = require("express");
import router from "./menuController";
const router = express.Router();
const CatDono = require("../models/gatoDono")
const multer = require("multer")
const fs = require("fs")
import gatoDonoSevice from "../services/gatoDonoSevice";
import { title } from "process";

router.get("/cadastrar", (req, res) => {
    res.render("cadastro", {title: "Adiconar"})
})

router.post("/cadastrar/new", (req, res) => {
    if (!req.body.nomeGato || !req.body.idadeGato || !req.body.sexoGato || !req.body.nomeDono || !req.body.estadoDono || !req.body.cidadeDono || !req.emailDono || !req.body.telefoneDono || !req.body.enderecoDono) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    const catDono = new CatDono({
        nomeGato: req.body.nomeGato,
        idadeGato: req.body.idadeGato,
        sexoGato: req.body.sexoGato,
        nomeDono: req.body.nomeDono,
        estadoDono: req.body.estadoDono,
        cidadeDono: req.body.cidadeDono,
        emailDono: req.body.emailDono,
        telefoneDono: req.body.telefoneDono,
        enderecoDono: req.body.enderecoDono
    })

    catDono.save()
        .then(result => {
            req.session.message = {
                type: "success",
                message: "Gato e dono cadastrados com sucesso!"
            };
            res.redirect("/")
        })
        .catch(error => {
            req.session.message = {
                type: "error",
                message: "Erro ao adicionar ao Banco de Dados. Por favor, tente novamente"
            }
            res.redirect("/")
        })

})

router.get("/edit/:id", (req, res) => {
    const id = req.params.id 
    ClienteService.SelectOne(id).then((cliente) => {
        res.render("editar", {
            cliente : cliente
        })
    })
})


export default router