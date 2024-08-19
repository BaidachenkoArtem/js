"use strict"

// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm("Почати тестування?")) {
	let carNumbers = ['A123BC', 'B456DE', 'C789FG', 'C012HI', 'A345JK'];
	let filterCarNumbers = carNumbers.filter(number => number.startsWith('A'));
	document.write(`
		<div>Дано масив: ${carNumbers}</div>
		<div>Результат: ${filterCarNumbers}</div>
	`)
}