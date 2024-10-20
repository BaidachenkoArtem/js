"use strict"

/*
	Перекладач. Користувачу виводять змішані картки з словами на англійській і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.
*/

const words = [
	{ id: 0, en: 'table', ua: 'стіл' },
	{ id: 1, en: 'car', ua: 'автомобіль' },
	{ id: 2, en: 'bus', ua: 'автобус' },
	{ id: 3, en: 'man', ua: 'людина' },
	{ id: 4, en: 'boy', ua: 'хлопець' }
];

const englishContainer = document.getElementById('english-container');
const ukrainianContainer = document.getElementById('ukrainian-container');

let selectedCards = [];
let matchedPairs = 0;

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function createCard(text, id, language) {
	const card = document.createElement('div');
	card.classList.add('card');
	card.textContent = text;
	card.dataset.id = id;
	card.dataset.language = language;

	card.addEventListener('click', () => handleCardClick(card));
	return card;
}

function handleCardClick(card) {
	if (selectedCards.length < 2 && !card.classList.contains('selected')) {
		card.classList.add('selected');
		selectedCards.push(card);

		if (selectedCards.length === 2) {
			checkMatch();
		}
	}
}

function checkMatch() {
	const [card1, card2] = selectedCards;

	if (card1.dataset.id === card2.dataset.id && card1.dataset.language !== card2.dataset.language) {
		setTimeout(() => {
			card1.classList.add('hidden');
			card2.classList.add('hidden');
			matchedPairs++;

			if (matchedPairs === words.length) {
				alert('Ви знайшли всі пари!');
			}
		}, 500);
	} else {
		card1.classList.add('wrong');
		card2.classList.add('wrong');

		setTimeout(() => {
			card1.classList.remove('selected', 'wrong');
			card2.classList.remove('selected', 'wrong');
		}, 1000);
	}

	selectedCards = [];
}

function initGame() {
	const englishWords = words.map(word => ({ text: word.en, id: word.id, language: 'en' }));
	const ukrainianWords = words.map(word => ({ text: word.ua, id: word.id, language: 'ua' }));

	shuffleArray(englishWords);
	shuffleArray(ukrainianWords);

	englishWords.forEach(word => {
		const card = createCard(word.text, word.id, word.language);
		englishContainer.appendChild(card);
	});

	ukrainianWords.forEach(word => {
		const card = createCard(word.text, word.id, word.language);
		ukrainianContainer.appendChild(card);
	});
}

initGame();