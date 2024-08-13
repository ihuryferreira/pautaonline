const express = require('express');
const router = express.Router();
const User = require('../models/User.js');


// Rota para renderizar a página de registro de usuário
router.get('/cadastro', (req, res) => {
    res.render('register');
});

// Rota para processar o registro de usuário
router.post('/cadastro', async (req, res) => {
    const { usuario, senha } = req.body;
    if (!usuario || !senha) {
        return res.send("<script>alert('Usuário ou senha devem ser preenchidos.'); window.history.back();</script>");
    }

    try {
        const result = await User.createUser(usuario, senha);

        if (result) {
            res.send("<script>alert('Usuário registrado com sucesso.'); window.location.href='/';</script>");
        } else {
            res.send("<script>alert('Erro ao registrar usuário.'); window.history.back();</script>");
        }
    } catch (err) {
        console.error('Erro ao tentar registrar usuário:', err);
        res.status(500).send("<script>alert('Erro interno ao tentar registrar usuário.'); window.history.back();</script>");
    }
});

module.exports = router;