"use strict"

/*
	Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути). Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Отримуємо таблицю з сапером
const table = document.getElementById('minesweeper');
const cells = table.getElementsByTagName('td');

// Додаємо обробник події для кожної клітинки
for (let i = 0; i < cells.length; i++) {
   cells[i].addEventListener('click', function () {
      checkCell(i);
   });
}

// Функція для перевірки клітинки
function checkCell(index) {
   const cell = cells[index];
    
   // Якщо клітинка вже відкрита, нічого не робимо
   if (cell.classList.contains('opened-safe') || cell.classList.contains('opened-mine')) {
      return;
   }
    
   // Перевіряємо, чи є міна в клітинці
   if (cell.getAttribute('mine') === '1') {
      cell.classList.add('opened-mine'); // Червоний колір для клітинки з міною
   } else {
      cell.classList.add('opened-safe'); // Зелений колір для безпечної клітинки
      openAdjacentCells(index); // Відкриваємо сусідні клітинки
   }
}

// Функція для відкриття сусідніх клітинок
function openAdjacentCells(index) {
   const leftIndex = index - 1;
   const rightIndex = index + 1;

   // Відкриваємо ліву клітинку, якщо вона без міни
   if (leftIndex >= 0 && cells[leftIndex].getAttribute('mine') === '0') {
   	checkCell(leftIndex);
   }
   // Відкриваємо праву клітинку, якщо вона без міни
   if (rightIndex < cells.length && cells[rightIndex].getAttribute('mine') === '0') {
   	checkCell(rightIndex);
   }
}
//=============== Мій варіант2 ==================