"use strict"

/*
	Розробити елемент для вводу кількості вибраного товару за зразком (мінімальна кількість 1, максимальна кількість 10, при перевищенні блокувати кнопку)
*/

const decreaseButton = document.querySelector('[data-quantity-minus]');
const increaseButton = document.querySelector('[data-quantity-plus]');
const quantityInput = document.querySelector('[data-quantity-value]');
const priceDisplay = document.querySelector('.cart-shop__sum');
const pricePerItem = 16250;  // ціна за одиницю товару

function updateButtons() {
  const quantity = parseInt(quantityInput.value);
  decreaseButton.disabled = quantity <= 1;
  increaseButton.disabled = quantity >= 10;
}

function updatePrice() {
  const quantity = parseInt(quantityInput.value);
  const totalPrice = quantity * pricePerItem;
  priceDisplay.textContent = totalPrice;
}

function changeQuantity(amount) {
  let currentQuantity = parseInt(quantityInput.value);
  const newQuantity = currentQuantity + amount;

  if (newQuantity >= 1 && newQuantity <= 10) {
    quantityInput.value = newQuantity;
    updateButtons();
    updatePrice();
  }
}
decreaseButton.addEventListener('click', () => changeQuantity(-1));
increaseButton.addEventListener('click', () => changeQuantity(1));

updateButtons();
updatePrice();