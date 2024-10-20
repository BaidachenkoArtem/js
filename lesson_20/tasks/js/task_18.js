"use strict"

/*
	Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути). Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
*/


const table = document.getElementById('minesweeper');
const cells = table.getElementsByTagName('td');

for (let i = 0; i < cells.length; i++) {
   cells[i].addEventListener('click', function () {
      checkCell(i);
   });
}

function checkCell(index) {
   const cell = cells[index];
    
 
   if (cell.classList.contains('opened-safe') || cell.classList.contains('opened-mine')) {
      return;
   }
    
   if (cell.getAttribute('mine') === '1') {
      cell.classList.add('opened-mine'); 
   } else {
      cell.classList.add('opened-safe'); 
      openAdjacentCells(index);
   }
}

function openAdjacentCells(index) {
   const leftIndex = index - 1;
   const rightIndex = index + 1;

   if (leftIndex >= 0 && cells[leftIndex].getAttribute('mine') === '0') {
   	checkCell(leftIndex);
   }

   if (rightIndex < cells.length && cells[rightIndex].getAttribute('mine') === '0') {
   	checkCell(rightIndex);
   }
}