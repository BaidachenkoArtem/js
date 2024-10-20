"use strict"

/*
	Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану. 
*/

const gameArea = document.getElementById('gameArea');


function createTank() {
   const tank = document.createElement('div');
   tank.classList.add('tank');
   
 
   const randomX = Math.random() * (gameArea.offsetWidth - 50);
   tank.style.left = `${randomX}px`;
   tank.style.top = '-50px';
   
 
   tank.addEventListener('click', () => {
      tank.classList.add('explosion'); 
      setTimeout(() => tank.remove(), 500); 
   });

    gameArea.appendChild(tank);

    // Рухаємо танк вниз
    let moveInterval = setInterval(() => {
      let currentTop = parseInt(tank.style.top);
      if (currentTop < gameArea.offsetHeight) {
         tank.style.top = `${currentTop + 2}px`;
      } else {
         tank.remove(); 
         clearInterval(moveInterval);
      }
   }, 20);
}

setInterval(createTank, 2000);