const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('public'));
app.use('/starter-code', express.static('starter-code'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));



const router = require('./router');
app.use(router);

app.set ('view engine', 'ejs');

app.listen(3000,() =>{
    console.log('Serveur sur port 3000') ; 
})