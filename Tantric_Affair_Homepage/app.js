//open and close navbar menus
 
const massagesDropdown = document.getElementsByClassName('dropdown');
const locationsLink = document.getElementById('locations');
const locationsMenu = document.getElementById('locations_menu');
const massagesMenu = document.getElementById('massages_menu');
const body = document.getElementById('body');
 
 
massagesDropdown.addEventListener('mouseover', menuVisible);
function menuVisible (){
massagesMenu.style.visibility="visible";
}
 
locationsLink.addEventListener('mouseover',visible);
function visible (){
 locationsMenu.style.visibility="visible";
}
 
 
massagesDropdown.addEventListener('mouseout', menuHidden);
 
function menuHidden (){
 massagesMenu.style.visibility="hidden";
 locationsMenu.style.visibility="hidden";
}
 
//change button colors when hovered
 
const button= document.getElementById('call_button');
const phoneNumber= document.getElementById('phone_number');
 
button.onmouseover= buttonWhite;
 
function buttonWhite (){
button.style.backgroundColor= 'white';
phoneNumber.style.color= 'rgb(177, 160, 176)';
}
 
button.onmouseout= buttonPink;
 
function buttonPink (){
 button.style.backgroundColor= 'rgb(177, 160, 176)';
phoneNumber.style.color= 'white';
}
