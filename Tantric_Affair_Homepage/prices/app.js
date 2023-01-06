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