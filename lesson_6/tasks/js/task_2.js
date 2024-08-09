"use strict"

// Відобразити трикутник за допомогою символів «о»
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо

for (let i = 1; i <= 7; i++){
	for (let r = 0; r < i; r++){
		document.write(`o`)   
	}
	document.write(`<br>`)
}