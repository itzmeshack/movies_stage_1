

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
    
       if (newX <= -2000) {
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
    
       if (newX <= -2000) {
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
    
       if (newX <= -2000) {
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
    
       if (newX <= -2000) {
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
    
       if (newX <= -2000) {
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
    
       if (newX <= -2000) {
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


