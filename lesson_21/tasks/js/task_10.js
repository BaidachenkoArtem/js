"use strict"

/*
	Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
function updateTime() {
	const now = new Date();
 
	// Часовий пояс Лондона (UTC+0)
	const londonTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
	document.getElementById('london-time').textContent = londonTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 
	// Часовий пояс Парижа (UTC+1)
	const parisTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
	document.getElementById('paris-time').textContent = parisTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 
	// Часовий пояс Сіднея (UTC+11)
	const sydneyTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
	document.getElementById('sydney-time').textContent = sydneyTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 }
 
 // Оновлюємо час кожну секунду
 setInterval(updateTime, 1000);
 updateTime(); // Викликаємо відразу після завантаження
 
//=============== Мій варіант2 ==================