"use strict"
// Умова. Гра в кості. Правила гри:
// 1. користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, чи не робити другий кидок);</p>
// 2. якщо випадає парне число, то кількість балів збільшується на це число;
// 3. якщо випадає непарне число, то кількість балів зменшується на це число;
// 4. виграє той, у кого кількість балів більша.

alert('Гра починається! Спроба №1')
alert('Кубик кидає перший ігрок')

let oneUserScore = 0
let oneUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)

alert(`Кубик першого ігрока: ${oneUserCube}`)

if (oneUserCube % 2 === 0) {
	oneUserScore += oneUserCube
	alert(`На рахунок першого ігрока зараховано очків - ${oneUserCube}`)
} else {
	oneUserScore -= oneUserCube
	alert(`З рахунку першого ігрока знято очків - ${oneUserCube}`)
}

alert('Кубик кидає другий ігрок')

let twoUserScore = 0
let twoUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)

alert(`Кубик другого ігрока: ${twoUserCube}`)

if (twoUserCube % 2 === 0) {
	twoUserScore += twoUserCube
	alert(`На рахунок другого ігрока зараховано очків - ${twoUserCube}`)
} else {
	twoUserScore -= twoUserCube
	alert(`З рахунку другого ігрока знято очків - ${twoUserCube}`)
}

const continueOneUser = confirm('Ігрок №1 Бажає спробувати ще один раз?')
const continueTwoUser = confirm('Ігрок №2 Бажаєте спробувати ще один раз?')

 if (continueOneUser || continueTwoUser)
 	alert('Спроба №2')

if (continueOneUser) {
	alert('Кубик кидає перший ігрок')
	oneUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)
	alert(`Кубик першого ігрока: ${oneUserCube}`)
	if (oneUserCube % 2 === 0) {
		oneUserScore += oneUserCube
		alert(`На рахунок першого ігрока зараховано очків - ${oneUserCube}`)
	}
	else {
		oneUserScore -= oneUserCube
		alert(`З рахунку першого ігрока знято очків - ${oneUserCube}`)
	}
}

if (continueTwoUser) {
	alert('Кубик кидає другий ігрок')
	twoUserCube = Math.floor(Math.random() * (6 - 1 + 1) + 1)
	alert(`Кубик другого ігрока: ${twoUserCube}`)
	if (twoUserCube % 2 === 0) {
		twoUserScore += twoUserCube
		alert(`На рахунок другого ігрока зараховано очків - ${twoUserCube}`)
	}
	else {
		twoUserScore -= twoUserCube
		alert(`З рахунку другого ігрока знято очків - ${twoUserCube}`)
	}
}

let resultGame 

if (oneUserScore > twoUserScore)
	resultGame = 'Переміг перший ігрок'
else if (twoUserScore > oneUserScore)
	resultGame = 'Переміг другий ігрок'
else if (oneUserScore === twoUserScore)
	resultGame = 'Рахунки ігроків однакові'

document.write(`Підсумки гри: ${resultGame}`)