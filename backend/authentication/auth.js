const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');


const port = 3000;

const user = [];

app.listen(port, ()=>{
    console.log('server running successfully')
})

app.set('view-engine', 'ejs');

//static


app.use(express.static('public'));
app.use('/stylesheet', express.static(__dirname + 'public/stylesheet'));
app.use('/images_files', express.static(__dirname + 'public/images_files'));
app.use(express.urlencoded({extended: false}));

//renders


app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/register', (req,res) =>{
    res.render('register.ejs')
})


//post 


app.get( '/register', (req, res) =>{

});

app.get( '/login', (req, res) =>{

})