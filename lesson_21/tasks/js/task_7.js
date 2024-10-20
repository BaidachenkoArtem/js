"use strict"

/*
	Визначити скільки залишилось до кінця робочого дня (до 17.00)
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
function calculateTimeRemaining() {
	const now = new Date(); // Поточний час
	const endOfWorkDay = new Date(); // Час завершення робочого дня

	// Встановлюємо час на 17:00
	endOfWorkDay.setHours(17);
	endOfWorkDay.setMinutes(0);
	endOfWorkDay.setSeconds(0);
	endOfWorkDay.setMilliseconds(0);

	// Різниця в часі між зараз і 17:00 в мілісекундах
	const timeRemaining = endOfWorkDay - now;

	const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

	const timeRemainingDiv = document.getElementById('timeRemaining');

	if (timeRemaining > 0) {
		 timeRemainingDiv.textContent = `До кінця робочого дня залишилось: ${hoursRemaining} годин і ${minutesRemaining} хвилин.`;
	} else {
		 timeRemainingDiv.textContent = 'Робочий день вже закінчився.';
	}
}

// Викликаємо функцію при завантаженні сторінки
calculateTimeRemaining();

// Оновлюємо кожну хвилину
setInterval(calculateTimeRemaining, 60000);
//=============== Мій варіант2 ==================