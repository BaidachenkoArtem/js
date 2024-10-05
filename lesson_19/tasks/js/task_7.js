"use strict"

/*
	Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).
*/

const snowContainer = document.getElementById('snow-container');
const maxSnowflakes = 100;
const maxTop = window.innerHeight;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.speed = Math.random() * 2 + 1;
    
    snowContainer.appendChild(snowflake);
    
    return snowflake;
}

function animateSnowflake(snowflake) {
    let topPosition = 0;

    const interval = setInterval(() => {
        topPosition += snowflake.speed;
        snowflake.style.top = `${topPosition}px`;
  
        if (topPosition > maxTop) {
            topPosition = 0;
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        }
    }, 20);
}

for (let i = 0; i < maxSnowflakes; i++) {
    const snowflake = createSnowflake();
    animateSnowflake(snowflake);
}