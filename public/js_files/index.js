

let allmenu = document.getElementById("sidemenu");

function openmenu() {
  allmenu.style.right = "-30px";
}

function closemenu() {
  allmenu.style.right = "1000px";
}

function searchbar() {
  let searching = document.getElementById("search-incoming");
  let coolor = document.querySelector("#mycolor");
  let display = searching.style.display;

  if (display == "none") {
    searching.style.display = "block";
    coolor.style.color = "red";
  } else {
    searching.style.display = "none";
    coolor.style.color = "white";
  }
}

/** This function is for the slider */

/** fuction for treading */

function treadingmoveLeft() {

  treadingmoveSlide(-1)
};

function treadingmoveRight() {

  treadingmoveSlide(1)
};

/** fuction for new realease movies */
function realeasemoveLeft(){
    releasemoveSlide(-1)
};

function realeasemoveRight(){
    releasemoveSlide(1)
};



/** fuction for Action movies */

function actionmoveLeft(){
    actionmoveSlide(-1);
}

function actionmoveRight(){
    actionmoveSlide(1);

}


/** fuction for  tv shows */



function moviesmoveLeft(){
    moviesmoveSlide(-1);
}


function moviesmoveRight(){
    moviesmoveSlide(1);
}




//function for latestest movies


function latestmoveLeft(){
    latetestmoveSlide(-1);
}


function latestmoveRight(){
    latetestmoveSlide(1);
};


//function for latest shows;


function showmoveLeft(){
    showmoveSlide(-1);
}

function showmoveRight(){
    showmoveSlide(1);
};


// function for anime control.
function animemoveLeft(){
    animemoveSlide(-1)
}

function animemoveRight(){
    animemoveSlide(1)
}
















let slideIndex = 0;


function treadingmoveSlide(direction) {

    let slides = document.querySelectorAll('.scroll-img2'); // getting the div clas by using querySelectorAll
    let totalSlides = slides.length; // getting the legth or the numbers of div class


    slideIndex += direction // which is either right or left;

    if (slideIndex >=  totalSlides) {
        slideIndex = totalSlides - 1; 
    }
   else if (slideIndex < 0) {
    slideIndex = 0
    }
  
    let slider = document.querySelector('.treading-control');

    let sliderWidth = slides[0].clientHeight;

    let newX = -slideIndex * sliderWidth;
    
       if (newX <= -5270) {
      // If the new position exceeds a certain threshold, reset to 0
      slider.style.transform = 'translateX(0)';
      slideIndex = 0; // Reset slide index
    } else {
      slider.style.transform = `translateX(${newX}px)`;
    }

    console.log(slider.style.transform);
    console.log(`this is the new slide ${newX}`);


};


function releasemoveSlide(move) {

    let slides = document.querySelectorAll('.scroll-img2'); // getting the div clas by using querySelectorAll
    let totalSlides = slides.length; // getting the legth or the numbers of div class


    slideIndex += move // which is either right or left;

    if (slideIndex >=  totalSlides) {
        slideIndex = totalSlides - 1; 
    }
   else if (slideIndex < 0) {
    slideIndex = 0
    }
    let slider = document.querySelector('.treading-control-2');

    let sliderWidth = slides[0].clientWidth;

    let newX = -slideIndex * sliderWidth;
    
       if (newX <= -5270) {
      // If the new position exceeds a certain threshold, reset to 0
      slider.style.transform = 'translateX(0)';
      slideIndex = 0; // Reset slide index
    } else {
      slider.style.transform = `translateX(${newX}px)`;
    }

    console.log(slider.style.transform);
    console.log(`this is the new slide ${newX}`);


};


