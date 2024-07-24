"use strict"

//1. Вводимо необхідні значення
const screenWidth = window.innerWidth
const numberOfElements = 5

//2. Обчислюємо результат
let elementWidth = screenWidth / numberOfElements;
		
//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Ширина елементів</th>
			<td>${elementWidth}</td>
		</tr>
	</table>
`)