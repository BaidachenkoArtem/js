"use strict"

// Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm("Почати тестування?")) {
	let name = ['Boris', 'Anna', 'Ivan', 'Roma', 'Artem', 'Stas', 'Olya'];
	let initials = name.map(name => name.charAt(0));
	document.write(`
		<div>Дано масив: ${name}</div>
		<div>Результат: ${initials}</div>
	`)
}