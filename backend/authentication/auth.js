const express = require('express');
const app = express();

app.listen(5000);

app.set('view-engine', 'ejs');


app.get('/login', (req, res) => {
    res.render('login.ejs')
})