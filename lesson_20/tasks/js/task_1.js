"use strict"

/*
	Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.
*/

//=============== Не мій варіант1 ===============
// window.addEventListener('load', windowLoaded)

// function windowLoaded() {
// 	const buttonCreateStars = document.querySelector('#generate-stars')
// 	if (buttonCreateStars) {
// 		try {
// 			buttonCreateStars.addEventListener('click', generateStars)
// 		} catch (error) {
// 			console.error(error.message)
// 		}
// 	}
// }

// function removeStars() {
// 	const prevStars = document.querySelectorAll('.star')
// 	if (prevStars.length)
// 		prevStars.forEach(star => star.remove())
// }

// function generateStars() {
// 	removeStars()
// 	const amountStars = parseInt(document.querySelector('#amount-starts').value)
// 	if (isNaN(amountStars))
// 		throw new Error("Not correct data!!")
// 	else if (amountStars <= 0)
// 		throw new Error('Amount stars must be more than zero!')

// 	for (let index = 0; index < amountStars; index++) {
// 		setTimeout(() => {
// 			const star = new Star('.page__container', 'https://www.svgrepo.com/show/13695/star.svg', 15, 70, 30, 700, 'star')
// 			star.render()
// 		}, index * 200);
// 	}
// }

// class Star {
// 	constructor(selectorContainer, imgSrc, minSize, maxSize, step, speedAnimation, cssClass) {
// 		this.imgSrc = imgSrc
// 		this.minSize = minSize
// 		this.maxSize = maxSize
// 		this.step = step
// 		this.speedAnimation = speedAnimation
// 		this.cssClass = cssClass
// 		this.currentSize = minSize
// 		this.container = document.querySelector(selectorContainer)
// 		if (!this.container)
// 			throw new Error(`Not found element by selector - ${selectorContainer}!`);
// 	}

// 	setNewSize() {
// 		this.currentSize += this.step

// 		if (this.currentSize >= this.maxSize) {
// 			clearInterval(this.interval)
// 			this.currentSize = this.maxSize
// 		}

// 		this.updateSize()

// 		if (this.currentSize === this.maxSize) {
// 			setTimeout(() => {
// 				this.clearAnimation()
// 				setTimeout(() => {
// 					this.currentSize = this.minSize
// 					this.updateSize()
// 					this.setRandomPosition()
// 					this.updatePosition()
// 					this.setAnimation()
// 					this.interval = setInterval(() => {
// 						this.setNewSize()
// 					}, this.speedAnimation);
// 				}, this.speedAnimation);
// 			}, this.speedAnimation);
// 		}
// 	}

// 	setRandomPosition() {
// 		this.positionX = Math.random() * (100 - this.maxSize / window.innerWidth * 100)
// 		this.positionY = Math.random() * (100 - this.maxSize / window.innerHeight * 100)
// 	}

// 	updatePosition() {
// 		this.img.style.left = `${this.positionX}%`
// 		this.img.style.top = `${this.positionY}%`
// 	}

// 	updateSize() {
// 		this.img.style.width = `${this.currentSize}px`
// 	}

// 	createStar() {
// 		const img = document.createElement('img')
// 		img.className = this.cssClass
// 		img.alt = 'star'
// 		img.src = this.imgSrc
// 		img.style.position = 'fixed'
// 		img.style.width = `${this.currentSize}px`
// 		img.style.aspectRatio = 1
// 		return img
// 	}

// 	setAnimation() {
// 		this.img.style.transitionProperty = 'width, height'
// 		this.img.style.transitionTimingFunction = 'linear'
// 		this.img.classList.remove('--hide')
// 		this.img.classList.add('--show')
// 		this.img.style.animationDelay = `${this.speedAnimation}ms`
// 		this.img.style.transitionDuration = `${this.speedAnimation}ms`
// 	}

// 	clearAnimation() {
// 		this.img.style.removeProperty('transition-property')
// 		this.img.style.removeProperty('transition-duration')
// 		this.img.style.removeProperty('transition-timing-function')
// 		this.img.classList.add('--hide')
// 		this.img.classList.remove('--show')
// 		this.img.style.removeProperty('transition-delay')
// 		this.img.style.removeProperty('animation-delay')
// 	}

