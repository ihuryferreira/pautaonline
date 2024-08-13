const db = require("../database/db.js");

const PautaActive = {
  async addPauta(chamado, comentario, status, data) {
    try {
      const query = 'INSERT INTO pautaActive (chamado, comentario, status, data) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [chamado, comentario, status, data];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao adicionar a pauta ativa:", error);
      throw error;
    }
  },

  async getPautas() {
    try {
      const query = 'SELECT * FROM pautaActive';
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      console.error("Erro ao buscar pautas ativas:", error);
      throw error;
    }
  },

  async getPautaById(id) {
    try {
      const query = 'SELECT * FROM pautaActive WHERE id = $1';
      const values = [id];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao buscar pauta ativa por ID:", error);
      throw error;
    }
  },

  async updatePauta(id, chamado, comentario, status, data) {
    try {
      const query = 'UPDATE pautaActive SET chamado = $1, comentario = $2, status = $3, data = $4 WHERE id = $5 RETURNING *';
      const values = [chamado, comentario, status, data, id];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao atualizar a pauta ativa:", error);
      throw error;
    }
  },

  async deletePauta(id) {
    try {
      const query = 'DELETE FROM pautaActive WHERE id = $1 RETURNING *';
      const values = [id];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao excluir a pauta ativa:", error);
      throw error;
    }
  },

  async searchPautas(query) {
    try {
      const queryStr = `%${query}%`;
      const query = 'SELECT * FROM pautaActive WHERE chamado ILIKE $1 OR comentario ILIKE $1';
      const values = [queryStr];
      const result = await db.query(query, values);
      return result.rows;
    } catch (error) {
      console.error("Erro ao buscar pautas com filtro:", error);
      throw error;
    }
  }
};

module.exports = PautaActive;
