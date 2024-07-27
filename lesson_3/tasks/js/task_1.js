"use strict"

// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести на екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

//Крок 0. Позначення величин
// numberKidsCandies1 - кількість цукерок у 1 дитини
// numberKidsCandies2 - кількість цукерок у 2 дитини
// numberKidsResult - результат
// oneNameKids - і'мя 1 дитини
// twoNameKids - і'мя 2 дитини

//Крок 1. Введення величин
let oneNameKids = prompt('Як звати дитину?', 'Макс')
let numberKidsCandies1 = parseInt(prompt(`Скільки цукерок має ${oneNameKids}?`, '5'))
let twoNameKids = prompt('Як звати дитину?', 'Юля')
let numberKidsCandies2 = parseInt(prompt(`Скільки цукерок має ${twoNameKids}?`, '2'))
// let numberKidsResult

//Крок 2. Обчислення
if (numberKidsCandies1 > numberKidsCandies2)
	alert(`Більше цукерок має ${oneNameKids}`)
else if (numberKidsCandies1 < numberKidsCandies2)
	alert(`Більше цукерок має ${twoNameKids}`)
else if (numberKidsCandies1 === numberKidsCandies2)
	alert('Кількість цукерок однакова')