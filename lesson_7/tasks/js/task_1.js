"use strict"

// Створити функцію, яка за номером місяця повертає його назву.

function getNameMonth() {
	switch (monthNumber) {
		case 1: monthNumber = "Січень"
			break;
		case 2: monthNumber = "Лютий"
			break;
		case 3: monthNumber = "Березень"
			break;
		case 4: monthNumber = "Квітень"
			break;
		case 5: monthNumber = "Травень"
			break;
		case 6: monthNumber = "Червень"
			break;
		case 7: monthNumber = "Липень"
			break;
		case 8: monthNumber = "Серпень"
			break;
		case 9: monthNumber = "Вересень"
			break;
		case 10: monthNumber = "Жовтень"
			break;
		case 11: monthNumber = "Листопад"
			break;
		case 12: monthNumber = "Грудень"
			break;
		default: monthNumber = "Вказаного місяця не існує"
			break;
	}
	return monthNumber
}
let monthNumber = parseInt(prompt('Введіть номер місяця від 1 до 12'))

document.write(`Місяць: ${getNameMonth()}`)