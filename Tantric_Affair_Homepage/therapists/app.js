//change button colors when hovered

const button= document.getElementById('call_button');
const bookTherapist= document.getElementById('book_therapist');

button.onmouseover= buttonWhite;

function buttonWhite (){
button.style.backgroundColor= 'rgb(177, 160, 176)';
bookTherapist.style.color='white';
}

button.onmouseout= buttonPink;

function buttonPink (){
 button.style.backgroundColor= 'white';
 bookTherapist.style.color='rgb(177, 160, 176)';
}