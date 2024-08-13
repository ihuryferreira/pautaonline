const express = require("express");
const router = express.Router();
const DadosUser = require("../models/DadosUser.js");
const pautaActiveModel = require("../models/PautaActiveModel.js");
const PautaPausadosModel = require("../models/PautaPausadosModel.js");

// Rota para renderizar o formulário de pauta
router.get("/consulta", async (req, res, next) => {
    if (req.session.logado) {
        try {
            const usuarios = await DadosUser.userSearch();
            const loggedInUser = req.session.user ? req.session.user.username : null; // Obtém o usuário da sessão
            const pautaActive = await pautaActiveModel.getPautas();
            const pautaPausada = await PautaPausadosModel.getPautas();
            const dataAtual = new Date().toISOString().split('T')[0];
            res.render("consulta", {
                msg: "",
                file: "",
                usuarios,
                loggedInUser,
                pautaActive,
                pautaPausada,
                dataAtual,
                successMessage: req.session.successMessage,
                title: "SolidTecnlogia ~ Pauta do dia Online",
            }); // Passa os dados para a view EJS
            req.session.successMessage = null;
        } catch (err) {
            console.error("Erro ao buscar dados:", err);
            res.status(500).send("Erro ao buscar dados");
        }
    } else {
        res.redirect("/");
    }
    next()
});

module.exports = router;