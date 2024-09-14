"use strict"

/*
	Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
	----- Властивості ------
	-	назва компанії на час розробки (назву періодично змінюють)
	-	власник компанії
	-	споснсори (масив спонсорів)
		* прізвище спонсора
		* ім’я  спонсора
		* сума вкладень спонсора
	-	рік випуску
	-	вартість сайту

	Знайти:

	1) загальну вартість усіх сайтів
	2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
	3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
	4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
	5) знайти рік, коли прибуток був найбільшим
	6) упорядкувати список за спаданням прибутку
	7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
*/

if (confirm("Почати тестування?")) {
	
	const websitesList = [
		{
			companyName: "Tech Innovations",
			owner: "Іван Петренко",
			sponsors: [
			{
				lastName: "Шевченко",
				firstName: "Андрій",
				investment: 10000 
			},
			{
				lastName: "Коваленко",
				firstName: "Марія",
				investment: 15000
			}
			],
			releaseYear: 2020,
			cost: 25000
		},
		{
			companyName: "Web Solutions",
			owner: "Олег Кравченко",
			sponsors: [
			{
				lastName: "Іванов",
				firstName: "Микола",
				investment: 5000
			}
			],
			releaseYear: 2021,
			cost: 18000
		},
		{
			companyName: "Digital Experts",
			owner: "Тетяна Бондаренко",
			sponsors: [
			{
				lastName: "Сидоренко",
				firstName: "Юлія",
				investment: 12000
			},
			{
				lastName: "Гриценко",
				firstName: "Василь",
				investment: 8000
			}
		  ],
			releaseYear: 2022,
			cost: 30000
		},
		{
			companyName: "Digital Contracts",
			owner: "Тетяна Іванова",
			sponsors: [
			{
				lastName: "Петренко",
				firstName: "Юлія",
				investment: 1500
			},
			{
				lastName: "Петренко",
				firstName: "Василь",
				investment: 1000
			}
			],
			releaseYear: 2002,
			cost: 2500
		}
	];

	// 1. Загальна вартість усіх сайтів
	const totalCost =websitesList.reduce((sum, site) => sum + site.cost, 0);
	console.log("Загальна вартість усіх сайтів:", totalCost);

	// 2. Кількість сайтів, що було зроблено між 2000 та 2009 рр.
	const countSites2000_2009 = websitesList.filter(site => site.releaseYear >= 2000 && site.releaseYear <= 2009).length;
	console.log("Кількість сайтів між 2000 та 2009 рр.:", countSites2000_2009);

	// 3. Кількість сайтів, де сума спонсорських вкладень була більшою за 100000
	const countHighInvestmentSites = websitesList.filter(site => {
	  const totalInvestment = site.sponsors.reduce((sum, sponsor) => sum + sponsor.investment, 0);
	  return totalInvestment > 100000;
	}).length;
	console.log("Кількість сайтів з вкладенням більше 100000:", countHighInvestmentSites);

	// 4. Створити загальний список усіх спонсорів
	const allSponsors = websitesList.flatMap(site => site.sponsors);
	console.log("Загальний список спонсорів:", allSponsors);

	// 5. Знайти рік, коли прибуток був найбільшим
	const yearWithMaxProfit = websitesList.reduce((maxYear, site) => {
	  return site.cost > (websitesList.find(w => w.releaseYear === maxYear)?.cost || 0) ? site.releaseYear : maxYear;
	}, 0);
	console.log("Рік з найбільшим прибутком:", yearWithMaxProfit);

	// 6. Упорядкувати список за спаданням прибутку
	const sortedWebsitesByCost = [...websitesList].sort((a, b) => b.cost - a.cost);
	console.log("Сайти за спаданням прибутку:", sortedWebsitesByCost);

	// 7. Створити 2 окремих списки з копіями об’єктів для вартості до 10000 і більше 10000
	const websitesLessThan10000 = websitesList.filter(site => site.cost <= 10000);
	const websitesMoreThan10000 = websitesList.filter(site => site.cost > 10000);

	console.log("Сайти з вартістю до 10000:", websitesLessThan10000);
	console.log("Сайти з вартістю більше 10000:", websitesMoreThan10000);
}