const db = require("../database/db.js");

const DadosUser = {
  async userSearch() {
    const query = 'SELECT id, "user", senha FROM usuario';

    try {
      const res = await db.query(query);
      return res.rows;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
};

module.exports = DadosUser;
