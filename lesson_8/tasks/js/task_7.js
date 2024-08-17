"use strict"

// Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:

const paymentsList = [100, 200, 150, 300, 250, 400, 100, 150, 200, 250, 300, 350]
function getSumInRange(paymentsList, startIndex = 1, endIndex = 12, indexStep = 1) {
  let sum = 0
  for (let i = startIndex - 1; i < endIndex; i += indexStep) {
   sum += paymentsList[i]
  }
  return sum
}
// 1)	за весь рік;
let sumPerYear = getSumInRange(paymentsList, 1, 12)	
// 2)	у першій половині року;
let firstYear = getSumInRange(paymentsList, 1,6)
// 3)	у другій половині року;
let secondYear = getSumInRange(paymentsList, 7,12)
// 4)	за літо;
let forSummer = getSumInRange(paymentsList, 6,8)
// 5)	за ІІ квартал;
let orSecondQuarter = getSumInRange(paymentsList, 4,6)
// 6)	за парні місяці (з парними номерами);
let evenMonths = getSumInRange(paymentsList, 2,4,6,8,10,12)
// 7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
let monthsBeginningSeason = getSumInRange(paymentsList, 12, 3, 6, 9)

document.write(`
	Сумарна кількість грошей за весь рік: ${sumPerYear}<br>
	Сумарна кількість грошей у першій половині року: ${firstYear}<br>
	Сумарна кількість грошей у другій половині року: ${secondYear}<br>
	Сумарна кількість грошей за літо: ${forSummer}<br>
	Сумарна кількість грошей за ІІ квартал: ${orSecondQuarter}<br>
	Сумарна кількість грошей за парні місяці: ${evenMonths}<br>
	Сумарна кількість грошей за місяці, які є початковими у сезоні: ${monthsBeginningSeason}	
`)