"use strict"

//1. Вводимо необхідні значення (які користувач нам повідомляє)
const lenghtСentimeters = parseFloat(prompt('Довжина у сантиметрах', '500'));
					 
//2. Знаходимо скільки це метрів
const meters = lenghtСentimeters / 100;

//3. Знаходимо скільки це кілометрів
const kilometrs = lenghtСentimeters / 10000;

//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Метрів</th>
			<td>${meters}</td>
		</tr>
		<tr>
			<th>Кілометрів</th>
			<td>${kilometrs}</td>
		</tr>
	</table>
`)