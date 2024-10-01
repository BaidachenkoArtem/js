"use strict"
/*
	Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
*/

if (confirm("Почати тестування?")) {

	//=============== Не мій варіант1 ===============
	
	class TBankomat {
		constructor(bills) {
			this.bills = {
				5: bills[5] || 0,
				10: bills[10] || 0,
				20: bills[20] || 0,
				50: bills[50] || 0,
				100: bills[100] || 0,
				200: bills[200] || 0
			};
		}
	 
		
		getMaxAmount() {
			let maxAmount = 0;
			for (const [nominal, quantity] of Object.entries(this.bills)) {
				maxAmount += nominal * quantity;
			}
			return maxAmount;
		}
	 
		getMinAmount() {
		  	for (const [nominal, quantity] of Object.entries(this.bills)) {
				if (quantity > 0) {
					return nominal;
				}
		  	}
		  	return 0; 
		}
	 
	
		withdrawAmount(amount) {
			let remainingAmount = amount;
			let withdrawnBills = {};
	 
			const billDenominations = Object.keys(this.bills).map(Number).sort((a, b) => b - a);
	 
		  	for (const nominal of billDenominations) {
			const availableBills = this.bills[nominal];
				if (availableBills > 0) {
					const neededBills = Math.floor(remainingAmount / nominal);
					const usedBills = Math.min(neededBills, availableBills);
	 
					if (usedBills > 0) {
						withdrawnBills[nominal] = usedBills;
						this.bills[nominal] -= usedBills;
						remainingAmount -= usedBills * nominal;
					}
			 	}
		  	}
	 
		  	if (remainingAmount === 0) {
				console.log(`Видано суму: ${amount}. Купюри:`, withdrawnBills);
				return withdrawnBills;
		  	} else {
				console.log(`Неможливо видати суму: ${amount}. Брак купюр.`);
				return null;
		 	}
		}
	}
	 

	const atm = new TBankomat({
		5: 10,
		10: 10,
		20: 10,
		50: 10,
		100: 5,
		200: 2
	});
	 
	console.log("Максимальна сума, яку може видати банкомат:", atm.getMaxAmount());
	console.log("Мінімальна сума, яку може видати банкомат:", atm.getMinAmount());
	
	atm.withdrawAmount(380); 
	atm.withdrawAmount(5000);
 
}