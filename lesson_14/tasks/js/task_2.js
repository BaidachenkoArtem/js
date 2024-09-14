"use strict"

// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

if (confirm("Почати тестування?")) {

	function getYearMonthDay(object, N) {
		return Math.floor(( object.month - 1 + N) / 12) + object.year
	}
	
	let date = {
		day: 14,
		month: 9,
		year: 2024
	}

	console.log(getYearMonthDay(date, 90))

}