"use strict"

/*
	Дано список автомобілів (марка, рік випуску, ціна). Сформувати елементи для фільтрування з використанням випадаючого списку (контент цих випадаючих списків сформувати у залежності від переданого списку).
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Список автомобілів
const cars = [
	{ brand: 'Mersedes', year: 2018, price: 25000 },
	{ brand: 'Opel', year: 2000, price: 5000 },
	{ brand: 'Opel', year: 2004, price: 15000 },
	{ brand: 'Audi', year: 2000, price: 7000 }
];

const brandSelect = document.getElementById('brand');
const yearSelect = document.getElementById('year');
const carList = document.getElementById('car-list');

// Функція для генерації унікальних значень для випадаючих списків
function generateOptions() {
	const brands = [...new Set(cars.map(car => car.brand))];
	const years = [...new Set(cars.map(car => car.year))];

	brands.forEach(brand => {
		 const option = document.createElement('option');
		 option.value = brand;
		 option.textContent = brand;
		 brandSelect.appendChild(option);
	});

	years.forEach(year => {
		 const option = document.createElement('option');
		 option.value = year;
		 option.textContent = year;
		 yearSelect.appendChild(option);
	});
}

// Функція для фільтрації та відображення списку автомобілів
function filterCars() {
	const selectedBrand = brandSelect.value;
	const selectedYear = yearSelect.value;

	const filteredCars = cars.filter(car => {
		 return (selectedBrand === "" || car.brand === selectedBrand) &&
				  (selectedYear === "" || car.year === parseInt(selectedYear));
	});

	carList.innerHTML = "";
	filteredCars.forEach(car => {
		 const li = document.createElement('li');
		 li.textContent = `${car.brand} - ${car.year} р. - ${car.price}$`;
		 carList.appendChild(li);
	});
}

// Додаємо опції при завантаженні сторінки
generateOptions();

// Додаємо обробники подій для фільтрації при зміні вибору
brandSelect.addEventListener('change', filterCars);
yearSelect.addEventListener('change', filterCars);

// Відображаємо всі автомобілі за замовчуванням
filterCars();

//=============== Мій варіант2 ==================