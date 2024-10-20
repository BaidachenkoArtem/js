"use strict"

/*
	Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
function isDateInCurrentWeek(date) {
	const now = new Date(); // Поточний час
	const currentDay = now.getDay(); // День тижня (неділя = 0, понеділок = 1, ...)
	
	// Визначаємо понеділок поточного тижня (00:00)
	const startOfWeek = new Date(now);
	const diffToMonday = currentDay === 0 ? 6 : currentDay - 1; // Якщо неділя, то пересуваємось на 6 днів назад
	startOfWeek.setDate(now.getDate() - diffToMonday);
	startOfWeek.setHours(0, 0, 0, 0);

	// Визначаємо неділю поточного тижня (23:59)
	const endOfWeek = new Date(startOfWeek);
	endOfWeek.setDate(startOfWeek.getDate() + 6);
	endOfWeek.setHours(23, 59, 59, 999);

	// Перевіряємо, чи вказана дата знаходиться між початком і кінцем тижня
	return date >= startOfWeek && date <= endOfWeek;
}

document.getElementById('checkDate').addEventListener('click', function() {
	const inputDate = document.getElementById('inputDate').value;
	
	if (!inputDate) {
		 alert('Будь ласка, введіть дату і час.');
		 return;
	}

	const selectedDate = new Date(inputDate);
	const resultDiv = document.getElementById('result');

	if (isDateInCurrentWeek(selectedDate)) {
		 resultDiv.textContent = 'Вказана дата знаходиться в межах поточного тижня.';
		 resultDiv.style.color = 'green';
	} else {
		 resultDiv.textContent = 'Вказана дата не знаходиться в межах поточного тижня.';
		 resultDiv.style.color = 'red';
	}
});

//=============== Мій варіант2 ==================