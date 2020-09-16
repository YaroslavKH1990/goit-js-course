'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const validInputRef = document.querySelector('#validation-input');

	function inputBlur() {
		validInputRef.classList.add('invalid');

		if (validInputRef.value.length === 6) {
			validInputRef.classList.remove('invalid');
			validInputRef.classList.add('valid');
		}
	}
	validInputRef.addEventListener('blur', inputBlur);
});

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
