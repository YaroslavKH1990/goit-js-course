"use strict";

let total = 0;
do {
     let input = prompt("Введите число");
    if (input === null) {
        console.log('Вы нажали "Отмена"');
        break;
    } else {
        total = Number(input) + total;
    }
} while (true);
alert(`Общая сумма чисел равна ${total}`);