// 	render() {
// 		this.img = this.createStar()
// 		this.setAnimation()
// 		this.setRandomPosition()
// 		this.updatePosition()
// 		this.container.append(this.img)
// 		this.interval = setInterval(() => {
// 			this.setNewSize()
// 		}, this.speedAnimation);
// 	}
// }

//=============== Не мій варіант2 ===============

// class Star {
// 	constructor(
// 	  starImgSrc,
// 	  initialWidthPx,
// 	  finalScale,
// 	  stepPercent,
// 	  interval,
// 	  containerSelector
// 	) {
// 	  this.imgSrc = starImgSrc
// 	  this.initialWidth = initialWidthPx
// 	  this.finalScale = finalScale
// 	  this.growingStep = stepPercent / 100
// 	  this.growingInterval = interval
// 	  this.container = this.getContainer(containerSelector)
// 	  this.currentScale = 1
// 	}
// 	getContainer(containerSelector) {
// 	  return document.querySelector(containerSelector)
// 	}
// 	render() {
// 	  if (!this.img) {
// 		 const img = document.createElement("img")
// 		 img.setAttribute("src", this.imgSrc)
// 		 img.style.position = "fixed"
// 		 img.style.width = this.initialWidth + "px"
// 		 this.container.append(img)
// 		 this.img = img
// 	  }
// 	  this.img.style.left =
// 		 this.getRandomPos(window.innerWidth, this.initialWidth) + "px"
// 	  this.img.style.top =
// 		 this.getRandomPos(window.innerHeight, this.initialWidth) + "px"
// 	}
// 	start() {
// 	  this.render()
// 	  this.myIntervalId = setInterval(() => {
// 		 if (this.currentScale >= this.finalScale) {
// 			this.reset()
// 			this.render()
// 		 } else {
// 			this.currentScale += this.growingStep
// 			this.updateImgScale()
// 		 }
// 	  }, this.growingInterval)
// 	}
// 	updateImgScale() {
// 	  this.img.style.scale = this.currentScale
// 	}
// 	stop() {
// 	  clearInterval(this.myIntervalId)
// 	}
// 	reset() {
// 	  this.currentScale = 1
// 	  this.updateImgScale()
// 	}
// 	getRandomPos(windowInnerSize, initialImageSize) {
// 	  const finalImageSize = initialImageSize * this.finalScale
// 	  const deltaSize = finalImageSize - initialImageSize
 
// 	  const min = deltaSize / 2
// 	  const max = windowInnerSize - this.finalScale * 0.75 * initialImageSize
 
// 	  return min + Math.floor(Math.random() * (max - min + 1))
// 	}
// }
 
// window.onload = () => {
// 	for (let i = 0; i < 10; i++) {
// 	  addStar(i * 1000)
// 	}
//  }
//  function addStar(timeout) {
// 	setTimeout(() => {
// 	  const star = new Star("./images/star.svg", 100, 1.5, 5, 100, ".stars")
 
// 	  star.start()
// 	}, timeout)
// }
 
//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
class Star {
	constructor(container) {
		 this.container = container;
		 this.star = document.createElement('div');
		 this.star.classList.add('star');
		 this.minSize = 5;   // Мінімальний розмір зірки
		 this.maxSize = 40;  // Максимальний розмір зірки
		 this.size = this.minSize;
		 this.growthStep = 0.15; // Крок збільшення
		 this.init();
	}

	// Ініціалізація положення і розміру зірки
	init() {
		 this.size = this.minSize;
		 this.star.style.width = this.size + 'px';
		 this.star.style.height = this.size + 'px';
		 this.setPosition();
		 this.container.appendChild(this.star);
	}

	// Встановлення випадкової позиції
	setPosition() {
		 const x = Math.random() * window.innerWidth;
		 const y = Math.random() * window.innerHeight;
		 this.star.style.left = `${x}px`;
		 this.star.style.top = `${y}px`;
	}

	// Оновлення розміру зірки
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

// Створюємо кілька зірок і додаємо анімацію
const starCount = 25; // Кількість зірок
const container = document.querySelector('.stars-container');
const stars = [];

for (let i = 0; i < starCount; i++) {
	const star = new Star(container);
	stars.push(star);
}

// Оновлюємо зірки кожні 16 мілісекунд
function animateStars() {
	stars.forEach(star => star.update());
	requestAnimationFrame(animateStars);
}

animateStars();
//=============== Мій варіант2 ==================