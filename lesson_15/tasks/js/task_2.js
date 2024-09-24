"use strict"

// Створити об’єкт «Авто».

if (confirm("Почати тестування?")) {	

	const car = {
		brand: 'Mazda RX-8',
		tankSize: 1728,
		numberOfAvailableLiters: 61,
		numberOfSeats: 4,
		numberOfPassengers: 2,
  
		carRefueling: function (liters) {
		  	const availableForRefueling = this.tankSize - this.numberOfAvailableLiters
		  	if (liters > availableForRefueling) alert('Стільки не влізе!')
		  	else {
				this.numberOfAvailableLiters += liters
				alert('Заправили!')
		  	}
		},
  
		getPassengersNumber: function () {
			alert(`Кількість пасажирів: ${this.numberOfPassengers}`)
		},
  
		increasePassengersNumber: function (passengers) {
		  	const freeSeats = this.numberOfSeats - this.numberOfPassengers
		  	if (passengers > freeSeats) alert('Стільки не влізе!')
		  	else {
				this.numberOfPassengers += passengers
				alert('Додали!')
		  	}
		},
  
		decreasePassengersNumber: function (passengers) {
			if (this.numberOfPassengers === 0) alert('Авто порожнє!')
		  	else {
			 	if (passengers > this.numberOfPassengers)
					alert('В авто немає стільки пасажирів!')
					else {
					alert('Пасажирів висадили!')
					this.numberOfPassengers -= passengers
				}
		  	}
		},
	}
  
	car.carRefueling(25)
	car.increasePassengersNumber(1)
	car.decreasePassengersNumber(2)
	car.getPassengersNumber()
}