const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'..','teste.txt');
const escrever = require('./modules/escrever.js');
const ler = require('./modules/ler');
const pessoas = [
    {nome:'Joao'},
    {nome:'Maria'},
    {nome:'Eduardo'},
    {nome:'Luiza'},
]

const json = JSON.stringify(pessoas,'',2);

escrever(caminhoArquivo,json);
ler(caminhoArquivo)
    .then();