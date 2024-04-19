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









async function fetchTrendingMovies() {
    let allResults = [];
    let page = 1;
  
    while (true) {
     const url = `${Base_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.results.length === 0) break;
  
      allResults.push(...data.results);
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
      results.forEach(movie => console.log(movie.title));
    })
    .catch(error => console.error('Error fetching trending movies:', error));