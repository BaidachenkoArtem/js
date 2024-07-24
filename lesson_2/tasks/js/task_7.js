"use strict"

//1. Вводимо необхідні значення (які користувач нам повідомляє)
let maxDay = 6
let minDay = 0
let maxMonth = 12
let minMonth = 1

//2. Обчислюємо результат
let sumDay = minDay + Math.floor(Math.random()*(maxDay-minDay+1)) 
let sumMonth = minDay + Math.floor(Math.random()*(maxDay-minDay+1)) 

//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Номер дня</th>
			<td>${sumDay}</td>
		</tr>
		<tr>
			<th>Номер місяця</th>
			<td>${sumMonth}</td>
		</tr>
	</table>
`)