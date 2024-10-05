"use strict"

/*
	Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).
*/

let clickCounts = {
	table1: 0,
	table2: 0,
	table3: 0
};

function handleClick(tableId) {
	const table = document.getElementById(tableId);
	table.classList.add('red-border');
	clickCounts[tableId]++;

	document.getElementById(`clicks-${tableId}`).innerText = clickCounts[tableId];
}

document.querySelectorAll('td').forEach(td => {
	td.addEventListener('click', function() {
		const table = td.closest('table').id;
		handleClick(table);
	});
});