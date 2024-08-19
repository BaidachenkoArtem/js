"use strict"

// Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm("Почати тестування?")) {

	let arr = [15, 65, 30, 0, 200, 540, 110, 6, 3, 1000, 60, 25]
	
	for (const elementNum of arr) {
		if (elementNum > 100)
		document.write(`<div>${elementNum}<div>`)
	}
}