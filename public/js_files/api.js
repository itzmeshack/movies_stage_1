const API_KEY = "46affb6ad79782ea4c251824edd9edb6"
const Base_URL = "https://api.themoviedb.org/3";

/*const allmovies = 550; // Example movie ID (The Dark Knight)
function movies(allmovies) {
  const url = `${Base_URL}/movie/${allmovies}?api_key=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching movie details:", error));
}

movies(allmovies).then((data) => {
  console.log("Movie Details:");
  console.log(data);


});
*/









/*async function fetchTrendingMovies() {
    let allResults = [];
    let page = 1;
  
    while (true) {
     const url = `${Base_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.results.length === 0) break;
  
      allResults.push(...data.results.map(movie=>({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        original_title: movie.original_title,
        overview: movie.overview, 
        release_date: movie.release_date

      })));
      page++;
  
      // Break after fetching 5 pages (adjust as needed)
      if (page > 5) break;
    }
  
    return allResults;
  }
  
  // Example usage
  fetchTrendingMovies()
    .then(results => {
      console.log('Trending Movies:');
      results.forEach(movie => {

      
        console.log(`id: ${movie.id}`),
        console.log(`title: ${movie.title}`),
        console.log(`poster_path: ${movie.poster_path}`),
        console.log(`backdrop: ${movie.backdrop_path}`),
        console.log(`overview: ${movie.overview}`),
        console.log(`release_date: ${movie.release_date}`)


      
      
      
      
    });
    })
    .catch(error => console.error('Error fetching trending movies:', error));


    */


    export async function fetchTrendingMovieImage() {
        const url = `${Base_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.results.length > 0) {
            const movie = data.results[6];
            return {
                id: movie.id,
                title: movie.title,
                year: movie.release_date.slice(0, 4),
                description: movie.overview,
                image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            };
            
            // Return the URL of the first movie's poster image
            //return `https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error fetching trending movie image:', error);
          return null;
        }
      }


      export async function mobilefetchTrendingMovieImage() {
        const url = `${Base_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.results.length > 0) {
            const movie = data.results[1];

            return {
                title: movie.title,
                //year: movie.release_date.slice(0, 4),
                //description: movie.overview,
                image: `https://image.tmdb.org/t/p/original${movie.poster_path}`
            };

            // Return the URL of the first movie's poster image
            //return `https://image.tmdb.org/t/p/original${data.results[3].poster_path}`;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error fetching trending movie image:', error);
          return null;
        }
      }
     
    

      