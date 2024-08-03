"use strict"
// Вивести таблицю з одним рядком і 7 стовпцями.

for (let i = 0; i < 1; i++) {
	document.write(`<table border='2px'>`)
	for (let t = 1; t <= 7; t++) {
		document.write(`<td>${t}</td>`)
	}
	document.write(`</table>`)
}
