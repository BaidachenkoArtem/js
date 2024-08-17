"use strict"

// Дано послідовність цін товарів та назв (у окремих масивах).
// Вивести на екран ті, які може собі дозволити користувач(кількість грошей задається).

let productsPrices = [50, 17, 31, 86, 120, 3500]
let productsTitles = ["Coffee", "Milk", "Bread", "Tea", "Pizza", "Phone"]

const usersMoney = parseFloat(prompt("Скільки у вас грошей?"))

function productBuy(productsPrices, productsTitles, usersMoney) {
	for (let i = 0; i < productsPrices.length; i++) {
		if (productsPrices[i] <= usersMoney)
			document.write(`<div>${productsTitles[i]}</div>`)
	}
}

productBuy(productsPrices, productsTitles, usersMoney)