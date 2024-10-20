"use strict"

/*
	Розробити елемент для вводу кількості вибраного товару за зразком (мінімальна кількість 1, максимальна кількість 10, при перевищенні блокувати кнопку)
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// class Product {
// 	constructor(name, price, quantity, image) {
// 		this.name = name;
// 		this.price = price;
// 		this.quantity = quantity;
// 		this.image = image;
// 	}
// }

// class Cart {
// 	constructor() {
// 		this.items = [];
// 		this.total = 0;
// 	}

// 	addToCart(product) {
// 		const existingProduct = this.items.find(item => item.product.name === product.name);
// 		if (existingProduct) {
// 			existingProduct.quantity++;
// 		} else {
// 			this.items.push({ product, quantity: 1 });
// 		}
// 		this.calculateTotal();
// 		this.renderCart();
// 	}

// 	removeFromCart(productName) {
// 		this.items = this.items.filter(item => item.product.name !== productName);
// 		this.calculateTotal();
// 		this.renderCart();
// 	}

// 	calculateTotal() {
// 		this.total = this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
// 		document.querySelector('.cart-shop__sum').textContent = this.total;
// 	}

// 	renderCart() {
// 		const cartList = document.querySelector('.list-shop');
// 		cartList.innerHTML = '';
// 		this.items.forEach(item => {
// 			const cartItem = document.createElement('div');
// 			cartItem.classList.add('list-shop__item');
// 			cartItem.innerHTML = `
// 				<div class="list-shop__image">
// 					<img src="${item.product.image}" alt="${item.product.name}">
// 				</div>
// 				<div class="list-shop__content">
// 					<h4 class="list-shop__title">
// 						<a class="list-shop__link-title">${item.product.name}</a>
// 					</h4>
// 					<div data-quantity class="list-shop__quantity quantity">
// 						<button data-quantity-minus type="button" class="quantity__button quantity__button--minus">-</button>
// 						<div class="quantity__input">
// 							<input data-quantity-value autocomplete="off" type="text" value="${item.quantity}">
// 						</div>
// 						<button data-quantity-plus type="button" class="quantity__button quantity__button--plus">+</button>
// 					</div>
// 					<div class="list-shop__price">Ціна: ${item.product.price * item.quantity} грн</div>
// 				</div>
// 				<div class="list-shop__actions actions-shop">
// 					<button class="actions-shop__button" data-name="${item.product.name}">X</button>
// 				</div>
// 			`;
// 			cartList.appendChild(cartItem);
// 		});
// 		this.attachRemoveEvent();
// 		this.attachQuantityEvents();  // Attach quantity change events
// 	}

// 	attachQuantityEvents() {
// 		const plusBtns = document.querySelectorAll('[data-quantity-plus]');
// 		const minusBtns = document.querySelectorAll('[data-quantity-minus]');

// 		plusBtns.forEach(btn => {
// 			btn.addEventListener('click', (e) => {
// 				const productName = e.target.closest('.list-shop__item').querySelector('.list-shop__link-title').innerText;
// 				this.increaseQuantity(productName);
// 			});
// 		});

// 		minusBtns.forEach(btn => {
// 			btn.addEventListener('click', (e) => {
// 				const productName = e.target.closest('.list-shop__item').querySelector('.list-shop__link-title').innerText;
// 				this.decreaseQuantity(productName);
// 			});
// 		});
// 	}

// 	increaseQuantity(productName) {
// 		const product = this.items.find(item => item.product.name === productName);
// 		if (product) {
// 			product.quantity++;
// 			this.calculateTotal();
// 			this.renderCart();
// 		}
// 	}

// 	decreaseQuantity(productName) {
// 		const product = this.items.find(item => item.product.name === productName);
// 		if (product && product.quantity > 1) {
// 			product.quantity--;
// 			this.calculateTotal();
// 			this.renderCart();
// 		} else if (product && product.quantity === 1) {
// 			this.removeFromCart(productName);
// 		}
// 	}

// 	attachRemoveEvent() {
// 		const removeBtns = document.querySelectorAll('.actions-shop__button');
// 		removeBtns.forEach(btn => {
// 			btn.addEventListener('click', (e) => {
// 				const productName = e.target.getAttribute('data-name');
// 				this.removeFromCart(productName);
// 			});
// 		});
// 	}
// }

// class Shop {
// 	constructor(productList, productListSelector, cartListSelector, totalSumSelector) {
// 		this.productList = productList;
// 		this.productListSelector = productListSelector;
// 		this.cart = new Cart();
// 	}
// }

// const productList = [
// 	new Product("Acer", 25000, 5, "./img/acer.jpg"),
// ];

// window.onload = () => {
// 	const shop = new Shop(
// 		".shop__cart", // Изменено
// 		".cart-shop__sum" // Изменено
// 	);
// 	shop.render();
// };
//=============== Мій варіант2 ==================
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
