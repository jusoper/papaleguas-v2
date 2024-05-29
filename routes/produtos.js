// routes/produtos.js
const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// Obter todos os produtos
router.get('/', (req, res) => {
  connection.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Adicionar um novo produto
router.post('/', (req, res) => {
  const { nome, descricao, preco } = req.body;
  connection.query('INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)', [nome, descricao, preco], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ id: results.insertId });
  });
});

// Atualizar um produto
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco } = req.body;
  connection.query('UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?', [nome, descricao, preco, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Deletar um produto
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM produtos WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

module.exports = router;
