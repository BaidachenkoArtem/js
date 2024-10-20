"use strict"

/*
	Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
*/

function updateTime() {
	const now = new Date();
 
	const londonTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
	document.getElementById('london-time').textContent = londonTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 
	const parisTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
	document.getElementById('paris-time').textContent = parisTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 
	const sydneyTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
	document.getElementById('sydney-time').textContent = sydneyTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

setInterval(updateTime, 1000);
updateTime();