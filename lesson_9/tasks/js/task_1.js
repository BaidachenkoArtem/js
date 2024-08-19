"use strict"

// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

if (confirm("Почати тестування?")) {

	const userValueNumber = parseFloat(prompt(`Введіть кількість елементів масиву`, '3'))

	const totalValue = new Array(userValueNumber).fill(0)
	
	document.write(`<div>Масив з ${userValueNumber} елементами ${totalValue}.</div>`)

}