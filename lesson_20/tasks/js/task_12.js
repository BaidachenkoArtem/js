"use strict"

/*
	Розробити Loader (задається title, value). Зімітувати завантаження за допомогою таймера.
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Функція для симуляції завантаження
function simulateLoading(progressElement, targetValue) {
	let currentValue = 0;

	const loadingInterval = setInterval(() => {
		 if (currentValue >= targetValue) {
			  clearInterval(loadingInterval); // Зупиняємо таймер
		 } else {
			  currentValue++;
			  progressElement.style.width = currentValue + '%';
			  progressElement.textContent = currentValue + '%';
		 }
	}, 50); // Збільшуємо значення кожні 50 мс
}

// Встановлюємо таймери для двох прогрес-барів
document.addEventListener('DOMContentLoaded', () => {
	const progress1 = document.getElementById('progress1');
	const progress2 = document.getElementById('progress2');

	// Симуляція завантаження для першого бару до 50%
	simulateLoading(progress1, 50);

	// Симуляція завантаження для другого бару до 75%
	simulateLoading(progress2, 75);
});

//=============== Мій варіант2 ==================