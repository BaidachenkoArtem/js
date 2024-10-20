"use strict"

/*
	Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану. 
*/

//=============== Не мій варіант1 ===============
// class Game {
// 	constructor(tanksArray, gameContainerSelector) {
// 	  this.tanks = tanksArray
// 	  this.destroyedTanksNumber = 0
// 	  this.missedTanksNumber = 0
// 	  this.container = this.findContainer(gameContainerSelector)
// 	  this.counterEl = this.generateContainer()
 
// 	  this.updateCounterEl()
// 	  this.container.append(this.counterEl)
 
// 	  this.container.addEventListener(
// 		 "tankEvent",
// 		 this.tankEventHandler.bind(this)
// 	  )
// 	}
// 	findContainer(gameContainerSelector) {
// 	  return document.querySelector(gameContainerSelector)
// 	}
// 	generateContainer() {
// 	  const counter = document.createElement("span")
// 	  counter.className = "counter z-2 position-absolute fs-5"
// 	  return counter
// 	}
// 	tankEventHandler(e) {
// 	  e.detail.type === "destroyed"
// 		 ? this.destroyedTanksNumber++
// 		 : this.missedTanksNumber++
// 	  this.updateCounterEl()
// 	}
// 	updateCounterEl() {
// 	  this.counterEl.innerText = `Destroyed: ${this.destroyedTanksNumber}\nMissed: ${this.missedTanksNumber}`
// 	}
// 	startGame() {
// 	  for (let i = 0; i < this.tanks.length; i++) {
// 		 setTimeout(() => {
// 			this.tanks[i].start()
// 		 }, i * 1000)
// 	  }
// 	}
// }

// class Tank {
// 	constructor(imgConfig, step, interval, containerSelector) {
// 	  this.imgConfig = imgConfig
// 	  this.step = step
// 	  this.interval = interval
 
// 	  this.container = document.querySelector(containerSelector)
// 	}
// 	getRandomXPos() {
// 	  return Math.floor(
// 		 Math.random() * (window.innerWidth - this.imgConfig.width + 1)
// 	  )
// 	}
// 	render() {
// 	  if (!this.imgEl) {
// 		 const img = document.createElement("img")
// 		 img.style.width = this.imgConfig.width + "px"
// 		 img.style.height = this.imgConfig.height + "px"
 
// 		 img.style.position = "fixed"
// 		 this.setInitialPos()
// 		 this.setImgPos(img)
 
// 		 img.onclick = this.onClickHandler.bind(this)
 
// 		 this.imgEl = img
// 		 this.container.append(this.imgEl)
// 	  }
// 	  this.updateTankState(true)
// 	}
 
// 	setInitialPos() {
// 	  this.x = this.getRandomXPos()
// 	  this.y = -2 * this.imgConfig.height
// 	}
// 	setNewPos() {
// 	  if (this.y > window.innerHeight) {
// 		 this.emitTankEvent("missed")
// 		 this.setInitialPos()
// 	  }
// 	  this.y += this.step
// 	}
// 	updateTankState(isAlive) {
// 	  this.isAlive = isAlive
// 	  this.imgEl.src = isAlive ? this.imgConfig.alive : this.imgConfig.destroyed
// 	}
// 	onClickHandler() {
// 	  if (!this.isAlive) return false
// 	  this.destroy()
// 	  this.emitTankEvent("destroyed")
// 	}
// 	emitTankEvent(type) {
// 	  this.imgEl.dispatchEvent(
// 		 new CustomEvent("tankEvent", {
// 			bubbles: true,
// 			detail: {
// 			  type,
// 			},
// 		 })
// 	  )
// 	}
// 	destroy() {
// 	  clearInterval(this.intervalId)
// 	  this.updateTankState(false)
 
// 	  setTimeout(() => {
// 		 this.resetTank()
// 		 this.start()
// 	  }, 2000)
// 	}
// 	start() {
// 	  this.render()
// 	  this.intervalId = setInterval(() => {
// 		 this.animate()
// 	  }, this.interval)
// 	}
// 	resetTank() {
// 	  this.updateTankState(true)
// 	  this.setInitialPos()
// 	  this.setImgPos(this.imgEl)
// 	}
// 	setImgPos(imgEl) {
// 	  imgEl.style.left = this.x + "px"
// 	  imgEl.style.top = this.y + "px"
// 	}
// 	animate() {
// 	  this.setNewPos()
// 	  this.setImgPos(this.imgEl)
// 	}
// }

