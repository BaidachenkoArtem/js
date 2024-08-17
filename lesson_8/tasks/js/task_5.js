"use strict"

// Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

let userEvaluationsStudents = [5, 2, 4, 3, 5, 2, 4];
let twoValue = 0
let numberGoodGrades = 0
let numberGradesBelowAverage = 0

for (let i = 0; i < userEvaluationsStudents.length; i++) {
	switch (userEvaluationsStudents[i]) {
		case 2:
			twoValue+= 1
			break;
		case 3:
			numberGradesBelowAverage+= 1
			break;
		case 4:
		case 5:
			numberGoodGrades+= 1
			break;
		default:
			break;
	}	
}

document.write(`
	<div>Кількість двійок ${twoValue}</div>
	<div>нижче середнього ${numberGradesBelowAverage}</div>
	<div>Кількість хороших оцінок (добре, відмінно) ${numberGoodGrades}</div>
	`)