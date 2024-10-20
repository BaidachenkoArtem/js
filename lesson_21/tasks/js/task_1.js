"use strict"

/*
	Умова. Створити клас Client
*/

class Client {
	constructor(id, name, balance) {
		this.id = id;  
		this.name = name;  
		this.balance = balance;  
	}
 
	addMoney(amount) {
	  	if (amount > 0) {
			this.balance += amount;
			console.log(`${amount} додано до рахунку.`);
	  	} else {
			console.log('Сума для додавання повинна бути більше 0.');
	  	}
	}
 
	withdrawMoney(amount) {
	  	if (amount > 0 && amount <= this.balance) {
			this.balance -= amount;
			console.log(`${amount} знято з рахунку.`);
	  	} else {
			console.log('Недостатньо коштів або неправильна сума.');
	  	}
	}
 

	toString() {
		return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance}`;
	}
}

class GoldenClient extends Client {
	constructor(id, name, balance, creditLimit, creditRate) {
	  super(id, name, balance);  
	  this.creditLimit = creditLimit;
	  this.creditRate = creditRate;
	  this.creditUsed = 0; 
	}
 
	withdrawMoney(amount) {
	  	if (amount > 0) {
		if (amount <= this.balance) {
			this.balance -= amount;
			console.log(`${amount} знято з рахунку.`);
		} else if (amount <= this.balance + this.creditLimit - this.creditUsed) {
			const creditNeeded = amount - this.balance;
			this.creditUsed += creditNeeded;
			this.balance = 0;
			console.log(`${amount} знято, з яких ${creditNeeded} з кредиту.`);
		} else {
			console.log('Недостатньо коштів на рахунку або кредитному ліміті.');
		}
	  	} else {
			console.log('Неправильна сума.');
	  	}
	}
 
	
	calculatePenalty() {
		const penalty = this.creditUsed * this.creditRate / 100;
		return penalty;
	}
 
	
	toString() {
		return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance}, Кредитний ліміт: ${this.creditLimit}, Використано кредиту: ${this.creditUsed}`;
	}
}

let client1 = new Client(1, "Іван Іванов", 10000);
console.log(client1.toString());
client1.addMoney(5000);
client1.withdrawMoney(3000);
console.log(client1.toString());
 
let goldenClient = new GoldenClient(2, "Петро Петренко", 5000, 10000, 5);
console.log(goldenClient.toString());
goldenClient.withdrawMoney(12000);
console.log(goldenClient.toString());
console.log("Пеня: " + goldenClient.calculatePenalty());
