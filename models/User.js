const db = require("../database/db.js");
const crypto = require('crypto');

const User = {
  async findUser(username, password) {
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    const query = 'SELECT * FROM usuario WHERE "user" = $1 AND senha = $2'; // "user" entre aspas duplas
    const values = [username, hashedPassword];

    try {
      const res = await db.query(query, values);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  async createUser(username, password) {
    // console.log(`Senha: ${password}`)
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    const query = 'INSERT INTO usuario ("user", senha) VALUES ($1, $2)'; // "user" entre aspas duplas
    const values = [username, hashedPassword];

    try {
      await db.query(query, values);
      // console.log(`Query: ${query} e Value: ${values}`);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
};

module.exports = User;
