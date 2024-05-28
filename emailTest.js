const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jusoper@gmail.com',
    pass: 'owfd fqll bjmh byag'
  }
});

const mailOptions = {
  from: 'jusoper@gmail.com',
  to: 'jusoper@gmail.com',
  subject: 'Teste de Envio de E-mail',
  text: 'Isso é um teste!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Erro ao enviar e-mail:', error);
  }
  console.log('E-mail enviado:', info.response);
});
