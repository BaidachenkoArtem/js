"use strict"

// Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const divs = document.querySelectorAll('.work__items div');

console.log(divs)

divs.forEach((div, index) => {
	div.addEventListener('click', () => {
		for (let i = index + 1; i < divs.length; i++) {
			divs[i].classList.add('red');
		}
	});
});
