"use strict"

/*
	Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.
*/

class Star {
	constructor(container) {
		this.container = container;
		this.star = document.createElement('div');
		this.star.classList.add('star');
		this.minSize = 5;   
		this.maxSize = 40;  
		this.size = this.minSize;
		this.growthStep = 0.15;
		this.init();
	}


	init() {
		this.size = this.minSize;
		this.star.style.width = this.size + 'px';
		this.star.style.height = this.size + 'px';
		this.setPosition();
		this.container.appendChild(this.star);
	}


	setPosition() {
		const x = Math.random() * window.innerWidth;
		const y = Math.random() * window.innerHeight;
		this.star.style.left = `${x}px`;
		this.star.style.top = `${y}px`;
	}

	update() {
		this.size += this.growthStep;
		if (this.size >= this.maxSize) {
			this.setPosition();
			this.size = this.minSize;
		}
		this.star.style.width = this.size + 'px';
		this.star.style.height = this.size + 'px';
	}
}

const starCount = 25;
const container = document.querySelector('.stars-container');
const stars = [];

for (let i = 0; i < starCount; i++) {
	const star = new Star(container);
	stars.push(star);
}

function animateStars() {
	stars.forEach(star => star.update());
	requestAnimationFrame(animateStars);
}

animateStars();