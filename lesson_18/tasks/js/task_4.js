"use strict"
/*
	Наперед задано у скрипті масив зі списком бажань.
	Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div
	(їх треба створити і додати на сторінку)
*/

const wishList = [
	"Купити новий телефон",
	"Отримати підвищення на роботі",
	"Вивчити нову мову",
	"Навчитися готувати нові страви",
  	"Почати займатися спортом",
	"Знайти нове хобі",
	"Купити новий смартфон",
	"Прочитати 50 книг за рік",
	"Вивчити іспанську мову",
	"Спробувати екстремальні види спорту",
];

function getWish(wishList) {
	const randomWish = []
	for (let i = 0; i < 3; i++) {
		const rundomNumber = Math.floor(Math.random() * ((wishList.length - 1) + 1))
		randomWish.push(wishList[rundomNumber])
	}

  	for (let i = 0; i < randomWish.length; i++) {
		const myDiv = document.createElement('div')
			myDiv.innerText = randomWish[i]
			myDiv.classList.add("wish__item");
		document.getElementById('myWish').append(myDiv)
  	}
}

window.onload = function () {
  getWish(wishList)
} 
