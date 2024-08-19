"use strict"

// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm("Почати тестування?")) {
	const array = [0,11, 9, 5, 2, 3, 4, 1]

	let firstElem = array[0]
	for (let i = 0; i < array.length; i++) {
		array[i] > firstElem
		array[i] *= 2
	}
	document.write(`${array}`)
}