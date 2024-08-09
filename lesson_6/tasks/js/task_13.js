"use strict"

// Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.

for (let num1 = 1; num1 <= 9; num1++){
	for (let num2 = 0; num2 <= 9 ; num2++) {
		if (num1 >= num2) 
			document.write(`<div>${num1}${num2}</div>`)
	}
}