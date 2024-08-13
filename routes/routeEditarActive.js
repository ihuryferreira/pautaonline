const express = require("express");
const router = express.Router();
const pautaActiveModel = require("../models/PautaActiveModel.js");

// Editar pauta (ativa)
router.get('/editar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const pauta = await pautaActiveModel.getPautaById(id);
        res.render('editar', { pauta, successMessage: req.session.successMessage });
        req.session.successMessage = null; // Limpar mensagem após exibição
    } catch (error) {
        console.error("Erro ao buscar pauta para edição:", error);
        res.status(500).send("Erro interno do servidor");
    }
});

router.post('/editar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { chamado, comentario, status, data } = req.body;
        await pautaActiveModel.updatePauta(id, chamado, comentario, status, data);
        req.session.successMessage = "Pauta editada com sucesso!";
        res.redirect('/editar/' + id); // Redireciona para a página de edição específica
    } catch (error) {
        console.error("Erro ao atualizar pauta:", error);
        res.status(500).send("Erro interno do servidor");
    }
});

// Excluir pauta
router.delete('/deletar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (isNaN(id)) {
            return res.status(400).send("ID inválido.");
        }
        const deletedPauta = await pautaActiveModel.deletePauta(id);
        if (deletedPauta) {
            req.session.successMessage = "Pauta excluída com sucesso!";
            res.status(200).send("Pauta excluída com sucesso!");
        } else {
            res.status(404).send("Pauta não encontrada.");
        }
    } catch (error) {
        console.error("Erro ao excluir pauta:", error);
        res.status(500).send("Erro interno do servidor");
    }
});

module.exports = router;
