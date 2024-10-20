"use strict"

/*
	Бронювання таксі та велосипедів (по аналогії з тим, що ми робили на практиці). Відображаються списки авто та велосипедів, які можна забронювати. При бронюванні вибрані авто та вибрані велосипеди відображаються у окремих списках.
*/


function bookCar(event) {
	const carItem = event.target.parentElement; 
	const bookedCarsList = document.getElementById('booked-cars');
	
	const newCarItem = document.createElement('li');
	newCarItem.classList.toggle('selected');
	newCarItem.textContent = carItem.textContent.replace('Забронювати', ''); 
	bookedCarsList.appendChild(newCarItem);
	
	carItem.remove(); 
}

function bookBike(event) {
	const bikeItem = event.target.parentElement; 
	const bookedBikesList = document.getElementById('booked-bikes');
	
	const newBikeItem = document.createElement('li');
	newBikeItem.classList.toggle('selected');
	newBikeItem.textContent = bikeItem.textContent.replace('Забронювати', ''); 
	bookedBikesList.appendChild(newBikeItem);
	
	bikeItem.remove();
}

const carButtons = document.querySelectorAll('.book-car');
carButtons.forEach(button => {
	button.addEventListener('click', bookCar);
});


const bikeButtons = document.querySelectorAll('.book-bike');
bikeButtons.forEach(button => {
	button.addEventListener('click', bookBike);
});