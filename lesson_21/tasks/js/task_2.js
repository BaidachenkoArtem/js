"use strict"

/*
	Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
	
	●	Вивести всіх простих клієнтів;
	●	Вивести всіх клієнтів GoldenClient;
	●	Знайти сумарну кількість грошей на рахунку;

*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Клас Client
class Client {
	constructor(id, pib, balance) {
	  this.id = id;         // ID клієнта
	  this.pib = pib;       // ПІБ клієнта
	  this.balance = balance;  // Баланс на рахунку клієнта
	}
 
	// Метод для додавання грошей на рахунок
	addMoney(amount) {
	  this.balance += amount;
	}
 
	// Метод для зняття грошей з рахунку
	withdrawMoney(amount) {
	  if (amount <= this.balance) {
		 this.balance -= amount;
	  } else {
		 console.log(`Недостатньо коштів на рахунку`);
	  }
	}
 
	// Метод для відображення інформації про клієнта
	toString() {
	  return `ID: ${this.id}, ПІБ: ${this.pib}, Баланс: ${this.balance}`;
	}
 }
 
 // Клас GoldenClient успадковується від Client
 class GoldenClient extends Client {
	constructor(id, pib, balance, creditLimit, creditRate) {
	  super(id, pib, balance);  // Викликаємо конструктор базового класу Client
	  this.creditLimit = creditLimit;  // Ліміт кредитних коштів
	  this.creditRate = creditRate;    // Відсоток за використання кредиту
	  this.usedCredit = 0;            // Сума використаного кредиту
	}
 
	// Метод для додавання грошей на рахунок з урахуванням кредиту
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
 
	// Метод для обчислення пені за використання кредиту
	calculateCreditPenalty() {
	  return this.usedCredit * this.creditRate / 100;
	}
 
	// Метод для відображення інформації про клієнта
	toString() {
	  return `${super.toString()}, Кредитний ліміт: ${this.creditLimit}, Використано кредиту: ${this.usedCredit}`;
	}
 }
 



// Клас Bank
class Bank {
	constructor() {
	  this.clients = [];  // Масив для зберігання клієнтів
	}
 
	// Додавання клієнта до банку
	addClient(client) {
	  this.clients.push(client);
	}
 
	// Виведення всіх простих клієнтів
	showSimpleClients() {
	  console.log("Прості клієнти:");
	  this.clients.forEach(client => {
		 if (!(client instanceof GoldenClient)) {
			console.log(client.toString());
		 }
	  });
	}
 
	// Виведення всіх GoldenClient
	showGoldenClients() {
	  console.log("Golden клієнти:");
	  this.clients.forEach(client => {
		 if (client instanceof GoldenClient) {
			console.log(client.toString());
		 }
	  });
	}
 
	// Знаходження сумарної кількості грошей на рахунках всіх клієнтів
	totalBalance() {
	  let total = this.clients.reduce((sum, client) => sum + client.balance, 0);
	  console.log(`Сумарна кількість грошей на рахунках: ${total} грн.`);
	  return total;
	}
 }
 
 // Приклад використання:
 let bank = new Bank();
 
 // Додавання клієнтів
 let client1 = new Client(1, "Іван Іванов", 10000);
 let client2 = new Client(2, "Олег Олегов", 15000);
 let goldenClient1 = new GoldenClient(3, "Марія Петренко", 5000, 10000, 3);
 let goldenClient2 = new GoldenClient(4, "Анна Ковальчук", 8000, 15000, 5);
 
 // Додаємо клієнтів до банку
 bank.addClient(client1);
 bank.addClient(client2);
 bank.addClient(goldenClient1);
 bank.addClient(goldenClient2);
 
 // Виведення всіх простих клієнтів
 bank.showSimpleClients();
 
 // Виведення всіх GoldenClient
 bank.showGoldenClients();
 
 // Знаходження сумарної кількості грошей на рахунках всіх клієнтів
 bank.totalBalance();
 
//=============== Мій варіант2 ==================