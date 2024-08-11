"use strict"

// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

function randomImage() {
	let randomNumber = 1 + Math.floor(Math.random() * 4)
	let randomImg

	if (randomNumber === 1) {
		randomImg = img1;
	} else if (randomNumber === 2) {
		randomImg = img2;
	} else if (randomNumber === 3) {
		randomImg = img3;
	} else {
		randomImg = img4;
	}	

	return randomImg
}

const img1 = "../img/01.jpg"
const img2 = "../img/02.jpg"	
const img3 = "../img/03.jpg"	
const img4 = "../img/04.jpg"

document.write(`<img src="./img/${randomImage()}">`)