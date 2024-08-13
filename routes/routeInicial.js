const express = require('express');
const router = express.Router();
const DadosUser = require('../models/DadosUser.js');

// Rota para a página inicial após o login
router.get('/inicial', async (req, res) => {
    if (req.session.logado) {
        try {
            const usuarios = await DadosUser.userSearch();
            const loggedInUser = req.session.user ? req.session.user.username : null; // Pegue o usuário da sessão
            res.render('inicial', { msg: '', file: '', usuarios, loggedInUser, title: 'SolidTecnlogia ~ Pauta do dia Online' }); // Passa os dados para o view EJS
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar dados');
        }
    } else {
        res.redirect('/');
    }
});

module.exports = router;