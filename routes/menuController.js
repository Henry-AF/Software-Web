
import { Router } from 'express';
const router = Router();    

router.get("/home", (req, res) => {
    res.render("index")
})

router.get("/cadastro", (req, res) => {
    res.render("cadastro")
})

router.get("/relatorio", (req,res) => {
    res.render("relatorio")
})

router.get("/stats", (req, res) => {
    res.render("stats")
})

router.get("/cfg", (req, res) => {
    res.render("cfg")
})

export default router