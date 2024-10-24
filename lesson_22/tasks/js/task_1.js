"use strict"

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
function findStringsWithoutNumbers() {
	const arrayStrings = ["Hello World", "JavaScript 2024", "NoNumbersHere", "12345", "TestString1", "CSS and HTML", "world123", "trtr", "work"]
	const result = arrayStrings.filter((str) => /\d/.test(str)) // Фільтруємо рядки, що НЕ містять цифр
	console.log(result)
}
findStringsWithoutNumbers()
// ==================================================
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
function findStringsWithVowelsNum() {
	const arrayStrings = ["Hello World", "JavaScript 2024", "NoNumbersHere", "12345", "TestString1", "CSS and HTML", "world123", "trtr", "work"]
	const result = arrayStrings.filter((str) => !/\d/.test(str))
	console.log(result)
}
findStringsWithVowelsNum()
// ==================================================
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
function findStringsWithVowels() {
	const arrayStrings = ["Hello World", "JavaScript 2024", "NoNumbersHere", "12345", "TestString1", "CSS and HTML", "world123", "trtr", "work"]
	const result = arrayStrings.filter((str) => /[aeiouAEIOU]/.test(str))
	console.log(result)
}
findStringsWithVowels()
// ==================================================
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
function findStringsWithVowels1() {
	const arrayStrings = ["Hello World", "JavaScript 2024", "NoNumbersHere", "12345", "TestString1", "CSS and HTML", "world123", "trtr", "work"]
	const result = arrayStrings.filter((str) => !/[aeiouAEIOU]/.test(str))
	console.log(result)
}
findStringsWithVowels1()
// ==================================================
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
function findStringsWithVowels2() {
	const arrayStrings = ["Hello World", "JavaScript 2024", "NoNumbersHere", "12345", "TestString1", "CSS and HTML", "world123", "trtr", "work"]
	const result = arrayStrings.filter((str) => /(1|3)/.test(str))
	console.log(result)
}
findStringsWithVowels2()
// ==================================================
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
function lineFindStringsText() {
	const text =
  	'You can choose between 3 different distances: 70, 100 or 120km, divided into 3 stages.'
	const result = text.match(/\d+/g)
	console.log(result)
}
lineFindStringsText()
// ==================================================
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
function lineFindStringsText1() {
	const text =
  	'You can choose between 3 different distances: 70, 100 or 120km, divided into 3 stages.'
	const result = text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
	console.log(result)
}
lineFindStringsText1()
// ==================================================
// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
function lineFindStringsText2() {
	const text =
  	'You can choose between 3 different distances: 70, 100 or 120km, divided into 3 stages.'
	const result = text.split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/).filter((el) => el.trim())
	console.log(result)
}
lineFindStringsText2()
// ==================================================
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
function lineFindStringsText3() {
	const text = 
  	'You can choose between 3 different distances: 70, 100 or 120km, divided into 3 stages.'
	const result = /\b\d{2}\.\d{2}\.\d{4}\b/.test(text)
	console.log(result)
}
lineFindStringsText3()
// ==================================================
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
function lineFindStringsTextNum() {
	const text = 
		'You can choose between 3 different distances: 70, 100 or 120km, divided into 3 stages.'
	
	if (/\b\d{2}\b/.test(text)) {
		const elements = text.match(/\b\d{2}\b/g)
		console.log(elements)
		const result = elements.length
		console.log(result)
	} else console.log('таких немає')
}
lineFindStringsTextNum()
// ==================================================
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
function lineFindStringsTextNum1() {
	const text = 
		'Дякуємо за користування нашими послугами! Для завершення оформлення замовлення вам необхідно здійснити оплату. Сума до оплати: 1500 грн. Введіть номер картки наприклад: «4142-3433-2323-3434»'
	
	if (/\b\d{4}-\d{4}-\d{4}-\d{4}\b/.test(text)) {
		const elements = text.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
		console.log(elements)
		const result = elements.length
		console.log(result)
	} else console.log('таких немає')
}
lineFindStringsTextNum1()
// ==================================================
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
function findStringsSite() {
	const text = 'www.homesite.gov.ua'
	const text2 = 'rozetka.com.ua'
	const result = /.gov\b/.test(text)
	console.log(result)
	const result2 = /.gov\b/.test(text2)
	console.log(result2)
}
findStringsSite()
// ==================================================
// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
function findStringsMessage() {
	const text =
	  'Шановні користувачі! У 2020 році ми впровадили нові послуги, у 2022 році було розширено функціонал, а в 2023 ми додали ще більше можливостей. Очікуйте оновлення у 2024 році.'
	if (/\b(202[2-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})\b/.test(text)) {
	  const result = text.match(/\b(202[2-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})\b/g)
	  console.log(result)
	} else console.log('таких немає')
}
findStringsMessage()
// ==================================================
// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
function checkUkrainianPhone() {
	const phoneNumber = document.getElementById('phoneInput').value;
	const phonePattern = /^\+38\d{9}$/;
	if (phonePattern.test(phoneNumber)) {
		document.getElementById('result').innerHTML = "Це український номер телефону!";
		document.getElementById('result').style.color = "green";
	} else {
		document.getElementById('result').innerHTML = "Це не український номер телефону!";
		document.getElementById('result').style.color = "red";
	}
}
// ==================================================
// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
function replaceSpaceWithHyphen() {
	const userName = document.getElementById('nameInput').value;
	const modifiedName = userName.replace(' ', '-');
	document.getElementById('result1').innerHTML = "Результат: " + modifiedName;
}
// ==================================================
// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
function replaceDateFormat() {
	const date = document.getElementById('dateInput').value;
	const formattedDate = date.replace(/\./g, '/');
	document.getElementById('result2').innerHTML = "Нова дата: " + formattedDate;
}
// ==================================================
// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
function checkWeekend() {
	const dayInput = document.getElementById('dayInput').value.toLowerCase();
	const daysMap = {
		'sun': 0,
		'mon': 1,
		'tue': 2,
		'wed': 3,
		'thu': 4,
		'fri': 5,
		'sat': 6
	};
	let dayNumber;

	if (!isNaN(dayInput) && dayInput >= 0 && dayInput <= 6) {
		dayNumber = Number(dayInput);
	} else if (daysMap.hasOwnProperty(dayInput)) {
		dayNumber = daysMap[dayInput];
	} else {
		document.getElementById('result3').innerHTML = "Некоректне введення!";
		document.getElementById('result3').style.color = "red";
		return;
	}

	if (dayNumber === 0 || dayNumber === 6) {
		document.getElementById('result3').innerHTML = "Це вихідний день!";
		document.getElementById('result3').style.color = "green";
	} else {
		document.getElementById('result3').innerHTML = "Це робочий день!";
		document.getElementById('result3').style.color = "blue";
	}
}