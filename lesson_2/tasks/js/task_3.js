"use strict"

//1. Вводимо необхідні значення (які користувач нам повідомляє)
const price = parseFloat(prompt('Ціна', '300'));
const quantity = parseInt(prompt('Кількість', '2'));

//2. Знаходимо загальну вартість
const total = price * quantity

//3. Знаходимо ПДВ (5% від загальної вартості)
const vat = total * 0.05
	
//4. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Загальну вартість</th>
			<td>${total}</td>
		</tr>
		<tr>
			<th>ПДВ</th>
			<td>${vat}</td>
		</tr>
	</table>
`)