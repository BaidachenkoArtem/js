"use strict"

//1. Вводимо необхідні значення (які користувач нам повідомляє)
let amount = parseFloat(prompt('Введіть розмір заробітної плати', ''))
let sizeSubsistenceMinimum = parseFloat(prompt('Введіть розмір прожиткового мінімуму', ''))

//2. Обчислюємо результат
let amountSocial = sizeSubsistenceMinimum - amount;

//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Розмір соціальної допомоги</th>
			<td>${amountSocial}</td>
		</tr>
	</table>
`)