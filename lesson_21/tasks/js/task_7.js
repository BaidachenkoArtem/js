"use strict"

/*
	Визначити скільки залишилось до кінця робочого дня (до 17.00)
*/

function calculateTimeRemaining() {
	const now = new Date();
	const endOfWorkDay = new Date();

	// Встановлюємо час на 17:00
	endOfWorkDay.setHours(17);
	endOfWorkDay.setMinutes(0);
	endOfWorkDay.setSeconds(0);
	endOfWorkDay.setMilliseconds(0);

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

calculateTimeRemaining();

setInterval(calculateTimeRemaining, 60000);