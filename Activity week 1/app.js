const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        message: 'Welcome to the homepage',
    });
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});