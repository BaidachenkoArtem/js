"use strict"

/*
	Розробити Loader (задається title, value). Зімітувати завантаження за допомогою таймера.
*/

function simulateLoading(progressElement, targetValue) {
	let currentValue = 0;

	const loadingInterval = setInterval(() => {
		if (currentValue >= targetValue) {
			clearInterval(loadingInterval);
		} else {
			currentValue++;
			progressElement.style.width = currentValue + '%';
			progressElement.textContent = currentValue + '%';
		}
	}, 50);
}

document.addEventListener('DOMContentLoaded', () => {
	const progress1 = document.getElementById('progress1');
	const progress2 = document.getElementById('progress2');

	simulateLoading(progress1, 50);

	simulateLoading(progress2, 75);
});