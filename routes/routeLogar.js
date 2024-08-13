const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// Rota para realizar o login
router.post('/logar', async (req, res) => {
    const { usuario, senha } = req.body;
    if (!usuario || !senha) {
        return res.send("<script>alert('Usuário ou senha devem ser preenchidos.'); window.location.href='/';</script>");
    }

    try {
        const user = await User.findUser(usuario, senha);

        if (user) {
            req.session.logado = true;
            req.session.user = { username: usuario }; // Armazene o usuário na sessão
            res.redirect('/inicial');
        } else {
            res.send("<script>alert('Usuário ou senha inválidos.'); window.history.back();</script>");
        }
    } catch (err) {
        console.error('Erro ao tentar fazer login:', err);
        res.status(500).send("<script>alert('Erro interno ao tentar fazer login.'); window.history.back();</script>");
    }
});

module.exports = router;