"use strict";

const total = 100;
const order = 50;
// const order = 130;

console.log(`Количество товаров на складе ${total}`);

if(total < order) {
console.log("На складе не достаточно товаров");

} else if(total >= order) {
 console.log("Заказ оформлен, с вами свяжется менеджер");
}