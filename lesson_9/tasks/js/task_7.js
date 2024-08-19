"use strict"

// Дано масив цін.Змінити цей масив так, що на ціни товарів, які більші за 1000 грн.дати 30 % знижки.

if (confirm("Почати тестування?")) {
	let prices = [1200, 800, 500, 950, 3000, 1700, 600]; 
	let discountPrices = prices.map(price => {
		return price > 1000 ? price * 0.7 : price;
	});
	document.write(`${discountPrices}`)
}