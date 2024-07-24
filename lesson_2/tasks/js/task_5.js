"use strict"

//1. Вводимо необхідні значення (які користувач нам повідомляє)
const totalSeconds = parseInt(prompt('Введіть значення', ''));
					 
//2. Знаходимо скільки це годин
const hours = Math.floor(totalSeconds / 3600);

//3. Знаходимо скільки це хвилин
const minutes = (Math.floor(totalSeconds % 3600) / 60);

//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>Години</th>
			<td>${hours}</td>
		</tr>
		<tr>
			<th>Хвилини</th>
			<td>${minutes}</td>
		</tr>
	</table>
`)