"use strict";

const credit = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantity;

quantity = prompt("Количество дроидов для покупки?");
if (quantity === null) {
    console.log("Отменено пользователем");
} else {totalPrice = quantity * pricePerDroid};
if (totalPrice > credit) {
    console.log("Недостаточно средств на счету");
} else {
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credit - totalPrice} кредитов.`);
}