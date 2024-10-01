"use strict"

/*
	Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
*/

if (confirm("Почати тестування?")) {	
	
	class ServiceCar {
		constructor(driver, brand, number) {
		  	if (ServiceCar.instance) {
				return ServiceCar.instance;
		  	}
	 
			this.driver = driver;
			this.brand = brand;
			this.number = number;

			ServiceCar.instance = this;
		}
	 
		getInfo() {
			return `Driver: ${this.driver}, Brand: ${this.brand}, Number: ${this.number}`;
		}
	}

	const car1 = new ServiceCar("Ivan Ivanov", "Toyota", "AA1234BB");
	console.log(car1.getInfo());
	
	const car2 = new ServiceCar("Petro Petrov", "BMW", "CC5678DD");
	console.log(car2.getInfo());

	console.log(car1 === car2);

}