"use strict"
// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
//Крок 0. Позначення величин
// userAge - вік людини
// userChildKinderGarten - дитинa у садочку
// userSchoolBoy - школяр
// userStudent - студент
// userEmployee - працівник
// userPensioner - пенсіонер

//Крок 1. Введення необхідних даних
const userAge = parseInt(prompt('Введіть вік людини', ''))
let userChildKinderGarten = 6
let userSchoolBoy = 17
let userStudent = 22
let userEmployee = 60
let userPensioner = 65

//Крок 2. Обчислення
if (userAge <= userChildKinderGarten)
	alert('Дитина у садочку')
else if (userAge <= userSchoolBoy)
	alert('Школяр')
else if (userAge <= userStudent)
	alert('студент')
else if (userAge <= userEmployee)
	alert('працівник')
else if (userAge >= userPensioner)
	alert('Пенсіонер')
