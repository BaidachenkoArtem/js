"use strict"

//1. Вводимо необхідні значення (які користувач нам повідомляє)
const dataNumber = parseInt(prompt('Дата народження', '1998'))
const yearsNumber = parseInt(prompt('Поточний рік', '2024'))

//2. Обчислюємо результат
let diffNumber = yearsNumber - dataNumber
		
//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Кількість років</th>
			<td>${diffNumber}</td>
		</tr>
	</table>
`)