const express = require("express");
const router = express.Router();
const PautaPausadosModel = require("../models/PautaPausadosModel.js");

router.post('/pausado', async (req, res) => {
    const { numeroChamado, comentario, status} = req.body;
    const dataAtual = new Date().toISOString().split('T')[0];
    try {
        const result = await PautaPausadosModel.addPauta(numeroChamado, comentario, status, dataAtual);
        if (result) {
            res.send("<script>alert('Dados do Pausados gravados com sucesso.'); window.location.href='/inicial';</script>");
        } else {
            res.send("<script>alert('Erro ao gravar dados.'); window.location.href='/inicial';</script>");
        }
    } catch (error) {
        res.status(500).send("Erro ao gravar dados");
    }
})

module.exports = router;