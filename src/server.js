const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/config');

// Importando as rotas
const eventoRoutes = require('./router/evento');
const participanteRoutes = require('./router/usuario');

const app = express();

app.use(bodyParser.json());
app.use('/evento', eventoRoutes);
app.use('/participante', participanteRoutes);

// Sincronizando o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
  });
});