"use strict"

/*
	Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. 
	Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара,
	при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 
*/

if (confirm("Почати тестування?")) {	
	
	class TMoney {
		constructor(dollars, exchangeRate) {
			this.dollars = dollars; 
			this.exchangeRate = exchangeRate;
		}

		addHryvnia(amountInHryvnia) {
			const dollarsToAdd = amountInHryvnia / this.exchangeRate;
			this.dollars += dollarsToAdd;
		}
  
		subtractHryvnia(amountInHryvnia) {
			const dollarsToSubtract = amountInHryvnia / this.exchangeRate;
			this.dollars -= dollarsToSubtract;
		}

		findExchangeRateForIncrease(increaseInHryvnia) {
			const newExchangeRate = increaseInHryvnia / this.dollars;
			return newExchangeRate;
		}
  
		getDollars() {
			return this.dollars;
		}

		setExchangeRate(newRate) {
			this.exchangeRate = newRate;
		}
  
		getHryvniaEquivalent() {
			return this.dollars * this.exchangeRate;
		}
  
		toString() {
			return `Сума: $${this.dollars.toFixed(2)}, курс: ${this.exchangeRate.toFixed(2)} UAH/USD`;
		}
  	}
 
	const money = new TMoney(100, 38.5); 
  
	console.log(money.toString()); 

	money.addHryvnia(3850);
	console.log(money.toString());
  
	money.subtractHryvnia(1925);
	console.log(money.toString());
  
	const newRate = money.findExchangeRateForIncrease(100);
	console.log(`Новий курс долара для збільшення на 100 грн: ${newRate.toFixed(2)} UAH/USD`);

	money.setExchangeRate(40);
	console.log(money.toString());
  
	console.log(`Еквівалент у гривнях: ${money.getHryvniaEquivalent()} UAH`);

}