const API_KEY = "46affb6ad79782ea4c251824edd9edb6"
const Base_URL = "https://api.themoviedb.org/3";



     async function fetchmovies(){
        const url = `${Base_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.results.length > 0) {
            const movie = data.results[10];
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
