"use strict"

// Запропонувати користувачеві ввести ціну за одиницю та кількість одиниць для двох продуктів
let pricePerUnit1 = parseFloat(prompt('Введіть ціну для продукту 1', ''))
let numberOfUnits1 = parseInt(prompt('Введіть кількість одиниць для продукту 1', ''))

let pricePerUnit2 = parseFloat(prompt('Введіть ціну для продукту 2', ''))
let numberOfUnits2 = parseInt(prompt('Введіть кількість одиниць для продукту 2', ''))

//2. Робимо розрахунок вартості кожного з товарів
let costProduct1 = pricePerUnit1 * numberOfUnits1
let costProduct2 = pricePerUnit2 * numberOfUnits2

//3. Розраховуємо загальну вартість
let totalCost = costProduct1 + costProduct2

//4. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Продукт 1</th>
			<td>${costProduct1}</td>
		</tr>
		<tr>
			<th>Продукт 2</th>
			<td>${costProduct2}</td>
		</tr>
		<tr>
			<th>Загальна вартість</th>
			<td>${totalCost}</td>
		</tr>
	</table>
`)