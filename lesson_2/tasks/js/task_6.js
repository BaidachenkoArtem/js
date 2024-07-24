"use strict"

//1. Вводимо необхідні значення (які користувач нам повідомляє)
				
const price1 = parseFloat(prompt('Введіть значення', '10'));
const quantity1 = parseFloat(prompt('Введіть значення', '3'));
const price2 = parseFloat(prompt('Введіть значення', '15'));
const quantity2 = parseFloat(prompt('Введіть значення', '4'));
const price3 = parseFloat(prompt('Введіть значення', '20'));
const quantity3 = parseFloat(prompt('Введіть значення', '5'));

//2. Розраховуємо загальну вартість для кожного товару
const total1 = price1 * quantity1;
 const total2 = price2 * quantity2;
 const total3 = price3 * quantity3;

//3. Розраховуємо загальну вартість всіх товарів
const grandTotal = total1 + total2 + total3;

//4. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Загальна вартість першого товару</th>
			<td>${total1}</td>
		</tr>
		<tr>
			<th>Загальна вартість другого товару</th>
			<td>${total2}</td>
		</tr>
		<tr>
			<th>Загальна вартість третього товару</th>
			<td>${total3}</td>
		</tr>
		<tr>
			<th>Загальна вартість всіх товарів</th>
			<td>${grandTotal}</td>
		</tr>
	</table>
`)