function actionmoveSlide(direction){
    let slides = document.querySelectorAll('.scroll-img2'); // getting the div clas by using querySelectorAll
    let totalSlides = slides.length; // getting the legth or the numbers of div class


    slideIndex += direction // which is either right or left;

    if (slideIndex >=  totalSlides) {
        slideIndex = totalSlides - 1; 
    }
   else if (slideIndex < 0) {
    slideIndex = 0
    }
    let slider = document.querySelector('.treading-control-3');

    let sliderWidth = slides[0].clientWidth;

    let newX = -slideIndex * sliderWidth;
    
       if (newX <= -5270) {
      // If the new position exceeds a certain threshold, reset to 0
      slider.style.transform = 'translateX(0)';
      slideIndex = 0; // Reset slide index
    } else {
      slider.style.transform = `translateX(${newX}px)`;
    }

    console.log(slider.style.transform);
    console.log(`this is the new slide ${newX}`);
};



function moviesmoveSlide(direction){
    let slides = document.querySelectorAll('.scroll-img2'); // getting the div clas by using querySelectorAll
    let totalSlides = slides.length; // getting the legth or the numbers of div class


    slideIndex += direction // which is either right or left;

    if (slideIndex >=  totalSlides) {
        slideIndex = totalSlides - 1; 
    }
   else if (slideIndex < 0) {
    slideIndex = 0
    }
    let slider = document.querySelector('.treading-control-4');

    let sliderWidth = slides[0].clientWidth;

    let newX = -slideIndex * sliderWidth;
    
       if (newX <= -5270) {
      // If the new position exceeds a certain threshold, reset to 0
      slider.style.transform = 'translateX(0)';
      slideIndex = 0; // Reset slide index
    } else {
      slider.style.transform = `translateX(${newX}px)`;
    }

    console.log(slider.style.transform);
    console.log(`this is the new slide ${newX}`);

}



function latetestmoveSlide(direction){

    let slides = document.querySelectorAll('.scroll-img2'); // getting the div clas by using querySelectorAll
    let totalSlides = slides.length; // getting the legth or the numbers of div class


    slideIndex += direction // which is either right or left;

    if (slideIndex >=  totalSlides) {
        slideIndex = totalSlides - 1; 
    }
   else if (slideIndex < 0) {
    slideIndex = 0
    }
    let slider = document.querySelector('.treading-control-5');

    let sliderWidth = slides[0].clientWidth;

    let newX = -slideIndex * sliderWidth;
    
       if (newX <= -5270) {
      // If the new position exceeds a certain threshold, reset to 0
      slider.style.transform = 'translateX(0)';
      slideIndex = 0; // Reset slide index
    } else {
      slider.style.transform = `translateX(${newX}px)`;
    }

    console.log(slider.style.transform);
    console.log(`this is the new slide ${newX}`);
};


function  showmoveSlide(direction){

    let slides = document.querySelectorAll('.scroll-img2'); // getting the div clas by using querySelectorAll
    let totalSlides = slides.length; // getting the legth or the numbers of div class


    slideIndex += direction // which is either right or left;

    if (slideIndex >=  totalSlides) {
        slideIndex = totalSlides - 1; 
    }
   else if (slideIndex < 0) {
    slideIndex = 0
    }
    let slider = document.querySelector('.treading-control-6');

    let sliderWidth = slides[0].clientWidth;

    let newX = -slideIndex * sliderWidth;
    
       if (newX <= -5270) {
      // If the new position exceeds a certain threshold, reset to 0
      slider.style.transform = 'translateX(0)';
      slideIndex = 0; // Reset slide index
    } else {
      slider.style.transform = `translateX(${newX}px)`;
    }

    console.log(slider.style.transform);
    console.log(`this is the new slide ${newX}`);

};


