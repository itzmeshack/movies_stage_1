/*

let links = document.querySelectorAll('.anchor-links');


links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all links
        links.forEach(function(link) {
            link.classList.remove("active");
        });

        // Add 'active' class to the clicked link
        link.classList.add("active");
    });
});

*/


let allmenu = document.getElementById('sidemenu');
let searching = document.querySelector('#search-incoming');



function openmenu(){ 
 allmenu.style.right ='-30px';
}


function closemenu(){
 allmenu.style.right ='1000px';

}

function searchbar(){
    let searching = document.querySelector('#search-incoming');
     let coolor = document.querySelector('#mycolor');
    let currentdisplay = searching.style.display;


    

    if(currentdisplay == 'none'){
        searching.style.display = 'block';
        coolor.style.color = 'red'

    }
    else{
        searching.style.display = 'none';
        coolor.style.color ='white'
    }
  
   
    
}



