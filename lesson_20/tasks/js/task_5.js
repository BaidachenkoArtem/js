"use strict"

/*
	Бронювання таксі та велосипедів (по аналогії з тим, що ми робили на практиці). Відображаються списки авто та велосипедів, які можна забронювати. При бронюванні вибрані авто та вибрані велосипеди відображаються у окремих списках.
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Функція для бронювання авто
function bookCar(event) {
	const carItem = event.target.parentElement; // Отримуємо батьківський <li>
	const bookedCarsList = document.getElementById('booked-cars');
	
	const newCarItem = document.createElement('li');
	newCarItem.classList.toggle('selected');
	newCarItem.textContent = carItem.textContent.replace('Забронювати', ''); // Копіюємо назву авто без кнопки
	bookedCarsList.appendChild(newCarItem);
	
	carItem.remove(); // Видаляємо авто зі списку доступних
}

// Функція для бронювання велосипедів
function bookBike(event) {
	const bikeItem = event.target.parentElement; // Отримуємо батьківський <li>
	const bookedBikesList = document.getElementById('booked-bikes');
	
	const newBikeItem = document.createElement('li');
	newBikeItem.classList.toggle('selected');
	newBikeItem.textContent = bikeItem.textContent.replace('Забронювати', ''); // Копіюємо назву велосипеда без кнопки
	bookedBikesList.appendChild(newBikeItem);
	
	bikeItem.remove(); // Видаляємо велосипед зі списку доступних
}

// Додаємо обробники подій для всіх кнопок бронювання авто
const carButtons = document.querySelectorAll('.book-car');
carButtons.forEach(button => {
	button.addEventListener('click', bookCar);
});

// Додаємо обробники подій для всіх кнопок бронювання велосипедів
const bikeButtons = document.querySelectorAll('.book-bike');
bikeButtons.forEach(button => {
	button.addEventListener('click', bookBike);
});
//=============== Мій варіант2 ==================