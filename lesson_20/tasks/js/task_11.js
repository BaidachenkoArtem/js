"use strict"

/*
	Компонент діаграма. Значення від 0 до 100. Область розділено на 3 частини (значення у першій частині – червоне заповнення, значення у другій частині – синій колір, значення у третій – зелений.
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
// Задача. Розробити Loader (задається title, value). Зімітувати завантаження за допомогою таймера.
let sectionsColorsList = ['red', 'blue', 'green']
let dataList = [
	{
		title: 'Іванов I.І.',
		value: 98,
	},
  	{
		title: 'Петров П.П.',
		value: 45,
  	},
  	{
		title: 'Сидоренко Г.І.',
		value: 15,
  	},
  	{
		title: 'Свида О.Г.',
		value: 60,
  	},
]
//-----------------
class Diagram {
	constructor(diagramTitle, dataList, sectionsColorsList, cssObj) {
		this.diagramTitle = diagramTitle
		this.dataList = dataList
		this.sectionsColorsList = sectionsColorsList
		this.cssObj = cssObj
	}
  	getColor(value) {
		const rangeWidth = 100 / this.sectionsColorsList.length
		const colorIndex = Math.floor(value / rangeWidth)
		return this.sectionsColorsList[colorIndex]
  	}
  	renderItem(itemData) {
		const itemContainer = document.createElement('div')
		itemContainer.classList.add('items-work__line');
			 
		const titleDiv = document.createElement('div')
		titleDiv.innerText = itemData.title
		titleDiv.className = this.cssObj.title
		itemContainer.append(titleDiv)

		const valueContainer = document.createElement('div')
		const valueBar = document.createElement('div')
		valueBar.style.width = `${itemData.value}%`

		valueBar.style.backgroundColor = this.getColor(itemData.value)
		valueContainer.append(valueBar)
		valueContainer.className = this.cssObj.value
		itemContainer.append(valueContainer)

		return itemContainer
  	}
  	renderList() {
		const container = document.createElement('div')
		this.dataList.forEach((itemData) => {
			const itemEl = this.renderItem(itemData)
			container.append(itemEl)
		})
		return container
	}
	render(containerId) {
		const diagramContainer = document.createElement('div')
		diagramContainer.classList.add('items-work__item');

		//--- створимо заголовок
		const titleEl = document.createElement('h2')
		titleEl.classList.add('items-work__title');
		titleEl.innerText = this.diagramTitle
		diagramContainer.append(titleEl)
		//-----
		const listEl = this.renderList()
		listEl.classList.add('items-work__list');
		diagramContainer.append(listEl)

		//--------------------
		const targetContainer = document.getElementById(containerId)
		targetContainer.append(diagramContainer)
	}
}
//-----------------
window.onload = function () {
  	const cssObj = {
		value: 'item-2',
		title: 'title-2',
  	}

  	const d1 = new Diagram(
		'Успішність учнів',
		dataList,
		sectionsColorsList,
		cssObj
  	)
  	d1.render('dataContainer')
}
//=============== Мій варіант2 ==================