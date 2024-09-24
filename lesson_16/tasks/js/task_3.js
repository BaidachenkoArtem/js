"use strict"

/*
	Об’єкт “Фірма” (використати члени-класи)
	поля:
	- назва фірми;
	- дата заснування (рік, місяць);
	- послуги (назва послуги, вартість, термін виконання);
	- адреси філіалів (країна, місто, вулиця, номер будинку);
	методи:
	- визначення кількості років існування фірми;
	- виведення всіх філіалів фірми у вказаному місті;
	- виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
*/	


if (confirm("Почати тестування?")) {


	class Service {
		constructor(name, cost, duration) {
			this.name = name;
			this.cost = cost;
			this.duration = duration; 
		}
	 
		toString() {
			return `${this.name} - Вартість: ${this.cost} грн, Термін: ${this.duration} днів`;
		}
	 }
	 
	 class Branch {
		constructor(country, city, street, building) {
			this.country = country;
			this.city = city;
			this.street = street;
			this.building = building;
		}
	 
		toString() {
			return `${this.city}, ${this.street} ${this.building}, ${this.country}`;
		}
	}
	 
	class Firma {
		constructor(name, foundationDate, services, branches) {
		  this.name = name;
		  this.foundationDate = foundationDate;
		  this.services = services.map(service => new Service(service.name, service.cost, service.duration));
		  this.branches = branches.map(branch => new Branch(branch.country, branch.city, branch.street, branch.building));
		}

		calculateYearsExistence() {
		  const currentYear = new Date().getFullYear();
		  const foundationYear = this.foundationDate.year;
		  return currentYear - foundationYear;
		}
	 
		getBranchesInCity(city) {
		  const branchesInCity = this.branches.filter(branch => branch.city === city);
		  if (branchesInCity.length > 0) {
				return branchesInCity.map(branch => branch.toString()).join("\n");
		 	} else {
				return `У місті ${city} немає філіалів.`;
		  	}
		}
	 		
		getServicesByBudgetAndTime(budget, maxTime) {
		  const availableServices = this.services.filter(service => service.cost <= budget && service.duration <= maxTime);
		  if (availableServices.length > 0) {
				return availableServices.map(service => service.toString()).join("\n");
		  	} else {
				return `Немає послуг, що можна виконати за ${budget} грн і протягом ${maxTime} днів.`;
		  	}
		}
	 
		toString() {
			return `Фірма: ${this.name}, Заснована: ${this.foundationDate.year}-${this.foundationDate.month}\n` +
				`Послуги:\n${this.services.map(service => service.toString()).join("\n")}\n` +
				`Філіали:\n${this.branches.map(branch => branch.toString()).join("\n")}`;
		}
	}
	 
	const firma = new Firma(
		"Tech Solutions",
		{ year: 2010, month: 5 },
		[
			{ name: "Веб-розробка", cost: 2000, duration: 30 },
			{ name: "Дизайн сайту", cost: 1200, duration: 15 },
			{ name: "SEO оптимізація", cost: 800, duration: 10 }
		],
		[
			{ country: "Україна", city: "Київ", street: "Хрещатик", building: 1 },
			{ country: "Україна", city: "Львів", street: "Грушевського", building: 20 },
			{ country: "Україна", city: "Київ", street: "Сагайдачного", building: 15 }
		]
	);
	 
	console.log(firma.toString());
	 
	console.log(`Фірма існує ${firma.calculateYearsExistence()} років.`);
	 
	console.log("Філіали у місті Київ:");
	console.log(firma.getBranchesInCity("Київ"));
	 
	console.log("Послуги за 1500 гривень і протягом 20 днів:");
	console.log(firma.getServicesByBudgetAndTime(1500, 20));
	 
}