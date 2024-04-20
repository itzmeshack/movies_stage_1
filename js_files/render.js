
//import {  fetchTrendingMovieImage  } from './api.js';
import {mobilefetchTrendingMovieImage} from './api.js'

// Function to update movie poster image in HTML
/*async function updateMoviePoster() {
    const moviePoster = document.querySelector('.img-con');

    const titleElement = document.querySelector('.head-name');
    //titleElement.textContent = movie.title;

    const imageUrl = await fetchTrendingMovieImage();
    if (imageUrl) {
        moviePoster.src = imageUrl;
        titleElement.textContent = imageUrl.title

    } else {
        // Display a placeholder image or handle error
        moviePoster.src = 'placeholder.jpg';
        titleElement.textContent='none information'
        moviePoster.alt = 'Image not found';
    }
}


updateMoviePoster();
*/


/*async function updateTitle(){
    try{
        const titlehead = document.querySelector('.head-name');
    const titleURL = await fetchTrendingMovieImage();

        titlehead.textContent = titleURL.title;
    
    }catch (error) {
        console.log('error occured please try again',error );

    }
        

    

}

updateTitle()

*/

// Call the function to update the movie poster image




/*async function mobilemovieupdate(){
    const moviesmobile = document.querySelector('.img-con2');
    const mobileimage = await mobilefetchTrendingMovieImage();
    if(mobileimage){
        moviesmobile.src = mobileimage;
    }
    else{
        moviePoster.src = 'placeholder.jpg';
        moviePoster.alt = 'Image not found';
    }
}


mobilemovieupdate();



/*async function updateTitle() {
    try {
        // Fetch the trending movie data
        const movie = await fetchTrendingMovieImage();
        
        // Update the title element with the title of the fetched movie
        const titleElement = document.querySelector('.head-name');
        if (titleElement && movie.title) {
            titleElement.textContent = movie.title;
        } else {
            console.error('Title element or movie title not found.');
        }
    } catch (error) {
        console.error('Error updating title:', error);
    }
}

// Call the function to update the title asynchronously
updateTitle();

*/




import { fetchTrendingMovieImage } from './api.js'; // Import your API function

async function updateMovieDetails() {
    try {
        // Fetch the trending movie data
        const movie = await fetchTrendingMovieImage();
        
        // Update the title, year, description, and image
        const titleElement = document.querySelector('.head-name');
        titleElement.textContent = movie.title;
        
        const yearElement = document.querySelector('.letter-container .letter:nth-child(3)');
        yearElement.textContent = movie.year;
        
        const descriptionElement = document.querySelector('.des-con');
        descriptionElement.textContent = movie.description;
        
        const imageElement = document.querySelector('.img-con');
        imageElement.src = movie.image;
    } catch (error) {
        console.error('Error updating movie details:', error);
    }
}

// Call the function to update the movie details asynchronously
updateMovieDetails();







async function mobileupdateMovieDetails() {
    try {
        // Fetch the trending movie data
        const movie = await mobilefetchTrendingMovieImage();
        
        // Update the title, year, description, and image
        //const titleElement = document.querySelector('.head-name');
        //titleElement.textContent = movie.title;
        
        //const yearElement = document.querySelector('.letter-container .letter:nth-child(3)');
        //yearElement.textContent = movie.year;
        
        //const descriptionElement = document.querySelector('.des-con');
        //descriptionElement.textContent = movie.description;
        
        const imageElement = document.querySelector('.img-con2');
        imageElement.src = movie.image;
    } catch (error) {
        console.error('Error updating movie details:', error);
    }
}

// Call the function to update the movie details asynchronously
mobileupdateMovieDetails();







