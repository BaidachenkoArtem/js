"use strict"

// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function createMessageTable(rowTable, colTable, messageTable) {
	let table = `<table border="2px"><tbody>`;

	for (let i = 0; i < rowTable; i++) {
	  table += `<tr>`;

		for (let j = 0; j < colTable; j++) {
			table += `<td>${messageTable}</td>`;
		}

	  table += `</tr>`;
	}

	table += `</tbody></table>`;

	return table;
}

let rowTable = parseInt(prompt("Введіть кількість рядків"))
let colTable = parseInt(prompt("Введіть кількість стовпців"))
let messageTable = prompt("Введіть повідомлення, яке заповнить комірку таблиці", "Hi!")


document.write(`<h2>Таблиця:</h2> ${createMessageTable(rowTable, colTable, messageTable)}`);