"use strict"


// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
	

if (confirm("Почати тестування?")) {	

	const shotingRange = {
	
		fieldWithRabit: [1, 0, 1, 0, 1, 1, 0],

		shot: function (position) {
			if(this.fieldWithRabit[position] === 1){
				alert(`Ви влучили`)
				this.fieldWithRabit[position] = 'X'
			}
			else alert(`Не влучили`)
		},
		userShot: function () {
			let shots = 5
			while (shots > 0) {
				let userShot = parseInt(prompt(`Введіть позицію для пострілу від 0 до 6. Пострілів залишилося ${shots}`))
				this.shot(userShot)
				shots--
			}
		
			this.showFieldWithRabits()
		},
		showFieldWithRabits: function () {
			document.write(`<div> ${this.fieldWithRabit.join(' | ')} </div>`)
		}
	}
	
	
	shotingRange.showFieldWithRabits()
	shotingRange.userShot()
	 
}