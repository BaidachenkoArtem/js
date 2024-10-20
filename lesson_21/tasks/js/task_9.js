"use strict"

/*
	При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
window.onload = function() {
	const messageElement = document.getElementById('greeting-message');
	
	const currentTime = new Date(); // Поточний час
	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();
 
	// Визначаємо час початку робочого дня (8:00)
	const workStartTime = new Date();
	workStartTime.setHours(8, 0, 0, 0); // 8:00 ранку сьогодні
 
	// Якщо зараз після 8:00, початок робочого дня буде завтра
	if (currentTime > workStartTime) {
	  workStartTime.setDate(workStartTime.getDate() + 1);
	}
 
	// Різниця між поточним часом і початком робочого дня в мілісекундах
	const timeDifference = workStartTime - currentTime;
 
	// Якщо зараз до 8:00, показуємо, скільки хвилин залишилось до початку робочого дня
	if (currentHour < 8) {
	  const minutesLeft = Math.floor(timeDifference / (1000 * 60));
	  messageElement.textContent = `До початку робочого дня залишилось ${minutesLeft} хвилин.`;
	  messageElement.classList.add('not-working-time');
	} else {
	  // Інакше вітаємо користувача
	  messageElement.textContent = `Доброго ранку! Вітаємо вас на сайті!`;
	  messageElement.classList.add('good-morning');
	}
 };
 
//=============== Мій варіант2 ==================