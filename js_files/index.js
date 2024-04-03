



let allmenu = document.getElementById('sidemenu');




function openmenu(){ 
 allmenu.style.right ='-30px';
}


function closemenu(){
 allmenu.style.right ='1000px';

}



function searchbar(){
    let searching = document.getElementById('search-incoming');
    let coolor = document.querySelector('#mycolor');
    let display = searching.style.display;

    if(display == 'none'){
        searching.style.display = 'block';
        coolor.style.color = 'red'

    }
    else{
        searching.style.display = 'none';
        coolor.style.color ='white';
    }

    
  
   
    
}



