"use strict"

/*
	Блукаючий об’єкт. Випадковим чином рухається деякий об’єкт в межах контейнера. При зустрічі з краєм контейнера він відбивається.
*/

const container = document.getElementById('container');
const object = document.getElementById('object');

let speedX = 2 + Math.random() * 2;  
let speedY = 2 + Math.random() * 2;  


function updatePosition() {
    let objectRect = object.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    
    
    if (objectRect.right >= containerRect.right || objectRect.left <= containerRect.left) {
        speedX = -speedX; 
    }

    if (objectRect.bottom >= containerRect.bottom || objectRect.top <= containerRect.top) {
        speedY = -speedY;
    }
   
    object.style.left = object.offsetLeft + speedX + 'px';
    object.style.top = object.offsetTop + speedY + 'px';
}

setInterval(updatePosition, 20);