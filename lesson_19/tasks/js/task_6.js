"use strict"

/*
	Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.
*/

const generalList = document.getElementById('general-list');
const selectedList = document.getElementById('selected-list');

function moveToSelected(e) {
    const li = e.target.closest('li');
    const arrow = li.querySelector('.arrow');
    
    arrow.textContent = '⬅️';
    
    arrow.removeEventListener('click', moveToSelected);
    arrow.addEventListener('click', moveToGeneral);
    
    selectedList.appendChild(li);
}

function moveToGeneral(e) {
    const li = e.target.closest('li');
    const arrow = li.querySelector('.arrow');

    arrow.textContent = '➡️';
    
    arrow.removeEventListener('click', moveToGeneral);
    arrow.addEventListener('click', moveToSelected);
    
    generalList.appendChild(li);
}

document.querySelectorAll('.green-arrow').forEach(arrow => {
    arrow.addEventListener('click', moveToSelected);
});

document.querySelectorAll('.red-arrow').forEach(arrow => {
    arrow.addEventListener('click', moveToGeneral);
});