/** @_kingmeshack code boss */


if (process.env.NODE_ENV  !=='production'){
    require('dotenv').config()
}
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const passport = require('passport')
const flash = require('express-flash');
const session = require('express-session');


const initializePassport = require('./passport-config');
const { name } = require('ejs');
initializePassport(
    passport,
    email => user.find(user => user.email === email),
    id => user.find(user => user.id === id)
 
    )

const port = 5000;

const user = [];



app.listen(port, ()=>{
    console.log('server running successfully')
})

app.set('view-engine', 'ejs');

//static


app.use(express.static('public'));
app.use(express.static('js_files', express.static(__dirname + 'js_files/')));

app.use('/stylesheet', express.static(__dirname + 'public/stylesheet'));
app.use('/images_files', express.static(__dirname + 'public/images_files'));
app.use(express.urlencoded({extended: false}));


app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session())

//renders


app.get('/', (req, res) => {
    res.render('index.ejs') //{//name: req.user.name => this is to get the name of the user if you have one }
});
app.get('/login', (req, res) => {
    res.render('login.ejs')
});
app.get('/register', (req,res) =>{
    res.render('register.ejs')
});

app.get('/home', (req, res) =>{
    res.render('home.ejs')
});

app.get('/movies', (req, res) => {
    res.render('movies.ejs')
});

app.get('/topimdb', (request, response) => {
    response.render('topimdb.ejs')
});

app.get('/tvseries', (req, res) => {
    res.render('tvseries.ejs')
});




//post 


app.post( '/register', async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.push({
            id: Date.now().toString,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('login');

    }catch{
        res.redirect('register')

    }

    console.log(user)

});

app.post( '/login', passport.authenticate('local', {
successRedirect: '/home',
failureRedirect: '/login', 
failureFlash: true
}))