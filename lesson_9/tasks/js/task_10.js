"use strict"

// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

if (confirm("Почати тестування?")) {
	let prices = [1200, 800, 1500, 950, 2000];
	let taxRate = 0.2;
	let taxes = prices.map(price => price * taxRate);

	document.write(`
		<div>Дано масив: ${prices}</div>
		<div>Результат: ${taxes}</div>
	`)
}