// window.onload = () => {
// 	const imgObj = {
// 	  width: 100,
// 	  height: 100,
// 	  alive: "./images/tank_alive.png",
// 	  destroyed: "./images/tank_destroyed.png",
// 	}
// 	const tanks = []
// 	for (let i = 0; i < 10; i++) {
// 	  tanks.push(new Tank(imgObj, 5, 50, ".game"))
// 	}
 
// 	const game = new Game(tanks, ".game")
// 	game.startGame()
// }

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// class Tank {
// 	constructor(container) {
// 		 this.container = container;
// 		 this.tank = document.createElement('div');
// 		 this.tank.classList.add('tank');
// 		 this.speed = Math.random() * 2 + 1;  // Випадкова швидкість танка
// 		 this.init();
// 	}

// 	// Ініціалізація танка: випадкова позиція по горизонталі
// 	init() {
// 		 const x = Math.random() * (window.innerWidth - 50); // Танк шириною 50px
// 		 this.tank.style.left = `${x}px`;
// 		 this.tank.style.top = `-50px`; // Початкова позиція зверху за екраном
// 		 this.container.appendChild(this.tank);
		 
// 		 // Додаємо подію вибуху при кліку
// 		 this.tank.addEventListener('click', () => this.explode());
// 	}

// 	// Анімація руху танка вниз
// 	move() {
// 		 const currentTop = parseFloat(this.tank.style.top);
// 		 if (currentTop < window.innerHeight) {
// 			  this.tank.style.top = `${currentTop + this.speed}px`;
// 		 } else {
// 			  this.container.removeChild(this.tank); // Якщо танк досяг дна, він зникає
// 		 }
// 	}

// 	// Вибух і зникнення танка при кліку
// 	explode() {
// 		 const explosion = document.createElement('div');
// 		 explosion.classList.add('explosion');
// 		 explosion.style.left = this.tank.style.left;
// 		 explosion.style.top = this.tank.style.top;
// 		 this.container.appendChild(explosion);

// 		 // Видаляємо танк після вибуху
// 		 setTimeout(() => {
// 			  this.container.removeChild(explosion);
// 		 }, 100);

// 		 this.container.removeChild(this.tank);
// 	}
// }

// // Гра: створюємо танки та оновлюємо їх рух
// const container = document.querySelector('.game-container');
// const tanks = [];

// function createTank() {
// 	const tank = new Tank(container);
// 	tanks.push(tank);
// }

// function updateTanks() {
// 	tanks.forEach((tank, index) => {
// 		 tank.move();
// 		 // Видаляємо танки, які вже зникли
// 		 if (!container.contains(tank.tank)) {
// 			  tanks.splice(index, 1);
// 		 }
// 	});
// 	requestAnimationFrame(updateTanks);
// }

// // Створюємо танки з інтервалом
// setInterval(createTank, 2000);
// updateTanks();

//=============== Мій варіант2 ==================
const gameArea = document.getElementById('gameArea');

// Функція для створення нового танка
function createTank() {
   const tank = document.createElement('div');
   tank.classList.add('tank');
   
   // Випадкове горизонтальне позиціювання танка
   const randomX = Math.random() * (gameArea.offsetWidth - 50);
   tank.style.left = `${randomX}px`;
   tank.style.top = '-50px'; // Починає зверху екрана
   
   // Додаємо подію кліку на танк
   tank.addEventListener('click', () => {
      tank.classList.add('explosion'); // Додаємо клас вибуху
      setTimeout(() => tank.remove(), 500); // Видаляємо танк через 500 мс після вибуху
   });

    gameArea.appendChild(tank);

    // Рухаємо танк вниз
    let moveInterval = setInterval(() => {
      let currentTop = parseInt(tank.style.top);
      if (currentTop < gameArea.offsetHeight) {
         tank.style.top = `${currentTop + 2}px`;
      } else {
         tank.remove(); // Видаляємо танк, якщо він виходить за межі екрану
         clearInterval(moveInterval);
      }
   }, 20);
}

// Генерація танків кожні 2 секунди
setInterval(createTank, 2000);
