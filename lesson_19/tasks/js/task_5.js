"use strict"

// Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)

const productCards = document.querySelectorAll('.card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selected');
    });
});

//=============== Мій варіант2 ==================