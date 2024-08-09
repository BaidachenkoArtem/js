"use strict"
// З клавіатури вводиться перша літера розширення файлу («html», «doc», «jpeg», «mp3», «xls»). Вивести на екран назву програми, яка може відкрити цей тип файлу.

//Крок 1. Введення необхідних даних
let result
let oneLetter = prompt('Введіть тип розширення файлу')

//Крок 2. Обчислення
switch (oneLetter) {
	case "html":
		result = "Google Chrome"		
		break;
	case "doc":
		result = "Microsoft Word"		
		break;
	case "jpeg":
		result = "Paint"		
		break;
	case "mp3":
		result = "AIMP"		
		break;
	case "xls":
		result = "Microsoft Excel"		
		break;
	default:
		result = "unknown"
		break;
}

//Крок 3. Виведення результатів

if (result === "unknown")
	document.write(`Невідоме розширення файлу`)
else
	document.write(`Програма, яка відкриває цей тип файлу ${result}`)