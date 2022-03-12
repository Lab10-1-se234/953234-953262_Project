const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');


const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));



app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
    
});

const PORT = 8080;

app.listen(PORT);