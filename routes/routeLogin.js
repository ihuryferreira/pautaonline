const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")


router.use(bodyParser.urlencoded({ extended: true }));

// Rota para renderizar a página inicial
router.get('/', (req, res) => {
    const logout = req.query.logout;
    res.render('index', { logout: logout, title: 'SolidTecnlogia ~ Pauta do dia Online' });
});

module.exports = router;
