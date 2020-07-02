"use strict";

let input;
const numbers = [];
let total = 0;
input = prompt('Введите число');
while (input !== null) {
    if (!Number(input)) {
        alert('Вы ввели не число!');
    } else {numbers.push(Number.parseInt(input));
    };
    input = prompt('Введите число');
};
console.log(numbers);
for (let number of numbers) {
    total += number;
};
alert(`Общая сумма чисел равна ${total}`);







