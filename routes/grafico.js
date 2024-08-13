const express = require('express');
const router = express.Router();

// Rota para renderizar a página inicial
router.get('/grafico', (req, res) => {
    const logout = req.query.logout;
    res.render('grafico', { logout: logout, title: 'SolidTecnlogia ~ Pauta do dia Online' });
});

module.exports = router;
