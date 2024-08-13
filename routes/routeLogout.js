const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
            res.redirect('/');
        } else {
            res.send('<script>alert("Usuário deslogado.");window.location.assign("/");</script>');
        }
    });
});

module.exports = router;