const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser'); // Observe que body-parser ainda pode ser usado, mas express.json() é recomendado
const connection = require('../database/database.js');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Uso do middleware embutido no Express

let currentToken = '';

function generateVerificationToken() {
  const token = Math.floor(1000 + Math.random() * 9000);
  return token.toString();
}

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'jusoper@gmail.com',
    pass: 'owfd fqll bjmh byag' // Use variáveis de ambiente para informações sensíveis
  }
});

// Endpoint para criar um novo usuário
app.post('/usuarios', (req, res) => {
  const { nome, cpf, telefone, email } = req.body;
  currentToken = generateVerificationToken();

  console.log('Recebido no endpoint /usuarios:', { nome, cpf, telefone, email });

  const mailOptions = {
    from: 'jusoper@gmail.com',
    to: email,
    subject: 'Código de Verificação',
    text: `Seu código de verificação é: ${currentToken}` // Correção do uso das aspas
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar email:', error);
      return res.status(500).send(error.toString());
    }

    console.log('Email enviado com sucesso:', info.response);

    const query = 'INSERT INTO usuarios (nome, cpf, telefone, email) VALUES (?, ?, ?, ?)';
    connection.query(query, [nome, cpf, telefone, email], (err, results) => {
      if (err) {
        console.error('Erro ao inserir usuário no banco de dados:', err);
        return res.status(500).send('Erro ao inserir usuário no banco de dados');
      }

      console.log('Usuário inserido com sucesso no banco de dados:', results);
      res.status(201).send('Usuário criado e e-mail enviado');
    });
  });
});

// Endpoint para atualizar a senha do usuário
app.post('/usuarios/senha', (req, res) => {
  const { email, senha } = req.body;

  const query = 'UPDATE usuarios SET senha = ? WHERE email = ?';
  connection.query(query, [senha, email], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar senha no banco de dados:', err);
      return res.status(500).send('Erro ao atualizar senha no banco de dados');
    }

    console.log('Senha atualizada com sucesso no banco de dados:', results);
    res.status(200).send('Senha atualizada com sucesso');
  });
});

// Rota para excluir a conta do usuário pelo email
app.delete('/usuarios', (req, res) => {
  const { email, senha } = req.body;

  // Verifique se o email e a senha foram fornecidos
  if (!email || !senha) {
    return res.status(400).send('Por favor, forneça o email e a senha.');
  }

  // Verifique se a senha está correta antes de excluir a conta
  connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário no banco de dados:', err);
      return res.status(500).send('Erro ao buscar usuário no banco de dados');
    }

    if (results.length === 0) {
      return res.status(401).send('Email ou senha incorretos.');
    }

    // Se a senha estiver correta, exclua a conta
    const deleteQuery = 'DELETE FROM usuarios WHERE email = ?';
    connection.query(deleteQuery, [email], (err, deleteResults) => {
      if (err) {
        console.error('Erro ao excluir usuário do banco de dados:', err);
        return res.status(500).send('Erro ao excluir usuário do banco de dados');
      }

      console.log('Usuário excluído com sucesso do banco de dados:', deleteResults);
      res.status(200).send('Usuário excluído com sucesso');
    });
  });
});

app.get('/token', (req, res) => {
  res.json({ token: currentToken });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Correção do uso das aspas
});