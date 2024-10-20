"use strict"

/*
	Блукаючий об’єкт. Випадковим чином рухається деякий об’єкт в межах контейнера. При зустрічі з краєм контейнера він відбивається.
*/

//=============== Не мій варіант1 ===============
	
//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Отримуємо елементи контейнера і об'єкта
const container = document.getElementById('container');
const object = document.getElementById('object');

// Визначаємо швидкість об'єкта по осях X і Y
let speedX = 2 + Math.random() * 2;  // Випадкова швидкість по осі X (2-4 пікселі за крок)
let speedY = 2 + Math.random() * 2;  // Випадкова швидкість по осі Y (2-4 пікселі за крок)

// Функція для оновлення позиції об'єкта
function updatePosition() {
    // Отримуємо поточні координати об'єкта
    let objectRect = object.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    
    // Перевіряємо, чи досяг об'єкт країв контейнера
    if (objectRect.right >= containerRect.right || objectRect.left <= containerRect.left) {
        speedX = -speedX; // Зміна напрямку по осі X
    }

    if (objectRect.bottom >= containerRect.bottom || objectRect.top <= containerRect.top) {
        speedY = -speedY; // Зміна напрямку по осі Y
    }

    // Оновлюємо позицію об'єкта
    object.style.left = object.offsetLeft + speedX + 'px';
    object.style.top = object.offsetTop + speedY + 'px';
}

// Викликаємо функцію оновлення кожні 20 мс
setInterval(updatePosition, 20);
//=============== Мій варіант2 ==================