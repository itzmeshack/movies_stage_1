/** @_kingmeshack code boss */


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const passport = require('passport')
const flash = require('express-flash');
const session = require('express-session');
const fetch = require('node-fetch');

const initializePassport = require('./passport-config');

//for geting movies details 
//const  fetchmovies = require('./movieServer');





const { name } = require('ejs');
initializePassport(
    passport,
    email => user.find(user => user.email === email),
    id => user.find(user => user.id === id)

)

const port = 3000;

const user = [];



app.listen(port, () => {
    console.log('server running successfully')
})

app.set('view-engine', 'ejs');

//static


app.use(express.static('public'));
app.use(express.static('js_files', express.static(__dirname + 'js_files/')));
app.use(express.static('authentication', express.static(__dirname + 'authentication/')));

app.use('/stylesheet', express.static(__dirname + 'public/stylesheet'));
app.use('/images_files', express.static(__dirname + 'public/images_files'));


app.use(express.urlencoded({ extended: false }));


app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session())


//universal url for main movies


const API_KEY = "46affb6ad79782ea4c251824edd9edb6";//try to hide the api key on .env file
const Base_URL = "https://api.themoviedb.org/3";
const url = `${Base_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const urlTrending_movies = `${Base_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`


let movies = []

app.get('/home', async (req, res) => {



    try {

        const response = await fetch(url);
        const data = await response.json();

        const trendingResponse = await fetch(urlTrending_movies);
        const trendingData = await trendingResponse.json();

        if (data.results.length > 0) {
            //const movies = data.results[12];

            movies = data.results[15]
            // const image = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
            //collecting year from auth.js
            const releaseYear = data.results[1].release_date.split('-');
            res.render('home.ejs', { releaseYear, movies,  trendingMovies: trendingData.results })


        }
        else {
            res.render('home.ejs', { movies: [] });
        }



    }
    catch (error) {
        console.error('Error fetching data:', error);

    }







});

//renders routes

/*
  app.get('/home', (req, res) =>{
    res.render('home.ejs',// {trending: trending});

    /*try {
        //const trending = await fetchmovies()
        // Pass the movie object to the template when rendering 'home.ejs'
    } catch (error) {
        console.error('Error rendering home page:', error);
        res.status(500).send('Internal Server Error');
    }


});    
*/




app.get('/watch', async (req, res) => {

    const response = await fetch(url);
    const data = await response.json()
    if (data.results.length > 0) {
        //const movies = data.results[12];
        // const image = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
        //collecting year from auth.js
        const releaseYear = data.results[1].release_date.split('-');
        res.render('movies_info.ejs', { releaseYear, movies })


    }
    else {
        res.render('movies_info.ejs', { movies: [] });
    }








})

app.get('/', checkNotAuthenticated, (req, res) => {
    res.render('index.ejs') //{//name: req.user.name => this is to get the name of the user if you have one }
});
app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
});
app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
});



app.get('/movies', (req, res) => {
    res.render('movies.ejs')
});

app.get('/topimdb', (req, res) => {
    res.render('topimdb.ejs')
});

app.get('/tvseries', (req, res) => {
    res.render('tvseries.ejs')
});




//post 


app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        user.push({
            id: Date.now().toString,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login');

    } catch {
        res.redirect('/register')

    }

    console.log(user)

});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
}))


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');

}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');

    }
    return next()
};

module.exports = app;