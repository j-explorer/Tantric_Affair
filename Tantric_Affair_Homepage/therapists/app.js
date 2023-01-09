//open and close navbar menus
 
const massagesDropdown = document.getElementById('massages_dropdown');
const locationsDropdown = document.getElementById('locations_dropdown');
const locationsMenu = document.getElementById('locations_menu');
const massagesMenu = document.getElementById('massages_menu');
 
 
massagesDropdown.addEventListener('mouseover', menuVisible);
function menuVisible (){
massagesMenu.style.visibility="visible";
}
 
locationsDropdown.addEventListener('mouseover',visible);
function visible (){
 locationsMenu.style.visibility="visible";
}
 
 
massagesDropdown.addEventListener('mouseout', menuHidden);
 
function menuHidden (){
 massagesMenu.style.visibility="collapse";
}

locationsDropdown.addEventListener('mouseout', hidden);
 
function hidden (){
 locationsMenu.style.visibility="collapse";
}


//change button color when hovered ;

/*const changeButtonColor= document.getElementsByClassName('call_button');
const changeLabelColor= document.getElementsByClassName('book_therapist');

for(let i=0; i<changeButtonColor.length; i++) {

changeButtonColor[i].addEventListener('mouseover', pinkButton);
changeButtonColor[i].addEventListener('mouseout', whiteButton);

function pinkButton(event){
  this.style.backgroundColor='rgb(177, 160, 176)';
}

function whiteButton(event){
  this.style.backgroundColor='white';
}
} 

for(let i=0; i<changeLabelColor; i++) {

changeLabelColor[i].addEventListener('mouseover', whiteLabel);
changeLabelColor[i].addEventListener('mouseout', pinkLabel);

function whiteLabel(event){
  this.style.color='white';
}

function pinkLabel(event){
  this.style.color='rgb(177, 160, 176)';
}
} */

const experiment= document.getElementsByClassName('fa-phone-volume');

for(let i=0; i<experiment.length; i++) {

  experiment[i].addEventListener('mouseover', blackButton);
  experiment[i].addEventListener('mouseout', whiteButton);
  
  function blackButton(event){
    this.style.color='black';
  }

  function whiteButton(event){
    this.style.color='white';
  }
  } 