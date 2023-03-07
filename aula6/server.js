const express = require('express');
const app = express();

// http://meusite.com/


app.get('/',(req,res) => {
    res.send('Olá mundo!');
});

app.listen(3000, ()=> {
console.log('Acessar http://localhost:3000');
console.log('Servidor executando na porta 3000');
})
