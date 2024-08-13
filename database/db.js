const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.USER, // Certifique-se de que o nome da variável é 'USER' e não 'user'
    host: process.env.HOST, // Certifique-se de que o nome da variável é 'HOST' e não 'host'
    database: process.env.DATABASE, // Certifique-se de que o nome da variável é 'DATABASE' e não 'database'
    password: process.env.PASSWORD, // Certifique-se de que o nome da variável é 'PASSWORD' e não 'password'
    port: process.env.PORT_DB, // Certifique-se de que o nome da variável é 'PORT_DB' e não 'PORT_DB'
});

module.exports = {
    query: (text, params) => {
        return pool.query(text, params);
    },
};
