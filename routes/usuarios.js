// routes/usuarios.js
const express = require('express');
const router = express.Router();
const connection = require('../database/database.js');

// Obter todos os usuários
router.get('/', (req, res) => { // Alterado para '/'
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Adicionar um novo usuário
router.post('/', (req, res) => {
  const { nome, cpf, telefone, email } = req.body;
  connection.query('INSERT INTO usuarios (nome, cpf, telefone, email) VALUES (?, ?, ?, ?)', [nome, cpf, telefone, email], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ id: results.insertId });
  });
});

  

// Atualizar um usuário
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, cpf, telefone, email } = req.body;
  connection.query('UPDATE usuarios SET nome = ?, cpf = ?, telefone = ?, email = ? WHERE id = ?', [nome, cpf, telefone, email, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Deletar um usuário
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

module.exports = router;