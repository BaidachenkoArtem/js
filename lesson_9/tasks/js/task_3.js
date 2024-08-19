"use strict"

// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

if (confirm("Почати тестування?")) {

	const length = parseInt(prompt("Введіть кількість елементів:", "8"));
	
	let array = Array(Math.min(5, length)).fill(1);
	array = array.concat(Array(length - array.length).fill(7));

	document.write(`${array}`)
}