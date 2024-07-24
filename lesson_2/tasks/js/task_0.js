"use strict"

//1. Вводимо необхідні значення

const a = 10
const b = 2
const c = 1

// const a = parseInt(prompt('Число a дорівнює', '10'))
// const b = parseInt(prompt('Число b дорівнює', '2'))
// const c = parseInt(prompt('Число c дорівнює', '1'))

//2. Обчислюємо результат
let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a/-b)
		
//3. Виводимо результат
document.write(`
	<table border='2px'>
		<tr>
			<th>Шуканий результат</th>
			<th>Отриманий результат</th>
		</tr>
		<tr>
			<th>S1</th>
			<td>${s1}</td>
		</tr>
		<tr>
			<th>S2</th>
			<td>${s2}</td>
		</tr>
		<tr>
			<th>S3</th>
			<td>${s3}</td>
		</tr>
		<tr>
			<th>S4</th>
			<td>${s4}</td>
		</tr>
	</table>
`)