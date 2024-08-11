"use strict"

// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function getNameSeason() {
	let season
	switch (monthNumber) {
		case 12: 
		case 1: 
		case 2:
			season = "Зима"
			break;
		case 3:
		case 4:
		case 5: 
			season = "Весна"
			break;
		case 6:
		case 7:
		case 8:
			season = "Літо"
			break;
		case 9:
		case 10:
		case 11:
			season = "Осінь"
			break;
		default:
			season = "Помилка ви ввели неправильно"
			break;
	}	
	return season
}

let monthNumber = parseInt(prompt('Введіть номер місяця від 1 до 12'))

document.write(`Пора року: ${getNameSeason()}`)