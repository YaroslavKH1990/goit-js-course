"use strict";

const country = prompt("Страна доставки?");
let cost;
switch (country.toLowerCase()) {
    case "китай":
        cost = 100;
        console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    case "чили":
        cost = 250;
        console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    case "австралия":
         cost = 170;
         console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    case "индия":
        cost = 80;
        console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    case "ямаяка":
        cost = 120;
        console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
        break;
    default:
        console.log(`Доставка в вашей стране не доступна`);
}

