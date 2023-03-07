const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const contatoController = require('./src/controllers/contatoController.js');


//Rotas da Home
route.get('/',homeController.paginaInicial);
route.post('/',homeController.trataPost);

//Rotas de Contato 
route.get('/contato', contatoController.paginaInicial);



module.exports = route;