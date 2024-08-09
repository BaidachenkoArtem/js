"use strict"

// Інвестор вклав S тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.

let initialInvestment = parseFloat(prompt('Початкова сума в тис. грн'))
const years = 20
const sumRate = 0.20; // Річний відсоток
const pdv = 0.05

let finalAmount = initialInvestment;
let finalPdv = finalAmount

for (let i = 0; i < years; i++) {
	finalAmount += finalAmount * sumRate;
	finalPdv += finalAmount * pdv
}

document.write(`Кінцева сума після ${years} років: ${finalAmount.toFixed(2)} тис. грн з урахуванням податка ${finalPdv.toFixed(2)}`)