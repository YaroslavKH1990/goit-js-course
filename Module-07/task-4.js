'use strict';

document.addEventListener('DOMContentLoaded', () => {
	let counterValue = 0;

	const counterDecrRef = document.querySelector(
		"#counter > [data-action ='decrement']"
	);

	const counterIncrRef = document.querySelector(
		"#counter > [data-action = 'increment']"
	);

	const spanRef = document.querySelector('#value');

	function decrement() {
		spanRef.textContent = --counterValue;
	}
	function increment() {
		spanRef.textContent = ++counterValue;
	}

	counterDecrRef.addEventListener('click', decrement);
	counterIncrRef.addEventListener('click', increment);
});

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
