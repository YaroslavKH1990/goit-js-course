'use strict';

let total = 0;
let input;

do {
	input = prompt('Введите число');

	if (input !== null) {
		if (Number.isNaN(Number(input))) {
			alert('Вы ввели не число');

			continue;
		}
		total += Number(input);
	}
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
