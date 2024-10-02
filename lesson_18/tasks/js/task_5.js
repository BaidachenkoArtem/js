"use strict"

// Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

function generateRandomTable(rows = 3, cols = 4) {
	
	const table = document.createElement('table');

   for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < cols; j++) {
      	const cell = document.createElement('td');
      	const randomNumber = Math.floor(Math.random() * 100);
      	cell.textContent = randomNumber; 
      	row.appendChild(cell);
      }

      table.appendChild(row);
   }

   document.getElementById('table').appendChild(table);
}

window.onload = function () {
	generateRandomTable(3, 4)
}