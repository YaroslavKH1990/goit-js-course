"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let result;

result = prompt("Введите пароль");
if(!result) {
    message = "Отменено пользователем";
} else if(result === ADMIN_PASSWORD) {
    message = "Добро пожаловать";
} else { message = "Доступ запрещен, неверный пароль!";}
alert(message);