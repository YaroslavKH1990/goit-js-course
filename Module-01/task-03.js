"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const result = prompt("Введите пароль");
if (result === null) {
    message = "Отменено пользователем";

} else if (result === ADMIN_PASSWORD) {
    message = "Добро пожаловать";

} else { message = "Доступ запрещен, неверный пароль!";
};

alert(message);