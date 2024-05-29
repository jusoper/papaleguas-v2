// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3189*LiAres',
  database: 'papaleguas',
});

// Verifica se a conexão com o banco de dados foi bem-sucedida
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

// Rota para obter todos os usuários
app.get('/', async (req, res) => {
  try {
    const result = await connection.promise().query('SELECT * FROM usuarios');
    return res.json(result[0]);
  } catch (error) {
    console.error('Erro ao executar consulta:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// server.js

// Rota para inserir um novo produto
app.post('/api/produtos', (req, res) => {
  const { nomeRemetente, numeroRemetente, enderecoColeta, informacaoPacote, tamanhoProduto, nomeDestinatario, numeroDestinatario, enderecoEntrega } = req.body;
  if (!nomeRemetente || !numeroRemetente || !enderecoColeta || !informacaoPacote || !tamanhoProduto || !nomeDestinatario || !numeroDestinatario || !enderecoEntrega) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  connection.query('INSERT INTO produtos (nomeRemetente, numeroRemetente, enderecoColeta, informacaoPacote, tamanhoProduto, nomeDestinatario, numeroDestinatario, enderecoEntrega) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nomeRemetente, numeroRemetente, enderecoColeta, informacaoPacote, tamanhoProduto, nomeDestinatario, numeroDestinatario, enderecoEntrega], (err, results) => {
    if (err) {
      console.error('Erro ao inserir produto:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    res.status(201).json({ id: results.insertId });
  });
});

// Inicia o servidor na porta 8081
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});