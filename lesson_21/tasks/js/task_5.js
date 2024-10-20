"use strict"

/*
	Виводити на екран скільки хвилин користувач вже на сайті
*/

window.onload = function () {
	let minutesSpent = 0;
	
	function updateTimeSpent() {
		minutesSpent++;
		document.getElementById("timeSpent").textContent = minutesSpent;
	}

	setInterval(updateTimeSpent, 60000);
}