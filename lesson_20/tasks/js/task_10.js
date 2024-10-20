"use strict"

/*
	Дано перелік товарів у кошику. При зміні кількості одиниць товару збільшувати загальну вартість. Створити клас 	Product, що призначений для маніпуляцій товаром та клас ProductManager, що оперує з усіма товарами (через подію передвати ідентифікатор товару та операцію, що зроблена).
*/

class Product {
	constructor(name, price, quantity, image) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.image = image;
	}
}

class Cart {
	constructor() {
		this.items = [];
		this.total = 0;
	}

	addToCart(product) {
		const existingProduct = this.items.find(item => item.product.name === product.name);
		if (existingProduct) {
			existingProduct.quantity++;
		} else {
			this.items.push({ product, quantity: 1 });
		}
		this.calculateTotal();
		this.renderCart();
	}

	removeFromCart(productName) {
		this.items = this.items.filter(item => item.product.name !== productName);
		this.calculateTotal();
		this.renderCart();
	}

	calculateTotal() {
		this.total = this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
		document.querySelector('.cart-shop__sum').textContent = this.total;
	}

	renderCart() {
		const cartList = document.querySelector('.list-shop');
		cartList.innerHTML = '';
		this.items.forEach(item => {
			const cartItem = document.createElement('div');
			cartItem.classList.add('list-shop__item');
			cartItem.innerHTML = `
				<div class="list-shop__image">
					<img src="${item.product.image}" alt="${item.product.name}">
				</div>
				<div class="list-shop__content">
					<h4 class="list-shop__title">
						<a class="list-shop__link-title">${item.product.name}</a>
					</h4>
					<div data-quantity class="list-shop__quantity quantity">
						<button data-quantity-minus type="button" class="quantity__button quantity__button--minus">-</button>
						<div class="quantity__input">
							<input data-quantity-value autocomplete="off" type="text" value="${item.quantity}">
						</div>
						<button data-quantity-plus type="button" class="quantity__button quantity__button--plus">+</button>
					</div>
					<div class="list-shop__price">Ціна: ${item.product.price * item.quantity} грн</div>
				</div>
				<div class="list-shop__actions actions-shop">
					<button class="actions-shop__button" data-name="${item.product.name}">X</button>
				</div>
			`;
			cartList.appendChild(cartItem);
		});
		this.attachRemoveEvent();
		this.attachQuantityEvents();
	}

	attachQuantityEvents() {
		const plusBtns = document.querySelectorAll('[data-quantity-plus]');
		const minusBtns = document.querySelectorAll('[data-quantity-minus]');

		plusBtns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				const productName = e.target.closest('.list-shop__item').querySelector('.list-shop__link-title').innerText;
				this.increaseQuantity(productName);
			});
		});

		minusBtns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				const productName = e.target.closest('.list-shop__item').querySelector('.list-shop__link-title').innerText;
				this.decreaseQuantity(productName);
			});
		});
	}

	increaseQuantity(productName) {
		const product = this.items.find(item => item.product.name === productName);
		if (product) {
			product.quantity++;
			this.calculateTotal();
			this.renderCart();
		}
	}

	decreaseQuantity(productName) {
		const product = this.items.find(item => item.product.name === productName);
		if (product && product.quantity > 1) {
			product.quantity--;
			this.calculateTotal();
			this.renderCart();
		} else if (product && product.quantity === 1) {
			this.removeFromCart(productName);
		}
	}

	attachRemoveEvent() {
		const removeBtns = document.querySelectorAll('.actions-shop__button');
		removeBtns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				const productName = e.target.getAttribute('data-name');
				this.removeFromCart(productName);
			});
		});
	}
}

class Shop {
	constructor(productList, productListSelector, cartListSelector, totalSumSelector) {
		this.productList = productList;
		this.productListSelector = productListSelector;
		this.cart = new Cart();
	}

	render() {
		const productListElement = document.querySelector(this.productListSelector);
		this.productList.forEach(product => {
		  	const productCard = document.createElement('div');
		  	productCard.classList.add('card-shop__column');
		  	productCard.innerHTML = `
				<div class="card-shop__image">
					<img src="${product.image}" alt="${product.name}">
				</div>
				<div class="card-shop__content">
					<h4 class="card-shop__title">
						<a class="card-shop__link-title">${product.name}</a>
					</h4>
					<div class="card-shop__price">Ціна: ${product.price} грн</div>
				</div>
				<div class="card-shop__actions actions-shop">
					<button class="actions-shop__button">Добавити у кошик</button>
				</div>
		  	`;
		  	productListElement.appendChild(productCard);
		  	productCard.querySelector('.actions-shop__button').addEventListener('click', () => {
				this.cart.addToCart(product);
		  	});
		});
	}
}

const productList = [
	new Product("Acer", 25000, 5, "./img/acer.jpg"),
	new Product("Apple MacBook", 19999, 3, "./img/macbook.jpg"),
	new Product("Lenovo", 21999, 8, "./img/lenovo.jpg"),
];

window.onload = () => {
	const shop = new Shop(
		productList,
		".shop__card", 
		".shop__cart",
		".cart-shop__sum"
	);
	shop.render();
};