"use strict"

// Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з’ясувати до якої категорії він відноситься
// (відмінник, двійочник(має хоча би одну двійку), хорошист(оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

const subjectsValue = parseInt(prompt("Скільки предметів"))

function getMinGrades(gradesValue) {
	let min = gradesValue[0] 
	for (let i = 1; i < gradesValue.length; i++) {
	  if (gradesValue[i] < min) min = gradesValue[i]
	}
	return min
}

function getCategory(gradesValue) {
	const minScore = getMinGrades(gradesValue)
	let category
	switch (minScore) {
   	case 1:
   	case 2:
   	  category = 'Двійочник'
   	  break
   	case 3:
   	  category = 'Трійочник'
   	  break
   	case 4:
   	  category = 'Хорошист'
   	  break
   	case 5:
   	  category = 'Відмінник'
   	  break
   	default:
   	  throw new Error('Такої оцінки не може бути')
	}
	return category
}

const category = getCategory([4, 5, 5, 5, 4])
document.write(`Категорія: ${category}`)
