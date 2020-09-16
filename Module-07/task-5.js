'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const nameInputRef = document.querySelector('#name-input');
	const nameOutputRef = document.querySelector('#name-output');

	function change() {
		nameOutputRef.textContent =
			nameInputRef.value.length > 0 ? nameInputRef.value : 'незнакомец';
	}

	nameInputRef.addEventListener('input', change);
});

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