function animemoveSlide(direction){
    let slides = document.querySelectorAll('.scroll-img2'); // getting the div clas by using querySelectorAll
    let totalSlides = slides.length; // getting the legth or the numbers of div class


    slideIndex += direction // which is either right or left;

    if (slideIndex >=  totalSlides) {
        slideIndex = totalSlides - 1; 
    }
   else if (slideIndex < 0) {
    slideIndex = 0
    }
    let slider = document.querySelector('.treading-control-7');

    let sliderWidth = slides[0].clientWidth;

    let newX = -slideIndex * sliderWidth;
    
       if (newX <= -5270) {
      // If the new position exceeds a certain threshold, reset to 0
      slider.style.transform = 'translateX(0)';
      slideIndex = 0; // Reset slide index
    } else {
      slider.style.transform = `translateX(${newX}px)`;
    }

    console.log(slider.style.transform);
    console.log(`this is the new slide ${newX}`);

}






/*

function moveSlide(direction) {
  let slides = document.querySelectorAll(".scroll-img"); // getting the div clas by using querySelectorAll
  let totalSlides = slides.length; // getting the legth or the numbers of div class

  console.log(totalSlides);

  //this for the right arrow
  if (direction === 1 && slideIndex === totalSlides - 1) {
    return;
  }
  //and this the left arrow
  if (direction === -1 && slideIndex === 0) {
    return;
  }

  slideIndex += direction;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  let slider = document.querySelector(".treading-control");

  let sliderWidth = slides[0].clientWidth;

  slider.style.transform = `translateX(${-slideIndex * sliderWidth}px)`;

  console.log(slider.style.transform);
}

*/


/*async function searchMoviesAndTVShows() {
  const searchQuery = document.getElementById("search-incoming").value;
  const Base_URL = "https://api.themoviedb.org/3";
  const API_KEY = "46affb6ad79782ea4c251824edd9edb6"; //try to hide the api key on .env file

  const searchUrl = `${Base_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${searchQuery}`;

  try {
    const response = await fetch(searchUrl);
    const data = await response.json()

    if(data.results && data.results.length > 0){
      const firstResult = data.results[0];
      const mediaType = firstResult.media_type;
      const id = firstResult.id;



    

    if(mediaType=='movie'){
      window.location.href = `/movie/${id}`; 
    }
    else if (mediaType == 'tv'){
      window.location.href = `/tv/${id}`; 

    }else{
      console.log('Search result type not supported');
    }

  }else{
    console.log('no search results found ')
  }


  } catch (error) {
    console.error('Error occurred while searching:', error);
  }
}

*/






const searchInput = document.querySelector('#search-incoming');
const searchSuggestions = document.getElementById('search-suggestions');

searchInput.addEventListener('input', async () => {
    const query = searchInput.value.trim();

    if (query === '') {
        searchSuggestions.innerHTML = ''; // Clear search suggestions if input is empty
        return;
    }

    try {
        const Base_URL = "https://api.themoviedb.org/3";
        const API_KEY = "46affb6ad79782ea4c251824edd9edb6";
  
        const searchUrl = `${Base_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`;
        const response = await fetch(searchUrl);
        const searchData = await response.json();

        // Display search suggestions in the search suggestions container
        searchSuggestions.innerHTML = '';

        if (searchData && searchData.results && searchData.results.length > 0) {
            searchData.results.forEach(item => {



                const suggestion = document.createElement('div');


                const backdropImg = document.createElement('img');
            backdropImg.src = 'https://image.tmdb.org/t/p/original/' + item.backdrop_path;
            backdropImg.alt = item.title || item.name; // Set alt text to title or name
            suggestion.appendChild(backdropImg);
 
                const link = document.createElement('a');
                link.textContent = item.title || item.name; // Assuming search results have 'title' or 'name' property
                link.href = item.media_type === 'movie' ? `/movie/${item.id}` : `/tv/${item.id}`; // Link to specific movie or TV show
                link.classList.add('search-suggestion');
                suggestion.appendChild(link);
                searchSuggestions.appendChild(suggestion);
                searchSuggestions.style.display = 'block'; 
            });
        } else {
            searchSuggestions.innerHTML = '<p>No search suggestions found.</p>';
        }
    } catch (error) {
        console.error('Error fetching search suggestions:', error);
    }
});
