"use strict"

//Знайти суму, добуток та частку двох дійсних чисел
//1. Вводимо необхідні значення (які користувач нам повідомляє)
let oneNumber = parseInt(prompt('Перше число', '10'))
let twoNumber = parseInt(prompt('Друге число', '2'))

//2. Обчислюємо результат
let sum = oneNumber + twoNumber
let diff = oneNumber - twoNumber
let product = oneNumber * twoNumber
let division = oneNumber / twoNumber

//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Сума</th>
			<td>${sum}</td>
		</tr>
		<tr>
			<th>Різниця</th>
			<td>${diff}</td>
		</tr>
		<tr>
			<th>Множення</th>
			<td>${product}</td>
		</tr>
		<tr>
			<th>Ділення</th>
			<td>${division}</td>
		</tr>
	</table>
`)