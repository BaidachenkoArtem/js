"use strict"
// Вивести таблицю з 3 рядків і 7 стовпців
for (let i = 0; i < 1; i++) {
	document.write(`<table border='2px'>`)
	for (let j = 1; j <= 3; j++) {
		document.write(`<tr>`)
		for (let t = 1; t <= 7; t++) {
			document.write(`<td>${t}</td>`)
		}
		document.write(`</tr>`)
	}	
	document.write(`</table>`)
}
