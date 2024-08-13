const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const http = require('http');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // Adicione um valor padrão para PORT se não estiver definido

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware para CORS
app.use(cors(corsOptions));

// Configuração do diretório de views e motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src','views'));

// Configuração do middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET || 'default_secret', // Valor padrão para SECRET
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Em produção, altere `secure` para `true` e configure HTTPS
}));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Importação das rotas
const routeLogin = require('./routes/routeLogin');
const routeCadastro = require('./routes/routeCadastro');
const routeLogar = require('./routes/routeLogar');
const logoutRoutes = require('./routes/routeLogout');
const routeInicial = require('./routes/routeInicial');
const routePautaView = require('./routes/routePautaView');
const routeEditarActive = require('./routes/routeEditarActive');
const routeEditPausados = require('./routes/routeEditPausados');
const routeConsulta = require('./routes/routeConsulta');
const routeGravarActive = require('./routes/routeGravarActive');
const routeGravarPausados = require('./routes/routeGravarPausados');

// Uso das rotas
app.use(routeLogin);
app.use(routeCadastro);
app.use(routeLogar);
app.use(logoutRoutes);
app.use(routeInicial);
app.use(routePautaView);
app.use(routeConsulta);
app.use(routeEditarActive);
app.use(routeEditPausados);
app.use(routeGravarActive);
app.use(routeGravarPausados);

// Middleware para captura de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
  next();
});

// Criação do servidor
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}\nEndereço do Site: http://localhost:${PORT}`);
});
