"use strict"
/*
	Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
*/

if (confirm("Почати тестування?")) {

	class TBankomat {
		constructor(bills) {
			this.bills = bills;
		}
  
		getMaxSum() {
			let totalSum = 0;
			for (let denomination in this.bills) {
				totalSum += denomination * this.bills[denomination];
			}
			return totalSum;
		}
  
		getMinSum() {
			for (let denomination of Object.keys(this.bills).sort((a, b) => a - b)) {
				if (this.bills[denomination] > 0) {
					return parseInt(denomination);
				}
			}
			return 0;
		}
  
		withdraw(amount) {
			let remainingAmount = amount;
			let result = {};
  
			const sortedDenominations = Object.keys(this.bills).sort((a, b) => b - a);
  
			for (let denomination of sortedDenominations) {
				let numOfBills = Math.min(Math.floor(remainingAmount / denomination), this.bills[denomination]);
  
				if (numOfBills > 0) {
					result[denomination] = numOfBills;
					remainingAmount -= denomination * numOfBills;
				}
			}
  
			if (remainingAmount > 0) {
				console.log("Неможливо видати точну суму.");
				return null;
			}
  
			for (let denomination in result) {
				this.bills[denomination] -= result[denomination];
			}
  
			return result;
		}
  
		toString() {
			let output = "Поточний стан банкомата:\n";
			for (let denomination of Object.keys(this.bills).sort((a, b) => b - a)) {
				output += `${denomination} грн: ${this.bills[denomination]} шт.\n`;
			}
			return output;
		}
  	}
  
 	let bills = {
		5: 10,
		10: 10,
		20: 10,
		50: 10,
		100: 10,
		200: 10
  	};
  
  	let bankomat = new TBankomat(bills);
  
  	console.log("Максимальна сума:", bankomat.getMaxSum());
  	console.log("Мінімальна сума:", bankomat.getMinSum());
  	console.log(bankomat.toString());
  
  	let result = bankomat.withdraw(385);
 	if (result) {
		console.log("Знято:", result);
  	}
  
  console.log("Максимальна сума після зняття:", bankomat.getMaxSum());
  console.log(bankomat.toString()); 
  
}