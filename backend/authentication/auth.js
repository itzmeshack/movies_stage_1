/** @_kingmeshack code boss */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const fetch = require("node-fetch");

const initializePassport = require("./passport-config");

//for geting movies details
//const  fetchmovies = require('./movieServer');

const { name } = require("ejs");
initializePassport(
  passport,
  (email) => user.find((user) => user.email === email),
  (id) => user.find((user) => user.id === id)
);

const port = 5000;

const user = [];

app.listen(port, () => {
  console.log("server running successfully");
});

app.set("view-engine", "ejs");

//static

app.use(express.static("public"));
//app.use(express.static("js_files", express.static(__dirname + "js_files")));
app.use(
  express.static(
    "/authentication",
    express.static(__dirname + "/authentication")
  )
);

app.use("/stylesheet", express.static(__dirname + "/public/stylesheet"));

app.use("/js_files", express.static(__dirname + "/public/js_files"));

//app.use('/watch', express.static(__dirname + 'watch/stylesheet'));

app.use("/images_files", express.static(__dirname + "/public/images_files"));

app.use(express.urlencoded({ extended: false }));

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//universal url for main movies

const API_KEY = "46affb6ad79782ea4c251824edd9edb6"; //try to hide the api key on .env file
const Base_URL = "https://api.themoviedb.org/3";
const url = `${Base_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`; //url for main movie
const urlTrending_movies = `${Base_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`; //url for trending movies
const urlLatestMovies = `${Base_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`; //url for latest movies
const urlActionMovies = `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`; // url for action movies
const urlTvseries = `${Base_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US&page=1`; // url for tv series
const urlHorrorMovies = `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
const urlRatedMovies = `${Base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
//const urlBestAnime = `${Base_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&with_genres=16`;
const urlBestAnime = `${Base_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`;

let movies = [];

app.get("/home", async (req, res) => {
  try {
    //main moveis response
    /*const response = await  fetch(url);
        const data = await response.json();
         
        //trending movies response
        const trendingResponse = await fetch(urlTrending_movies);
        const trendingData = await trendingResponse.json();

        //latest movies response
        const latestResponse = await fetch(urlLatestMovies);
        const latestData = await latestResponse.json();

       

       


        //tv series response 

        const tvResponse = await fetch(urlTvseries);
        const tvData = await tvResponse.json();

        // horror movies response 

        const horrorResponse = await fetch(urlHorrorMovies);
        const horrorData = await horrorResponse.json();


        //rated movies 

        const ratedResponse = await fetch(urlRatedMovies);
        const ratedData = await ratedResponse.json();


        //anime movies & tv shows 

        const animeResponse = await fetch(urlBestAnime);
        const animeData = await animeResponse.json();

        */

    // action movies response
    //const actionResponse = await fetch(urlActionMovies);
    //const actionData = await actionResponse.json();

    const [
      response,
      trendingResponse,
      latestResponse,
      actionResponse,
      tvResponse,
      horrorResponse,
      ratedResponse,
      animeResponse,
    ] = await Promise.all([
      fetch(url),
      fetch(urlTrending_movies),
      fetch(urlLatestMovies),
      fetch(urlActionMovies),
      fetch(urlTvseries),
      fetch(urlHorrorMovies),
      fetch(urlRatedMovies),
      fetch(urlBestAnime),
    ]);

    const [
      data,
      trendingData,
      latestData,
      actionData,
      tvData,
      horrorData,
      ratedData,
      animeData,
    ] = await Promise.all([
      response.json(),
      trendingResponse.json(),
      latestResponse.json(),
      actionResponse.json(),
      tvResponse.json(),
      horrorResponse.json(),
      ratedResponse.json(),
      animeResponse.json(),
    ]);

    const shuffledMovies = actionData.results.sort(() => 0.5 - Math.random());
    const randomMovie = shuffledMovies.slice(0, 19);

    if (data.results.length > 0) {
      //const movies = data.results[12];

      movies = data.results[0]; //this is where a particular movie is placed on tmdb database you can change the number to see a particular movie trends
      // const image = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
      //collecting year from auth.js
      const releaseYear = data.results[1].release_date.split("-");
      res.render("home.ejs", {
        releaseYear,
        randomMovie,
        movies,
        trendingMovies: trendingData.results,
        latestMovies: latestData.results,
        //actionMovies: actionData.results,
        tvseriesMovies: tvData.results,
        horrorMovies: horrorData.results,
        ratedMovies: ratedData.results,
        animeMovies: animeData.results,
      });
    } else {
      res.render("home.ejs", { movies: [] });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
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

app.get("/movie/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  const url = `${Base_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  // const animeurl = `${Base_URL}/tv/${movieId}?api_key=${API_KEY}&language=en-US`;

  const response = await fetch(url);
  const data = await response.json();

  //for cast & credits
  const castUrl = `${Base_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  const castResponse = await fetch(castUrl);
  const castData = await castResponse.json();
  const cast = castData.cast;

  // for genres
  const genresUrl = `${Base_URL}/movie/${movieId}?api_key=${API_KEY}`;
  const genresResponse = await fetch(genresUrl);
  const genresData = await genresResponse.json();
 

  // Extract genres from the response
  const genres = genresData.genres;


  const duration = data.runtime; // Duration is provided in minutes


      // Fetching production countries and spoken languages
      const countries = data.production_countries;
      const languages = data.spoken_languages;


  //const animeResponse = await fetch(animeurl);
  //const animeData = animeResponse.json()

  //for trending movies

  //const trendingResponse = await fetch(urlTrending_movies);
  //const trendingData = await trendingResponse.json();

  //const movies = data.results[12];
  // const image = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
  //collecting year from auth.js
  //const releaseYear = data.results[1].release_date.split('-');
  res.render("movies_info.ejs", {
    /*releaseYear*/ movie: data,
    movieCast: cast,
    movieGenres: genres,
    duration: duration,
    countries: countries,
    languages: languages
    //anime: animeData

    /*trendingMovies:trendingData.results*/
  });
});

app.get("/tv/:tvId", async (req, res) => {
  const tvId = req.params.tvId;
  //const url = `${Base_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  const tvUrl = `${Base_URL}/tv/${tvId}?api_key=${API_KEY}&language=en-US`;

  //getting the tv season
  const tvSeasonsUrl = `${Base_URL}/tv/${tvId}?api_key=${API_KEY}&append_to_response=seasons`;

  //fetching the url of the tv season
  const tvSeason_response = await fetch(tvSeasonsUrl);

  //converting the response into json
  const tvSeason_data = await tvSeason_response.json();

  const response = await fetch(tvUrl);
  const data = await response.json();

  //for cast
  const castUrl = `${Base_URL}/tv/${tvId}/credits?api_key=${API_KEY}`;
  const castResponse = await fetch(castUrl);
  const castData = await castResponse.json();
  const cast = castData.cast;



  const genresUrl = `${Base_URL}/tv/${tvId}?api_key=${API_KEY}`;
  const genresResponse = await fetch(genresUrl);
  const genresData = await genresResponse.json();
 

  // Extract genres from the response
  const genres = genresData.genres;



  
  const tvSeasonsResponse = await fetch(tvSeasonsUrl);
  const tvSeasonsData = await tvSeasonsResponse.json();


  let totalDuration = 45;
    if (tvSeasonsData.seasons) {
        tvSeasonsData.seasons.forEach(season => {
            if (season.episodes) {
                season.episodes.forEach(episode => {
                    totalDuration += episode.runtime || 0;
                });
            }
        });
    }


      // Fetching production countries and spoken languages
      const countries = data.production_countries;
      const languages = data.spoken_languages;

  //const animeResponse = await fetch(animeurl);
  //const animeData = animeResponse.json()

  //for trending movies

  //const trendingResponse = await fetch(urlTrending_movies);
  //const trendingData = await trendingResponse.json();

  //const movies = data.results[12];
  // const image = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
  //collecting year from auth.js
  //const releaseYear = data.results[1].release_date.split('-');
  res.render("tv.ejs", {
    /*releaseYear*/ movie: data,
    tvCast: cast,
    tvsereies: tvSeason_data,
    tvgenres:genres,
    totalDuration: totalDuration,
    countries: countries,
    languages: languages
    //anime: animeData

    /*trendingMovies:trendingData.results*/
  });
});


app.get("/search", async (req, res) => {

 

    const searchQuery = req.query.query; // Assuming the search query is passed as a query parameter named 'query'
        
    const Base_URL = "https://api.themoviedb.org/3";
    const API_KEY = "46affb6ad79782ea4c251824edd9edb6";

    const searchUrl = `${Base_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${searchQuery}`;
    
    const response = await fetch(searchUrl);
    const searchData = await response.json();
      


        res.render('search.ejs', { searchResults: searchData.results});


})

/*
    const contentBaseUrl = `${Base_URL}/`; // Base URL for all content types
    
    app.get('/watch/:contentType/:contentId', async (req, res) => {
        try {
            const contentType = req.params.contentType;
            const contentId = req.params.contentId;
    
            // Construct the URL by appending the content ID to the base URL
            const url = `${contentBaseUrl}${contentType}/${contentId}?api_key=${API_KEY}&language=en-US`;
    
            const response = await fetch(url);
            const data = await response.json();
    
            res.render('movies_info.ejs', { movie: data });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }
    });
    */

app.get("/", checkNotAuthenticated, (req, res) => {
  res.render("index.ejs"); //{//name: req.user.name => this is to get the name of the user if you have one }
});
app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});
app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.get("/movies", async (req, res) => {
  try {
    const response = await fetch(urlActionMovies);
    const actionData = await response.json();

    const allMovies = actionData.results;

    // Shuffle all movies
    const shuffleMovies = allMovies.sort(() => 0.5 - Math.random());

    // Select only the first movie from the shuffled array
    const randomMovie = shuffleMovies[0];

    res.render("movies.ejs", {
      randomMovie
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/topimdb", (req, res) => {
  res.render("topimdb.ejs");
});

app.get("/tvseries", (req, res) => {
  res.render("tvseries.ejs");
});

//post

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    user.push({
      id: Date.now().toString,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }

  console.log(user);
});

app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } 
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  }
  return next();
}

module.exports = app;
