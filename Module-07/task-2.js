'use strict';

const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы'
];

document.addEventListener('DOMContentLoaded', () => {
	const ingredientsRef = document.querySelector('#ingredients');
	const ingredientsMap = ingredients.map((elem) => {
		const ingredientsLiRef = document.createElement('li');
		console.log(ingredientsLiRef);
		ingredientsLiRef.textContent = elem;
		return ingredientsLiRef;
	});
	ingredientsRef.append(...ingredientsMap);
	// ingredientsRef.prepend(...ingredientsMap);
});

//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
