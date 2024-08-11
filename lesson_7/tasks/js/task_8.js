"use strict"

// Створити функцію, яка виводить банер у функцію передаються:
// зображення, заголовок та посилання, куди переходимо при кліку на зображення
// тег img повине знаходитись у середині тега a: <a> <img src=”шлях”></a>

function bannerBlock() {
	return `<a href=${url} target='_blank' class="banner">
				<img src="${image}" alt="Image">
				<h3>${title}</h3>
			 </a>`
}
 
const image = "img/01.jpg"
const title = "Functions JavaScript"
const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"

document.write(`${bannerBlock()}`)
