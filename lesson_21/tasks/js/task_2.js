"use strict"

/*
	Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
	
	●	Вивести всіх простих клієнтів;
	●	Вивести всіх клієнтів GoldenClient;
	●	Знайти сумарну кількість грошей на рахунку;

*/

class Client {
	constructor(id, pib, balance) {
		this.id = id;         // ID клієнта
		this.pib = pib;       // ПІБ клієнта
		this.balance = balance;  // Баланс на рахунку клієнта
	}
 
	addMoney(amount) {
		this.balance += amount;
	}
 
	withdrawMoney(amount) {
	  	if (amount <= this.balance) {
			this.balance -= amount;
	  	} else {
			console.log(`Недостатньо коштів на рахунку`);
	  	}
	}
 
	toString() {
		return `ID: ${this.id}, ПІБ: ${this.pib}, Баланс: ${this.balance}`;
	}
 }
 
class GoldenClient extends Client {
	constructor(id, pib, balance, creditLimit, creditRate) {
	  super(id, pib, balance); 
	  this.creditLimit = creditLimit;
	  this.creditRate = creditRate; 
	  this.usedCredit = 0; 
	}
 

	addMoney(amount) {
	  	if (this.usedCredit > 0) {
			let debtToCover = Math.min(amount, this.usedCredit);
			this.usedCredit -= debtToCover;
			amount -= debtToCover;
	  	}
	  	super.addMoney(amount);
	}
 
	// Метод для зняття грошей з урахуванням кредиту
	withdrawMoney(amount) {
	  	if (amount <= this.balance) {
			super.withdrawMoney(amount);
	  	} else {
			let remainingAmount = amount - this.balance;
			if (remainingAmount <= this.creditLimit - this.usedCredit) {
				this.balance = 0;
				this.usedCredit += remainingAmount;
			} else {
				console.log(`Перевищено кредитний ліміт`);
			}
	  	}
	}
 
	calculateCreditPenalty() {
		return this.usedCredit * this.creditRate / 100;
	}
 
	toString() {
		return `${super.toString()}, Кредитний ліміт: ${this.creditLimit}, Використано кредиту: ${this.usedCredit}`;
	}
}

class Bank {
	constructor() {
		this.clients = [];
	}
 
	addClient(client) {
		this.clients.push(client);
	}
 
	showSimpleClients() {
	  	console.log("Прості клієнти:");
	  	this.clients.forEach(client => {
			if (!(client instanceof GoldenClient)) {
				console.log(client.toString());
			}
	  	});
	}
 
	showGoldenClients() {
	  	console.log("Golden клієнти:");
	  	this.clients.forEach(client => {
			if (client instanceof GoldenClient) {
				console.log(client.toString());
			}
	  	});
	}
 
	totalBalance() {
		let total = this.clients.reduce((sum, client) => sum + client.balance, 0);
		console.log(`Сумарна кількість грошей на рахунках: ${total} грн.`);
		return total;
	}
}
 

let bank = new Bank();
 
let client1 = new Client(1, "Іван Іванов", 10000);
let client2 = new Client(2, "Олег Олегов", 15000);
let goldenClient1 = new GoldenClient(3, "Марія Петренко", 5000, 10000, 3);
let goldenClient2 = new GoldenClient(4, "Анна Ковальчук", 8000, 15000, 5);

bank.addClient(client1);
bank.addClient(client2);
bank.addClient(goldenClient1);
bank.addClient(goldenClient2);
 
bank.showSimpleClients(); 
bank.showGoldenClients();
bank.totalBalance();