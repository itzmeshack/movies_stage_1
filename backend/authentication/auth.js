const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');


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
            //id: Date.now().toString,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('login');

    }catch{
        res.redirect('register')

    }

    console.log(user)

});

app.get( '/login', (req, res) =>{

})