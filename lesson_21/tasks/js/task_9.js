"use strict"

/*
	При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).
*/

window.onload = function() {
	const messageElement = document.getElementById('greeting-message');
	
	const currentTime = new Date();
	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();
 
	const workStartTime = new Date();
	workStartTime.setHours(8, 0, 0, 0);
 
	if (currentTime > workStartTime) {
		workStartTime.setDate(workStartTime.getDate() + 1);
	}
 
	const timeDifference = workStartTime - currentTime;
 

	if (currentHour < 8) {
		const minutesLeft = Math.floor(timeDifference / (1000 * 60));
		messageElement.textContent = `До початку робочого дня залишилось ${minutesLeft} хвилин.`;
		messageElement.classList.add('not-working-time');
	} else {
		messageElement.textContent = `Доброго ранку! Вітаємо вас на сайті!`;
		messageElement.classList.add('good-morning');
	}
}