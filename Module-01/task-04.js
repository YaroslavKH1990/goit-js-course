"use strict";

const credit = 23580;
const pricePerDroid = 3000;
const quantity = prompt("Количество дроидов для покупки?");

if (quantity === null) {
    console.log("Отменено пользователем");

} else {
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > credit) {
        console.log("Недостаточно средств на счету");
        
    } else {
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credit - totalPrice} кредитов.`);
    }
}

